"use client";

// components/ServicesSection.jsx
import Link from "next/link";
import { motion } from "framer-motion";
import servicesData from "../data/servicesData";
import Image from "next/image";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5ef] py-24 px-[6%]">
      {/* soft background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#88a97b]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#6f8f4e]/10 blur-3xl" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            variants={cardVariants}
            className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]"
          >
            Our Services
          </motion.span>

          <motion.h2
            variants={cardVariants}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#2f4633]"
          >
            Expert Outdoor Solutions
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="mt-4 text-base md:text-lg leading-relaxed text-[#5f6f60]"
          >
            From grading and drainage to complete landscape improvements, we
            deliver functional, elegant, and long-lasting outdoor solutions
            tailored to your property.
          </motion.p>
        </div>

        {/* cards */}
        <motion.div
          variants={sectionVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {servicesData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="relative w-full h-90 overflow-hidden rounded-[28px] border border-[#dfe7d7] bg-white shadow-[0_15px_40px_rgba(32,45,35,0.10)]">
                {/* image */}
                 <Image
    src={item.mainImage}
    alt={item.title}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover transition duration-700 group-hover:scale-110"
  />

                {/* overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-[#142018]/85 via-[#1c2b20]/35 to-transparent" />
                <div className="absolute inset-0 bg-[#0f1a12]/10 group-hover:bg-[#0f1a12]/20 transition duration-500" />

                {/* subtle top badge line */}
                <div className="absolute left-5 top-5">
                  <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
                    Premium Service
                  </span>
                </div>

                {/* content */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/80 line-clamp-3">
                    {item.desc}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={`/services/${item.id}`}
                      className="
                        inline-flex items-center justify-center
                        rounded-full
                        border border-white/15
                        bg-white/90
                        px-5 py-2.5
                        text-sm font-semibold text-[#2f4633]
                        shadow-sm
                        transition duration-300
                        hover:bg-[#e8f0e3]
                        hover:text-[#3f6b4b]
                      "
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#88a97b]/20 blur-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}