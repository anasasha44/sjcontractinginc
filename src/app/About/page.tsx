import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title:
    "About SJ Contracting Inc | Contracting, Landscaping & Mobile Mechanical Services",

  description:
    "Learn about SJ Contracting Inc, a trusted company providing professional contracting, landscaping, and mobile mechanical services in Windsor, Ontario. We deliver reliable residential and commercial solutions across Windsor and surrounding areas.",

  keywords: [
    "SJ Contracting Inc",
    "about SJ Contracting Inc",
    "contracting company Windsor Ontario",
    "general contractor Windsor",
    "landscaping company Windsor",
    "mobile mechanical services Windsor",
    "residential contractor Windsor",
    "commercial contractor Windsor",
    "Windsor Ontario contractor",
    "Essex County contractor",
  ],

  alternates: {
    canonical: "https://sjcontractinginc.com/About",
  },

  openGraph: {
    title:
      "About SJ Contracting Inc | Contracting, Landscaping & Mobile Mechanical",

    description:
      "SJ Contracting Inc provides trusted contracting, landscaping, and mobile mechanical services throughout Windsor, Ontario and surrounding communities.",

    url: "https://sjcontractinginc.com/About",
    siteName: "SJ Contracting Inc",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SJ Contracting Inc - Contracting, Landscaping & Mobile Mechanical Services",
      },
    ],

    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About SJ Contracting Inc | Contracting, Landscaping & Mobile Mechanical",

    description:
      "Learn more about SJ Contracting Inc and our professional contracting, landscaping, and mobile mechanical services in Windsor, Ontario.",

    images: ["/og-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}