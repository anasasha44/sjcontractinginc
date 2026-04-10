import type { Metadata } from "next";
import HeroVideoBackground from "../Component/ui/HeroVideoBackground";
import InteractiveLandscapeSection from "../Component/ui/InteractiveLandscapeSection";
import ModalScheduleService from "../Component/ui/ModalScheduleService";
import ServicesSection from "../Component/sections/ServicesSection";
import OurWorkSection from "../Component/sections/OurWorkSection";
import ContactBanner from "../Component/sections/ContactBanner";

export const metadata: Metadata = {
  title: "Landscaping Windsor Ontario | #1 Lawn Care & Landscape Design",
  description:
    "Windsor's most trusted landscaping company. Expert lawn care, sod installation, garden design, interlocking & snow removal. Serving Windsor, LaSalle, Tecumseh & Essex County. Call for a FREE quote!",
  alternates: {
    canonical: "https://yourwebsite.com",
  },
  openGraph: {
    title: "Landscaping Windsor Ontario | #1 Lawn Care & Landscape Design",
    description:
      "Windsor's most trusted landscaping company. Expert lawn care, sod, interlock & snow removal. Free quotes — call today!",
    url: "https://yourwebsite.com",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <main>
      <h1 className="sr-only">
        Professional Landscaping Services in Windsor Ontario — Lawn Care, Sod,
        Garden Design & More
      </h1>

      <header className="relative min-h-screen w-full overflow-hidden">
        <HeroVideoBackground />

        {/* extra overlay for readability */}
        <div className="absolute inset-0 z-10 bg-black/20" />

        {/* content */}
        <div className="relative z-20 flex  min-h-screen items-center justify-center px-4 pt-28 pb-10 sm:px-6 md:pt-32 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:gap-16">
              <div className="text-center lg:pt-20">
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md sm:text-sm">
                  Premium Landscaping Services
                </span>

                <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl unbounded-font">
                  Windsor&apos;s Premier Landscaping 
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
                  Lawn care, sod, garden design & snow removal — serving
                  Windsor, LaSalle & Essex County
                </p>

                <div className="mt-8 flex items-center justify-center">
                  <ModalScheduleService />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <InteractiveLandscapeSection />
      <ServicesSection />
      <OurWorkSection />
      <ContactBanner />
    </main>
  );
}