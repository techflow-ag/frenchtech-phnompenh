import { CommunityMember } from "@/lib/types";

// Member list, extend as the real directory grows.
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
    logo: "/images/members/bikay.png",
    sector: "Fintech",
    description: "Payment and financial technology solutions for Southeast Asia.",
    website: "https://bi-kay.com",
    type: "startup",
  },
  {
    name: "Canadia Impact Fund",
    logo: "/images/members/canadia-impact-fund.png",
    sector: "Investment",
    description: "Impact investment fund backing Cambodian entrepreneurs.",
    website: "https://www.canadiaimpact.com",
    type: "company",
  },
  {
    name: "UMAMI",
    logo: "/images/members/umami.png",
    sector: "Foodtech",
    description: "Fighting food waste in Phnom Penh, one meal at a time.",
    website: "https://www.umamikh.app",
    type: "startup",
  },
  {
    name: "ShopRunBack",
    logo: "/images/members/shoprunback.png",
    sector: "E-commerce & Logistics",
    description: "Reverse logistics infrastructure for e-commerce returns.",
    website: "https://www.shoprunback.com",
    type: "startup",
  },
  {
    name: "Solution BI",
    logo: "/images/members/solutions-bi.png",
    sector: "AI & Software",
    description: "Business intelligence and data solutions for the region.",
    website: "https://www.solution-bi.com",
    type: "company",
  },
  {
    name: "TechFlow Agency",
    logo: "/images/members/techflow.png",
    sector: "AI & Software",
    description: "AI agents and automation for growing businesses.",
    type: "company",
  },
  {
    name: "SBI Group APAC",
    logo: "/images/members/sbi-group.png",
    sector: "Fintech",
    description: "Financial services group operating across Asia-Pacific.",
    website: "https://www.sbi-group.com/about-sbi-apac",
    type: "company",
  },
];
