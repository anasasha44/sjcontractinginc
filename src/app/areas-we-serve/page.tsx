import type { Metadata } from "next";
import AreasClient from "./Areasclient";

export const metadata: Metadata = {
  title:
    "Areas We Serve | SJ Contracting Inc | Windsor, Ontario & Essex County",

  description:
    "SJ Contracting Inc proudly provides contracting, landscaping, and mobile mechanical services throughout Windsor, Ontario, including LaSalle, Tecumseh, Amherstburg, Kingsville, Lakeshore, Leamington, and Essex County.",

  keywords: [
    "SJ Contracting Inc",
    "Windsor contractor",
    "contracting Windsor Ontario",
    "landscaping Windsor Ontario",
    "mobile mechanical Windsor",
    "LaSalle contractor",
    "Tecumseh contractor",
    "Amherstburg contractor",
    "Kingsville contractor",
    "Lakeshore contractor",
    "Leamington contractor",
    "Essex County contractor",
    "contractor near me Windsor",
  ],

  alternates: {
    canonical: "https://sjcontractinginc.com/areas-we-serve",
  },

  openGraph: {
    title:
      "Areas We Serve | SJ Contracting Inc | Windsor & Essex County",

    description:
      "Serving Windsor, LaSalle, Tecumseh, Amherstburg, Kingsville, Lakeshore, Leamington, and Essex County with professional contracting, landscaping, and mobile mechanical services.",

    url: "https://sjcontractinginc.com/areas-we-serve",

    siteName: "SJ Contracting Inc",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SJ Contracting Inc serving Windsor and Essex County",
      },
    ],

    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Areas We Serve | SJ Contracting Inc",

    description:
      "Professional contracting, landscaping, and mobile mechanical services across Windsor and Essex County, Ontario.",

    images: ["/og-image.jpg"],
  },
};

export default function AreasWeServePage() {
  return <AreasClient />;
}