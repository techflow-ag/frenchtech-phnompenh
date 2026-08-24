import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import { CommunityMember } from "@/lib/types";

const reader = createReader(process.cwd(), keystaticConfig);

export const sectors = [
  "Fintech",
  "Foodtech",
  "Software & AI",
  "Cybersecurity",
  "E-commerce & Logistics",
  "Edtech",
  "Healthtech",
  "Investment",
  "Services",
] as const;

export async function getCommunityMembers(): Promise<CommunityMember[]> {
  const all = await reader.collections.community.all();
  return all.map(({ entry }) => {
    const e = entry as {
      name: string;
      sector: string;
      description: string;
      logo?: string;
      website?: string;
      type: "startup" | "company" | "institution";
    };
    return {
      name: e.name,
      sector: e.sector,
      description: e.description,
      logo: e.logo || undefined,
      website: e.website || undefined,
      type: e.type,
    };
  });
}
