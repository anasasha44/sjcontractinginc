import type { Metadata } from "next";
import AreasClient from "./Areasclient";

export const metadata: Metadata = {
  title:
    "Landscaping Service Areas Windsor Ontario | AQUAVIOR Landscaping",

  description:
    "AQUAVIOR Landscaping & Irrigation provides professional landscaping, lawn care, irrigation systems and snow removal across Windsor Ontario, LaSalle, Tecumseh, Amherstburg, Kingsville, Lakeshore, Leamington and Essex County.",

  keywords: [
    "landscaping Windsor Ontario",
    "Windsor landscaping service areas",
    "LaSalle landscaping",
    "Tecumseh lawn care",
    "Amherstburg landscaping",
    "Kingsville lawn care",
    "Lakeshore Ontario landscaping",
    "Leamington landscaping",
    "Essex County landscaping",
    "landscaper near me Windsor ON",
  ],

  alternates: {
    canonical: "https://www.aquavior.com/areas-we-serve",
  },

  openGraph: {
    title:
      "Areas We Serve | AQUAVIOR Landscaping Windsor Ontario & Essex County",

    description:
      "Serving Windsor, LaSalle, Tecumseh, Amherstburg, Kingsville, Lakeshore, Leamington and Essex County with professional landscaping and irrigation services.",

    url: "https://www.aquavior.com/areas-we-serve",
    siteName: "AQUAVIOR Landscaping & Irrigation",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Landscaping services across Windsor Ontario and Essex County",
      },
    ],

    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Landscaping Areas We Serve | AQUAVIOR Windsor Ontario",
    description:
      "Professional landscaping services across Windsor and Essex County Ontario.",
    images: ["/og-image.jpg"],
  },
};

export default function AreasWeServePage() {
  return <AreasClient />;
}