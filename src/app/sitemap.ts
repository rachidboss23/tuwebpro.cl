import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.tuwebpro.cl",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.tuwebpro.cl/privacidad",
      lastModified: new Date("2026-10-18"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
