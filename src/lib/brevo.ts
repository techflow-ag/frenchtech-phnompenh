// Server-only Brevo CRM sync. Never import in client components.
//
// Every website form upserts its lead into Brevo so the community has a single
// place to segment contacts and send event / newsletter campaigns from.
// Sync failures are swallowed by `syncToBrevo` on purpose: the notification
// email is the source of truth and must never fail because the CRM is down.

const API = "https://api.brevo.com/v3";
const KEY = process.env.BREVO_API_KEY;

/** Brevo list ids, one per website form (folder "Site web"). */
export const LISTS = {
  contact: 4,
  eventRegister: 5,
  newsletter: 6,
  welcomeGuide: 7,
} as const;

/**
 * EventRegisterForm option id -> the Brevo boolean attribute and the dedicated
 * list (folder "Événements — Francophonie 2026") for that event. The list is
 * what the team picks when sending a reminder to one event's registrants.
 */
const EVENTS: Record<string, { attr: string; list: number }> = {
  "french-tech-asia-forum-2026": { attr: "EVT_ASIA_FORUM", list: 9 },
  "francotech-2026": { attr: "EVT_FRANCOTECH", list: 10 },
  "communities-evening": { attr: "EVT_COMMUNITIES", list: 11 },
  "innovation-ecosystem-lunch": { attr: "EVT_ASEAN_LUNCH", list: 12 },
  "evening-reception": { attr: "EVT_RECEPTION", list: 13 },
  "startup-investor-matching": { attr: "EVT_INVESTOR_MATCH", list: 14 },
  "ministries-visits": { attr: "EVT_MINISTRIES", list: 15 },
};

/** Brevo stores long text fine; cap so one lead can't bloat the record. */
const MAX_TEXT = 4000;

type Attributes = Record<string, string | number | boolean>;

export type BrevoLead = {
  email: string;
  /** Full name as typed; split into PRENOM / NOM when first/last aren't separate. */
  name?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  profile?: string;
  phone?: string;
  reason?: string;
  message?: string;
  /** Human-readable event labels, shown in the CRM. */
  events?: string[];
  /** Option ids from EventRegisterForm, used to tick the EVT_* booleans. */
  eventIds?: string[];
  sourceForm: keyof typeof LISTS;
  sourceUrl?: string;
  /** Submission date (YYYY-MM-DD); defaults to today. Used to replay history. */
  submittedAt?: string;
};

function splitName(full: string): { first: string; last: string } {
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return { first: parts[0], last: "" };
  return { first: parts[0], last: parts.slice(1).join(" ") };
}

/**
 * Today in Phnom Penh. The server runs in UTC, so a submission made between
 * midnight and 7am local time would otherwise be filed under the previous day.
 */
function today(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Phnom_Penh",
  }).format(new Date());
}

/** Existing attributes for a contact, or null when unknown to Brevo. */
async function getContact(email: string): Promise<Attributes | null> {
  const res = await fetch(`${API}/contacts/${encodeURIComponent(email)}`, {
    headers: { "api-key": KEY as string, accept: "application/json" },
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Brevo get failed (${res.status})`);
  const data = (await res.json()) as { attributes?: Attributes };
  return data.attributes ?? {};
}

/**
 * Create or enrich a contact. Existing data is never destroyed: booleans and
 * event labels are unioned, messages are appended with a dated header, and
 * blank incoming fields leave the stored value untouched.
 */
export async function upsertContact(lead: BrevoLead): Promise<void> {
  if (!KEY) throw new Error("BREVO_API_KEY is not set");

  const prev = await getContact(lead.email);
  const at = lead.submittedAt ?? today();
  const attrs: Attributes = {};

  // Identity — prefer explicit first/last, else split the single name field.
  const first = lead.firstName ?? (lead.name ? splitName(lead.name).first : "");
  const last = lead.lastName ?? (lead.name ? splitName(lead.name).last : "");
  // A later one-word name ("Sananikone") must not wipe a known full name.
  const partialName = Boolean(first) && !last && Boolean(prev?.PRENOM && prev?.NOM);
  if (first && !partialName) attrs.PRENOM = first;
  if (last) attrs.NOM = last;

  if (lead.company) attrs.ENTREPRISE = lead.company;
  if (lead.profile) attrs.PROFIL = lead.profile;
  if (lead.phone) attrs.TELEPHONE = lead.phone;
  if (lead.reason) attrs.MOTIF_CONTACT = lead.reason;
  if (lead.sourceUrl) attrs.SOURCE_URL = lead.sourceUrl;

  // Which forms this person went through, most recent last.
  const forms = new Set(
    String(prev?.SOURCE_FORM ?? "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean),
  );
  forms.delete(lead.sourceForm);
  attrs.SOURCE_FORM = [...forms, lead.sourceForm].join(", ");

  // Messages accumulate so the CRM keeps the full conversation history.
  if (lead.message) {
    const entry = `[${at} · ${lead.sourceForm}] ${lead.message}`;
    const previous = String(prev?.MESSAGE ?? "");
    attrs.MESSAGE = (previous ? `${entry}\n\n---\n\n${previous}` : entry).slice(
      0,
      MAX_TEXT,
    );
  }

  // Event selections are cumulative across repeat registrations.
  if (lead.events?.length) {
    const labels = new Set(
      String(prev?.EVENEMENTS ?? "")
        .split(" | ")
        .map((s) => s.trim())
        .filter(Boolean),
    );
    for (const label of lead.events) labels.add(label);
    attrs.EVENEMENTS = [...labels].join(" | ").slice(0, MAX_TEXT);
    attrs.NB_EVENEMENTS = labels.size;
  }
  // Each chosen event ticks its boolean and enrols the contact in its list.
  // Neither is ever undone, so a second partial registration can't drop someone.
  const eventLists = new Set<number>();
  for (const id of lead.eventIds ?? []) {
    const event = EVENTS[id];
    if (!event) continue;
    attrs[event.attr] = true;
    eventLists.add(event.list);
  }

  const firstSeen = String(prev?.PREMIER_CONTACT ?? at).slice(0, 10);
  const lastSeen = String(prev?.DERNIER_CONTACT ?? at).slice(0, 10);
  attrs.PREMIER_CONTACT = at < firstSeen ? at : firstSeen;
  attrs.DERNIER_CONTACT = at > lastSeen ? at : lastSeen;
  attrs.NB_SOUMISSIONS = Number(prev?.NB_SOUMISSIONS ?? 0) + 1;

  const res = await fetch(`${API}/contacts`, {
    method: "POST",
    headers: {
      "api-key": KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: lead.email,
      updateEnabled: true,
      listIds: [LISTS[lead.sourceForm], ...eventLists],
      attributes: attrs,
    }),
  });
  if (!res.ok) {
    throw new Error(`Brevo upsert failed (${res.status}): ${await res.text()}`);
  }
}

/** Fire-and-forget wrapper: logs and swallows so form submissions never fail. */
export async function syncToBrevo(lead: BrevoLead): Promise<void> {
  try {
    await upsertContact(lead);
  } catch (e) {
    console.error("brevo sync error", e);
  }
}
