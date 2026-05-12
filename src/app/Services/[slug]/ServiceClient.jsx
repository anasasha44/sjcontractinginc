"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

import HeroBackgroundPages from "../../Component/ui/HeroBackground";

export default function ServiceClient({ service }) {
  return (
    <main className="min-h-screen bg-[#f7f5ef] pb-24">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-115 lg:min-h-140">
        {/* background layer */}
        <div className="absolute inset-0 z-0">
          <HeroBackgroundPages
            desktopImages={service.images || [service.mainImage]}
            mobileImages={service.images || [service.mainImage]}
          />
        </div>

        {/* dark overlay */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-[#08110b]/72 via-[#0f1a12]/48 to-[#08110b]/78" />

        {/* content */}
        <div className="relative z-20 min-h-115 lg:min-h-140 px-[6%] pt-32 lg:pt-40 pb-16 flex items-center justify-center">
          <div className="w-full max-w-5xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe7d1] backdrop-blur-md"
            >
              Premium Outdoor Service
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
              className="mt-5 text-3xl sm:text-4xl lg:text-6xl font-bold leading-[1.08] text-white unbounded-font"
            >
              {service.title}
            </motion.h1>

            {service.subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.16 }}
                className="mt-5 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl leading-relaxed text-white/82"
              >
                {service.subtitle}
              </motion.p>
            )}

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-8 flex items-center justify-center gap-8 text-white flex-wrap"
            >
              <li className="text-sm relative">
                <Link href="/" className="transition hover:text-[#dbe7d1]">
                  Home
                </Link>
              </li>

              <li className="text-sm relative flex items-center gap-2">
                <FaAngleRight className="text-xs text-[#dbe7d1]" aria-hidden="true" />
                <Link href="/services" className="transition hover:text-[#dbe7d1]">
                  Services
                </Link>
              </li>

              <li className="text-sm relative flex items-center gap-2 text-[#dbe7d1]">
                <FaAngleRight className="text-xs" aria-hidden="true" />
                <span>{service.title}</span>
              </li>
            </motion.ul>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="px-[6%] pt-20">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-4xl border border-[#dfe7d7] bg-white shadow-[0_18px_40px_rgba(32,45,35,0.08)]">
              <Image
                src={service.mainImage}
                alt={`${service.title} service in Windsor Ontario`}
                width={900}
                height={650}
                className="h-90 md:h-115 w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
              Service Overview
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#2f4633] leading-tight">
              {service.title}
            </h2>

            <div className="mt-6 space-y-5 text-[#5f6f60] text-base md:text-lg leading-relaxed">
              <p>{service.desc}</p>

              {service.subtitle && <p>{service.subtitle}</p>}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Professional execution",
                "Long-term property value",
                "Refined outdoor finish",
                "Tailored project approach",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#dfe7d7] bg-white/75 px-4 py-4"
                >
                  <FiCheckCircle className="mt-0.5 text-[#4f7c57]" />
                  <span className="text-sm font-medium text-[#425244]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.22)] transition duration-300 hover:scale-[1.03]"
              >
                Request This Service
                <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="px-[6%] pt-20">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
              Why This Service Matters
            </span>

            <h3 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#2f4633]">
              Explore More About {service.title}
            </h3>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-[#5f6f60]">
              Learn more about our process and how we deliver professional
              results for our {service.category?.toLowerCase() || "outdoor"} projects.
            </p>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-[#5f6f60]">
              Every project is approached with careful planning, premium
              execution, and a strong focus on both function and visual impact.
            </p>

            <div className="mt-8 rounded-[28px] border border-[#dfe7d7] bg-linear-to-r from-[#edf3e7] via-[#f7f5ef] to-[#eef4e8] p-6 shadow-[0_16px_40px_rgba(32,45,35,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                Need a custom recommendation?
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#425244]">
                Contact us anytime for a personalized consultation and let’s
                find the right solution for your property.
              </p>

              <div className="mt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d8e6d2]/30 bg-[#3f6b4b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#355b40]"
                >
                  Contact Us
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="overflow-hidden rounded-4xl border border-[#dfe7d7] bg-white shadow-[0_18px_40px_rgba(32,45,35,0.08)]">
              <Image
                src={service.image}
                alt={`${service.title} example project in Windsor Ontario`}
                width={900}
                height={650}
                className="h-90 md:h-115 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* OPTIONAL CONTENT SECTIONS */}
      {service.contentSections?.length > 0 && (
        <section className="px-[6%] pt-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center">
              <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                More Details
              </span>
              <h3 className="mt-4 text-3xl md:text-4xl font-bold text-[#2f4633]">
                Everything You Should Know
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {service.contentSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[28px] border border-[#dfe7d7] bg-white p-6 shadow-[0_14px_35px_rgba(32,45,35,0.07)]"
                >
                  {section.title && (
                    <h4 className="text-xl font-bold text-[#2f4633]">
                      {section.title}
                    </h4>
                  )}
                  {section.text && (
                    <p className="mt-3 text-[#5f6f60] leading-relaxed">
                      {section.text}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OPTIONAL STEPS */}
      {service.steps?.length > 0 && (
        <section className="px-[6%] pt-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center">
              <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                Our Process
              </span>
              <h3 className="mt-4 text-3xl md:text-4xl font-bold text-[#2f4633]">
                How We Deliver Results
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {service.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[28px] border border-[#dfe7d7] bg-white p-6 shadow-[0_14px_35px_rgba(32,45,35,0.07)]"
                >
                  <div className="text-4xl font-bold text-[#dfead6]">
                    0{index + 1}
                  </div>
                  <h4 className="mt-4 text-xl font-bold text-[#2f4633]">
                    {typeof step === "string" ? step : step.title}
                  </h4>
                  {typeof step !== "string" && step.text && (
                    <p className="mt-3 text-[#5f6f60] leading-relaxed">
                      {step.text}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-[6%] pt-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto rounded-[34px] border border-[#dfe7d7] bg-gradient-to-r from-[#edf3e7] via-[#f7f5ef] to-[#eef4e8] p-8 md:p-10 shadow-[0_16px_40px_rgba(32,45,35,0.08)]"
        >
          <div className="grid gap-6 md:grid-cols-[1fr_auto] items-center">
            <div>
              <span className="inline-block rounded-full bg-[#dfead6] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                Ready to Get Started?
              </span>
              <h3 className="mt-4 text-2xl md:text-3xl font-bold text-[#2f4633]">
                Let’s talk about your {service.title.toLowerCase()} project
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#5f6f60] max-w-2xl">
                Reach out to AQUAVIOR and let’s create a tailored outdoor
                solution designed around your property and goals.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.22)] transition duration-300 hover:scale-[1.03]"
              >
                Request This Service
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}