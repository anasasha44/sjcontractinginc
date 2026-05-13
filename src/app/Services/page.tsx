import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Landscaping Services Windsor Ontario | AQUAVIOR Services",

  description:
    "AQUAVIOR Landscaping & Irrigation provides professional landscaping services in Windsor Ontario including lawn care, sod installation, irrigation systems, interlock, garden design, grading, drainage and snow removal across Windsor, LaSalle, Tecumseh and Essex County.",

  keywords: [
    "landscaping services Windsor Ontario",
    "AQUAVIOR landscaping services",
    "lawn care Windsor ON",
    "sod installation Windsor",
    "irrigation system Windsor Ontario",
    "sprinkler system Windsor",
    "interlocking Windsor Ontario",
    "garden design Windsor",
    "grading and drainage Windsor",
    "snow removal Windsor Ontario",
    "landscape maintenance Windsor",
    "hardscape Windsor ON",
    "retaining walls Windsor",
    "landscaping LaSalle Ontario",
    "lawn care Tecumseh ON",
    "Essex County landscaping services",
  ],

  alternates: {
    canonical: "https://www.aquavior.com/Services",
  },

  openGraph: {
    title: "Landscaping Services Windsor Ontario | AQUAVIOR",
    description:
      "Professional lawn care, sod installation, irrigation systems, interlock, garden design, grading, drainage and snow removal services in Windsor Ontario and Essex County.",
    url: "https://www.aquavior.com/Services",
    siteName: "AQUAVIOR Landscaping & Irrigation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AQUAVIOR landscaping and irrigation services in Windsor Ontario",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AQUAVIOR Landscaping Services | Windsor Ontario",
    description:
      "Landscaping, irrigation, lawn care, sod, interlock and snow removal services in Windsor Ontario.",
    images: ["/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}