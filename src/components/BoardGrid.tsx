import { BoardMember } from "@/lib/types";
import { Reveal } from "./Reveal";
import { LinkedinIcon } from "./SocialIcons";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function BoardGrid({
  members,
  compact = false,
}: {
  members: BoardMember[];
  compact?: boolean;
}) {
  return (
    <div
      className={`grid gap-px bg-line ${
        compact ? "grid-cols-2 md:grid-cols-4" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      }`}
    >
      {members.map((m, i) => (
        <Reveal key={m.name} delay={(i % 4) * 60} className="h-full">
          <div className="group h-full bg-paper p-5">
            <div className="relative aspect-square overflow-hidden bg-mist">
              {m.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={m.photo}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="display text-4xl text-line">
                    {initials(m.name)}
                  </span>
                </div>
              )}
              {m.role !== "Board Member" && (
                <span className="display absolute left-0 top-0 bg-rouge px-2 py-1 text-[0.6rem] uppercase text-white">
                  {m.role}
                </span>
              )}
            </div>
            <div className="mt-4 flex items-start justify-between gap-2">
              <div>
                <h3 className="display text-base text-ink">{m.name}</h3>
                <p className="mt-1 text-sm leading-snug text-ink/60">{m.title}</p>
                {m.company && (
                  <p className="text-sm leading-snug text-ink/60">{m.company}</p>
                )}
              </div>
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-bleu text-white transition-colors hover:bg-rouge"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
