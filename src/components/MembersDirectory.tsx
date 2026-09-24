"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { DirectoryMember } from "@/lib/members";

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function MembersDirectory({ members }: { members: DirectoryMember[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return members;
    return members.filter((m) =>
      [m.name, m.company, m.role, m.bio]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [members, query]);

  return (
    <>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, company or keyword"
          aria-label="Search members"
          className="w-full border border-line bg-paper py-4 pl-11 pr-4 text-sm outline-none transition-colors focus:border-rouge"
        />
      </div>

      <p className="mt-4 text-sm text-ink/50" aria-live="polite">
        {results.length} {results.length === 1 ? "member" : "members"}
        {query.trim() && ` matching “${query.trim()}”`}
      </p>

      {results.length === 0 ? (
        <p className="mt-12 border border-line bg-mist p-8 text-center text-ink-soft/80">
          Nobody matches that search. Try a company name, or{" "}
          <button
            type="button"
            onClick={() => setQuery("")}
            className="text-bleu underline"
          >
            clear the search
          </button>
          .
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-px bg-line md:grid-cols-3 lg:grid-cols-4">
          {results.map((m) => (
            <div key={m.name} className="flex h-full flex-col bg-paper p-5">
              <div className="relative aspect-square overflow-hidden bg-mist">
                {m.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="display absolute inset-0 flex items-center justify-center text-3xl text-ink/20">
                    {initials(m.name)}
                  </span>
                )}
              </div>

              <h2 className="display mt-4 text-base leading-snug text-ink">
                {m.name}
              </h2>
              {m.isBoard && m.role && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-rouge">
                  {m.role}
                </p>
              )}
              {m.company && (
                <p className="mt-1 text-sm text-ink-soft/80">{m.company}</p>
              )}
              {m.bio && (
                <p className="mt-3 text-sm leading-relaxed text-ink-soft/70">
                  {m.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
