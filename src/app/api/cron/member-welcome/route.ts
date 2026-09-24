import { NextResponse } from "next/server";
import {
  listContacts,
  setAttributes,
  todayInPhnomPenh,
  type BrevoContact,
} from "@/lib/brevo";
import {
  sendEnquiryFollowUp,
  sendMembershipAccepted,
  sendProfileReminder,
} from "@/lib/mail";

export const dynamic = "force-dynamic";

/** Days between the first submission and the follow-up email. */
const DELAY_DAYS = 2;
/** Days between the welcome and the nudge to fill in a profile. */
const REMINDER_DAYS = 7;

/**
 * Contacts who wrote before this date are never emailed by the job. Without it
 * the first run would blast every lead already in the CRM. Lower it
 * deliberately (env var) to work through the backlog.
 */
const DEFAULT_SINCE = "2026-09-24";

const MEMBER = "Join as a member";
const ENQUIRIES = ["Become a partner or sponsor", "List my startup"];

function shift(date: string, days: number): string {
  const d = new Date(`${date}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function nameOf(c: BrevoContact): string {
  return [c.attributes.PRENOM, c.attributes.NOM].filter(Boolean).join(" ").trim();
}

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) {
    return NextResponse.json({ error: "CRON_SECRET is not set" }, { status: 500 });
  }
  if (req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ?dry=1 reports what would be sent without sending or writing anything.
  const dry = new URL(req.url).searchParams.get("dry") === "1";
  const today = todayInPhnomPenh();
  const welcomeCutoff = shift(today, -DELAY_DAYS);
  const reminderCutoff = shift(today, -REMINDER_DAYS);
  const since = process.env.MEMBER_WELCOME_SINCE || DEFAULT_SINCE;

  const welcomed: string[] = [];
  const reminded: string[] = [];
  const failed: string[] = [];

  /** Sends, then records it. The write comes second so a failure retries. */
  async function run(
    email: string,
    send: () => Promise<void>,
    mark: Record<string, string>,
    into: string[],
    label: string,
  ) {
    if (dry) {
      into.push(`${email} (${label})`);
      return;
    }
    try {
      await send();
      await setAttributes(email, mark);
      into.push(email);
    } catch (e) {
      console.error("member-welcome failed", email, e);
      failed.push(email);
    }
  }

  try {
    const contacts = await listContacts();

    // Pass 1 — two days after someone writes in.
    for (const c of contacts) {
      const a = c.attributes;
      if (a.EMAIL_BIENVENUE) continue;

      const first = String(a.PREMIER_CONTACT ?? "").slice(0, 10);
      if (!first || first > welcomeCutoff || first < since) continue;

      const reason = String(a.MOTIF_CONTACT ?? "");
      const isMember = reason === MEMBER;
      if (!isMember && !ENQUIRIES.includes(reason)) continue;

      const name = nameOf(c);
      await run(
        c.email,
        () =>
          isMember
            ? sendMembershipAccepted({ name, email: c.email })
            : sendEnquiryFollowUp({ name, email: c.email, reason }),
        {
          EMAIL_BIENVENUE: today,
          STATUT_MEMBRE: isMember ? "Member" : "Under review",
        },
        welcomed,
        reason,
      );
    }

    // Pass 2 — a week later, if the member never filled anything in.
    for (const c of contacts) {
      const a = c.attributes;
      if (String(a.STATUT_MEMBRE ?? "") !== "Member") continue;
      if (a.RELANCE_PROFIL) continue; // asked once, never again
      if (a.PROFIL_BIO || a.PROFIL_PHOTO) continue; // nothing to nudge about

      const welcomedOn = String(a.EMAIL_BIENVENUE ?? "").slice(0, 10);
      if (!welcomedOn || welcomedOn > reminderCutoff) continue;

      await run(
        c.email,
        () => sendProfileReminder({ name: nameOf(c), email: c.email }),
        { RELANCE_PROFIL: today },
        reminded,
        "profile reminder",
      );
    }
  } catch (e) {
    console.error("member-welcome error", e);
    return NextResponse.json({ error: "Job failed" }, { status: 500 });
  }

  return NextResponse.json({
    dry,
    today,
    welcomeCutoff,
    reminderCutoff,
    since,
    welcomed,
    reminded,
    failed,
  });
}
