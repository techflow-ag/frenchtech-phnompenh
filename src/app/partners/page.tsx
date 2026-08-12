import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sponsors, partnershipExamples } from "@/data/partners";
import { cambodiaLogos } from "@/data/ecosystem";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { LogoWall } from "@/components/LogoWall";
import { Reveal } from "@/components/Reveal";

import { FinalCTA } from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Partners & Sponsors",
  description:
    "The institutions, corporates, and sponsors supporting La French Tech Phnom Penh — and how to become one of them.",
};

const tierLabels: Record<string, string> = {
  institutional: "Institutional partners",
  platinum: "Platinum sponsors",
  gold: "Gold sponsors",
  partner: "Partners",
};

export default function PartnersPage() {
  const tiers = ["institutional", "platinum", "gold", "partner"] as const;

  return (
    <>
      <PageHero
        eyebrow="Partners & sponsors"
        title="They support the community"
        khmer="ដៃគូ"
        intro="Institutions, corporates, and sponsors make our events and programs possible — and get privileged access to the France–Cambodia tech ecosystem in return."
      />

      {tiers.map((tier) => {
        const list = sponsors.filter((s) => s.tier === tier);
        if (list.length === 0) return null;
        return (
          <section key={tier} className="mx-auto max-w-6xl px-5 py-16">
            <SectionHeading eyebrow="Our supporters" title={tierLabels[tier]} />
            <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
              {list.map((s, i) => (
                <Reveal key={s.name} delay={i * 80}>
                  <div className="flex h-full flex-col bg-paper p-7">
                    {s.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={s.logo}
                        alt={`${s.name} logo`}
                        className="h-12 w-auto self-start object-contain"
                      />
                    ) : (
                      <h3 className="display text-lg text-ink">{s.name}</h3>
                    )}
                    {s.description && (
                      <p className="mt-3 flex-1 text-base leading-relaxed text-ink-soft/80">
                        {s.description}
                      </p>
                    )}
                    {s.website && (
                      <a
                        href={s.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-xs font-semibold text-bleu hover:text-rouge"
                      >
                        Visit website
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      {/* Cambodia logo wall */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <SectionHeading
            eyebrow="The ecosystem"
            title="French companies already in Cambodia"
            intro="Energy, banking, retail, telecoms — French business is woven into the Kingdom's economy. Our members are the startups writing its next chapter."
            align="center"
          />
          <div className="mt-12">
            <LogoWall logos={cambodiaLogos} />
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section
        id="become-a-partner"
        className="scroll-mt-20 border-t border-line bg-ink text-white"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <SectionHeading
            eyebrow="Become a partner"
            title="Why partner with us"
            intro="Concrete ways corporates, institutions, and funds work with the community — especially in the lead-up to the Francophonie Summit in Phnom Penh, November 2026."
            dark
          />
          <div className="mt-12 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-2">
            {partnershipExamples.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full bg-ink p-8">
                  <h3 className="display text-lg text-white">{p.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/60">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link
              href="/contact"
              className="display inline-flex items-center gap-2 bg-rouge px-7 py-4 text-sm text-white transition-colors hover:bg-white hover:text-ink"
            >
              Talk to the board
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
