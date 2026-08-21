import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import { EventItem } from "@/lib/types";

const reader = createReader(process.cwd(), keystaticConfig);

function toEvent(slug: string, entry: Record<string, unknown>): EventItem {
  const e = entry as {
    title: string;
    featured?: boolean;
    date: string;
    endDate?: string;
    endTime?: string;
    venue: string;
    city: string;
    description: string;
    image?: string;
    registrationUrl?: string;
    tags: readonly string[];
    longDescription: readonly string[];
    stats: readonly { value: string; label: string }[];
    agenda: readonly { when: string; title: string; detail?: string }[];
  };
  return {
    slug,
    title: e.title,
    date: e.date,
    endDate: e.endDate || undefined,
    endTime: e.endTime || undefined,
    venue: e.venue,
    city: e.city,
    description: e.description,
    image: e.image || undefined,
    registrationUrl: e.registrationUrl || undefined,
    tags: [...e.tags],
    featured: e.featured,
    longDescription: e.longDescription.length ? [...e.longDescription] : undefined,
    stats: e.stats.length ? e.stats.map((s) => ({ ...s })) : undefined,
    agenda: e.agenda.length
      ? e.agenda.map((a) => ({ when: a.when, title: a.title, detail: a.detail || undefined }))
      : undefined,
  };
}

async function allEvents(): Promise<EventItem[]> {
  const all = await reader.collections.events.all();
  return all
    .filter(({ entry }) => (entry as { status?: string }).status !== "draft")
    .map(({ slug, entry }) => toEvent(slug, entry as Record<string, unknown>));
}

export async function getUpcomingEvents(): Promise<EventItem[]> {
  const now = Date.now();
  return (await allEvents())
    .filter((e) => new Date(e.endDate ?? e.date).getTime() >= now)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export async function getPastEvents(): Promise<EventItem[]> {
  const now = Date.now();
  return (await allEvents())
    .filter((e) => new Date(e.endDate ?? e.date).getTime() < now)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getEventBySlug(slug: string): Promise<EventItem | null> {
  const entry = await reader.collections.events.read(slug);
  if (!entry || (entry as { status?: string }).status === "draft") return null;
  return toEvent(slug, entry as Record<string, unknown>);
}

export async function getEventSlugs(): Promise<string[]> {
  const all = await reader.collections.events.all();
  return all
    .filter(({ entry }) => (entry as { status?: string }).status !== "draft")
    .map(({ slug }) => slug);
}
