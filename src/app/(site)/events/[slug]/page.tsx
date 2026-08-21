import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { getEventBySlug, getEventSlugs } from "@/lib/events";
import { Reveal } from "@/components/Reveal";

export async function generateStaticParams() {
  return (await getEventSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/events/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const e = await getEventBySlug(slug);
  if (!e) return {};
  return {
    title: e.title,
    description: e.description,
    openGraph: {
      title: e.title,
      description: e.description,
      images: e.image ? [e.image] : undefined,
    },
  };
}

function dateRange(start: string, end?: string) {
  const s = new Date(start);
  const opts: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Phnom_Penh",
  };
  if (!end) return s.toLocaleDateString("en-GB", opts);
  const e = new Date(end);
  return `${s.toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "Asia/Phnom_Penh" })} – ${e.toLocaleDateString("en-GB", opts)}`;
}

export default async function EventPage({ params }: PageProps<"/events/[slug]">) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) notFound();

  const isUpcoming = new Date(event.endDate ?? event.date) >= new Date();

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 pt-12 md:pt-16">
        <Reveal>
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-rouge hover:text-bleu"
          >
            <ArrowLeft className="h-4 w-4" />
            All events
          </Link>
        </Reveal>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-10 md:grid-cols-[3fr_1fr] md:py-14">
        {/* Content */}
        <div>
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((t) => (
                <span
                  key={t}
                  className="border border-line px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-ink/60"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="display mt-4 text-4xl leading-tight text-ink md:text-5xl">
              {event.title}
            </h1>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft/80">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-rouge" />
                {dateRange(event.date, event.endDate)}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-rouge" />
                {event.venue}
              </span>
            </div>
          </Reveal>

          {event.image && (
            <Reveal className="mt-8">
              <div className="overflow-hidden rounded-2xl border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full object-cover"
                />
              </div>
            </Reveal>
          )}

          {event.stats && (
            <Reveal className="mt-8">
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                {event.stats.map((s) => (
                  <div key={s.label} className="bg-paper p-5 text-center">
                    <p className="display text-2xl text-rouge md:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-ink/60">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          )}

          <div className="mt-8 space-y-5">
            {(event.longDescription ?? [event.description]).map((p, i) => (
              <Reveal key={i}>
                <p className="text-lg leading-relaxed text-ink-soft/90">{p}</p>
              </Reveal>
            ))}
          </div>

          {event.agenda && (
            <Reveal className="mt-12">
              <h2 className="display text-2xl text-ink">Programme</h2>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {event.agenda.map((a) => (
                  <li key={a.title} className="grid grid-cols-[130px_1fr] gap-4 py-5">
                    <span className="text-sm font-semibold text-rouge">
                      {a.when}
                    </span>
                    <div>
                      <p className="display text-base text-ink">{a.title}</p>
                      {a.detail && (
                        <p className="mt-1 text-sm leading-relaxed text-ink-soft/80">
                          {a.detail}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>

        {/* Sticky CTA */}
        <aside className="md:relative">
          <div className="md:sticky md:top-24">
            <div className="rounded-2xl border border-line bg-paper p-7 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.4)]">
              <p className="eyebrow">
                {isUpcoming ? "Join us" : "Past event"}
              </p>
              <h2 className="display mt-2 text-2xl text-ink">
                {isUpcoming
                  ? "Register your interest"
                  : "Relive the moment"}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft/80">
                {isUpcoming
                  ? "Tell us which events you'd like to attend during the week. Startups, investors and partners are all welcome."
                  : "This event has passed. Follow us to be part of the next ones."}
              </p>
              {isUpcoming ? (
                <Link
                  href={`/events/register?event=${event.slug}`}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-rouge px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-bleu"
                >
                  Register for this event
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <Link
                  href="/events"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rouge"
                >
                  See upcoming events
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              <div className="mt-6 space-y-2 border-t border-line pt-6 text-sm text-ink-soft/80">
                <p className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-rouge" />
                  {dateRange(event.date, event.endDate)}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-rouge" />
                  {event.city}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
