import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { upcomingEvents, pastEvents } from "@/data/events";
import { EventCard } from "@/components/EventCard";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events of La French Tech Phnom Penh: French Tech Connect networking nights, workshops, and panels. Free and open to all.",
};

export default function EventsPage() {
  const upcoming = upcomingEvents();
  const past = pastEvents();

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Meet the community"
        khmer="ព្រឹត្តិការណ៍"
        intro="From our monthly French Tech Connect networking nights to hands-on workshops and panels — our events are free, in English, and open to everyone."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <SectionHeading eyebrow="Coming up" title="Upcoming events" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {upcoming.length > 0 ? (
            upcoming.map((e) => (
              <Reveal key={e.slug}>
                <EventCard event={e} />
              </Reveal>
            ))
          ) : (
            <Reveal>
              <div className="border border-line p-8">
                <p className="text-sm text-ink-soft/80">
                  The next event isn&apos;t announced yet. Subscribe to the
                  newsletter or follow us on LinkedIn to be the first to know.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <SectionHeading
            eyebrow="Archive"
            title="Past events"
            intro="A look back at what the community has been up to."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {past.map((e) => (
              <Reveal key={e.slug}>
                <EventCard event={e} past />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="display text-2xl">Want to host or speak?</h2>
            <p className="mt-2 max-w-xl text-sm text-white/70">
              We&apos;re always looking for venues, speakers, and event
              partners. If you have a space, a story, or a topic — talk to us.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              href="/contact"
              className="display inline-flex items-center gap-2 bg-rouge px-7 py-4 text-sm text-white transition-colors hover:bg-white hover:text-ink"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
