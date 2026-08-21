import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { name, company, email, profile, events } = await req.json();
    if (!name || !email || !Array.isArray(events)) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    await sendMail({
      subject: `[Event registration] ${name}${company ? ` — ${company}` : ""}`,
      replyTo: email,
      text: [
        `Event registration (Francophonie week)`,
        ``,
        `Name: ${name}`,
        `Company: ${company || "—"}`,
        `Email: ${email}`,
        `Profile: ${profile || "—"}`,
        ``,
        `Selected events:`,
        events.length ? events.map((e: string) => `- ${e}`).join("\n") : "(none)",
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("event-register error", e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
