import { NextResponse } from "next/server";
import { listContacts, setAttributes, todayInPhnomPenh } from "@/lib/brevo";
import { sendEnquiryFollowUp, sendMembershipAccepted } from "@/lib/mail";

export const dynamic = "force-dynamic";

/** Days between the first submission and the follow-up email. */
const DELAY_DAYS = 2;

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
  const cutoff = shift(today, -DELAY_DAYS); // wrote on or before this day
  const since = process.env.MEMBER_WELCOME_SINCE || DEFAULT_SINCE;

  const sent: string[] = [];
  const failed: string[] = [];

  try {
    for (const contact of await listContacts()) {
      const a = contact.attributes;
      const first = String(a.PREMIER_CONTACT ?? "").slice(0, 10);
      const reason = String(a.MOTIF_CONTACT ?? "");

      if (a.EMAIL_BIENVENUE) continue; // already handled
      if (!first || first > cutoff || first < since) continue;

      const isMember = reason === MEMBER;
      if (!isMember && !ENQUIRIES.includes(reason)) continue;

      const name = [a.PRENOM, a.NOM].filter(Boolean).join(" ").trim();
      if (dry) {
        sent.push(`${contact.email} (${reason})`);
        continue;
      }

      try {
        if (isMember) {
          await sendMembershipAccepted({ name, email: contact.email });
        } else {
          await sendEnquiryFollowUp({ name, email: contact.email, reason });
        }
        // Written only after the send succeeds, so a failure retries tomorrow.
        await setAttributes(contact.email, {
          EMAIL_BIENVENUE: today,
          STATUT_MEMBRE: isMember ? "Member" : "Under review",
        });
        sent.push(contact.email);
      } catch (e) {
        console.error("member-welcome send failed", contact.email, e);
        failed.push(contact.email);
      }
    }
  } catch (e) {
    console.error("member-welcome error", e);
    return NextResponse.json({ error: "Job failed" }, { status: 500 });
  }

  return NextResponse.json({ dry, today, cutoff, since, sent, failed });
}
