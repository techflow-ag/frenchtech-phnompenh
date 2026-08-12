import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MemberDirectory } from "@/components/MemberDirectory";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { LogoWall } from "@/components/LogoWall";
import { FinalCTA } from "@/components/FinalCTA";
import { Reveal } from "@/components/Reveal";
import { ecosystemPartners } from "@/data/ecosystem";

export const metadata: Metadata = {
  title: "Community",
  description:
    "The startups, companies, and organizations of La French Tech Phnom Penh — fintech, foodtech, AI, cybersecurity, e-commerce, and more.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="The members"
        khmer="សហគមន៍"
        intro="60+ startups, companies, and organizations make up the community — from fintech and foodtech to AI, cybersecurity, logistics, and investment."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <MemberDirectory />
      </section>

      {/* Full ecosystem logo wall */}
      <section className="border-t border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionHeading
            eyebrow="Our ecosystem"
            title="Members, partners & supporters"
            intro="A multi-sector community spanning fintech, AI, proptech, edtech, cybersecurity, e-commerce, robotics, agritech and media — with the institutions that back it."
            align="center"
          />
          <div className="mt-12">
            <LogoWall logos={ecosystemPartners} />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Not on the list?"
              title="Get your startup listed"
              intro="Membership is free for startups. Being listed connects you to the community, its events, and the global French Tech network."
            />
            <Reveal delay={120}>
              <Link
                href="/contact#join"
                className="display inline-flex shrink-0 items-center gap-2 bg-rouge px-7 py-4 text-sm text-white transition-colors hover:bg-bleu"
              >
                Apply to join
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
