import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { upcomingEvents } from "@/data/events";
import { boardMembers } from "@/data/board";
import { cambodiaLogos } from "@/data/ecosystem";
import { Reveal } from "@/components/Reveal";
import { LogoWall } from "@/components/LogoWall";
import { PersonaGrid } from "@/components/PersonaGrid";
import { NewsletterForm } from "@/components/NewsletterForm";

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

const ecosystem = [
  { value: "200+", label: "French companies in Cambodia" },
  { value: "$568M", label: "France–Cambodia trade, 2025" },
  { value: "$5.1B", label: "Foreign investment, 2025" },
];

const pillars = [
  {
    title: "Connect",
    copy: "Monthly French Tech Connect nights, workshops, and panels — French, Cambodian, and international.",
  },
  {
    title: "Grow",
    copy: "Practical support to launch and scale in Cambodia: legal, tax, hiring, funding, warm intros.",
  },
  {
    title: "Bridge",
    copy: "We wire French startups to Cambodian corporates and the global network of 100+ communities.",
  },
];

export default function EditorialHome() {
  const upcoming = upcomingEvents().slice(0, 3);

  return (
    <div className="font-grotesk bg-paper">
      {/* Hero — split with past-event photo */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto grid max-w-6xl items-stretch gap-0 md:grid-cols-2">
          <div className="px-5 pb-12 pt-14 md:pb-16 md:pr-10 md:pt-20">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink/60">
                <span className="h-2 w-2 bg-rouge" />
                Official French Tech Community · Est. 2015
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 text-[2.25rem] font-bold leading-[1.0] tracking-tight text-ink sm:text-5xl md:text-[4rem]">
                <span className="block whitespace-nowrap">LA FRENCH TECH</span>
                <span className="block whitespace-nowrap text-rouge">PHNOM PENH</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink">
                The official French Tech community in Cambodia. We connect founders,
                investors, and tech talent — French, Cambodian, and everyone in
                between — and wire Phnom Penh into a global network of 100+ communities.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-10 flex flex-col items-start gap-3">
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
            </Reveal>
          </div>
          <div className="relative min-h-[320px] border-t-2 border-ink md:border-l-2 md:border-t-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/events/event-6.jpg"
              alt="A past French Tech Phnom Penh Tech Talk"
              className="img-settle h-full w-full object-cover"
            />
            <span className="absolute bottom-0 left-0 bg-ink px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-white">
              Tech Talk · Koh Pich · Jun 2026
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.k} delay={i * 80}>
              <div className="border-b-2 border-ink px-6 py-10 md:border-b-0 md:[&:not(:last-child)]:border-r-2">
                <p className="font-mono text-[0.7rem] uppercase tracking-widest text-rouge">
                  {s.k}
                </p>
                <p className="mt-3 text-6xl font-bold tracking-tight text-ink">{s.value}</p>
                <p className="mt-2 font-mono text-xs text-ink/60">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="flex items-baseline justify-between">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">Upcoming</h2>
            </Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
              [ {String(upcoming.length).padStart(2, "0")} events ]
            </span>
          </div>
          <div className="mt-10 border-t-2 border-ink">
            {upcoming.map((e, i) => {
              const d = new Date(e.date);
              return (
                <Reveal key={e.slug} delay={i * 70}>
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
                    <h3 className="text-xl font-semibold text-ink md:text-2xl">{e.title}</h3>
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

      {/* Missions */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Three missions <span className="text-rouge">/</span> one community
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border-2 border-ink bg-ink md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="h-full">
                <div className="h-full bg-paper p-7">
                  <p className="font-mono text-xs uppercase tracking-widest text-rouge">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/80">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* France × Cambodia */}
      <section className="border-b-2 border-ink bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-rouge">
              France × Cambodia
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              A bridge between two ecosystems
            </h2>
            <div className="mt-10 grid gap-px border-2 border-line-dark bg-line-dark sm:grid-cols-3">
              {ecosystem.map((s, i) => (
                <Reveal key={s.value} delay={i * 80} className="h-full">
                  <div className="h-full bg-ink p-5">
                    <p className="text-4xl font-bold text-rouge">{s.value}</p>
                    <p className="mt-2 font-mono text-xs text-white/60">{s.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative mx-auto flex max-w-xs items-center justify-center">
              <div className="absolute inset-0 scale-90 rounded-full bg-bleu/40 blur-3xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/cambodia-flag-3d.png"
                alt="Flag of Cambodia"
                className="relative w-52 drop-shadow-2xl md:w-64"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Logo wall */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Already in Cambodia
            </h2>
            <p className="mt-3 font-mono text-xs uppercase tracking-widest text-ink/50">
              French companies on the ground
            </p>
          </Reveal>
          <div className="mt-10">
            <LogoWall logos={cambodiaLogos} />
          </div>
        </div>
      </section>

      {/* Board — 4 per row mosaic */}
      <section className="border-b-2 border-ink bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              The board <span className="text-rouge">/</span> 26–28
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-px border-2 border-line-dark bg-line-dark grid-cols-2 md:grid-cols-4">
            {boardMembers.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 60} className="h-full">
                <div className="group flex h-full flex-col bg-ink">
                  {m.photo && (
                    <div className="relative aspect-[4/5] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="font-semibold text-white">{m.name}</p>
                    <p className="mt-1 font-mono text-[0.7rem] leading-snug text-white/50">
                      {m.title}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Personas */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-ink md:text-5xl">
              Get involved
            </h2>
          </Reveal>
          <div className="mt-10 border-2 border-ink">
            <PersonaGrid />
          </div>
        </div>
      </section>

      {/* CTA + newsletter */}
      <section className="border-b-2 border-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Wire your startup into the network.
          </h2>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
