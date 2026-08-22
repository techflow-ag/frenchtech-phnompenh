import type { MetadataRoute } from "next";

const base = "https://lafrenchtech-cambodge.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/keystatic", "/api/", "/variations/"],
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
