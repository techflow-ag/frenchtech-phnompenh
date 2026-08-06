import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { upcomingEvents } from "@/data/events";
import { boardMembers } from "@/data/board";
import { EventCard } from "@/components/EventCard";
import { BoardGrid } from "@/components/BoardGrid";
import { PersonaGrid } from "@/components/PersonaGrid";
import { KhmerBand } from "@/components/KhmerBand";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "2015", label: "Community founded in Phnom Penh" },
  { value: "2019", label: "Officially labeled by the French Tech Mission" },
  { value: "60+", label: "Member startups & organizations" },
  { value: "57", label: "Countries in the global French Tech network" },
];

const pillars = [
  {
    title: "Connect",
    copy: "Monthly French Tech Connect nights, workshops, and panels bring together founders, investors, and tech talent — French, Cambodian, and international.",
  },
  {
    title: "Grow",
    copy: "Practical support to launch and scale in Cambodia: legal and tax know-how, hiring, funding access, and introductions that actually convert.",
  },
  {
    title: "Bridge",
    copy: "We link French startups with Cambodian corporates and plug Cambodian entrepreneurs into the global French Tech network of 100+ communities.",
  },
];

export default function Home() {
  const upcoming = upcomingEvents().slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pb-28 md:pt-24">
          <p
            lang="km"
            aria-hidden="true"
            className="font-khmer pointer-events-none absolute -right-10 top-8 select-none text-[10rem] leading-none text-mist md:text-[16rem]"
          >
            ភ្នំពេញ
          </p>
          <div className="relative">
            <Reveal>
              <p className="eyebrow">
                Official French Tech Community · Cambodia
              </p>
              <h1 className="display mt-5 text-5xl text-ink sm:text-7xl md:text-[6.5rem]">
                French Tech
                <br />
                <span className="text-rouge">Phnom Penh</span>
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft/80">
                We connect French, Cambodian, and international founders,
                investors, and tech talent — and build the bridge between the
                French startup ecosystem and the Kingdom of Cambodia.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact#join"
                  className="display flex items-center gap-2 bg-rouge px-7 py-4 text-sm text-white transition-colors hover:bg-bleu"
                >
                  Join the community
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/events"
                  className="display flex items-center gap-2 border border-ink px-7 py-4 text-sm text-ink transition-colors hover:border-rouge hover:text-rouge"
                >
                  Next events
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <KhmerBand />

      {/* Stats */}
      <section className="bg-ink">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 80}>
              <div className="h-full border-r border-line-dark px-5 py-10 md:px-8">
                <p className="display text-4xl text-white md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-white/60">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Upcoming events */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Events"
            title="Coming up next"
            intro="Free, in English, and open to everyone — whether you're French, Cambodian, or from anywhere else."
          />
          <Link
            href="/events"
            className="group flex items-center gap-1.5 text-sm font-semibold text-rouge"
          >
            All events
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {upcoming.map((e) => (
            <Reveal key={e.slug}>
              <EventCard event={e} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHeading
            eyebrow="What we do"
            title="One community, three missions"
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="border-t-2 border-rouge pt-5">
                  <h3 className="display text-2xl text-ink">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft/80">
                    {p.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Francophonie Summit spotlight */}
      <section className="bg-bleu text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <Reveal>
            <p className="eyebrow !text-white/70">November 14–16, 2026</p>
            <h2 className="display mt-3 max-w-xl text-3xl md:text-4xl">
              The Francophonie Summit comes to Phnom Penh
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80">
              Cambodia hosts the Sommet de la Francophonie — with the FrancoTech
              forum and a dedicated French Tech Pavilion. The moment to
              spotlight French and Francophone innovation in Southeast Asia.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <Link
              href="/partners#become-a-partner"
              className="display inline-flex items-center gap-2 bg-white px-7 py-4 text-sm text-bleu transition-colors hover:bg-rouge hover:text-white"
            >
              Partner with us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Board preview */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The board 2026–2028"
            title="Led by founders, for founders"
            intro="Nine volunteers — entrepreneurs, operators, and investors building in Cambodia."
          />
          <Link
            href="/about#board"
            className="group flex items-center gap-1.5 text-sm font-semibold text-rouge"
          >
            Meet the board
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="mt-10 border border-line">
          <BoardGrid members={boardMembers.slice(0, 4)} compact />
        </div>
      </section>

      {/* Personas */}
      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHeading
            eyebrow="Get involved"
            title="Find your place in the ecosystem"
            dark
          />
          <div className="mt-12 border border-line-dark">
            <PersonaGrid />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="display text-2xl text-ink">Stay in the loop</h2>
            <p className="mt-2 text-sm text-ink-soft/80">
              One email per month: next events, ecosystem news, opportunities.
              No spam.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
