import { NextResponse } from "next/server";
import { addToAudience, sendMail } from "@/lib/mail";
import { syncToBrevo } from "@/lib/brevo";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (body.hp_field) return NextResponse.json({ ok: true });
    const { email, sourceUrl } = body;
    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }
    await addToAudience({ email });
    await sendMail({
      subject: `[Newsletter] New subscriber`,
      replyTo: email,
      text: `New newsletter subscriber: ${email}`,
    });
    await syncToBrevo({ email, sourceUrl, sourceForm: "newsletter" });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("newsletter error", e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
