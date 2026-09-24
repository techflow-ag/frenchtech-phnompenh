// Server-only Telegram notifications for the board group.
//
// A bot posting to a group chat is the cheapest possible notification channel:
// no subscription, no third-party automation service, one HTTP call. It stays
// dormant until both variables are set.

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/** Telegram rejects the whole message if a reserved character is unescaped. */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Telegram caps a message at 4096 characters. */
const MAX = 3900;

export async function sendTelegram(lines: string[]): Promise<void> {
  if (!TOKEN || !CHAT_ID) return; // not configured yet
  const text = lines.join("\n").slice(0, MAX);
  const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });
  if (!res.ok) {
    throw new Error(`Telegram send failed (${res.status}): ${await res.text()}`);
  }
}

/** Reasons the board wants pinged about. Membership applications are handled
 *  by the automated journey, so they would only be noise here. */
export const TELEGRAM_REASONS = [
  "List my startup",
  "Become a partner or sponsor",
  "Speak or host an event",
  "Something else",
];

export type ContactAlert = {
  name: string;
  email: string;
  reason?: string;
  message: string;
  company?: string;
  sector?: string;
  employees?: number;
  frenchStaff?: number;
  revenue?: string;
  activity?: string;
};

/** Posts a contact submission to the board group, formatted for a phone. */
export async function notifyBoard(c: ContactAlert): Promise<void> {
  if (!TELEGRAM_REASONS.includes(c.reason ?? "")) return;

  const lines = [
    `<b>📬 ${escapeHtml(c.reason ?? "New message")}</b>`,
    ``,
    `<b>${escapeHtml(c.name)}</b>`,
    `✉️ ${escapeHtml(c.email)}`,
  ];

  if (c.company) {
    lines.push(
      ``,
      `🏢 <b>${escapeHtml(c.company)}</b>${c.sector ? ` — ${escapeHtml(c.sector)}` : ""}`,
    );
    const facts = [
      c.employees !== undefined ? `${c.employees} employees` : null,
      c.frenchStaff !== undefined ? `${c.frenchStaff} French` : null,
      c.revenue || null,
    ].filter(Boolean);
    if (facts.length) lines.push(escapeHtml(facts.join(" · ")));
    if (c.activity) lines.push(`<i>${escapeHtml(c.activity)}</i>`);
  }

  lines.push(``, escapeHtml(c.message));
  await sendTelegram(lines);
}
