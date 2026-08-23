import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getUpcomingEvents } from "@/lib/events";
import { getBoardMembers } from "@/lib/board";
import { EventCard } from "@/components/EventCard";
import { BoardGrid } from "@/components/BoardGrid";
import { PersonaGrid } from "@/components/PersonaGrid";
import { KhmerBand } from "@/components/KhmerBand";
import { EventGallery } from "@/components/EventGallery";
import { LogoWall } from "@/components/LogoWall";
import { cambodiaLogos } from "@/data/ecosystem";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Quote } from "@/components/Quote";
import { PressSection } from "@/components/PressSection";
import { WelcomeGuide } from "@/components/WelcomeGuide";
import { FinalCTA } from "@/components/FinalCTA";
import { JsonLd } from "@/components/JsonLd";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "La French Tech Phnom Penh",
  url: "https://lafrenchtech-cambodge.com",
  logo: "https://lafrenchtech-cambodge.com/images/logo-mark.png",
  description:
    "The official French Tech Community in Cambodia, connecting French, Cambodian and international founders, investors and tech talent.",
  foundingDate: "2015",
  email: "frenchtech.pp@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Connexion Building, Koh Pich, Sangkat Tonle Bassac",
    addressLocality: "Phnom Penh",
    addressCountry: "KH",
  },
  sameAs: [
    "https://kh.linkedin.com/company/la-french-tech-phnompenh",
    "https://www.facebook.com/CambodgeFrenchTech/",
  ],
};

const stats = [
  { value: "150+", label: "Guests at our first Tech Talk, June 2026" },
  { value: "60", label: "Member startups & organizations" },
  { value: "9", label: "Volunteers on the 2026–2028 board" },
  { value: "57", label: "Countries in the global French Tech network" },
];

// France × Cambodia ecosystem, sourced figures (see /about for context).
const ecosystem = [
  { value: "200+", label: "French companies operating in Cambodia" },
  { value: "$568M", label: "France–Cambodia two-way trade in 2025" },
  { value: "$5.1B", label: "Foreign investment into Cambodia in 2025" },
];

const pillars = [
  {
    title: "Connect",
    copy: "Monthly French Tech Connect nights, workshops, and panels bring together founders, investors, and tech talent, French, Cambodian, and international.",
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

export default async function Home() {
  const [upcomingAll, boardMembers] = await Promise.all([
    getUpcomingEvents(),
    getBoardMembers(),
  ]);
  const upcoming = upcomingAll.slice(0, 2);

  return (
    <>
      <JsonLd data={orgJsonLd} />
      {/* Hero with Phnom Penh aerial video */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <p
          lang="km"
          aria-hidden="true"
          className="font-khmer pointer-events-none absolute -right-6 top-6 select-none text-[10rem] leading-none text-white/10 md:text-[16rem]"
        >
          ភ្នំពេញ
        </p>
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 md:pb-24">
          <Reveal>
            <p className="eyebrow !text-white/80">
              Official French Tech Community · Cambodia
            </p>
            <h1 className="display mt-5 text-5xl text-white sm:text-7xl md:text-[6rem]">
              La French Tech
              <br />
              <span className="text-rouge">Phnom Penh</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/85">
              We connect French, Cambodian, and international founders,
              investors, and tech talent, and build the bridge between the
              French startup ecosystem and the Kingdom of Cambodia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
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
            intro="Free, in English, and open to everyone, whether you're French, Cambodian, or from anywhere else."
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
                  <p className="mt-3 text-base leading-relaxed text-ink-soft/80">
                    {p.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* France × Cambodia ecosystem */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <Reveal>
            <p className="eyebrow">France × Cambodia</p>
            <h2 className="display mt-3 text-3xl text-white md:text-5xl">
              A bridge between two ecosystems
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
              France is one of Cambodia&apos;s closest economic partners, and
              the ties keep growing. This is the ground the community builds on.
            </p>
            <div className="mt-10 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-3">
              {ecosystem.map((s, i) => (
                <Reveal key={s.value} delay={i * 80} className="h-full">
                  <div className="h-full bg-ink p-6">
                    <p className="display text-3xl text-rouge">{s.value}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
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

      {/* Phnom Penh photo band */}
      <section className="relative">
        <div className="relative h-[42vh] min-h-[320px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/photos/phnompenh-skyline.jpg"
            alt="The Phnom Penh skyline"
            className="img-settle h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-8">
            <Reveal>
              <p lang="km" className="font-khmer text-2xl text-white/80">
                ភ្នំពេញ
              </p>
              <p className="display mt-2 text-2xl text-white md:text-4xl">
                Phnom Penh, our home base.
              </p>
            </Reveal>
          </div>
        </div>
        <span className="tricolore" aria-hidden="true" />
      </section>

      {/* Cambodia logo wall */}
      <section className="border-b border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionHeading
            eyebrow="Thank you"
            title="Our sponsors & partners"
            intro="The organizations that support La French Tech Phnom Penh and make our events and programs possible."
            align="center"
          />
          <div className="mt-12">
            <LogoWall logos={cambodiaLogos} />
          </div>
        </div>
      </section>

      {/* Community in pictures */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:pb-32 md:pt-28">
        <SectionHeading
          eyebrow="The community"
          title="Real people, real events"
          intro="Tech Talks, Apéro Tech nights, forums, this is what the ecosystem looks like in person."
        />
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

      {/* Francophonie Summit spotlight, French Tech Asia Forum */}
      <section className="bg-bleu text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.3fr_1fr] md:py-20">
          <Reveal>
            <p className="eyebrow !text-white/70">14–17 November 2026 · Koh Pich</p>
            <h2 className="display mt-3 max-w-xl text-3xl md:text-5xl">
              French Tech Asia Forum, at the Francophonie Summit
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
              Cambodia hosts the 20th Sommet de la Francophonie, 90+ countries,
              100,000+ visitors. La French Tech Phnom Penh runs a dedicated
              pavilion at FrancoTech and a full week of events for founders,
              investors and communities from across the Francophone world.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/events/french-tech-asia-forum-2026"
                className="display inline-flex items-center gap-2 bg-white px-7 py-4 text-sm text-bleu transition-colors hover:bg-rouge hover:text-white"
              >
                Discover the forum
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/events/register"
                className="display inline-flex items-center gap-2 border border-white/40 px-7 py-4 text-sm text-white transition-colors hover:border-white"
              >
                Register your interest
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/events/francotech-poster.jpg"
                alt="French Tech Asia Forum, 14-17 November 2026, Phnom Penh"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Board quote */}
      <section className="bg-mist px-5 py-20 md:py-28">
        <Quote />
      </section>

      {/* Board */}
      <section id="board" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The board 2026–2028"
            title="Led by founders, for founders"
            intro="Nine volunteers, entrepreneurs, operators, and investors building in Cambodia, co-chaired by Cédric Kang and Thierry Tea."
          />
        </div>
        <div className="mt-10 border border-line">
          <BoardGrid members={boardMembers} />
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

      {/* Welcome guide, email capture */}
      <WelcomeGuide />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
