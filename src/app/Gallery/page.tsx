import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
 
export const metadata: Metadata = {
  title: "Landscaping Portfolio Windsor Ontario | Our Work Gallery",
  description:
    "Browse our landscaping portfolio in Windsor Ontario. See real sod installation, interlocking, garden design, lawn care, and drainage projects completed across Windsor, LaSalle, Tecumseh & Essex County.",
  keywords: [
    "landscaping portfolio Windsor Ontario",
    "landscaping gallery Windsor ON",
    "sod installation before after Windsor",
    "interlocking driveway Windsor Ontario",
    "lawn care results Windsor",
    "landscape design portfolio Essex County",
    "our work Windsor landscaping",
    "backyard landscaping Windsor Ontario",
    "front yard landscaping Windsor",
  ],
  alternates: { canonical: "https://yourwebsite.com/gallery" },
  openGraph: {
    title: "Landscaping Portfolio Windsor Ontario | Our Work Gallery",
    description:
      "Real landscaping projects in Windsor ON. Sod, interlock, garden design & drainage work across Windsor, LaSalle, Tecumseh & Essex County.",
    url: "https://yourwebsite.com/gallery",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};
 
export default function GalleryPage() {
  return <GalleryClient />;
}