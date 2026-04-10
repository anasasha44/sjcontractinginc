import type { Metadata } from "next";
import ContactClient from "./ContactClient";
 
export const metadata: Metadata = {
  title: "Contact Us | Free Landscaping Quote — Windsor Ontario",
  description:
    "Contact Windsor's trusted landscaping company for a free estimate. Lawn care, sod, interlocking, garden design & snow removal in Windsor, LaSalle, Tecumseh & Essex County ON.",
  keywords: [
    "landscaping quote Windsor Ontario",
    "free estimate landscaping Windsor",
    "contact landscaper Windsor ON",
    "lawn care quote Windsor",
    "landscape contractor Windsor Ontario",
    "free landscaping estimate Essex County",
    "Windsor Ontario landscaping contact",
  ],
  alternates: { canonical: "https://yourwebsite.com/contact" },
  openGraph: {
    title: "Contact Us | Free Landscaping Quote — Windsor Ontario",
    description:
      "Get a free quote for landscaping in Windsor ON. Lawn care, sod, interlock & more. Serving Windsor, LaSalle, Tecumseh & Essex County.",
    url: "https://yourwebsite.com/contact",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};
 
export default function ContactPage() {
  return <ContactClient />;
}