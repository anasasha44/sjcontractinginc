"use client";

import { motion } from "framer-motion";
import { FaTools, FaLeaf, FaTruck } from "react-icons/fa";

const services = [
  {
    id: "contracting",
    title: "Contracting",
    desc: "Full-scale construction and contracting solutions built with precision, reliability, and long-term durability.",
    icon: FaTools,
    color: "#3f6b4b",
  },
  {
    id: "landscaping",
    title: "Landscaping",
    desc: "Modern outdoor landscaping solutions that transform spaces into functional and visually stunning environments.",
    icon: FaLeaf,
    color: "#5c7f52",
  },
  {
    id: "mechanical",
    title: "Mobile Mechanical",
    desc: "On-site mechanical services delivered fast, efficiently, and wherever you need them.",
    icon: FaTruck,
    color: "#6f8f4e",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section className="relative bg-[#f7f5ef] py-28 px-[6%] overflow-hidden">

      {/* background */}
      <div className="absolute top-0 left-0 h-72 w-72 bg-[#88a97b]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-[#6f8f4e]/10 blur-3xl rounded-full" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto relative z-10"
      >

        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.span
            variants={item}
            className="inline-block text-xs uppercase tracking-[0.25em] bg-[#e3ecdc] text-[#58704e] px-4 py-1.5 rounded-full"
          >
            What We Do
          </motion.span>

          <motion.h2
            variants={item}
            className="mt-5 text-3xl md:text-5xl font-bold text-[#2f4633]"
          >
            Three Core Services
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-4 text-[#5f6f60] max-w-2xl mx-auto"
          >
            We focus on delivering three specialized services with a clear, direct approach.
          </motion.p>
        </div>

        {/* ================= DESKTOP (TIMELINE) ================= */}
        <div className="relative hidden md:block">

          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[#dfe7d7] -translate-x-1/2" />

          {services.map((s, index) => {
            const Icon = s.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={s.id}
                variants={item}
                className={`relative flex items-center mb-20 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-1/2 p-10 bg-white border border-[#dfe7d7] shadow-lg rounded-2xl relative">

                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4"
                    style={{ backgroundColor: s.color }}
                  >
                    <Icon />
                  </div>

                  <h3 className="text-2xl font-bold text-[#2f4633]">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-[#5f6f60]">
                    {s.desc}
                  </p>

                  <div className="absolute top-4 right-4 text-xs font-bold text-[#88a97b]">
                    0{index + 1}
                  </div>
                </div>

                {/* center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#88a97b] rounded-full border-4 border-[#f7f5ef]" />
              </motion.div>
            );
          })}
        </div>

        {/* ================= MOBILE (CARDS) ================= */}
        <div className="md:hidden grid gap-6">
          {services.map((s, index) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.id}
                variants={item}
                className="bg-white border border-[#dfe7d7] rounded-2xl p-6 shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: s.color }}
                  >
                    <Icon />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#2f4633]">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[#88a97b] font-bold">
                      0{index + 1}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-[#5f6f60] text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}