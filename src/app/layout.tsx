import "./globals.css";
import ClientLayout from "./ClientLayout";
import Navbar from "../app/Component/layout/Navbar";
import Footer from "../app/Component/layout/Footer";
import FloatingContactButton from "../app/Component/ui/FloatingContactButton";
import { Unbounded, Sora } from "next/font/google";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://yourwebsite.com"), 
  title: {
    default: "Landscaping Windsor Ontario | Lawn Care & Landscape Design",
    template: "%s | Your Company Landscaping Windsor",
  },
  description:
    "Windsor's top-rated landscaping company. Professional lawn care, sod installation, garden design, interlock, snow removal & more. Serving Windsor, LaSalle, Tecumseh & Essex County. Free quotes!",
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
  authors: [{ name: "Your Company Name" }],
  creator: "Your Company Name",
  publisher: "Your Company Name",
  formatDetection: { telephone: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://yourwebsite.com",
    siteName: "Your Company Landscaping Windsor",
    title: "Landscaping Windsor Ontario | Lawn Care & Landscape Design",
    description:
      "Windsor's top-rated landscaping company. Lawn care, sod, garden design, interlock & snow removal. Serving Windsor, LaSalle, Tecumseh & Essex County.",
    images: [
      {
        url: "/og-image.jpg", // ← حط صورة واضحة لشغلك
        width: 1200,
        height: 630,
        alt: "Professional Landscaping Services Windsor Ontario",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping Windsor Ontario | Your Company",
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
    canonical: "https://yourwebsite.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${unbounded.variable} ${sora.variable}`}>
      <head>
        {/* Local Business Schema — مهم جداً لـ Google Maps و Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://yourwebsite.com/#business",
              name: "Your Company Landscaping",
              image: "https://yourwebsite.com/og-image.jpg",
              url: "https://yourwebsite.com",
              telephone: "+1-519-XXX-XXXX", // ← رقمك
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
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourpage",
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
        </ClientLayout>
      </body>
    </html>
  );
}