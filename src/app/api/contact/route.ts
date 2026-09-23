import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";
import { syncToBrevo } from "@/lib/brevo";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.hp_field) return NextResponse.json({ ok: true });
    const { name, email, reason, message, sourceUrl } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    await sendMail({
      subject: `[Contact] ${reason || "New message"} — ${name}`,
      replyTo: email,
      text: [
        `New contact form submission`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Reason: ${reason || "—"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });
    await syncToBrevo({
      email,
      name,
      reason,
      message,
      sourceUrl,
      sourceForm: "contact",
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("contact error", e);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
