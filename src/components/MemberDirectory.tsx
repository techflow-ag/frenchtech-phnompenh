"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { communityMembers, sectors } from "@/data/members";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function MemberDirectory() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return communityMembers.filter((m) => {
      const matchesSector = !sector || m.sector === sector;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.sector.toLowerCase().includes(q);
      return matchesSector && matchesQuery;
    });
  }, [query, sector]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
          <label htmlFor="member-search" className="sr-only">
            Search members
          </label>
          <input
            id="member-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a member…"
            className="w-full border border-line bg-paper py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-rouge"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSector(null)}
            className={`border px-3 py-1.5 text-xs font-medium transition-colors ${
              sector === null
                ? "border-rouge bg-rouge text-white"
                : "border-line text-ink/70 hover:border-rouge hover:text-rouge"
            }`}
          >
            All
          </button>
          {sectors.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSector(sector === s ? null : s)}
              className={`border px-3 py-1.5 text-xs font-medium transition-colors ${
                sector === s
                  ? "border-rouge bg-rouge text-white"
                  : "border-line text-ink/70 hover:border-rouge hover:text-rouge"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 border border-line p-8">
          <p className="text-sm text-ink-soft/80">
            No member matches your search. Try another sector or a different
            keyword.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <article
              key={m.name}
              className="group flex h-full flex-col border-b border-r border-line bg-paper p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-mist">
                  {m.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.logo}
                      alt={`${m.name} logo`}
                      className="h-full w-full object-contain p-1"
                    />
                  ) : (
                    <span className="display text-sm text-ink/30">
                      {initials(m.name)}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="display truncate text-sm text-ink">{m.name}</h3>
                  <p className="text-xs text-rouge">{m.sector}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink-soft/80">
                {m.description}
              </p>
              {m.website && (
                <a
                  href={m.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs font-semibold text-bleu hover:text-rouge"
                >
                  Visit website
                </a>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
