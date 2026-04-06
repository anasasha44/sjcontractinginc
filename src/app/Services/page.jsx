"use client";

import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import servicesData from "../Component/data/servicesData";
import HeroBackgroundPages from "../Component/ui/HeroBackgroundPages";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] pb-20">
      {/* HERO */}
     <div className="relative overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 z-0">
    <HeroBackgroundPages
      desktopImages={[
        "/Images/hero-1.jpeg",
        "/Images/hero-2.jpg",
        "/Images/hero-3.jpg",
        "/Images/hero-4.jpg",
      ]}
      mobileImages={[
        "/Images/heroMobile-1.jpg",
        "/Images/heroMobile-2.jpg",
        "/Images/heroMobile-3.jpg",
        "/Images/heroMobile-4.jpg",
      ]}
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 z-10 bg-black/45" />

  {/* Content */}
  <div className="relative z-20 min-h-130 lg:min-h-155 flex items-center justify-center px-[6%] pt-32 lg:pt-40 pb-16">
    <div className="w-full max-w-5xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-normal text-white unbounded-font leading-tight">
        Expert Grading & Drainage Solutions
      </h1>

      <ul className="mt-8 text-white flex items-center justify-center gap-8 section-list flex-wrap">
        <li className="text-sm relative">
          <Link href="/">Home</Link>
        </li>

        <li className="text-sm relative">
          <FaAngleRight
            className="absolute -left-6 top-0.5"
            aria-hidden="true"
          />
          <Link href="/services">Services</Link>
        </li>
      </ul>
    </div>
  </div>
</div>

      {/* SERVICES INTRO */}
      <section className="px-[6%] pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-3xl md:text-4xl font-bold text-[#2f4633]"
          >
            Professional Outdoor Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-base md:text-lg leading-relaxed text-[#5f6f60]"
          >
            Explore our premium landscaping, grading, and drainage services
            designed to protect your property and elevate your outdoor space.
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-[6%] pt-14">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {servicesData.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.28 }}
                className="group"
              >
                <div className="relative h-80 rounded-[28px] overflow-hidden border border-[#dfe7d7] bg-white shadow-[0_16px_40px_rgba(32,45,35,0.10)]">
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#142018]/85 via-[#1c2b20]/35 to-transparent" />
                  <div className="absolute inset-0 bg-[#0f1a12]/10 group-hover:bg-[#0f1a12]/20 transition duration-500" />

                  <div className="absolute left-5 top-5">
                    <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      Premium Service
                    </span>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>

                    <p className="text-sm mb-4 text-white/85 line-clamp-3">
                      {item.desc}
                    </p>

                    <Link
                      href={`/Services/${item.id}`}
                      className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/90 text-[#2f4633] font-semibold px-5 py-2.5 transition duration-300 hover:bg-[#e8f0e3] hover:text-[#3f6b4b]"
                    >
                      Learn More
                      <FaAngleRight className="text-xs" />
                    </Link>
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#88a97b]/20 blur-2xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[6%] pt-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto rounded-[32px] border border-[#dfe7d7] bg-gradient-to-r from-[#edf3e7] via-[#f7f5ef] to-[#eef4e8] p-8 md:p-10 shadow-[0_16px_40px_rgba(32,45,35,0.08)]"
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <span className="inline-block rounded-full bg-[#dfead6] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                Let’s Build Something Beautiful
              </span>

              <h3 className="mt-4 text-2xl md:text-3xl font-bold text-[#2f4633]">
                Ready to upgrade your outdoor space?
              </h3>

              <p className="mt-3 text-base leading-relaxed text-[#5f6f60] max-w-2xl">
                Talk to Aquanovus about the right grading, drainage, or
                landscape solution for your property.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.22)] transition duration-300 hover:scale-[1.03]"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}