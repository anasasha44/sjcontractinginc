import "./globals.css";
import "leaflet/dist/leaflet.css";
import ClientLayout from "./ClientLayout";
import Navbar from "../app/Component/layout/Navbar";
import Footer from "../app/Component/layout/Footer";
import FloatingContactButton from "../app/Component/ui/FloatingContactButton";
import PrivacyConsentBar from "./Component/ui/PrivacyConsentBar";
import { Unbounded, Sora } from "next/font/google";
import type { Metadata, Viewport } from "next";


const SITE_URL = "https://www.aquavior.com";
const BRAND_NAME = "AQUAVIOR Landscaping & Irrigation";
const PHONE = "+1-382-880-0066";

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

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Landscaping Windsor Ontario | AQUAVIOR Landscaping & Irrigation",
    template: "%s | AQUAVIOR Landscaping & Irrigation",
  },

  description:
    "Professional landscaping and irrigation services in Windsor Ontario. AQUAVIOR provides lawn care, sod installation, garden design, interlock, irrigation systems and snow removal across Windsor, LaSalle, Tecumseh and Essex County.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  keywords: [
    "landscaping Windsor Ontario",
    "landscaping Windsor",
    "landscaping Windsor Canada",
    "lawn care Windsor ON",
    "landscape design Windsor",
    "irrigation system Windsor",
    "sprinkler system Windsor Ontario",
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

  authors: [{ name: BRAND_NAME }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,

  formatDetection: {
    telephone: true,
    address: true,
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: "Landscaping Windsor Ontario | AQUAVIOR Landscaping & Irrigation",
    description:
      "AQUAVIOR provides professional landscaping, lawn care, irrigation systems, sod installation, interlock and snow removal in Windsor, LaSalle, Tecumseh and Essex County.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AQUAVIOR landscaping and irrigation services in Windsor Ontario",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Landscaping Windsor Ontario | AQUAVIOR",
    description:
      "Professional landscaping, irrigation, lawn care, sod, interlock and snow removal services in Windsor Ontario.",
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
   canonical: `${SITE_URL}/`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BRAND_NAME,
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    telephone: PHONE,
    priceRange: "$$",
    description:
      "AQUAVIOR Landscaping & Irrigation provides professional landscaping, irrigation systems, lawn care, sod installation, garden design, interlocking and snow removal services in Windsor, LaSalle, Tecumseh and Essex County Ontario.",
    address: {
      "@type": "PostalAddress",
     address: {
  "@type": "PostalAddress",
  addressLocality: "Windsor",
  addressRegion: "ON",
  addressCountry: "CA",
},
      addressLocality: "Windsor",
      addressRegion: "ON",
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
      { "@type": "City", name: "Windsor" },
      { "@type": "City", name: "LaSalle" },
      { "@type": "City", name: "Tecumseh" },
      { "@type": "City", name: "Amherstburg" },
      { "@type": "Place", name: "Essex County" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Landscaping and Irrigation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lawn Care & Maintenance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sod Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landscape Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Irrigation System Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interlocking & Hardscape",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Snow Removal Windsor",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Garden Design & Planting",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/share/18mAzEcLgJ/",
      "https://www.instagram.com/aqu.anovus?igsh=cWZ5M3VzcDN5MjJh",
    ],
  };

  return (
    <html lang="en-CA" className={`${unbounded.variable} ${sora.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
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