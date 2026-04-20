import "./globals.css";
import ClientLayout from "./ClientLayout";
import Navbar from "../app/Component/layout/Navbar";
import Footer from "../app/Component/layout/Footer";
import FloatingContactButton from "../app/Component/ui/FloatingContactButton";
import { Unbounded, Sora } from "next/font/google";
import type { Metadata, Viewport } from "next";
import PrivacyConsentBar from "./Component/ui/PrivacyConsentBar";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// ✅ هون الحل الصحيح بدل metadata
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yourwebsite.com"),
  title: {
    default: "Landscaping Windsor Ontario | Lawn Care & Landscape Design",
    template: "%s | Your Company Landscaping Windsor",
  },
  description:
    "Windsor's top-rated landscaping company. Professional lawn care, sod installation, garden design, interlock, snow removal & more. Serving Windsor, LaSalle, Tecumseh & Essex County. Free quotes!",

  // ✅ icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // ✅ manifest
  manifest: "/site.webmanifest",

  keywords: [
    "landscaping Windsor Ontario",
    "landscaping Windsor Canada",
    "lawn care Windsor ON",
    "landscape design Windsor",
    "sod installation Windsor",
    "interlocking Windsor",
    "snow removal Windsor",
    "garden design Windsor Ontario",
    "landscaper near me Windsor",
    "residential landscaping Windsor",
    "commercial landscaping Windsor",
    "lawn maintenance Windsor",
    "LaSalle landscaping",
    "Tecumseh lawn care",
    "Essex County landscaping",
  ],
  authors: [{ name: "AQUAVIOR  Landscaping • irrigation system" }],
  creator: "AQUAVIOR  Landscaping • irrigation system",
  publisher: "AQUAVIOR  Landscaping • irrigation system",
  formatDetection: { telephone: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://aquavior.com",
    siteName: "AQUAVIOR  Landscaping • irrigation system",
    title: "Landscaping Windsor Ontario | Lawn Care & Landscape Design",
    description:
      "Windsor's top-rated landscaping company. Lawn care, sod, garden design, interlock & snow removal. Serving Windsor, LaSalle, Tecumseh & Essex County.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Landscaping Services Windsor Ontario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping Windsor Ontario | AQUAVIOR",
    description:
      "Top-rated landscaping in Windsor ON. Lawn care, sod, interlock, garden design & snow removal. Free quotes!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://aquavior.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${unbounded.variable} ${sora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://aquavior.com/",
              name: "Your Company Landscaping",
              image: "https://aquavior.com/og-image.jpg",
              url: "https://aquavior.com",
              telephone: "+1-382-880-0066",
              priceRange: "$$",
              description:
                "Professional landscaping company serving Windsor, LaSalle, Tecumseh and Essex County Ontario. Specializing in lawn care, sod installation, garden design, interlocking, and snow removal.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "YOUR STREET ADDRESS",
                addressLocality: "Windsor",
                addressRegion: "ON",
                postalCode: "N9X XXX",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 42.3149,
                longitude: -83.0364,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "07:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "16:00",
                },
              ],
              areaServed: [
                { "@type": "City", name: "Windsor", "@id": "https://www.wikidata.org/wiki/Q26926" },
                { "@type": "City", name: "LaSalle" },
                { "@type": "City", name: "Tecumseh" },
                { "@type": "City", name: "Amherstburg" },
                { "@type": "Place", name: "Essex County" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Landscaping Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Care & Maintenance" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sod Installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscape Design" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interlocking & Hardscape" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Snow Removal Windsor" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garden & Planting" } },
                ],
              },
              sameAs: [
                "https://www.facebook.com/share/18mAzEcLgJ/",
                "https://www.instagram.com/aqu.anovus?igsh=cWZ5M3VzcDN5MjJh",
                "https://www.google.com/maps/place/YOUR_PLACE_ID",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sora antialiased bg-white text-black">
        <ClientLayout>
          <Navbar />
          {children}
          <Footer />
          <FloatingContactButton />
          <PrivacyConsentBar />
        </ClientLayout>
      </body>
    </html>
  );
}