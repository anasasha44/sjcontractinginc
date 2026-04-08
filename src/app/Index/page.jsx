import HeroVideoBackground from "../Component/ui/HeroVideoBackground";
import InteractiveLandscapeSection from "../Component/ui/InteractiveLandscapeSection";
import ModalScheduleService from "../Component/ui/ModalScheduleService";
import ServicesSection from "../Component/sections/ServicesSection";
import OurWorkSection from "../Component/sections/OurWorkSection";
import ContactBanner from "../Component/sections/ContactBanner";

export const metadata = {
  title: "Premium Renovation & Remodeling Services in Canada | [Your Company]",
  description:
    "Professional home renovation in Canada — kitchens, bathrooms, basements, flooring and full remodels. Free estimates, licensed & insured contractors.",
};

export default function Page() {
  return (
    <main>
   <header className="relative z-10 pt-24">
  <HeroVideoBackground />

  <div className="min-h-screen flex items-center justify-center">
    <div className="grid grid-cols-1 gap-16 items-center w-full max-w-7xl mx-auto">

      {/* LEFT TEXT */}
      <div className="text-center px-2 sm:px-4 lg:-mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl unbounded-font font-extrabold text-white leading-tight">
          Thinking About Remodeling Your House?
        </h1>

        <p className="mt-4 text-[#ffffffc9] max-w-xl mx-auto text-sm sm:text-base md:text-lg">
          Let us take care of the construction
        </p>

        <ModalScheduleService />
      </div>

    </div>
  </div>
</header>
  <InteractiveLandscapeSection/>
      <ServicesSection/>
    
      <OurWorkSection/>

      <ContactBanner/>
    </main>
  );
}
