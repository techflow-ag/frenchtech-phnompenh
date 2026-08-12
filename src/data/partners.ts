import { Sponsor } from "@/lib/types";

// PLACEHOLDER DATA, replace with real sponsors and their logos in /public/images/partners/
export const sponsors: Sponsor[] = [
  {
    name: "CCI France Cambodge",
    tier: "institutional",
    logo: "/images/partners/ccifc.png",
    website: "https://www.ccifcambodge.org",
    description: "French Chamber of Commerce in Cambodia, our host institution.",
  },
  {
    name: "Embassy of France in Cambodia",
    tier: "institutional",
    logo: "/images/partners/embassy-france.png",
    website: "https://kh.ambafrance.org",
    description: "Institutional support of the French Republic in the Kingdom.",
  },
  {
    name: "Expertise France",
    tier: "institutional",
    logo: "/images/partners/expertise-france.png",
    website: "https://www.expertisefrance.fr",
    description: "French public agency for international technical cooperation.",
  },
];

export const partnershipExamples = [
  {
    title: "Co-organise an event",
    description:
      "Host a French Tech Connect, sponsor a workshop, or bring a speaker to the community.",
  },
  {
    title: "Reach the ecosystem",
    description:
      "Put your brand in front of founders, investors, and decision-makers across the France–Cambodia tech scene.",
  },
  {
    title: "Access talent & startups",
    description:
      "Meet vetted startups for pilots, partnerships, and investment, before anyone else.",
  },
  {
    title: "Support the Francophonie momentum",
    description:
      "Be visible during flagship moments like the FrancoTech forum at the Francophonie Summit in Phnom Penh.",
  },
];
