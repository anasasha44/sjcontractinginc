"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function SplashScreen({ isVisible = true }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
        exit={{
  opacity: 0,
  scale: 1.05,
  filter: "blur(8px)",
  transition: { duration: 0.9, ease: "easeInOut" },
}}
          className="fixed inset-0 z-[99999] overflow-hidden bg-[#0d140f]"
        >
          {/* background image layer */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/Images/hero-2.jpg')" }}
          />

          {/* overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#08110b]/92 via-[#0f1a12]/88 to-[#08110b]/96" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#88a97b]/12 blur-3xl" />
          <div className="pointer-events-none absolute left-10 top-10 h-72 w-72 rounded-full bg-[#6f8f4e]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#dbe7d1]/5 blur-3xl" />

          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 flex h-full items-center justify-center px-6">
            <div className="text-center">
              {/* top badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mb-6"
              >
                <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dbe7d1] backdrop-blur-md">
                  Landscaping • Renovation
                </span>
              </motion.div>

              {/* logo */}
              <motion.h1
                initial={{ opacity: 0, y: 18, letterSpacing: "0.4em" }}
                animate={{ opacity: 1, y: 0, letterSpacing: "0.2em" }}
                transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
                className="unbounded-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
              >
                AQUANOVUS
              </motion.h1>

              {/* animated divider */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 80, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.55 }}
                  className="h-px bg-gradient-to-r from-transparent via-[#88a97b] to-transparent"
                />
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.72 }}
                  className="h-2.5 w-2.5 rounded-full bg-[#88a97b] shadow-[0_0_20px_rgba(136,169,123,0.75)]"
                />
                <motion.span
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 80, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.55 }}
                  className="h-px bg-gradient-to-r from-transparent via-[#88a97b] to-transparent"
                />
              </div>

              {/* subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mx-auto mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-white/78"
              >
                Crafting refined outdoor spaces with precision, function, and a
                natural premium finish.
              </motion.p>

              {/* loading bars */}
              <div className="mx-auto mt-10 w-[220px] sm:w-[280px]">
                <div className="h-[6px] overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-full w-1/2 rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#6f8f4e] to-[#dbe7d1]"
                  />
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="mt-4 text-[11px] uppercase tracking-[0.28em] text-white/45"
                >
                  Preparing Experience
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}