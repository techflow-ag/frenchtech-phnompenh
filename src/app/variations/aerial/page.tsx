import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { upcomingEvents } from "@/data/events";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Homepage — Aerial",
  robots: { index: false },
};

const stats = [
  { value: "150+", label: "Guests at our first Tech Talk" },
  { value: "60", label: "Member startups & organizations" },
  { value: "57", label: "Countries in the French Tech network" },
  { value: "200+", label: "French companies in Cambodia" },
];

const pillars = [
  {
    n: "01",
    title: "Connect",
    copy: "Monthly French Tech Connect nights, workshops, and panels — French, Cambodian, and international.",
  },
  {
    n: "02",
    title: "Grow",
    copy: "Practical support to launch and scale in Cambodia: legal, tax, hiring, funding, and warm introductions.",
  },
  {
    n: "03",
    title: "Bridge",
    copy: "We connect French startups with Cambodian corporates and the global network of 100+ communities.",
  },
];

export default function AerialHome() {
  const upcoming = upcomingEvents().slice(0, 3);

  return (
    <div className="font-serif-display">
      {/* Hero with aerial video */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/phnompenh-aerial-poster.jpg"
        >
          <source src="/media/phnompenh-aerial.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 md:pb-24">
          <p className="eyebrow !text-white/80">Official French Tech Community · Cambodia</p>
          <h1 className="mt-4 max-w-4xl text-6xl font-light leading-[1.02] text-white sm:text-7xl md:text-9xl">
            La French Tech
            <br />
            <em className="font-medium italic text-white">Phnom Penh</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            We connect French, Cambodian, and international founders, investors,
            and tech talent — and build the bridge between the French startup
            ecosystem and the Kingdom of Cambodia.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 font-sans">
            <Link
              href="/contact#join"
              className="display flex items-center gap-2 bg-rouge px-7 py-4 text-sm text-white transition-colors hover:bg-white hover:text-ink"
            >
              Join the community
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/events"
              className="display flex items-center gap-2 border border-white/40 px-7 py-4 text-sm text-white backdrop-blur-sm transition-colors hover:border-white"
            >
              Next events
            </Link>
          </div>
        </div>
        <span className="tricolore absolute inset-x-0 bottom-0" aria-hidden="true" />
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 80}>
              <div className="border-b border-r border-line px-6 py-12 last:border-r-0">
                <p className="text-5xl font-medium text-ink md:text-6xl">{s.value}</p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft/70">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 text-4xl font-light text-ink md:text-6xl">
            One community, <em className="italic">three missions.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div>
                <p className="font-sans text-sm font-semibold text-rouge">{p.n}</p>
                <h3 className="mt-2 text-3xl font-medium text-ink">{p.title}</h3>
                <p className="mt-4 font-sans text-base leading-relaxed text-ink-soft/80">
                  {p.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <p className="eyebrow">Events</p>
              <h2 className="mt-3 text-4xl font-light text-ink md:text-6xl">
                Coming up <em className="italic">next.</em>
              </h2>
            </Reveal>
            <Link
              href="/events"
              className="group flex items-center gap-1.5 font-sans text-sm font-semibold text-rouge"
            >
              All events
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {upcoming.map((e) => {
              const d = new Date(e.date);
              return (
                <Reveal key={e.slug}>
                  <article className="grid grid-cols-[auto_1fr] items-baseline gap-6 py-8 md:grid-cols-[140px_1fr_auto]">
                    <time className="font-sans text-sm font-semibold uppercase tracking-wide text-rouge">
                      {d.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        timeZone: "Asia/Phnom_Penh",
                      })}
                    </time>
                    <div>
                      <h3 className="text-2xl font-medium text-ink">{e.title}</h3>
                      <p className="mt-1 font-sans text-sm text-ink-soft/70">
                        {e.venue}
                      </p>
                    </div>
                    <span className="hidden font-sans text-sm text-ink/50 md:block">
                      {e.tags.join(" · ")}
                    </span>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bleu text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-2xl text-3xl font-light md:text-5xl">
            Build the France–Cambodia tech bridge <em className="italic">with us.</em>
          </h2>
          <Link
            href="/contact#join"
            className="display inline-flex shrink-0 items-center gap-2 bg-white px-7 py-4 font-sans text-sm text-bleu transition-colors hover:bg-rouge hover:text-white"
          >
            Get involved
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Variation switcher */}
      <VariationNote />
    </div>
  );
}

function VariationNote() {
  return (
    <div className="border-t border-line bg-paper py-6 text-center font-sans text-sm text-ink/50">
      Homepage variation A (aerial). See also{" "}
      <Link href="/" className="text-rouge underline">
        current
      </Link>{" "}
      and{" "}
      <Link href="/variations/editorial" className="text-rouge underline">
        variation B
      </Link>
      .
    </div>
  );
}
