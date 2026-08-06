import { CommunityMember } from "@/lib/types";

// PLACEHOLDER DATA — replace with the real member list.
// Sectors reflect the actual makeup of the community: fintech, foodtech, AI,
// cybersecurity, blockchain, edtech, e-commerce, healthtech, logistics, VC, software.
export const sectors = [
  "Fintech",
  "Foodtech",
  "AI & Software",
  "Cybersecurity",
  "E-commerce & Logistics",
  "Edtech",
  "Healthtech",
  "Investment",
  "Services",
] as const;

export const communityMembers: CommunityMember[] = [
  {
    name: "BiKay",
    sector: "Fintech",
    description: "Payment and financial technology solutions for Southeast Asia.",
    type: "startup",
  },
  {
    name: "Canadia Impact Fund",
    sector: "Investment",
    description: "Impact investment fund backing Cambodian entrepreneurs.",
    type: "company",
  },
  {
    name: "UMAMI",
    sector: "Foodtech",
    description: "Fighting food waste in Phnom Penh, one meal at a time.",
    type: "startup",
  },
  {
    name: "ShopRunBack",
    sector: "E-commerce & Logistics",
    description: "Reverse logistics infrastructure for e-commerce returns.",
    type: "startup",
  },
  {
    name: "Solutions BI",
    sector: "AI & Software",
    description: "Business intelligence and data solutions for the region.",
    type: "company",
  },
  {
    name: "TechFlow Agency",
    sector: "AI & Software",
    description: "AI agents and automation for growing businesses.",
    type: "company",
  },
  {
    name: "SBI Group APAC",
    sector: "Fintech",
    description: "Financial services group operating across Asia-Pacific.",
    type: "company",
  },
];
