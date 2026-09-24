// Shared between the contact form, the API route, the internal notification
// email and the Brevo mapping, so the four never drift apart.

export const REASONS = [
  "Join as a member",
  "List my startup",
  "Become a partner or sponsor",
  "Speak or host an event",
  "Something else",
] as const;

export type Reason = (typeof REASONS)[number];

/**
 * Reasons that come from an organisation, and therefore show the company
 * block. Someone booking a talk or just saying bonjour isn't asked for
 * headcount and revenue.
 */
export const COMPANY_REASONS: readonly Reason[] = [
  "Join as a member",
  "List my startup",
  "Become a partner or sponsor",
];

export const SECTORS = [
  "Software Development",
  "AI / Data",
  "Fintech",
  "E-commerce / Retail",
  "Foodtech",
  "Edtech",
  "Healthtech",
  "Agritech",
  "Logistics & Mobility",
  "Tourism & Hospitality",
  "Marketing, Media & Creative",
  "Manufacturing & Industry",
  "Real estate & Construction",
  "Consulting & Professional services",
  "Impact / NGO",
  "Other",
] as const;

export const REVENUE_BANDS = [
  "< $100k",
  "$100k – $200k",
  "$200k – $500k",
  "$500k – $1M",
  "$1M – $5M",
  "$5M – $20M",
  "> $20M",
] as const;
