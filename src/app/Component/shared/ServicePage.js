export default function ServicePage({ 
  title, 
  subtitle, 
  mainImage, 
  heroImages, 
  contentSections, 
  steps 
}) {
  return (
    <main className="min-h-screen pb-20">
      <div className="relative">
        {/* Hero Section */}
        <HeroBackgroundPages
          desktopImages={heroImages.desktop}
          mobileImages={heroImages.mobile}
        />

        <div className="section-banner px-[2%] sm:px-[8%] lg:px-[12%] py-12.5 lg:py-22.5 min-h-112.5 lg:min-h-125 z-20 relative">
          <h1 className="text-4xl font-normal z-10 relative text-white text-center w-full unbounded-font">
            {title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="w-full">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-87.5 object-cover rounded-2xl shadow-xl border border-gray-200"
          />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl text-gray-600 font-medium mt-4">
            {subtitle}
          </h2>

          {contentSections.map((section, i) => (
            <p key={i} className="mt-6 text-gray-700 text-lg leading-relaxed">
              {section}
            </p>
          ))}

          {/* Steps */}
          <div className="mt-8 space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-green-600 text-3xl mt-1">✔</span>
                <p className="text-lg text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}