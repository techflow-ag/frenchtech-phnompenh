import { BoardMember } from "@/lib/types";
import { Reveal } from "./Reveal";

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
                <span className="display absolute left-0 top-0 bg-rouge px-2 py-1 text-[0.6rem] text-white">
                  {m.role}
                </span>
              )}
            </div>
            <h3 className="display mt-4 text-sm text-ink">{m.name}</h3>
            <p className="mt-1 text-xs leading-snug text-ink/60">{m.title}</p>
            {m.company && (
              <p className="text-xs leading-snug text-ink/60">{m.company}</p>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
