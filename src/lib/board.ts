import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import { BoardMember } from "@/lib/types";

const reader = createReader(process.cwd(), keystaticConfig);

export async function getBoardMembers(): Promise<BoardMember[]> {
  const all = await reader.collections.board.all();
  return all
    .map(({ entry }) => {
      const e = entry as {
        name: string;
        order?: number | null;
        role: string;
        title: string;
        company?: string;
        photo?: string;
        linkedin?: string;
      };
      return {
        name: e.name,
        order: e.order ?? 0,
        role: e.role,
        title: e.title,
        company: e.company || undefined,
        photo: e.photo || undefined,
        linkedin: e.linkedin || undefined,
      };
    })
    .sort((a, b) => a.order - b.order)
    .map(({ order: _order, ...m }) => m);
}
