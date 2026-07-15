import type { MetadataRoute } from "next";

const SITE_URL = "https://www.aquavior.com";

// Main static routes
const routes = [
  {
    path: "",
    priority: 1,
    changeFrequency: "daily" as const,
  },

  {
    path: "/About",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },

  {
    path: "/service",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },

  {
    path: "/Contact",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },

  {
    path: "/gallery",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },

  {
    path: "/areas-we-serve",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,

    lastModified: new Date(),

    changeFrequency: route.changeFrequency,

    priority: route.priority,
  }));
}