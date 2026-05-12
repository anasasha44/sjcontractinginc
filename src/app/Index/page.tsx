import type { Metadata } from "next";
import dynamic from "next/dynamic";

import HeroVideoBackground from "../Component/ui/HeroVideoBackground";
import ModalScheduleService from "../Component/ui/ModalScheduleService";
import AnimatedSection from "../Component/ui/AnimatedSection";

const InteractiveLandscapeSection = dynamic(
  () => import("../Component/ui/InteractiveLandscapeSection"),
  {
    loading: () => <SectionLoader />,
  }
);

const ServicesSection = dynamic(
  () => import("../Component/sections/ServicesSection"),
  {
    loading: () => <SectionLoader />,
  }
);

const OurWorkSection = dynamic(
  () => import("../Component/sections/OurWorkSection"),
  {
    loading: () => <SectionLoader />,
  }
);

const ContactBanner = dynamic(
  () => import("../Component/sections/ContactBanner"),
  {
    loading: () => <SectionLoader />,
  }
);

function SectionLoader() {
  return (
    <div className="flex min-h-[55vh] w-full items-center justify-center bg-neutral-950">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-white" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Landscaping Windsor Ontario | AQUAVIOR Lawn Care, Sod & Irrigation",

  description:
    "AQUAVIOR Landscaping & Irrigation provides professional landscaping services in Windsor Ontario. Lawn care, sod installation, irrigation systems, interlock, garden design and snow removal across Windsor, LaSalle, Tecumseh and Essex County.",

  keywords: [
    "landscaping Windsor Ontario",
    "lawn care Windsor ON",
    "sod installation Windsor",
    "irrigation system Windsor Ontario",
    "sprinkler system Windsor",
    "interlocking Windsor Ontario",
    "garden design Windsor",
    "snow removal Windsor",
    "landscaper near me Windsor ON",
  ],

  alternates: {
    canonical: "https://www.aquavior.com/",
  },

  openGraph: {
    title: "AQUAVIOR Landscaping Windsor Ontario | Lawn Care, Sod & Irrigation",

    description:
      "Professional landscaping, irrigation systems, lawn care, sod installation, interlock and snow removal services in Windsor Ontario and Essex County.",

    url: "https://www.aquavior.com/",
    siteName: "AQUAVIOR Landscaping & Irrigation",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AQUAVIOR Landscaping services in Windsor Ontario",
      },
    ],

    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AQUAVIOR Landscaping Windsor Ontario",
    description:
      "Top landscaping and irrigation services in Windsor Ontario. Free quotes available.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <main>
      <header className="relative min-h-screen w-full overflow-hidden">
        <HeroVideoBackground />

        <div className="absolute inset-0 z-10 bg-black/20" />

        <div className="relative z-20 flex min-h-screen items-center justify-center px-4 pt-28 pb-10 sm:px-6 md:pt-32 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:gap-16">
              <div className="text-center lg:pt-20">
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md sm:text-sm">
                  Windsor Landscaping & Irrigation Experts
                </span>

                <h1 className="unbounded-font mx-auto mt-5 max-w-5xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                  Windsor&apos;s Premier Landscaping & Irrigation
                </h1>

                <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
                  Lawn care, sod installation, irrigation systems, garden design
                  and snow removal across Windsor, LaSalle & Essex County
                </p>

                <div className="mt-8 flex items-center justify-center">
                  <ModalScheduleService />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatedSection>
        <InteractiveLandscapeSection />
      </AnimatedSection>

      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection>
        <OurWorkSection />
      </AnimatedSection>

      <AnimatedSection>
        <ContactBanner />
      </AnimatedSection>
    </main>
  );
}