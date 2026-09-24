import { del, get } from "@vercel/blob";

/**
 * Serves a member's profile photo out of the private blob store.
 *
 * The store is private, so photos cannot be linked directly. This route is the
 * only way in, and it only ever reaches into `members/`.
 *
 * Cached for an hour, not forever. Every upload gets a fresh random suffix so
 * a URL never changes meaning, which would allow `immutable` — but a member
 * asking to be taken off the site has to actually disappear, and a year-long
 * CDN copy would outlive the delete. An hour matches the members page's own
 * revalidation window, and these files are a few kilobytes each.
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const pathname = path.join("/");

  if (!pathname.startsWith("members/")) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const result = await get(pathname, { access: "private" });
    if (!result || result.statusCode !== 200 || !result.stream) {
      return new Response("Not found", { status: 404 });
    }
    return new Response(result.stream, {
      headers: {
        "Content-Type": result.blob.contentType || "application/octet-stream",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (e) {
    console.error("member-photo error", pathname, e);
    return new Response("Not found", { status: 404 });
  }
}

/**
 * Removes a photo from the store.
 *
 * /privacy promises a member can ask to be taken off the members page, and
 * deleting their Brevo attribute would leave the file sitting in the store.
 * Board-only, so it is gated on the same secret as the scheduled job.
 */
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { path } = await params;
  const pathname = path.join("/");
  if (!pathname.startsWith("members/")) {
    return new Response("Not found", { status: 404 });
  }

  try {
    await del(pathname);
    return Response.json({ ok: true, deleted: pathname });
  } catch (e) {
    console.error("member-photo delete failed", pathname, e);
    return new Response("Delete failed", { status: 500 });
  }
}
