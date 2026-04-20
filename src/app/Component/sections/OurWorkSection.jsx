"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import {
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiImage,
} from "react-icons/fi";
import Image from "next/image";

const allImages = [
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/backyard.jpg",
    title: "Backyard Transformation",
    category: "Backyard",
    desc: "A refined outdoor transformation with structure, elegance, and a polished natural finish.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/design-build-g1.jpg",
    title: "Custom Design Build",
    category: "Landscape Prep",
    desc: "Prepared with precision for a balanced, elevated, and lasting landscape result.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/design-build-main.jpg",
    title: "Design Build Showcase",
    category: "Landscape Prep",
    desc: "A complete outdoor concept brought together with detail, balance, and craftsmanship.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/cutpre.jpg",
    title: "Cutting Pre Service",
    category: "Cutting",
    desc: "Professional pre-service cutting to prepare surfaces accurately and ensure clean, precise results.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/front-yard.jpg",
    title: "Front Yard Refresh",
    category: "Front Yard",
    desc: "A curb-appeal focused finish with a clean, premium, and welcoming look.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/frontyard.jpg",
    title: "Front Yard Upgrade",
    category: "Front Yard",
    desc: "A neat and balanced entry landscape designed for a strong first impression.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/full-landscape.jpg",
    title: "Full Landscape Project",
    category: "Landscape Prep",
    desc: "Explore a wider showcase of outdoor transformations, grading, and landscape upgrades.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/Full.jpg",
    title: "Complete Outdoor Space",
    category: "Landscape Prep",
    desc: "A complete exterior upgrade combining functionality, layout, and visual harmony.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/irrigation-systems-g1.jpg",
    title: "Irrigation Systems Detail",
    category: "Drainage",
    desc: "Smart water distribution solutions installed for consistency, efficiency, and performance.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/irrigation-systems-main.jpg",
    title: "Irrigation Systems Project",
    category: "Drainage",
    desc: "A professional irrigation setup designed for healthy, efficient long-term maintenance.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/lawn-maintenance-g1.jpg",
    title: "Lawn Maintenance Result",
    category: "Backyard",
    desc: "A clean, healthy, and professionally maintained lawn with a refined final look.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/lawn-maintenance-main.jpg",
    title: "Lawn Care Showcase",
    category: "Backyard",
    desc: "Consistent lawn care that keeps the landscape vibrant, healthy, and visually balanced.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/lot-grading-g1.jpeg",
    title: "Lot Grading Detail",
    category: "Drainage",
    desc: "Grading work completed to support proper drainage and a stable outdoor foundation.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/lot-grading-g2.jpg",
    title: "Lot Grading Progress",
    category: "Drainage",
    desc: "A precision-focused grading solution built for performance and long-term site control.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/lot-grading-main.jpg",
    title: "Lot Grading & Drainage",
    category: "Drainage",
    desc: "A property protection solution centered on proper water flow and grading control.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/sod-turf-installation-g1.jpg",
    title: "Sod & Turf Installation",
    category: "Backyard",
    desc: "Fresh turf installation completed with a smooth, natural, and polished final result.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/sod-turf-installation-main.jpg",
    title: "Turf Installation Showcase",
    category: "Backyard",
    desc: "A clean and modern turf installation built for beauty, simplicity, and durability.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/turf-painting-g1.jpg",
    title: "Turf Painting Detail",
    category: "Backyard",
    desc: "A color restoration finish designed to instantly refresh the lawn’s visual appeal.",
  },
  {
    src: "https://ik.imagekit.io/gmjmoldeh/landscap/turf-painting-main.JPG",
    title: "Turf Painting Project",
    category: "Backyard",
    desc: "A vibrant lawn refresh that restores visual richness and a professionally kept look.",
  },
];

export default function OurWorkSection() {
  const previewImages = allImages.slice(0, 7);
  const featuredImage = allImages[7] || allImages[0];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeImage = useMemo(() => allImages[currentIndex], [currentIndex]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalOpen) return;

      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, prevImage, nextImage]);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <section className="relative overflow-hidden bg-[#f7f5ef] px-[6%] py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#88a97b]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-64 w-64 rounded-full bg-[#6f8f4e]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-20 h-72 w-72 rounded-full bg-[#dbe7d1]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
            Signature Portfolio
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f4633] md:text-5xl lg:text-6xl">
            Our Work
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#5f6f60] md:text-lg">
            A curated glimpse into outdoor spaces shaped with precision,
            function, and a refined natural finish.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {previewImages.map((item, i) => {
              const tall = i === 0 || i === 3;

              return (
                <motion.button
                  key={`${item.src}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.55, delay: i * 0.06 }}
                  whileHover={{ y: -8 }}
                  onClick={() => openModal(i)}
                  className={`group relative overflow-hidden rounded-[30px] border border-[#dfe7d7] bg-white shadow-[0_18px_40px_rgba(32,45,35,0.10)] ${
                    tall ? "h-[380px]" : "h-[260px]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101812]/85 via-[#101812]/20 to-transparent" />
                  <div className="absolute inset-0 bg-[#0f1a12]/10 transition duration-500 group-hover:bg-[#0f1a12]/20" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {item.category}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                    <h3 className="text-xl font-bold md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80">
                      {item.desc}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[34px] border border-[#dfe7d7] bg-white shadow-[0_22px_55px_rgba(32,45,35,0.12)]"
          >
            <button
              onClick={() => openModal(7)}
              className="group relative block h-full w-full text-left"
            >
              <Image
                src={featuredImage.src}
                alt={featuredImage.title}
                fill
                sizes="100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0c130f]/88 via-[#0c130f]/22 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                Featured Project
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] backdrop-blur-sm">
                  <FiImage size={14} />
                  Full Gallery
                </div>

                <h3 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
                  Explore More of Our Signature Work
                </h3>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/82 md:text-base">
                  Open the full showcase and browse a wider collection of
                  outdoor transformations, drainage improvements, and landscape
                  upgrades.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-[#2f4633] transition duration-300 group-hover:bg-[#e8f0e3] group-hover:text-[#3f6b4b]">
                  View Full Gallery
                  <FiArrowRight />
                </div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && activeImage && (
          <motion.div
            className="fixed inset-0 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#0d140f]/88 backdrop-blur-md"
              onClick={() => setModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.97 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setModalOpen(false)}
                  className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <IoClose size={24} />
                </button>

                <div className="relative h-[70vh] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                  <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                      {activeImage.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                      {activeImage.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
                      {activeImage.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-end gap-3">
                    <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-md">
                      {currentIndex + 1} / {allImages.length}
                    </div>

                    <button
                      onClick={prevImage}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                    >
                      <FiChevronLeft size={22} />
                    </button>

                    <button
                      onClick={nextImage}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                    >
                      <FiChevronRight size={22} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}