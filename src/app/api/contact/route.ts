import { NextResponse } from "next/server";
import { sendContactConfirmation, sendMail } from "@/lib/mail";
import { syncToBrevo } from "@/lib/brevo";

/** "" and null both mean "not answered"; keep them out of the CRM and emails. */
function num(v: unknown): number | undefined {
  if (v === null || v === undefined || v === "") return undefined;
  const n = Number(v);
  return Number.isFinite(n) ? n : undefined;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.hp_field) return NextResponse.json({ ok: true });
    const {
      name,
      email,
      reason,
      message,
      company,
      activity,
      sector,
      sourceUrl,
    } = body;
    const employees = num(body.employees);
    const frenchStaff = num(body.frenchStaff);
    const revenue = body.revenue || undefined;
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const companyLines = company
      ? [
          ``,
          `Company: ${company}`,
          `Category: ${sector || "—"}`,
          `Employees: ${employees ?? "—"}`,
          `French nationals: ${frenchStaff ?? "—"}`,
          `Annual revenue: ${revenue || "—"}`,
          `Activity: ${activity || "—"}`,
        ]
      : [];

    await sendMail({
      subject: `[Contact] ${reason || "New message"} — ${name}`,
      replyTo: email,
      text: [
        `New contact form submission`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Reason: ${reason || "—"}`,
        ...companyLines,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    // Best-effort extras: a failed auto-reply or CRM write must not tell the
    // visitor their message was lost, since the notification already went out.
    await Promise.allSettled([
      sendContactConfirmation({ name, email, reason }),
      syncToBrevo({
        email,
        name,
        reason,
        message,
        company,
        activity,
        sector,
        employees,
        frenchStaff,
        revenue,
        sourceUrl,
        sourceForm: "contact",
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("contact error", e);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
