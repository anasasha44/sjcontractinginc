"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const options = [
    {
        id: "backyard",
        title: "Backyard Transformation",
        desc: "Turn your backyard into a functional and beautiful outdoor living space.",
        image: "/Images/backyard.jpg",
    },
    {
        id: "drainage",
        title: "Drainage Solutions",
        desc: "Protect your property with advanced grading and drainage systems.",
        image: "/Images/drainage.jpg",
    },
    {
        id: "frontyard",
        title: "Front Yard Upgrade",
        desc: "Boost curb appeal with clean, modern landscape design.",
        image: "/Images/frontyard.jpg",
    },
    {
        id: "full",
        title: "Full Landscape Design",
        desc: "Complete outdoor transformation tailored to your property.",
        image: "/Images/full-landscape.jpg",
    },
];

export default function InteractiveLandscapeSection() {
    const [active, setActive] = useState(options[0]);

    return (
        <section className="bg-[#f7f5ef] py-24 px-[6%]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT OPTIONS */}
                <div className="space-y-4">
                    <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                        Choose Your Project
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#2f4633]">
                        Design Your Outdoor Vision
                    </h2>

                    <div className="mt-6 space-y-3">
                        {options.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActive(item)}
                                className={`w-full text-left px-5 py-4 rounded-2xl border transition ${active.id === item.id
                                    ? "bg-[#3f6b4b] text-white border-[#3f6b4b]"
                                    : "bg-white border-[#dfe7d7] text-[#2f4633] hover:bg-[#edf3e7]"
                                    }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.4 }}
                            className="rounded-[30px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                        >
                            <img
                                src={active.image}
                                alt={active.title}
                                className="w-full h-[350px] object-cover"
                            />

                            <div className="bg-white p-6 md:p-8">
                                <h3 className="text-2xl font-bold text-[#2f4633]">
                                    {active.title}
                                </h3>

                                <p className="mt-3 text-[#5f6f60] leading-relaxed">
                                    {active.desc}
                                </p>

                                <Link
                                    href="/Contact"
                                    className="
    mt-5 inline-block rounded-full
    bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e]
    px-6 py-3 text-white font-semibold
    shadow-md transition hover:scale-[1.02]
  "
                                >
                                    Get This Service
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}