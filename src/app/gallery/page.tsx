import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Landscaping Portfolio Windsor Ontario | AQUAVIOR Gallery",

  description:
    "Browse AQUAVIOR Landscaping & Irrigation's project gallery in Windsor Ontario. See real lawn care, sod installation, interlock, garden design, drainage, irrigation and landscaping projects across Windsor, LaSalle, Tecumseh and Essex County.",

  keywords: [
    "landscaping portfolio Windsor Ontario",
    "AQUAVIOR landscaping gallery",
    "landscaping gallery Windsor ON",
    "sod installation before after Windsor",
    "interlocking driveway Windsor Ontario",
    "irrigation project Windsor Ontario",
    "lawn care results Windsor",
    "landscape design portfolio Essex County",
    "our work Windsor landscaping",
    "backyard landscaping Windsor Ontario",
    "front yard landscaping Windsor",
  ],

  alternates: {
    canonical: "https://www.aquavior.com/Gallery",
  },

  openGraph: {
    title: "Landscaping Portfolio Windsor Ontario | AQUAVIOR Gallery",
    description:
      "View real landscaping, irrigation, sod, interlock, garden design and drainage projects completed by AQUAVIOR across Windsor and Essex County Ontario.",
    url: "https://www.aquavior.com/Gallery",
    siteName: "AQUAVIOR Landscaping & Irrigation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AQUAVIOR landscaping portfolio in Windsor Ontario",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AQUAVIOR Landscaping Portfolio | Windsor Ontario",
    description:
      "Explore real landscaping and irrigation projects completed in Windsor and Essex County Ontario.",
    images: ["/og-image.jpg"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}