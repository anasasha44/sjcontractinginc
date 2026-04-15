"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactBanner() {
  return (
    <section
      className="relative overflow-hidden bg-fixed bg-center bg-cover py-24 md:py-28 px-4"
      style={{ backgroundImage: "url('https://ik.imagekit.io/gmjmoldeh/landscap/hero-1.jpeg')" }}
    >
      {/* layered overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-[#08110b]/75 via-[#0f1a12]/60 to-[#08110b]/80" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#88a97b]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#6f8f4e]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl"
      >
        <div
          className="
            rounded-[30px]
            border border-white/15
            bg-white/10
            backdrop-blur-xl
            px-6 py-10 md:px-10 md:py-12 lg:px-14
            text-center
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
          "
        >
          {/* badge */}
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe7d1]"
          >
            Aquanovus Landscaping
          </motion.span>

          {/* title */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl unbounded-font font-extrabold leading-[1.1] tracking-tight text-white"
          >
            Transform Your Outdoor Space with Aquanovus Landscaping
          </motion.h1>

          {/* paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mx-auto mt-6 max-w-3xl text-base md:text-lg lg:text-xl leading-relaxed text-white/85"
          >
            From lot grading and drainage solutions to landscape preparation,
            Aquanovus helps protect your property while creating outdoor spaces
            built for beauty, function, and long-term durability.
          </motion.p>

          {/* button */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8"
          >
            <Link
              href="/About"
              aria-label="Learn More About Aquanovus"
              className="
                group relative inline-flex items-center justify-center overflow-hidden
                rounded-full border border-[#d8e6d2]/20
                bg-linear-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e]
                px-6 md:px-7 py-3.5
                text-sm md:text-base font-semibold text-white
                shadow-[0_12px_30px_rgba(34,60,40,0.28)]
                transition-all duration-300
                hover:scale-[1.02]
                hover:shadow-[0_16px_40px_rgba(34,60,40,0.38)]
              "
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 unbounded-font text-[11px] md:text-sm uppercase tracking-[0.18em]">
                Learn More About Aquanovus
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}