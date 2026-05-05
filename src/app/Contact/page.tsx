import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact AQUAVIOR | Free Landscaping Quote Windsor Ontario",

  description:
    "Contact AQUAVIOR Landscaping & Irrigation for a free landscaping quote in Windsor Ontario. We provide lawn care, sod installation, interlock, garden design, irrigation systems and snow removal across Windsor, LaSalle, Tecumseh and Essex County.",

  keywords: [
    "landscaping quote Windsor Ontario",
    "free estimate landscaping Windsor",
    "contact landscaper Windsor ON",
    "lawn care quote Windsor",
    "irrigation quote Windsor Ontario",
    "landscape contractor Windsor Ontario",
    "free landscaping estimate Essex County",
    "Windsor Ontario landscaping contact",
  ],

  alternates: {
    canonical: "https://www.aquavior.com/Contact",
  },

  openGraph: {
    title: "Contact AQUAVIOR | Free Landscaping Quote Windsor Ontario",
    description:
      "Get a free quote from AQUAVIOR for landscaping, irrigation, lawn care, sod, interlock and snow removal in Windsor Ontario and Essex County.",
    url: "https://www.aquavior.com/Contact",
    siteName: "AQUAVIOR Landscaping & Irrigation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact AQUAVIOR Landscaping and Irrigation in Windsor Ontario",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact AQUAVIOR | Free Landscaping Quote Windsor",
    description:
      "Request a free landscaping and irrigation quote in Windsor Ontario.",
    images: ["/og-image.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}