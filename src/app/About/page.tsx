import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About AQUAVIOR | Landscaping Company Windsor Ontario",
  description:
    "Learn about AQUAVIOR Landscaping & Irrigation, a trusted landscaping company in Windsor Ontario offering lawn care, sod installation, interlock, garden design, drainage and irrigation services across Windsor, LaSalle, Tecumseh and Essex County.",

  keywords: [
    "AQUAVIOR Landscaping",
    "Aquavior Landscaping & Irrigation",
    "landscaping company Windsor Ontario",
    "local landscaper Windsor ON",
    "Windsor Ontario lawn care company",
    "irrigation company Windsor Ontario",
    "landscape contractor Essex County",
    "professional landscaping Windsor",
    "locally owned landscaping Windsor",
  ],

  alternates: {
    canonical: "https://www.aquavior.com/about",
  },

  openGraph: {
    title: "About AQUAVIOR Landscaping & Irrigation | Windsor Ontario",
    description:
      "AQUAVIOR is a trusted Windsor landscaping and irrigation company serving Windsor, LaSalle, Tecumseh, Amherstburg and Essex County Ontario.",
    url: "https://www.aquavior.com/about",
    siteName: "AQUAVIOR Landscaping & Irrigation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AQUAVIOR Landscaping and Irrigation company in Windsor Ontario",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About AQUAVIOR | Landscaping Company Windsor Ontario",
    description:
      "Trusted landscaping and irrigation services in Windsor, LaSalle, Tecumseh and Essex County Ontario.",
    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}