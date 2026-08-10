import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { upcomingEvents } from "@/data/events";
import { boardMembers } from "@/data/board";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Homepage — Editorial",
  robots: { index: false },
};

const stats = [
  { k: "ATTENDEES", value: "150+", label: "First Tech Talk, Jun 2026" },
  { k: "MEMBERS", value: "60", label: "Startups & orgs" },
  { k: "BOARD", value: "09", label: "Volunteers 26–28" },
  { k: "NETWORK", value: "57", label: "Countries worldwide" },
];

export default function EditorialHome() {
  const upcoming = upcomingEvents().slice(0, 3);

  return (
    <div className="font-grotesk bg-paper">
      {/* Hero */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pb-24 md:pt-20">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink/60">
            <span className="h-2 w-2 bg-rouge" />
            La French Tech · Phnom Penh · Cambodia · Est. 2015
          </div>
          <h1 className="mt-8 text-[3.25rem] font-bold leading-[0.92] tracking-tight text-ink sm:text-7xl md:text-[7.5rem]">
            FRENCH
            <br />
            TECH{" "}
            <span className="text-rouge">×</span> KH
          </h1>
          <div className="mt-10 grid gap-8 border-t-2 border-ink pt-8 md:grid-cols-[1.4fr_1fr]">
            <p className="max-w-xl text-lg leading-relaxed text-ink md:text-xl">
              The official French Tech community in Cambodia. We connect founders,
              investors, and tech talent — French, Cambodian, and everyone in
              between — and wire Phnom Penh into a global network of 100+ communities.
            </p>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link
                href="/contact#join"
                className="inline-flex items-center gap-2 bg-ink px-7 py-4 font-mono text-sm uppercase tracking-wide text-white transition-colors hover:bg-rouge"
              >
                Join the community
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/events"
                className="font-mono text-sm uppercase tracking-wide text-ink underline decoration-rouge decoration-2 underline-offset-4 hover:text-rouge"
              >
                → See upcoming events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats — mono grid */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.k} delay={i * 70}>
              <div className="border-b-2 border-ink px-6 py-10 md:border-b-0 md:[&:not(:last-child)]:border-r-2">
                <p className="font-mono text-[0.7rem] uppercase tracking-widest text-rouge">
                  {s.k}
                </p>
                <p className="mt-3 text-6xl font-bold tracking-tight text-ink">
                  {s.value}
                </p>
                <p className="mt-2 font-mono text-xs text-ink/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Events — index list */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex items-baseline justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Upcoming
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
              [ {String(upcoming.length).padStart(2, "0")} events ]
            </span>
          </div>
          <div className="mt-10 border-t-2 border-ink">
            {upcoming.map((e, i) => {
              const d = new Date(e.date);
              return (
                <Reveal key={e.slug}>
                  <article className="group grid grid-cols-[auto_1fr] items-center gap-4 border-b-2 border-ink py-6 md:grid-cols-[3rem_140px_1fr_auto]">
                    <span className="font-mono text-sm text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <time className="font-mono text-sm font-semibold uppercase text-rouge">
                      {d.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        timeZone: "Asia/Phnom_Penh",
                      })}
                    </time>
                    <h3 className="text-xl font-semibold text-ink md:text-2xl">
                      {e.title}
                    </h3>
                    <span className="hidden font-mono text-xs uppercase text-ink/50 md:block">
                      {e.venue}
                    </span>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Board — mono roster */}
      <section className="border-b-2 border-ink bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            The board <span className="text-rouge">/</span> 26–28
          </h2>
          <div className="mt-10 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-2 md:grid-cols-3">
            {boardMembers.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 60} className="h-full">
                <div className="flex h-full items-center gap-4 bg-ink p-5">
                  {m.photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="h-14 w-14 shrink-0 object-cover grayscale"
                    />
                  )}
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-white">{m.name}</p>
                    <p className="truncate font-mono text-xs text-white/50">
                      {m.title}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Wire your startup into the network.
          </h2>
          <Link
            href="/contact#join"
            className="inline-flex shrink-0 items-center gap-2 bg-rouge px-7 py-4 font-mono text-sm uppercase tracking-wide text-white transition-colors hover:bg-ink"
          >
            Get listed
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="bg-paper py-6 text-center font-mono text-xs uppercase tracking-widest text-ink/50">
        Variation B (editorial) ·{" "}
        <Link href="/" className="text-rouge underline">
          current
        </Link>{" "}
        ·{" "}
        <Link href="/variations/aerial" className="text-rouge underline">
          variation A
        </Link>
      </div>
    </div>
  );
}
