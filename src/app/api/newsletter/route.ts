import { NextResponse } from "next/server";
import { addToAudience, sendMail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }
    await addToAudience({ email });
    await sendMail({
      subject: `[Newsletter] New subscriber`,
      replyTo: email,
      text: `New newsletter subscriber: ${email}`,
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("newsletter error", e);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
