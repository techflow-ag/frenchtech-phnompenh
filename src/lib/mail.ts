// Server-only email helpers (Resend). Never import in client components.
import { profileUrl } from "@/lib/profile-token";

const API = "https://api.resend.com";
const KEY = process.env.RESEND_API_KEY;
const AUDIENCE = process.env.RESEND_AUDIENCE_ID;

// From address must be on a Resend-verified domain (lafrenchtech-cambodge.com).
const FROM = "La French Tech Phnom Penh <noreply@lafrenchtech-cambodge.com>";
const TO = ["frenchtech.pp@gmail.com", "maximilien@techflow-agency.com"];

/** Where a visitor's reply lands when they answer one of our emails. */
const REPLY_TO = "frenchtech.pp@gmail.com";

/**
 * Optional address blind-copied on the member journey emails, so the board can
 * watch exactly what goes out without it showing to the recipient.
 */
const JOURNEY_BCC = process.env.MEMBER_WELCOME_BCC;

const SITE = "https://lafrenchtech-cambodge.com";
const TELEGRAM = "https://t.me/+Pz-0dnwQT_k2MGQ1";
const LOGO_URL = `${SITE}/images/logo.png`;

const ROUGE = "#e0000f";
const BLEU = "#000091";
const INK = "#0e0e24";
const INK_SOFT = "#3a3a52";
const LINE = "#e5e4e4";

async function sendMailTo(opts: {
  to: string[];
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
  bcc?: string[];
  /** Resend fetches `path` itself, so we never read from the filesystem. */
  attachments?: { filename: string; path: string }[];
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
      bcc: opts.bcc,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
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

// --- HTML building blocks -------------------------------------------------
// Email clients ignore <style> blocks and class names, so everything below is
// inlined by hand. Keep it to tables, inline styles and web-safe fonts.

const FONT =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

/** Section title: emoji, bold, underlined with the French Tech red. */
function h2(emoji: string, label: string): string {
  return `<h2 style="margin:34px 0 14px;font-family:${FONT};font-size:15px;font-weight:700;color:${INK};letter-spacing:.02em;">
    <span style="display:inline-block;border-bottom:2px solid ${ROUGE};padding-bottom:5px;">${emoji}&nbsp;&nbsp;<u>${label}</u></span>
  </h2>`;
}

function p(html: string): string {
  return `<p style="margin:0 0 14px;font-family:${FONT};font-size:15px;line-height:1.65;color:${INK_SOFT};">${html}</p>`;
}

function ul(items: string[]): string {
  const li = items
    .map(
      (i) =>
        `<li style="margin:0 0 9px;font-family:${FONT};font-size:15px;line-height:1.6;color:${INK_SOFT};">${i}</li>`,
    )
    .join("");
  return `<ul style="margin:0 0 14px;padding-left:20px;">${li}</ul>`;
}

function button(href: string, label: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 20px;"><tr><td style="background:${ROUGE};">
    <a href="${href}" style="display:inline-block;padding:14px 26px;font-family:${FONT};font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">${label}</a>
  </td></tr></table>`;
}

/** Wraps a body in the tricolor hairline, logo and footer. */
function shell(body: string): string {
  return `<!doctype html><html><body style="margin:0;padding:0;background:#f5f5f7;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f5f5f7;">
    <tr><td align="center" style="padding:28px 14px;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;width:100%;background:#ffffff;border:1px solid ${LINE};">
        <tr><td style="height:4px;line-height:4px;font-size:0;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%"><tr>
            <td width="33.33%" style="background:${BLEU};height:4px;"></td>
            <td width="33.33%" style="background:#ffffff;height:4px;"></td>
            <td width="33.34%" style="background:${ROUGE};height:4px;"></td>
          </tr></table>
        </td></tr>
        <tr><td style="padding:32px 36px 40px;">
          <img src="${LOGO_URL}" width="54" alt="La French Tech Phnom Penh" style="display:block;border:0;margin:0 0 26px;" />
          ${body}
        </td></tr>
        <tr><td style="border-top:1px solid ${LINE};padding:20px 36px 26px;">
          <p style="margin:0;font-family:${FONT};font-size:13px;line-height:1.6;color:#8a8a99;">
            La French Tech Phnom Penh &middot; the official French Tech Community in Cambodia<br />
            <a href="${SITE}" style="color:${BLEU};text-decoration:none;">lafrenchtech-cambodge.com</a>
            &nbsp;&middot;&nbsp;
            <a href="mailto:${REPLY_TO}" style="color:${BLEU};text-decoration:none;">${REPLY_TO}</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
  </body></html>`;
}

function firstNameOf(name: string): string {
  return name.trim().split(/\s+/)[0] || "there";
}

// --- Shared community copy ------------------------------------------------

const MISSIONS = [
  "Bring the French-Cambodian tech ecosystem together: startups, investors, corporates and institutions.",
  "Put on events that actually connect people, especially founders and investors.",
  "Help French startups land in Cambodia, and Cambodian startups plug into the global French Tech network.",
  "Open doors to Cambodian corporates and to funding.",
];

const VALUES = [
  "<strong>Open to everyone.</strong> French, Cambodian or anything else, French-speaking or not. Our events are free and you are welcome.",
  "<strong>Run by volunteers.</strong> Nobody here is paid. The community runs on the time its members give it.",
  "<strong>Local roots, global network.</strong> We are Cambodia's ecosystem, carrying a label shared by 100+ communities in 57 countries.",
];

const MISSIONS_TEXT = MISSIONS.map((m) => `- ${m}`);
const VALUES_TEXT = [
  "- Open to everyone. French, Cambodian or anything else, French-speaking or",
  "  not. Our events are free and you are welcome.",
  "- Run by volunteers. Nobody here is paid. The community runs on the time its",
  "  members give it.",
  "- Local roots, global network. We are Cambodia's ecosystem, carrying a label",
  "  shared by 100+ communities in 57 countries.",
];

// --- Emails ---------------------------------------------------------------

/** What happens next, per reason for writing. */
const NEXT_STEP: Record<string, string> = {
  "Join as a member":
    "Membership is free, for individuals and startups alike. We read every application and will come back to you by email with your confirmation and an invitation to the community group.",
  "List my startup":
    "We will take a proper look at what you are building and come back to you about featuring it in our community directory.",
  "Become a partner or sponsor":
    "We will go through your proposal as a board, and one of us will get in touch to talk it through with you.",
  "Speak or host an event":
    "We will look at what you have in mind and come back to you about the events it could fit.",
  "Something else":
    "We read everything that lands here, and we will come back to you shortly.",
};

/** Auto-reply to whoever filled the contact form. */
export async function sendContactConfirmation(opts: {
  name: string;
  email: string;
  reason?: string;
}): Promise<void> {
  const first = firstNameOf(opts.name);
  const next = NEXT_STEP[opts.reason ?? ""] ?? NEXT_STEP["Something else"];

  const html = shell(
    p(`Hi <strong>${first}</strong> 👋`) +
      p(
        "Thanks for getting in touch, and welcome. Your message landed with us and someone from the board will read it properly, not skim it.",
      ) +
      p(next) +
      h2("🇫🇷", "Who we are") +
      p(
        "La French Tech Phnom Penh is the official French Tech Community in Cambodia. A handful of French entrepreneurs started it in 2015, the French Tech Mission gave it the label in 2019, and the label was renewed for 2026-2028 with a new nine-member board.",
      ) +
      p(
        "We are a non-profit, run entirely by volunteers: founders, operators and investors who give their evenings to this. Nobody is paid, and membership is free.",
      ) +
      h2("🎯", "What we are here to do") +
      ul(MISSIONS) +
      h2("💙", "What we care about") +
      ul(VALUES) +
      h2("📅", "And 2026 is a big one") +
      p(
        "Phnom Penh hosts the Francophonie Summit this November, and we are bringing the French Tech Asia Forum and the FrancoTech pavilion with it. Plenty to get involved in.",
      ) +
      p(
        `In the meantime, have a look around <a href="${SITE}" style="color:${BLEU};">lafrenchtech-cambodge.com</a>. Any question, just hit reply, it comes straight to us.`,
      ) +
      p("À bientôt,<br /><strong>La French Tech Phnom Penh</strong>"),
  );

  const text = [
    `Hi ${first},`,
    ``,
    `Thanks for getting in touch, and welcome. Your message landed with us and`,
    `someone from the board will read it properly, not skim it.`,
    ``,
    next,
    ``,
    `WHO WE ARE`,
    ``,
    `La French Tech Phnom Penh is the official French Tech Community in`,
    `Cambodia. A handful of French entrepreneurs started it in 2015, the French`,
    `Tech Mission gave it the label in 2019, and the label was renewed for`,
    `2026-2028 with a new nine-member board.`,
    ``,
    `We are a non-profit, run entirely by volunteers: founders, operators and`,
    `investors who give their evenings to this. Nobody is paid, and membership`,
    `is free.`,
    ``,
    `WHAT WE ARE HERE TO DO`,
    ``,
    ...MISSIONS_TEXT,
    ``,
    `WHAT WE CARE ABOUT`,
    ``,
    ...VALUES_TEXT,
    ``,
    `AND 2026 IS A BIG ONE`,
    ``,
    `Phnom Penh hosts the Francophonie Summit this November, and we are bringing`,
    `the French Tech Asia Forum and the FrancoTech pavilion with it.`,
    ``,
    `In the meantime, have a look around ${SITE}`,
    `Any question, just hit reply, it comes straight to us.`,
    ``,
    `A bientot,`,
    `La French Tech Phnom Penh`,
  ].join("\n");

  await sendMailTo({
    to: [opts.email],
    replyTo: REPLY_TO,
    subject: "Welcome — La French Tech Phnom Penh",
    text,
    html,
  });
}

/**
 * Sent two days after someone applies to join. V1 accepts every applicant, so
 * this doubles as the acceptance notice.
 */
export async function sendMembershipAccepted(opts: {
  name: string;
  email: string;
}): Promise<void> {
  const first = firstNameOf(opts.name);
  // Personal, signed link: it is what proves the profile belongs to them.
  const profile = profileUrl(SITE, opts.email);

  const html = shell(
    p(`Hi <strong>${first}</strong> 🎉`) +
      p(
        "Good news: your application went through. You are officially a member of La French Tech Phnom Penh. Welcome aboard.",
      ) +
      p("Membership is free, and it stays free. Here is how to make the most of it.") +
      h2("💬", "Join the community group") +
      p(
        "Everything happens on Telegram: events, introductions, questions, job posts and the occasional last-minute apéro. This is the one thing to do today.",
      ) +
      button(TELEGRAM, "Join the Telegram group") +
      h2("👤", "Complete your profile") +
      p(
        "Add a photo, your LinkedIn and a couple of lines about yourself, so the rest of the community knows who you are. Takes a minute, and it is what puts you on our members page.",
      ) +
      button(profile, "Complete my profile") +
      h2("🏷️", "Use the logo") +
      p(
        "As a member you are welcome to display the La French Tech Phnom Penh logo on your website, your deck and your communication material. It is attached to this email, ready to use.",
      ) +
      h2("📅", "What happens next") +
      p(
        "We run free events all year: apéro tech, tech talks, meetings with investors and institutions. And 2026 is our biggest year yet, with the Francophonie Summit in Phnom Penh in November, the French Tech Asia Forum and the FrancoTech pavilion.",
      ) +
      p(
        "If you fancy helping out, hosting something or speaking, just reply to this email. There is always room, and we are all volunteers here.",
      ) +
      p(
        `<span style="font-size:13px;color:#8a8a99;">You will also appear on our public members page at <a href="${SITE}/members" style="color:${BLEU};">${SITE}/members</a>, with your name and company. Would rather not be listed? Reply and we will take you off, no questions asked.</span>`,
      ) +
      p("À bientôt,<br /><strong>La French Tech Phnom Penh</strong>"),
  );

  const text = [
    `Hi ${first},`,
    ``,
    `Good news: your application went through. You are officially a member of`,
    `La French Tech Phnom Penh. Welcome aboard.`,
    ``,
    `Membership is free, and it stays free. Here is how to make the most of it.`,
    ``,
    `1. JOIN THE COMMUNITY GROUP`,
    ``,
    `Everything happens on Telegram: events, introductions, questions, job posts`,
    `and the occasional last-minute apero. This is the one thing to do today.`,
    ``,
    `   ${TELEGRAM}`,
    ``,
    `2. COMPLETE YOUR PROFILE`,
    ``,
    `Add a photo, your LinkedIn and a couple of lines about yourself. Takes a`,
    `minute, and it is what puts you on our members page.`,
    ``,
    `   ${profile}`,
    ``,
    `3. USE THE LOGO`,
    ``,
    `As a member you are welcome to display the La French Tech Phnom Penh logo`,
    `on your website, deck and communication material. It is attached to this`,
    `email, ready to use.`,
    ``,
    `WHAT HAPPENS NEXT`,
    ``,
    `We run free events all year: apero tech, tech talks, meetings with`,
    `investors and institutions. And 2026 is our biggest year yet, with the`,
    `Francophonie Summit in Phnom Penh in November, the French Tech Asia Forum`,
    `and the FrancoTech pavilion.`,
    ``,
    `If you fancy helping out, hosting something or speaking, just reply. There`,
    `is always room, and we are all volunteers here.`,
    ``,
    `--`,
    ``,
    `You will also appear on our public members page at ${SITE}/members, with`,
    `your name and company. Would rather not be listed? Reply and we will take`,
    `you off, no questions asked.`,
    ``,
    `A bientot,`,
    `La French Tech Phnom Penh`,
  ].join("\n");

  await sendMailTo({
    to: [opts.email],
    replyTo: REPLY_TO,
    subject: `Welcome to La French Tech Phnom Penh, ${first} 🎉`,
    text,
    html,
    bcc: JOURNEY_BCC ? [JOURNEY_BCC] : undefined,
    attachments: [
      { filename: "la-french-tech-phnom-penh-logo.png", path: LOGO_URL },
    ],
  });
}

/**
 * Sent two days after a startup listing or a partnership enquiry. No call to
 * action and no logo: these are conversations, not memberships.
 */
export async function sendEnquiryFollowUp(opts: {
  name: string;
  email: string;
  reason: string;
}): Promise<void> {
  const first = firstNameOf(opts.name);
  const partner = opts.reason === "Become a partner or sponsor";

  const bodyHtml = partner
    ? p(
        "Your partnership proposal is with the board. We go through these one at a time, because a partnership only really works when it matches what the community needs that year. One of us will come back to you to talk it through.",
      ) +
      p(
        "For context: we are a non-profit run entirely by volunteers. Partners and sponsors are what pay for the venues, the events and the material that keep all of it free and open to everyone, including our Francophonie Summit programme this November.",
      )
    : p(
        "Your startup is in the review queue. We go through submissions together as a board, look at what you are building and how it connects to the French-Cambodian ecosystem, then come back to you about featuring it in our community directory.",
      ) +
      p(
        "For context: we are the official French Tech Community in Cambodia, a non-profit run by volunteers. Being listed puts you in front of the investors, corporates and institutions we work with, and plugs you into a network of 100+ French Tech communities in 57 countries.",
      );

  const html = shell(
    p(`Hi <strong>${first}</strong> 👋`) +
      p(
        "Just a quick note so you are not left wondering: we got your message, and it has not been forgotten.",
      ) +
      h2(partner ? "🤝" : "🚀", "Where things stand") +
      bodyHtml +
      p(
        "Nothing needed from you right now. If something has changed since you wrote, or you simply want to add to it, hit reply and it comes straight to us.",
      ) +
      p("À bientôt,<br /><strong>La French Tech Phnom Penh</strong>"),
  );

  const bodyText = partner
    ? [
        `Your partnership proposal is with the board. We go through these one at a`,
        `time, because a partnership only really works when it matches what the`,
        `community needs that year. One of us will come back to you to talk it`,
        `through.`,
        ``,
        `For context: we are a non-profit run entirely by volunteers. Partners and`,
        `sponsors are what pay for the venues, the events and the material that`,
        `keep all of it free and open to everyone, including our Francophonie`,
        `Summit programme this November.`,
      ]
    : [
        `Your startup is in the review queue. We go through submissions together as`,
        `a board, look at what you are building and how it connects to the`,
        `French-Cambodian ecosystem, then come back to you about featuring it in`,
        `our community directory.`,
        ``,
        `For context: we are the official French Tech Community in Cambodia, a`,
        `non-profit run by volunteers. Being listed puts you in front of the`,
        `investors, corporates and institutions we work with, and plugs you into a`,
        `network of 100+ French Tech communities in 57 countries.`,
      ];

  const text = [
    `Hi ${first},`,
    ``,
    `Just a quick note so you are not left wondering: we got your message, and`,
    `it has not been forgotten.`,
    ``,
    `WHERE THINGS STAND`,
    ``,
    ...bodyText,
    ``,
    `Nothing needed from you right now. If something has changed since you`,
    `wrote, or you simply want to add to it, hit reply and it comes straight to`,
    `us.`,
    ``,
    `A bientot,`,
    `La French Tech Phnom Penh`,
  ].join("\n");

  await sendMailTo({
    to: [opts.email],
    replyTo: REPLY_TO,
    subject: partner
      ? "About your partnership proposal — La French Tech Phnom Penh"
      : "About your startup submission — La French Tech Phnom Penh",
    text,
    html,
    bcc: JOURNEY_BCC ? [JOURNEY_BCC] : undefined,
  });
}

/**
 * Sent a week after the welcome to members who never filled their profile.
 * One ask, one button: the members page only works if people show up on it.
 */
export async function sendProfileReminder(opts: {
  name: string;
  email: string;
}): Promise<void> {
  const first = firstNameOf(opts.name);
  const profile = profileUrl(SITE, opts.email);

  const html = shell(
    p(`Hi <strong>${first}</strong> 👋`) +
      p(
        "You joined La French Tech Phnom Penh last week, and your spot on the members page is still showing your initials.",
      ) +
      h2("👤", "One minute, and you are on the page") +
      p(
        "A photo and two lines about what you do. That is all. It is what makes the directory useful: people find each other by what they work on, not by a name in a list.",
      ) +
      button(profile, "Complete my profile") +
      p(
        `You can see who is already there at <a href="${SITE}/members" style="color:${BLEU};">${SITE}/members</a>.`,
      ) +
      p(
        `<span style="font-size:13px;color:#8a8a99;">Not interested? Ignore this, we will not ask again. And if you would rather not be listed at all, reply and we will take you off.</span>`,
      ) +
      p("À bientôt,<br /><strong>La French Tech Phnom Penh</strong>"),
  );

  const text = [
    `Hi ${first},`,
    ``,
    `You joined La French Tech Phnom Penh last week, and your spot on the`,
    `members page is still showing your initials.`,
    ``,
    `ONE MINUTE, AND YOU ARE ON THE PAGE`,
    ``,
    `A photo and two lines about what you do. That is all. It is what makes the`,
    `directory useful: people find each other by what they work on, not by a`,
    `name in a list.`,
    ``,
    `   ${profile}`,
    ``,
    `You can see who is already there at ${SITE}/members`,
    ``,
    `Not interested? Ignore this, we will not ask again. And if you would rather`,
    `not be listed at all, reply and we will take you off.`,
    ``,
    `A bientot,`,
    `La French Tech Phnom Penh`,
  ].join("\n");

  await sendMailTo({
    to: [opts.email],
    replyTo: REPLY_TO,
    subject: "Your French Tech profile is still empty",
    text,
    html,
    bcc: JOURNEY_BCC ? [JOURNEY_BCC] : undefined,
  });
}
