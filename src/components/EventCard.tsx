import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { EventItem } from "@/lib/types";

function formatDate(iso: string) {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString("en-GB", { day: "2-digit", timeZone: "Asia/Phnom_Penh" }),
    month: d.toLocaleDateString("en-GB", { month: "short", timeZone: "Asia/Phnom_Penh" }),
    year: d.toLocaleDateString("en-GB", { year: "numeric", timeZone: "Asia/Phnom_Penh" }),
    time: d.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Phnom_Penh",
    }),
  };
}

export function EventCard({
  event,
  past = false,
}: {
  event: EventItem;
  past?: boolean;
}) {
  const d = formatDate(event.date);
  return (
    <article
      className={`group flex gap-6 border border-line bg-paper p-6 transition-colors ${
        past ? "" : "hover:border-rouge"
      }`}
    >
      <div className="flex shrink-0 flex-col items-center self-start border-r border-line pr-6">
        <span className={`display text-3xl ${past ? "text-ink/40" : "text-rouge"}`}>
          {d.day}
        </span>
        <span className="display mt-1 text-xs text-ink/60">{d.month}</span>
        <span className="text-[0.65rem] text-ink/40">{d.year}</span>
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap gap-2">
          {event.tags.map((t) => (
            <span
              key={t}
              className="border border-line px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wider text-ink/60"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="display mt-3 text-lg text-ink md:text-xl">{event.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft/80">
          {event.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink/60">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {event.venue}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {d.time}
            {event.endTime ? ` – ${event.endTime}` : ""}
          </span>
        </div>
        {!past && event.registrationUrl && (
          <a
            href={event.registrationUrl}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-rouge transition-colors hover:text-bleu"
          >
            Register
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
