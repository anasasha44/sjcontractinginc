import type { Metadata } from "next";
import AreasClient from "./Areasclient";

export const metadata: Metadata = {
  title: "Landscaping Service Areas Windsor Ontario | LaSalle, Tecumseh & Essex County",
  description:
    "We provide professional landscaping services across Windsor Ontario and surrounding areas including LaSalle, Tecumseh, Amherstburg, Kingsville & Essex County. Call for a free quote!",
  keywords: [
    "landscaping Windsor Ontario service area",
    "LaSalle landscaping",
    "Tecumseh lawn care",
    "Amherstburg landscaping",
    "Kingsville lawn care",
    "Essex County landscaping",
    "Lakeshore Ontario landscaping",
    "Leamington landscaping",
    "Windsor area landscaper",
    "lawn care near me Windsor ON",
  ],
  alternates: { canonical: "https://yourwebsite.com/areas-we-serve" },
  openGraph: {
    title: "Areas We Serve | Landscaping Windsor Ontario & Essex County",
    description:
      "Professional landscaping across Windsor, LaSalle, Tecumseh, Amherstburg & Essex County Ontario. Local experts serving your community.",
    url: "https://yourwebsite.com/areas-we-serve",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function AreasWeServePage() {
  return <AreasClient />;
}