"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import servicesData from "../Component/data/servicesData";
import HeroBackgroundPages from "../Component/ui/HeroBackgroundPages";
import Link from "next/link";
import Image from "next/image";

type HeroBackgroundPagesTypedProps = {
  desktopImages?: string[];
  mobileImages?: string[];
};

const TypedHeroBackgroundPages =
  HeroBackgroundPages as React.ComponentType<HeroBackgroundPagesTypedProps>;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function ServicesClient() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] pb-20">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <TypedHeroBackgroundPages
            desktopImages={[
              "https://ik.imagekit.io/gmjmoldeh/landscap/hero-1.jpeg",
              "https://ik.imagekit.io/gmjmoldeh/landscap/hero-2.jpg",
              "https://ik.imagekit.io/gmjmoldeh/landscap/hero-3.jpg",
              "https://ik.imagekit.io/gmjmoldeh/landscap/hero-4.jpg",
            ]}
            mobileImages={[
              "https://ik.imagekit.io/gmjmoldeh/landscap/heroMobile-1.jpg",
              "https://ik.imagekit.io/gmjmoldeh/landscap/heroMobile-2.jpg",
              "https://ik.imagekit.io/gmjmoldeh/landscap/heroMobile-3.jpg",
              "https://ik.imagekit.io/gmjmoldeh/landscap/heroMobile-4.jpg",
            ]}
          />
        </div>

        <div className="absolute inset-0 z-10 bg-black/45" />

        <div className="relative z-20 flex min-h-130 items-center justify-center px-[6%] pb-16 pt-32 lg:min-h-155 lg:pt-40">
          <div className="mx-auto w-full max-w-5xl text-center">
            <h1 className="unbounded-font text-3xl font-normal leading-tight text-white sm:text-4xl lg:text-6xl">
              Landscaping & Outdoor Services in Windsor, Ontario
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Lawn care, sod, interlocking, garden design, grading & snow
              removal — serving Windsor, LaSalle, Tecumseh & Essex County.
            </p>

            <ul className="section-list mt-8 flex flex-wrap items-center justify-center gap-8 text-white">
              <li className="relative text-sm">
                <Link href="/">Home</Link>
              </li>
              <li className="relative text-sm">
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
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]"
          >
            Windsor Landscaping Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 text-3xl font-bold text-[#2f4633] md:text-4xl"
          >
            Professional Landscaping Solutions for Windsor & Essex County
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-base leading-relaxed text-[#5f6f60] md:text-lg"
          >
            From lawn care and sod installation to interlocking, garden design,
            grading, and snow removal — we provide full-service landscaping
            across Windsor, LaSalle, Tecumseh, and all of Essex County Ontario.
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-[6%] pt-14">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {servicesData.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.28 }}
                className="group"
              >
                <div className="relative h-80 overflow-hidden rounded-[28px] border border-[#dfe7d7] bg-white shadow-[0_16px_40px_rgba(32,45,35,0.10)]">
                  <Image
                    src={item.mainImage}
                    alt={`${item.title} — Windsor Ontario landscaping service`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#142018]/85 via-[#1c2b20]/35 to-transparent" />
                  <div className="absolute inset-0 bg-[#0f1a12]/10 transition duration-500 group-hover:bg-[#0f1a12]/20" />

                  <div className="absolute left-5 top-5">
                    <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      Windsor, ON
                    </span>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                    <h3 className="mb-2 text-2xl font-bold">{item.title}</h3>

                    <p className="mb-4 line-clamp-3 text-sm text-white/85">
                      {item.desc}
                    </p>

                    <Link
                      href={`/Services/${item.id}`}
                      className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 font-semibold text-[#2f4633] transition duration-300 hover:bg-[#e8f0e3] hover:text-[#3f6b4b]"
                    >
                      Learn More
                      <FaAngleRight className="text-xs" />
                    </Link>
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#88a97b]/20 blur-2xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEO TEXT BLOCK — مهم لـ Google */}
      <section className="px-[6%] pt-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {[
              {
                title: "Lawn Care Windsor ON",
                text: "Weekly and bi-weekly lawn maintenance, edging, and fertilization for Windsor and Essex County properties.",
              },
              {
                title: "Sod & Interlock Windsor",
                text: "Professional sod installation and interlocking driveways, patios, and walkways across Windsor, LaSalle & Tecumseh.",
              },
              {
                title: "Snow Removal Windsor",
                text: "Reliable snow removal and winter property maintenance for Windsor Ontario residential and commercial clients.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[24px] border border-[#dfe7d7] bg-white/70 p-6 shadow-[0_10px_30px_rgba(32,45,35,0.06)]"
              >
                <h3 className="text-lg font-bold text-[#2f4633]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f6f60]">
                  {card.text}
                </p>
              </div>
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
          className="mx-auto max-w-5xl rounded-4xl border border-[#dfe7d7] bg-linear-to-r from-[#edf3e7] via-[#f7f5ef] to-[#eef4e8] p-8 shadow-[0_16px_40px_rgba(32,45,35,0.08)] md:p-10"
        >
          <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-block rounded-full bg-[#dfead6] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                Free Quote — Windsor & Essex County
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#2f4633] md:text-3xl">
                Ready to upgrade your Windsor outdoor space?
              </h3>

              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#5f6f60]">
                Contact Windsor&apos;s trusted landscaping team for a free
                estimate on lawn care, sod, interlocking, garden design, or any
                outdoor project across Windsor, LaSalle, Tecumseh & Essex
                County.
              </p>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.22)] transition duration-300 hover:scale-[1.03]"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}