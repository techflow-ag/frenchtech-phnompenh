import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { createHash } from "node:crypto";
import { setAttributes } from "@/lib/brevo";
import { verifyEmail } from "@/lib/profile-token";

export const dynamic = "force-dynamic";

export const BIO_MAX = 240;
const PHOTO_MAX_BYTES = 5 * 1024 * 1024;
const PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const email = String(form.get("email") ?? "").trim();
    const token = String(form.get("token") ?? "");

    if (!verifyEmail(email, token)) {
      return NextResponse.json(
        { error: "This link is not valid. Use the one in your welcome email." },
        { status: 403 },
      );
    }

    const bio = String(form.get("bio") ?? "").trim();
    const linkedin = String(form.get("linkedin") ?? "").trim();
    if (bio.length > BIO_MAX) {
      return NextResponse.json(
        { error: `Your bio is ${bio.length} characters, the limit is ${BIO_MAX}.` },
        { status: 400 },
      );
    }
    if (linkedin && !/^https?:\/\//i.test(linkedin)) {
      return NextResponse.json(
        { error: "Your LinkedIn link should start with https://" },
        { status: 400 },
      );
    }

    const attributes: Record<string, string> = {};
    if (bio) attributes.PROFIL_BIO = bio;
    if (linkedin) attributes.PROFIL_LINKEDIN = linkedin;

    const photo = form.get("photo");
    if (photo instanceof File && photo.size > 0) {
      if (!PHOTO_TYPES.includes(photo.type)) {
        return NextResponse.json(
          { error: "Your photo must be a JPG, PNG or WebP file." },
          { status: 400 },
        );
      }
      if (photo.size > PHOTO_MAX_BYTES) {
        return NextResponse.json(
          { error: "Your photo is over 5 MB. Please use a smaller one." },
          { status: 400 },
        );
      }
      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        return NextResponse.json(
          { error: "Photo uploads are not available yet. Everything else was saved." },
          { status: 503 },
        );
      }
      // The blob store is private, so the file is served back through
      // /api/member-photo rather than a public bucket URL. The pathname is a
      // hash, not the address, so a photo URL never leaks an email.
      // addRandomSuffix stops a re-upload being served from the old CDN cache.
      const slug = createHash("sha256").update(email).digest("hex").slice(0, 16);
      const blob = await put(`members/${slug}`, photo, {
        access: "private",
        addRandomSuffix: true,
        contentType: photo.type,
      });
      attributes.PROFIL_PHOTO = `/api/member-photo/${blob.pathname}`;
    }

    if (Object.keys(attributes).length === 0) {
      return NextResponse.json({ error: "Nothing to save." }, { status: 400 });
    }

    await setAttributes(email, attributes);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("profile error", e);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
