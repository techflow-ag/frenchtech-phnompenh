import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * The profile form is reachable by anyone with the link, so the link itself
 * has to prove which member it belongs to. Each acceptance email carries an
 * HMAC of the member's address; without it, the form cannot be used to
 * overwrite someone else's profile.
 */
function secret(): string {
  const s = process.env.PROFILE_SECRET || process.env.CRON_SECRET;
  if (!s) throw new Error("PROFILE_SECRET is not set");
  return s;
}

export function signEmail(email: string): string {
  return createHmac("sha256", secret())
    .update(email.trim().toLowerCase())
    .digest("hex");
}

export function verifyEmail(email: string, token: string): boolean {
  if (!email || !token) return false;
  let expected: string;
  try {
    expected = signEmail(email);
  } catch {
    return false;
  }
  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(token, "utf8");
  return a.length === b.length && timingSafeEqual(a, b);
}

/** The personalised link that goes in the acceptance email. */
export function profileUrl(site: string, email: string): string {
  const q = new URLSearchParams({ e: email, t: signEmail(email) });
  return `${site}/profile?${q}`;
}
