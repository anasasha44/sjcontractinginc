"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiBell, FiShoppingBag, FiSun } from "react-icons/fi";

export default function StorePage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#243126]">
      <section className="relative overflow-hidden min-h-svh flex items-center justify-center px-[6%] py-24 pt-30 lg:pt-50">
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://ik.imagekit.io/gmjmoldeh/landscap/hero-2.jpg')" }}
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-linear-to-b from-[#08110b]/78 via-[#0f1a12]/62 to-[#08110b]/84" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-[#88a97b]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#6f8f4e]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-5xl"
        >
          <div className="rounded-[36px] border border-white/15 bg-white/10 p-8 md:p-12 lg:p-14 text-center text-white backdrop-blur-xl shadow-[0_24px_70px_rgba(0,0,0,0.30)]">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[#dbe7d1]"
            >
              <FiShoppingBag size={34} />
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe7d1]"
            >
              Aquanovus Store
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight unbounded-font"
            >
              Coming Soon
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mx-auto mt-6 max-w-3xl text-base md:text-lg lg:text-xl leading-relaxed text-white/82"
            >
              We are preparing a curated store experience for outdoor products,
              upgrades, and essentials that reflect the Aquanovus standard of
              quality, function, and refined design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 grid gap-4 md:grid-cols-3"
            >
              {[
                {
                  icon: FiSun,
                  title: "Curated Selection",
                  text: "Thoughtfully chosen outdoor and landscape essentials.",
                },
                {
                  icon: FiBell,
                  title: "Launching Soon",
                  text: "A cleaner, smarter way to explore premium products.",
                },
                {
                  icon: FiShoppingBag,
                  title: "Built for Your Space",
                  text: "Items selected to complement functional outdoor design.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -4 }}
                    className="rounded-[28px] border border-white/12 bg-white/10 p-5 backdrop-blur-md"
                  >
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-[#dbe7d1]">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.24)] transition duration-300 hover:scale-[1.03]"
              >
                Back to Home
              </Link>

              <Link
                href="/Contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                Contact Us
                <FiArrowRight />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}