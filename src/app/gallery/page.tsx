import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title:
    "Project Gallery | SJ Contracting Inc | Contracting, Landscaping & Mobile Mechanical",

  description:
    "Explore the SJ Contracting Inc project gallery featuring contracting, landscaping, and mobile mechanical work completed throughout Windsor, Ontario. Discover our quality craftsmanship for residential and commercial projects.",

  keywords: [
    "SJ Contracting Inc gallery",
    "contracting projects Windsor Ontario",
    "landscaping portfolio Windsor",
    "mobile mechanical services Windsor",
    "construction portfolio Windsor",
    "landscape projects Windsor Ontario",
    "residential contractor Windsor",
    "commercial contractor Windsor",
    "our work Windsor Ontario",
    "project gallery Windsor",
    "Essex County contractor",
  ],

  alternates: {
    canonical: "https://sjcontractinginc.com/gallery",
  },

  openGraph: {
    title:
      "Project Gallery | SJ Contracting Inc",

    description:
      "Browse completed contracting, landscaping, and mobile mechanical projects by SJ Contracting Inc across Windsor and Essex County, Ontario.",

    url: "https://sjcontractinginc.com/gallery",

    siteName: "SJ Contracting Inc",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SJ Contracting Inc Project Gallery",
      },
    ],

    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Project Gallery | SJ Contracting Inc",

    description:
      "View completed contracting, landscaping, and mobile mechanical projects by SJ Contracting Inc in Windsor, Ontario.",

    images: ["/og-image.jpg"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}