import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { upcomingEvents, pastEvents } from "@/data/events";
import { ecosystemPartners } from "@/data/ecosystem";
import { Reveal } from "@/components/Reveal";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Quote } from "@/components/Quote";
import { PressSection } from "@/components/PressSection";

export const metadata: Metadata = {
  title: "Homepage — Grand Paris style",
  robots: { index: false },
};

const ecosystem = [
  { value: "60", label: "Startups & organisations membres" },
  { value: "150+", label: "Participants à notre premier Tech Talk" },
  { value: "200+", label: "Entreprises françaises au Cambodge" },
  { value: "57", label: "Pays dans le réseau French Tech" },
];

const programmes = [
  {
    title: "Connect",
    copy: "French Tech Connect, ateliers et tables rondes chaque mois — fondateurs, investisseurs et talents.",
  },
  {
    title: "Grow",
    copy: "Un accompagnement concret pour lancer et scaler au Cambodge : juridique, fiscal, recrutement, financement.",
  },
  {
    title: "Bridge",
    copy: "On relie les startups françaises aux corporates cambodgiens et au réseau mondial de 100+ communautés.",
  },
];

const personas = [
  { title: "Start-ups", href: "/contact#join" },
  { title: "Grands groupes & ETI", href: "/partners#become-a-partner" },
  { title: "Investisseurs", href: "/community" },
  { title: "Incubateurs & partenaires", href: "/partners#become-a-partner" },
];

// Heading with the FrenchTech-style red underline under one keyword.
function Underlined({
  before,
  word,
  after,
  className = "",
}: {
  before?: string;
  word: string;
  after?: string;
  className?: string;
}) {
  return (
    <h2 className={`text-3xl font-extrabold tracking-tight md:text-4xl ${className}`}>
      {before}
      <span className="relative whitespace-nowrap">
        {word}
        <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-rouge" />
      </span>
      {after}
    </h2>
  );
}

export default function GrandParisHome() {
  const upcoming = upcomingEvents().slice(0, 2);
  const past = pastEvents();
  const news = [...upcoming, ...past].filter((e) => e.image).slice(0, 4);
  const gallery = [
    "/images/events/event-3.jpg",
    "/images/events/event-5.jpg",
    "/images/team/team-1.jpg",
    "/images/events/event-7.jpg",
  ];

  return (
    <div className="font-gotham bg-white text-ink">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-8 md:pt-12">
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-3xl bg-white p-8 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)] ring-1 ring-black/5 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-wider text-rouge">
                Communauté officielle · Cambodge
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
                La French Tech
                <br />
                <span className="text-rouge">Phnom Penh</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft/80">
                Rassembler les énergies · Connecter les acteurs · Multiplier les
                impacts de l&apos;écosystème tech franco-cambodgien.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-rouge px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ink"
                >
                  Qui sommes-nous ?
                </Link>
                <Link
                  href="/contact#join"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-colors hover:border-rouge hover:text-rouge"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="h-full overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/events/event-3.jpg"
                alt="Un événement French Tech Phnom Penh"
                className="img-settle h-full min-h-[280px] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Écosystème */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <Underlined before="Notre " word="écosystème" className="justify-center text-ink [text-align:center]" />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {ecosystem.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div>
                <p className="text-5xl font-extrabold text-rouge md:text-6xl">{s.value}</p>
                <p className="mx-auto mt-3 max-w-[12rem] text-sm leading-relaxed text-ink-soft/70">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Membres */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center md:py-20">
          <Reveal>
            <Underlined before="Parmi nos " word="membres" className="justify-center [text-align:center]" />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
            {ecosystemPartners.slice(0, 15).map((l, i) => (
              <Reveal key={l.name} delay={(i % 5) * 60}>
                <div className="flex h-14 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={l.logo}
                    alt={l.name}
                    className="max-h-11 w-auto max-w-[80%] object-contain"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes — navy */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
          <Reveal>
            <Underlined before="Nos " word="programmes" className="justify-center text-white [text-align:center]" />
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70">
              Relais de la Mission French Tech au Cambodge, on fédère l&apos;écosystème
              local et on l&apos;ouvre au réseau international.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programmes.map((p, i) => (
              <Reveal key={p.title} delay={i * 110}>
                <div className="h-full rounded-2xl bg-white/5 p-8 text-left ring-1 ring-white/10 transition-colors hover:bg-white/10">
                  <h3 className="text-2xl font-extrabold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Actualité */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <Underlined before="Notre " word="actualité" className="justify-center [text-align:center]" />
        </Reveal>
        <div className="mt-14 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {news.map((e, i) => (
            <Reveal key={e.slug} delay={i * 90} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl ring-1 ring-black/5 transition-shadow hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.3)]">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.image}
                    alt={e.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-rouge">
                    {e.tags.join(" · ")}
                  </p>
                  <h3 className="mt-2 text-base font-bold leading-snug text-ink">
                    {e.title}
                  </h3>
                  <Link
                    href="/events"
                    className="mt-auto pt-4 text-sm font-semibold text-rouge hover:text-ink"
                  >
                    Lire →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Press */}
      <PressSection />

      {/* Newsletter */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-ink">La newsletter</h2>
            <p className="mt-2 text-sm text-ink-soft/80">
              Un e-mail par mois : événements, actus de l&apos;écosystème, opportunités.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      {/* Quote */}
      <section className="bg-mist px-5 py-20 md:py-24">
        <Quote />
      </section>

      {/* Adhérer — navy persona cards */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
          <Reveal>
            <Underlined before="" word="Adhérer" after=" à la communauté" className="justify-center text-white [text-align:center]" />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {personas.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="h-full">
                <Link
                  href={p.href}
                  className="group flex h-full flex-col items-center justify-between gap-6 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 transition-colors hover:bg-rouge"
                >
                  <span className="text-lg font-bold text-white">{p.title}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rouge text-white transition-colors group-hover:bg-white group-hover:text-rouge">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* En photos */}
      <section className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <Underlined before="La communauté en " word="photos" className="justify-center [text-align:center]" />
        </Reveal>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={i * 80} className="h-full">
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Communauté French Tech Phnom Penh"
                  className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Red CTA band */}
      <section className="bg-rouge text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl">
              Prêt·e à rejoindre l&apos;écosystème tech franco-cambodgien ?
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact#join"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-rouge transition-colors hover:bg-ink hover:text-white"
              >
                Adhérer
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-rouge"
              >
                Voir les événements
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
