import { listContacts } from "@/lib/brevo";
import { getBoardMembers } from "@/lib/board";

export type DirectoryMember = {
  name: string;
  /** Board members are pinned above the rest and badged. */
  isBoard: boolean;
  /** Board role, or the member's company. */
  role?: string;
  company?: string;
  photo?: string;
  bio?: string;
};

/** Matches "Jannine SEM" with "jannine sem" so board members aren't listed twice. */
function key(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

/**
 * Everyone shown on the public members page: the board first, then members
 * from the CRM. Board entries win on a name clash, since they carry a photo
 * and a role the CRM does not have.
 */
export async function getDirectoryMembers(
  revalidateSeconds = 3600,
): Promise<DirectoryMember[]> {
  const board = await getBoardMembers();
  const out: DirectoryMember[] = board.map((m) => ({
    name: m.name,
    isBoard: true,
    role: m.role,
    company: m.company || m.title,
    photo: m.photo,
  }));
  const seen = new Set(out.map((m) => key(m.name)));

  let contacts: Awaited<ReturnType<typeof listContacts>> = [];
  try {
    contacts = await listContacts({ revalidateSeconds });
  } catch {
    // No CRM key (preview builds) or Brevo down: the board still renders.
    return out;
  }

  const members: DirectoryMember[] = [];
  for (const c of contacts) {
    const a = c.attributes;
    if (String(a.MOTIF_CONTACT ?? "") !== "Join as a member") continue;

    const name = [a.PRENOM, a.NOM].filter(Boolean).join(" ").trim();
    if (!name || seen.has(key(name))) continue;
    seen.add(key(name));

    members.push({
      name,
      isBoard: false,
      company: String(a.ENTREPRISE ?? "") || undefined,
      photo: String(a.PROFIL_PHOTO ?? "") || undefined,
      bio: String(a.PROFIL_BIO ?? "") || undefined,
    });
  }

  members.sort((a, b) => a.name.localeCompare(b.name));
  return [...out, ...members];
}
