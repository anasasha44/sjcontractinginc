import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title:
    "Contact SJ Contracting Inc | Get a Free Quote in Windsor, Ontario",

  description:
    "Contact SJ Contracting Inc for a free quote on contracting, landscaping, and mobile mechanical services in Windsor, Ontario. We provide reliable residential and commercial solutions throughout Windsor and surrounding areas.",

  keywords: [
    "SJ Contracting Inc contact",
    "contractor Windsor Ontario",
    "free contractor quote Windsor",
    "landscaping quote Windsor",
    "mobile mechanical Windsor",
    "general contractor Windsor",
    "commercial contractor Windsor",
    "residential contractor Windsor",
    "contact SJ Contracting Inc",
    "Windsor Ontario contractor",
  ],

  alternates: {
    canonical: "https://sjcontractinginc.com/Contact",
  },

  openGraph: {
    title:
      "Contact SJ Contracting Inc | Free Quote for Contracting, Landscaping & Mobile Mechanical",

    description:
      "Request a free quote from SJ Contracting Inc for professional contracting, landscaping, and mobile mechanical services in Windsor, Ontario.",

    url: "https://sjcontractinginc.com/Contact",

    siteName: "SJ Contracting Inc",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact SJ Contracting Inc",
      },
    ],

    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact SJ Contracting Inc | Free Quote",

    description:
      "Get in touch with SJ Contracting Inc for professional contracting, landscaping, and mobile mechanical services in Windsor, Ontario.",

    images: ["/og-image.jpg"],
  },
};
export default function ContactPage() {
  return <ContactClient />;
}