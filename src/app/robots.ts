import type { MetadataRoute } from "next";

const SITE_URL = "https://www.aquavior.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",

        allow: "/",

        disallow: [
          "/api/",
          "/dashboard/",
          "/admin/",
          "/private/",
          "/tmp/",
          "/_next/",
          "/search/",
          "/*?*",
        ],
      },

      // Extra optimization for AI/large crawlers
      {
        userAgent: [
          "GPTBot",
          "Google-Extended",
          "CCBot",
          "anthropic-ai",
        ],

        allow: "/",
      },
    ],

    sitemap: [
      `${SITE_URL}/sitemap.xml`,
    ],

    host: SITE_URL,
  };
}