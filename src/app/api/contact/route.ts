import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { name, email, reason, message } = await req.json();
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
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("contact error", e);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
