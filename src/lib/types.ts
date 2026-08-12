export type AgendaItem = { when: string; title: string; detail?: string };

export type EventItem = {
  slug: string;
  title: string;
  series?: string; // e.g. "French Tech Connect"
  number?: number; // series number, e.g. #12
  date: string; // ISO date
  endDate?: string; // ISO date for multi-day events
  endTime?: string;
  venue: string;
  city: string;
  description: string;
  image?: string;
  registrationUrl?: string;
  tags: string[];
  featured?: boolean;
  // Rich content for the event detail page:
  longDescription?: string[];
  stats?: { value: string; label: string }[];
  agenda?: AgendaItem[];
};

export type BoardMember = {
  name: string;
  role: string; // role within the board, e.g. "President"
  title: string; // professional title, e.g. "CEO, Company"
  company?: string;
  photo?: string;
  linkedin?: string;
};

export type InstitutionalPartner = {
  name: string;
  role: string;
  organization: string;
  photo?: string;
  logo?: string;
  website?: string;
  linkedin?: string;
};

export type CommunityMember = {
  name: string;
  logo?: string;
  sector: string;
  description: string;
  website?: string;
  type: "startup" | "company" | "institution";
};

export type Sponsor = {
  name: string;
  logo?: string;
  tier: "platinum" | "gold" | "partner" | "institutional";
  website?: string;
  description?: string;
};
