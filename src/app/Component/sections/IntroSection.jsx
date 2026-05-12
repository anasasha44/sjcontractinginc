"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section
      className="relative overflow-hidden bg-center bg-cover bg-no-repeat py-20 md:py-24 px-[6%]"
      style={{ backgroundImage: "url('https://ik.imagekit.io/gmjmoldeh/landscap/hero-1.jpeg?tr=f-auto,q-auto')" }}
    >
      {/* overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-[#08110b]/75 via-[#0f1a12]/60 to-[#08110b]/80" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#88a97b]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#6f8f4e]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-4xl mx-auto"
      >
        <div
          className="
            rounded-[30px]
            border border-white/15
            bg-white/10
            backdrop-blur-xl
            p-8 md:p-10 lg:p-12
            text-white
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
            Windsor • Lot Grading & Drainage
          </motion.span>

          {/* title */}
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-white"
          >
            Ready to Protect and Perfect Your Property in Windsor?
          </motion.h3>

          {/* subtitle */}
          <motion.h4
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-5 max-w-3xl text-lg md:text-xl font-medium leading-relaxed text-white/85"
          >
            Keep your landscape beautiful and your foundation protected with
            expert lot grading and drainage services in Windsor, Canada by
            Aquanovus.
          </motion.h4>

          {/* paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-7 space-y-4 text-base md:text-lg leading-relaxed text-white/80"
          >
            <p>
              At Aquanovus, we proudly serve homeowners and property owners
              across Windsor with precision grading and advanced water-control
              systems designed to improve drainage, direct water properly, and
              enhance the long-term stability of your property.
            </p>

            <p>
              Whether you are building a new home or solving an existing
              backyard drainage issue, our team delivers reliable solutions that
              protect your investment and prepare your outdoor space for future
              landscaping improvements.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8"
          >
            <Link
              href="/contact"
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
              <span className="relative z-10">
                Schedule Your Windsor Grading & Drainage Assessment
              </span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}