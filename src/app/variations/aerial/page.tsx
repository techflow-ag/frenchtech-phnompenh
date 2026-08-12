import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { upcomingEvents } from "@/data/events";
import { boardMembers } from "@/data/board";
import { cambodiaLogos } from "@/data/ecosystem";
import { Reveal } from "@/components/Reveal";
import { KhmerBand } from "@/components/KhmerBand";
import { EventGallery } from "@/components/EventGallery";
import { LogoWall } from "@/components/LogoWall";
import { BoardGrid } from "@/components/BoardGrid";
import { PersonaGrid } from "@/components/PersonaGrid";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Quote } from "@/components/Quote";
import { PressSection } from "@/components/PressSection";
import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Homepage, Aerial",
  robots: { index: false },
};

const stats = [
  { value: "150+", label: "Guests at our first Tech Talk" },
  { value: "60", label: "Member startups & organizations" },
  { value: "9", label: "Volunteers on the 2026–2028 board" },
  { value: "57", label: "Countries in the French Tech network" },
];

const ecosystem = [
  { value: "200+", label: "French companies operating in Cambodia" },
  { value: "$568M", label: "France–Cambodia two-way trade in 2025" },
  { value: "$5.1B", label: "Foreign investment into Cambodia in 2025" },
];

const pillars = [
  {
    n: "01",
    title: "Connect",
    copy: "Monthly French Tech Connect nights, workshops, and panels, French, Cambodian, and international.",
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

function Heading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-light text-ink md:text-6xl">{children}</h2>
    </Reveal>
  );
}

export default function AerialHome() {
  const upcoming = upcomingEvents().slice(0, 3);

  return (
    <div className="font-serif-display">
      {/* Hero with aerial video */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden">
        <video
          className="img-settle absolute inset-0 h-full w-full object-cover"
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
          <Reveal>
            <p className="eyebrow !text-white/80">Official French Tech Community · Cambodia</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 text-5xl font-light leading-[1.0] text-white sm:text-6xl md:text-8xl">
              <span className="block whitespace-nowrap">La French Tech</span>
              <em className="block font-medium italic">Phnom Penh</em>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              We connect French, Cambodian, and international founders, investors,
              and tech talent, and build the bridge between the French startup
              ecosystem and the Kingdom of Cambodia.
            </p>
          </Reveal>
          <Reveal delay={360}>
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
          </Reveal>
        </div>
        <span className="tricolore absolute inset-x-0 bottom-0" aria-hidden="true" />
      </section>

      <KhmerBand />

      {/* Stats */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 90}>
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

      {/* Events */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading eyebrow="Events">
            Coming up <em className="italic">next.</em>
          </Heading>
          <Link
            href="/events"
            className="group flex items-center gap-1.5 font-sans text-sm font-semibold text-rouge"
          >
            All events
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {upcoming.map((e, i) => {
            const d = new Date(e.date);
            return (
              <Reveal key={e.slug} delay={i * 70}>
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
                    <p className="mt-1 font-sans text-sm text-ink-soft/70">{e.venue}</p>
                  </div>
                  <span className="hidden font-sans text-sm text-ink/50 md:block">
                    {e.tags.join(" · ")}
                  </span>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Heading eyebrow="What we do">
            One community, <em className="italic">three missions.</em>
          </Heading>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
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
        </div>
      </section>

      {/* France × Cambodia */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:py-32">
          <Reveal>
            <p className="eyebrow">France × Cambodia</p>
            <h2 className="mt-3 text-4xl font-light md:text-6xl">
              A bridge between <em className="italic">two ecosystems.</em>
            </h2>
            <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-white/70">
              France is one of Cambodia&apos;s closest economic partners, and the
              ties keep growing. This is the ground the community builds on.
            </p>
            <div className="mt-10 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-3">
              {ecosystem.map((s, i) => (
                <Reveal key={s.value} delay={i * 90} className="h-full">
                  <div className="h-full bg-ink p-6">
                    <p className="text-4xl font-medium text-rouge">{s.value}</p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-white/60">
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative mx-auto flex max-w-sm items-center justify-center">
              <div className="absolute inset-0 scale-90 rounded-full bg-bleu/40 blur-3xl" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/cambodia-flag-3d.png"
                alt="Flag of Cambodia"
                className="relative w-56 drop-shadow-2xl md:w-72"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cambodia logo wall */}
      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center">
          <Reveal>
            <p className="eyebrow">Already here</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-light text-ink md:text-5xl">
              French innovation is already in Cambodia.
            </h2>
          </Reveal>
          <div className="mt-12 text-left">
            <LogoWall logos={cambodiaLogos} />
          </div>
        </div>
      </section>

      {/* Real people gallery */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <Heading eyebrow="The community">
          Real people, <em className="italic">real events.</em>
        </Heading>
        <div className="mt-12">
          <EventGallery
            feature={{
              src: "/images/events/event-5.jpg",
              alt: "Audience at a French Tech Tech Talk in Phnom Penh",
            }}
            rest={[
              { src: "/images/events/event-3.jpg", alt: "Networking at an Apéro Tech night" },
              { src: "/images/events/event-7.jpg", alt: "Speaker on stage at a French Tech event" },
              { src: "/images/team/team-1.jpg", alt: "The French Tech Phnom Penh team" },
            ]}
          />
        </div>
      </section>

      {/* Press */}
      <PressSection />

      {/* Francophonie */}
      <section className="bg-bleu text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <p className="eyebrow !text-white/70">November 14–16, 2026</p>
            <h2 className="mt-3 max-w-xl text-3xl font-light md:text-5xl">
              The Francophonie Summit comes to <em className="italic">Phnom Penh.</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <Link
              href="/partners#become-a-partner"
              className="display inline-flex shrink-0 items-center gap-2 bg-white px-7 py-4 font-sans text-sm text-bleu transition-colors hover:bg-rouge hover:text-white"
            >
              Partner with us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-mist px-5 py-24 md:py-32">
        <Quote />
      </section>

      {/* Board */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:py-32">
        <Heading eyebrow="The board 2026–2028">
          Led by founders, <em className="italic">for founders.</em>
        </Heading>
        <div className="mt-12 border border-line">
          <BoardGrid members={boardMembers} />
        </div>
      </section>

      {/* Personas */}
      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">Get involved</p>
            <h2 className="mt-3 text-4xl font-light text-white md:text-6xl">
              Find your place in the <em className="italic">ecosystem.</em>
            </h2>
          </Reveal>
          <div className="mt-12 border border-line-dark">
            <PersonaGrid />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-medium text-ink">Stay in the loop.</h2>
            <p className="mt-2 font-sans text-sm text-ink-soft/80">
              One email per month: next events, ecosystem news, opportunities.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
