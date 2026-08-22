import type { MetadataRoute } from "next";
import { listArticleSlugs } from "@/lib/articles";
import { getEventSlugs } from "@/lib/events";

const base = "https://lafrenchtech-cambodge.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/events", priority: 0.8, changeFrequency: "weekly" },
    { path: "/community", priority: 0.7, changeFrequency: "monthly" },
    { path: "/partners", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/events/register", priority: 0.6, changeFrequency: "monthly" },
  ];

  const [articles, events] = await Promise.all([
    listArticleSlugs(),
    getEventSlugs(),
  ]);

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r.path}`,
      lastModified: new Date(),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...articles.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...events.map((slug) => ({
      url: `${base}/events/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
