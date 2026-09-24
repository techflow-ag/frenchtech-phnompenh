import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { MembersDirectory } from "@/components/MembersDirectory";
import { getDirectoryMembers } from "@/lib/members";

export const metadata: Metadata = {
  title: "Members",
  description:
    "The people behind La French Tech Phnom Penh: founders, operators, investors and institutions building the French-Cambodian tech ecosystem.",
};

/** The list comes from the CRM, so refresh it hourly rather than at build. */
export const revalidate = 3600;

export default async function MembersPage() {
  const members = await getDirectoryMembers();

  return (
    <>
      <PageHero
        eyebrow="The community"
        title="Members list"
        khmer="សមាជិក"
        intro="Founders, operators, investors and institutions. Membership is free and open to everyone, whatever your nationality and whether or not you speak French."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <MembersDirectory members={members} />

        <div className="mt-20 border-t border-line pt-10">
          <h2 className="display text-2xl text-ink">Not on this page yet?</h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-soft/80">
            Membership is free for individuals and startups. Tell us a bit about
            yourself and we will come back to you within a few days.
          </p>
          <Link
            href="/contact"
            className="display mt-6 inline-flex items-center gap-2 bg-rouge px-7 py-4 text-sm text-white transition-colors hover:bg-bleu"
          >
            Join as a member
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
