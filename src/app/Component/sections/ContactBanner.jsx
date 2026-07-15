"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactBanner() {
  return (
    <section
      className="relative overflow-hidden bg-fixed bg-center bg-cover py-24 md:py-28 px-4"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/gmjmoldeh/sj/3f4407c0-0aa7-433e-9aa0-77b11c99b5ec.jpeg?tr=f-auto,q-auto')",
      }}
    >
      {/* overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-[#08110b]/75 via-[#0f1a12]/60 to-[#08110b]/80" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#88a97b]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#6f8f4e]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="rounded-[30px] border border-white/15 bg-white/10 backdrop-blur-xl px-6 py-10 md:px-10 md:py-12 lg:px-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

          {/* badge */}
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe7d1]"
          >
            SJ Contracting Inc
          </motion.span>

          {/* title (SEO STRONG) */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl unbounded-font font-extrabold leading-[1.1] text-white"
          >
            Reliable Contracting, Landscaping & Mobile Mechanical Services in Canada
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mx-auto mt-6 max-w-3xl text-base md:text-lg lg:text-xl leading-relaxed text-white/85"
          >
            We deliver high-quality construction, landscaping, drainage,
            irrigation, and mobile mechanical services. From residential
            upgrades to full-scale property solutions — we bring precision,
            reliability, and long-term value.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/Contact"
              className="
                group relative inline-flex items-center justify-center overflow-hidden
                rounded-full
                bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e]
                px-6 py-3.5
                text-sm font-semibold text-white
                shadow-[0_12px_30px_rgba(34,60,40,0.28)]
                transition-all duration-300
                hover:scale-[1.03]
              "
            >
              Get Free Quote
            </Link>

            <Link
              href="/service"
              className="
                inline-flex items-center justify-center
                rounded-full border border-white/20
                bg-white/10
                px-6 py-3.5
                text-sm font-semibold text-white
                backdrop-blur-md
                transition hover:bg-white/15
              "
            >
              View Services
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}