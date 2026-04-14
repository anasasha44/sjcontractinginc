import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
 
export const metadata: Metadata = {
  title: "Landscaping Services Windsor Ontario | Lawn Care, Sod, Interlock & More",
  description:
    "Expert landscaping services in Windsor ON — lawn care, sod installation, interlocking, garden design, grading, drainage & snow removal. Serving Windsor, LaSalle, Tecumseh & Essex County. Free quotes!",
  keywords: [
    "landscaping services Windsor Ontario",
    "lawn care Windsor ON",
    "sod installation Windsor",
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
  alternates: { canonical: "https://yourwebsite.com/services" },
  openGraph: {
    title: "Landscaping Services Windsor Ontario | Full-Service Outdoor Solutions",
    description:
      "Professional landscaping in Windsor ON. Lawn care, sod, interlock, garden design, grading & snow removal. Serving Windsor, LaSalle & Essex County.",
    url: "https://yourwebsite.com/services",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};
 
export default function ServicesPage() {
  return <ServicesClient />;
}