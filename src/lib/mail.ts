// Server-only email + audience helpers (Resend). Never import in client components.
const API = "https://api.resend.com";
const KEY = process.env.RESEND_API_KEY;
const AUDIENCE = process.env.RESEND_AUDIENCE_ID;

// From address must be on a Resend-verified domain (lafrenchtech-cambodge.com).
const FROM = "La French Tech Phnom Penh <noreply@lafrenchtech-cambodge.com>";
const TO = ["frenchtech.pp@gmail.com", "maximilien@techflow-agency.com"];

/** Where a visitor's reply lands when they answer one of our emails. */
const REPLY_TO = "frenchtech.pp@gmail.com";

async function sendMailTo(opts: {
  to: string[];
  subject: string;
  text: string;
  replyTo?: string;
  attachments?: { filename: string; content: string }[];
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
      to: opts.to,
      reply_to: opts.replyTo,
      subject: opts.subject,
      text: opts.text,
      attachments: opts.attachments,
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend send failed (${res.status}): ${await res.text()}`);
  }
}

/** Notifies the French Tech inboxes about a new submission. */
export async function sendMail(opts: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<void> {
  await sendMailTo({ to: TO, ...opts });
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

/**
 * What we promise back, per reason for writing. Keeps the auto-reply specific
 * instead of a generic "we got your message".
 */
const NEXT_STEP: Record<string, string> = {
  "Join as a member":
    "Membership is free for individuals and startups. We review every application and will confirm yours by email, with an invitation to the community group.",
  "List my startup":
    "We will look at your startup and come back to you about featuring it in our community directory.",
  "Become a partner or sponsor":
    "We will review your proposal and a board member will contact you to discuss how we can work together.",
  "Speak or host an event":
    "We will review your proposal and come back to you about the upcoming events it could fit.",
  "Something else":
    "We read everything and will come back to you shortly.",
};

/**
 * Plain-text auto-reply to whoever filled the contact form. Sent on top of the
 * internal notification, never instead of it.
 */
export async function sendContactConfirmation(opts: {
  name: string;
  email: string;
  reason?: string;
}): Promise<void> {
  const firstName = opts.name.trim().split(/\s+/)[0] || "there";
  const nextStep =
    NEXT_STEP[opts.reason ?? ""] ?? NEXT_STEP["Something else"];

  const text = [
    `Hi ${firstName},`,
    ``,
    `Thank you for your application. We have received it and will review it as`,
    `soon as we can, then come back to you quickly.`,
    ``,
    nextStep,
    ``,
    `--`,
    ``,
    `WHO WE ARE`,
    ``,
    `La French Tech Phnom Penh is the official French Tech Community in`,
    `Cambodia. A group of French entrepreneurs founded it in 2015, the French`,
    `Tech Mission labeled it in 2019, and the label was renewed for 2026-2028`,
    `with a new nine-member board.`,
    ``,
    `We are a non-profit, run entirely by volunteers: founders, operators and`,
    `investors who give their time to the ecosystem. Nobody is paid, and`,
    `membership is free.`,
    ``,
    `OUR MISSIONS`,
    ``,
    `- Federate the French-Cambodian tech ecosystem: startups, investors,`,
    `  corporates and institutions.`,
    `- Organize high-impact events connecting investors and entrepreneurs.`,
    `- Help French startups land in Cambodia, and Cambodian startups reach the`,
    `  global French Tech network.`,
    `- Connect French startups with Cambodian corporates and improve access to`,
    `  funding.`,
    ``,
    `WHAT WE STAND FOR`,
    ``,
    `- Open to all. French, Cambodian or any other nationality, French-speaking`,
    `  or not. Our events are free and everyone is welcome.`,
    `- Volunteer-driven. The community runs on the time its members give it.`,
    `- Locally rooted, globally connected. We reflect Cambodia's ecosystem while`,
    `  carrying the French Tech label, a network of 100+ communities in 57`,
    `  countries.`,
    ``,
    `2026 is a big year: Phnom Penh hosts the Francophonie Summit in November,`,
    `with the French Tech Asia Forum and the FrancoTech pavilion.`,
    ``,
    `--`,
    ``,
    `In the meantime: https://lafrenchtech-cambodge.com`,
    `Questions? Just reply to this email.`,
    ``,
    `A bientot,`,
    `La French Tech Phnom Penh`,
  ].join("\n");

  await sendMailTo({
    to: [opts.email],
    replyTo: REPLY_TO,
    subject: "Thanks for reaching out to La French Tech Phnom Penh",
    text,
  });
}
