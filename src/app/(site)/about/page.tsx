import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { institutionalPartners } from "@/data/institutional";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "La French Tech Phnom Penh: founded in 2015, labeled official French Tech Community in 2019, renewed for 2026–2028. Our story, mission, and board.",
};

const timeline = [
  {
    year: "2013",
    text: "La French Tech is launched by the French government, a global movement to support and promote French tech entrepreneurship worldwide.",
  },
  {
    year: "2015",
    text: "A group of French entrepreneurs in Cambodia founds the Phnom Penh community, hosted by CCI France Cambodge.",
  },
  {
    year: "2019",
    text: "La French Tech Phnom Penh is officially labeled a French Tech Community by the French Tech Mission.",
  },
  {
    year: "2026",
    text: "The label is renewed for 2026–2028 and a new nine-member board takes office, ahead of the Francophonie Summit in Phnom Penh.",
  },
];

const values = [
  {
    title: "Open to all",
    copy: "French, Cambodian, or any other nationality, French-speaking or not. Our events are free and everyone is welcome.",
  },
  {
    title: "Volunteer-driven",
    copy: "We are a non-profit run entirely by volunteers: founders, operators, and investors who give their time to the ecosystem.",
  },
  {
    title: "Locally rooted, globally connected",
    copy: "We reflect Cambodia's ecosystem while carrying the French Tech label, a network of 100+ communities in 57 countries.",
  },
];

const missions = [
  "Federate the French–Cambodian tech ecosystem: startups, investors, corporates, and institutions.",
  "Organize high-impact events connecting investors and entrepreneurs.",
  "Help French startups land in Cambodia, and Cambodian startups reach the global French Tech network.",
  "Connect French startups with Cambodian corporates and improve access to funding.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="About us"
        khmer="អំពីយើង"
        intro="La French Tech Phnom Penh is the official French Tech Community in Cambodia, a volunteer-driven, non-profit collective bridging the French and Cambodian entrepreneurial ecosystems."
      />

      {/* Story / timeline */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow="Our story"
          title="A decade of building bridges"
          intro="Launched by the French government in 2013, La French Tech is a collective brand carried locally by its members. In Phnom Penh, that story starts in 2015."
        />
        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 80}>
              <div className="h-full bg-paper p-6">
                <p className="display text-3xl text-rouge">{t.year}</p>
                <p className="mt-3 text-base leading-relaxed text-ink-soft/80">
                  {t.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team photo */}
      <section className="mx-auto max-w-5xl px-5 pb-20 md:pb-28">
        <Reveal>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/team/team-1.jpg"
              alt="The French Tech Phnom Penh community team"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-sm text-ink/60">
              The community gathering in Phnom Penh, 2026.
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHeading eyebrow="What we stand for" title="Our values" />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="border-t-2 border-bleu pt-5">
                  <h3 className="display text-xl text-ink">{v.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink-soft/80">
                    {v.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHeading
            eyebrow="Our mission 2026–2028"
            title="What we're here to do"
            dark
          />
          <ul className="mt-12 grid gap-px border border-line-dark bg-line-dark md:grid-cols-2">
            {missions.map((m, i) => (
              <Reveal key={m} delay={i * 80}>
                <li className="flex h-full gap-4 bg-ink p-7">
                  <span className="display shrink-0 text-lg text-rouge">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-white/80">{m}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Board, group photos (individual portraits live on the homepage) */}
      <section id="board" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow="The board 2026–2028"
          title="A new board takes office"
          intro="Nine volunteers took office in March 2026, on the International Day of Francophonie, five women and four men, all building in Cambodia."
        />
        <Reveal className="mt-10">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/team/board-group.jpg"
              alt="The 2026–2028 board of La French Tech Phnom Penh"
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-sm text-ink/60">
              The 2026–2028 board, Phnom Penh, March 2026.
            </figcaption>
          </figure>
        </Reveal>
        <Reveal className="mt-8">
          <Link
            href="/#board"
            className="group inline-flex items-center gap-1.5 text-base font-semibold text-rouge"
          >
            Meet each board member
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </section>

      {/* Institutional partners */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHeading
            eyebrow="Institutional support"
            title="Our institutional partners"
            intro="We work hand in hand with the French institutions present in Cambodia."
          />
          <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
            {institutionalPartners.map((p, i) => (
              <Reveal key={p.name} delay={i * 80} className="h-full">
                <a
                  href={p.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col bg-paper p-7 transition-colors hover:bg-mist"
                >
                  {p.logo && (
                    <div className="flex h-20 items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.logo}
                        alt={p.name}
                        className={`w-auto max-w-[80%] object-contain ${
                          i === 0 ? "max-h-16" : "max-h-20"
                        }`}
                      />
                    </div>
                  )}
                  <h3 className="display mt-5 text-lg text-ink">{p.name}</h3>
                  <p className="mt-2 text-sm text-ink-soft/80">
                    {p.organization}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              href="/contact"
              className="display inline-flex items-center gap-2 bg-rouge px-7 py-4 text-sm text-white transition-colors hover:bg-bleu"
            >
              Join the community
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
