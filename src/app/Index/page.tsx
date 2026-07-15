import type { Metadata } from "next";
import dynamic from "next/dynamic";

import HeroVideoBackground from "../Component/ui/HeroVideoBackground";
import ModalScheduleService from "../Component/ui/ModalScheduleService";
import AnimatedSection from "../Component/ui/AnimatedSection";
const ContractingSection = dynamic(
  () => import("../Component/ui/ContractingSection"),
  {
    loading: () => <SectionLoader />,

  }
);
const MobileMechanicalSection = dynamic(
  () => import("../Component/ui/MobileMechanicalSection"),
  {
    loading: () => <SectionLoader />,
  }
);
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

// const OurWorkSection = dynamic(
//   () => import("../Component/sections/OurWorkSection"),
//   {
//     loading: () => <SectionLoader />,
//   }
// );

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
  title:
    "SJ Contracting Inc | Contracting, Landscaping & Mobile Mechanical Services in Canada",

  description:
    "SJ Contracting Inc provides professional contracting, landscaping, and mobile mechanical services across Canada. High-quality residential and commercial work including outdoor construction, maintenance, landscaping, and on-site mechanical support.",

  keywords: [
    "contracting services Canada",
    "landscaping services Canada",
    "mobile mechanical services Canada",
    "construction contractor Ontario",
    "landscaper Windsor Ontario",
    "property maintenance Canada",
    "outdoor construction services",
    "residential contracting Canada",
    "commercial contractor Ontario",
    "mechanical repair mobile service Canada",
  ],

  alternates: {
    canonical: "https://sjcontractinginc.com/",
  },

  openGraph: {
    title:
      "SJ Contracting Inc | Contracting, Landscaping & Mobile Mechanical Services",

    description:
      "Professional contracting, landscaping, and mobile mechanical services across Canada. Reliable residential and commercial solutions.",

    url: "https://sjcontractinginc.com/",
    siteName: "SJ Contracting Inc",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SJ Contracting Inc Services Canada",
      },
    ],

    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SJ Contracting Inc Canada",
    description:
      "Contracting, landscaping & mobile mechanical services across Canada.",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return (
    <main>
      <header className="relative min-h-screen w-full overflow-hidden">
        <HeroVideoBackground />

        <div className="absolute inset-0 z-10 bg-black/30" />

        <div className="relative z-20 flex min-h-screen items-center justify-center px-4 pt-24 pb-10 sm:px-6 md:pt-28 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">

            <div className="text-center lg:pt-20">

               {/* Badge */}
      <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
        Contracting • Landscaping • Mobile Mechanical
      </span>

      {/* Heading */}
      <h1 className="unbounded-font mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Complete Property Solutions
        <span className="mt-2 block text-[#D6A354]">
          Built Around Your Needs
        </span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
        From professional contracting and custom landscaping to on-site mobile
        mechanical services, SJ Contracting Inc delivers reliable solutions for
        residential and commercial projects across Canada.
      </p>

      {/* Services */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 backdrop-blur-md">
          <span className="font-semibold text-white">
            🏗 Contracting
          </span>
        </div>

        <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 backdrop-blur-md">
          <span className="font-semibold text-white">
            🌿 Landscaping
          </span>
        </div>

        <div className="rounded-full border border-white/15 bg-white/10 px-6 py-3 backdrop-blur-md">
          <span className="font-semibold text-white">
            🔧 Mobile Mechanical
          </span>
        </div>

      </div>

              {/* CTA */}
              <div className="mt-7 flex justify-center">
                <ModalScheduleService />
              </div>

            </div>
          </div>
        </div>
      </header>
 <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContractingSection />
      </AnimatedSection>
      <AnimatedSection>
        <InteractiveLandscapeSection />
      </AnimatedSection>
      <AnimatedSection>
        <MobileMechanicalSection />
      </AnimatedSection>
     

      {/* <AnimatedSection>
        <OurWorkSection />
      </AnimatedSection> */}

      <AnimatedSection>
        <ContactBanner />
      </AnimatedSection>
    </main>
  );
}