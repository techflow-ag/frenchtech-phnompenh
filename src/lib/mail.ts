// Server-only email + audience helpers (Resend). Never import in client components.
const API = "https://api.resend.com";
const KEY = process.env.RESEND_API_KEY;
const AUDIENCE = process.env.RESEND_AUDIENCE_ID;

// From address must be on a Resend-verified domain (lafrenchtech-cambodge.com).
const FROM = "La French Tech Phnom Penh <noreply@lafrenchtech-cambodge.com>";
const TO = ["frenchtech.pp@gmail.com", "maximilien@techflow-agency.com"];

export async function sendMail(opts: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<void> {
  if (!KEY) throw new Error("RESEND_API_KEY is not set");
  const res = await fetch(`${API}/emails`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: TO,
      reply_to: opts.replyTo,
      subject: opts.subject,
      text: opts.text,
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend send failed (${res.status}): ${await res.text()}`);
  }
}

export async function addToAudience(opts: {
  email: string;
  firstName?: string;
  lastName?: string;
}): Promise<void> {
  if (!KEY || !AUDIENCE) return; // audience is optional
  await fetch(`${API}/audiences/${AUDIENCE}/contacts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: opts.email,
      first_name: opts.firstName,
      last_name: opts.lastName,
      unsubscribed: false,
    }),
  });
}
