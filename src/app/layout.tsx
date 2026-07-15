import "./globals.css";
import "leaflet/dist/leaflet.css";
import ClientLayout from "./ClientLayout";
import Navbar from "../app/Component/layout/Navbar";
import Footer from "../app/Component/layout/Footer";
import FloatingContactButton from "../app/Component/ui/FloatingContactButton";
import PrivacyConsentBar from "./Component/ui/PrivacyConsentBar";
import { Unbounded, Sora } from "next/font/google";
import type { Metadata, Viewport } from "next";


const SITE_URL = "https://www.sjcontractinginc.com";
const BRAND_NAME = "SJ Contracting Inc";
const PHONE = "+1-266-344-0303";

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
  default:
    "SJ Contracting Inc | Contracting, Landscaping & Mobile Mechanical Services in Windsor, Ontario",
  template: "%s | SJ Contracting Inc",
},

description:
  "SJ Contracting Inc provides professional contracting, landscaping, and mobile mechanical services in Windsor, Ontario. We deliver reliable residential and commercial solutions with quality workmanship across Windsor and surrounding areas.",
 icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/icon1.png", sizes: "192x192", type: "image/png" },
    { url: "/icon0.svg", type: "image/svg+xml" },
  ],

  apple: "/apple-icon.png",

  shortcut: "/favicon.ico",
},

manifest: "/manifest.json",
 

  keywords: [
  // Brand
  "SJ Contracting Inc",

  // Main Services
  "contracting Windsor Ontario",
  "general contractor Windsor",
  "construction services Windsor",
  "residential contractor Windsor",
  "commercial contractor Windsor",

  // Landscaping
  "landscaping Windsor Ontario",
  "landscaping Windsor",
  "landscape contractor Windsor",
  "lawn care Windsor",
  "sod installation Windsor",
  "lot grading Windsor",
  "drainage solutions Windsor",
  "irrigation systems Windsor",
  "property maintenance Windsor",

  // Mobile Mechanical
  "mobile mechanical services Windsor",
  "mobile mechanic Windsor Ontario",
  "on-site mechanical repair Windsor",
  "emergency mobile mechanic Windsor",

  // Local SEO
  "Windsor Ontario contractor",
  "LaSalle contractor",
  "Tecumseh contractor",
  "Amherstburg contractor",
  "Essex County contractor",
  "contractor near me Windsor",
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

  title:
    "SJ Contracting Inc | Contracting, Landscaping & Mobile Mechanical Services",

  description:
    "SJ Contracting Inc provides professional contracting, landscaping, and mobile mechanical services across Windsor, Ontario. Reliable residential and commercial solutions delivered with quality workmanship.",

  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "SJ Contracting Inc - Contracting, Landscaping & Mobile Mechanical Services",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title:
    "SJ Contracting Inc | Contracting, Landscaping & Mobile Mechanical Services",

  description:
    "Professional contracting, landscaping, and mobile mechanical services in Windsor, Ontario. Trusted residential and commercial solutions across Windsor and surrounding areas.",

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
    "SJ Contracting Inc provides professional contracting, landscaping, and mobile mechanical services for residential and commercial properties throughout Windsor, Ontario and surrounding areas.",

  address: {
    "@type": "PostalAddress",
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
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
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
    name: "Contracting, Landscaping & Mobile Mechanical Services",

    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Contracting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Contracting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Contracting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landscaping Services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lot Grading & Drainage",
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
          name: "Lawn Maintenance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Irrigation Systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile Mechanical Services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "On-Site Mechanical Repair",
        },
      },
    ],
  },

  sameAs: [
    "https://www.facebook.com/share/1Ckc21V4Ci/",
    "https://www.instagram.com/sj_contractinginc?igsh=cWZ5M3VzcDN5MjJh",
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