import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.tuwebpro.cl",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
