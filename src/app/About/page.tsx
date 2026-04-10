import type { Metadata } from "next";
import AboutClient from "./AboutClient";
 
export const metadata: Metadata = {
  title: "About Us | Landscaping Company Windsor Ontario",
  description:
    "Learn about Windsor Ontario's trusted landscaping team. Expert lawn care, sod, interlock, garden design & drainage services. Locally owned, serving Windsor, LaSalle, Tecumseh & Essex County.",
  keywords: [
    "landscaping company Windsor Ontario",
    "local landscaper Windsor ON",
    "Windsor Ontario lawn care company",
    "landscape contractor Essex County",
    "professional landscaping Windsor",
    "locally owned landscaping Windsor",
  ],
  alternates: { canonical: "https://yourwebsite.com/about" },
  openGraph: {
    title: "About Our Landscaping Company | Windsor Ontario",
    description:
      "Windsor's trusted landscaping experts. Locally owned and serving Windsor, LaSalle, Tecumseh & Essex County with professional outdoor services.",
    url: "https://yourwebsite.com/about",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};
 
export default function AboutPage() {
  return <AboutClient />;
}
 