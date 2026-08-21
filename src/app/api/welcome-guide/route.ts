import { NextResponse } from "next/server";
import { addToAudience, sendMail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.hp_field) return NextResponse.json({ ok: true });
    const { firstName, lastName, role, organization, email, phone } = body;
    if (!firstName || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    await addToAudience({ email, firstName, lastName });
    await sendMail({
      subject: `[Welcome Guide] ${firstName} ${lastName || ""}`.trim(),
      replyTo: email,
      text: [
        `Welcome Guide request`,
        ``,
        `Name: ${firstName} ${lastName || ""}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `You are: ${role || "—"}`,
        `Organization: ${organization || "—"}`,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("welcome-guide error", e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
