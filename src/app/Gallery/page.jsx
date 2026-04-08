"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiImage,
  FiLayers,
  FiX,
} from "react-icons/fi";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    title: "Modern Backyard Layout",
    category: "Backyard",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/hero-1.jpeg",
    size: "large",
    desc: "A refined backyard transformation with clean grading and elegant outdoor flow.",
  },
  {
    id: 2,
    title: "Drainage Correction",
    category: "Drainage",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/hero-2.jpg",
    size: "small",
    desc: "Smart drainage design that protects the property and improves water flow.",
  },
  {
    id: 3,
    title: "Landscape Preparation",
    category: "Preparation",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/hero-3.jpg",
    size: "small",
    desc: "Site preparation designed for structure, beauty, and future landscaping work.",
  },
  {
    id: 4,
    title: "Front Yard Upgrade",
    category: "Front Yard",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/frontyard.jpg",
    size: "medium",
    desc: "A curb appeal upgrade with balance, texture, and a premium visual finish.",
  },
  {
    id: 5,
    title: "Grading & Leveling",
    category: "Grading",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/design-build-main.jpg",
    size: "medium",
    desc: "Precision grading that improves both functionality and the final landscape result.",
  },
  {
    id: 6,
    title: "Outdoor Flow Design",
    category: "Backyard",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/hero-6.jpg",
    size: "small",
    desc: "An outdoor arrangement focused on movement, structure, and comfort.",
  },
  {
    id: 7,
    title: "Water Control System",
    category: "Drainage",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/backyard.jpg",
    size: "large",
    desc: "A drainage-focused solution made to handle runoff with confidence.",
  },
  {
    id: 8,
    title: "Property Enhancement",
    category: "Front Yard",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/front-yard.jpg",
    size: "small",
    desc: "An exterior update that strengthens the first impression of the home.",
  },
  {
    id: 9,
    title: "Site Readiness",
    category: "Preparation",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/hero-4.jpg",
    size: "medium",
    desc: "Ground preparation completed with a clean finish and clear project direction.",
  },
  {
    id: 10,
    title: "Elegant Outdoor Structure",
    category: "Backyard",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/Full.jpg",
    size: "small",
    desc: "Designed for function and visual calm with a premium outdoor identity.",
  },
  {
    id: 11,
    title: "Slope Control",
    category: "Grading",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/drainage.jpg",
    size: "medium",
    desc: "A carefully managed slope solution to improve site performance.",
  },
 
];

const categories = ["All", "Backyard", "Drainage", "Preparation", "Front Yard", "Grading"];

function getCardHeight(size) {
  if (size === "large") return "h-[420px]";
  if (size === "medium") return "h-[320px]";
  return "h-[260px]";
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const featuredItem = filteredItems[0] || galleryItems[0];

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, filteredItems.length]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#243126]">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[90svh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://ik.imagekit.io/gmjmoldeh/landscap/hero-4.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08110b]/78 via-[#0f1a12]/55 to-[#08110b]/82" />
        <div className="pointer-events-none absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#88a97b]/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-7xl items-center px-[6%] lg:pt-50 pt-30 pb-14">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe7d1] backdrop-blur-md">
                Aquanovus Gallery
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.04] tracking-tight text-white unbounded-font">
                Explore Outdoor Work That Feels as Good as It Looks
              </h1>

              <p className="mt-6 max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed text-white/82">
                Browse a curated showcase of grading, drainage, and landscape
                projects shaped with precision, structure, and a premium visual finish.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#gallery-grid"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.24)] transition duration-300 hover:scale-[1.03]"
                >
                  View Gallery
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  Start Your Project
                  <FiArrowRight />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="grid gap-5 sm:grid-cols-2"
            >
              {[
                {
                  icon: FiImage,
                  title: "Curated Showcase",
                  text: "A selection of projects built around function, detail, and visual balance.",
                },
                {
                  icon: FiLayers,
                  title: "Multiple Categories",
                  text: "Explore drainage, grading, preparation, and outdoor transformations.",
                },
                {
                  icon: FiGrid,
                  title: "Interactive Browsing",
                  text: "Filter by category and open every project in a premium full-screen view.",
                },
                {
                  icon: FiArrowRight,
                  title: "Project Inspiration",
                  text: "Use the gallery to imagine what is possible for your own property.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="rounded-[28px] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-[#dbe7d1]">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/78">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED PREVIEW */}
      <section className="px-[6%] py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                Featured Project
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#2f4633]">
                A closer look at our visual standard
              </h2>
            </div>

            <div className="rounded-full border border-[#dfe7d7] bg-white px-5 py-3 text-sm font-medium text-[#5f6f60] shadow-sm">
              {filteredItems.length} projects in this view
            </div>
          </div>

          <motion.div
            layout
            className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <motion.div
              key={featuredItem.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65 }}
              className="overflow-hidden rounded-[34px] border border-[#dfe7d7] bg-white shadow-[0_18px_40px_rgba(32,45,35,0.08)]"
            >
              <div className="relative">
               <Image
    src={featuredItem.image}
    alt={featuredItem.title}
    fill
    sizes="100vw"
    className="object-cover"
    loading="lazy"
  />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101812]/70 via-transparent to-transparent" />
                <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {featuredItem.category}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2f4633]">
                  {featuredItem.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5f6f60]">
                  {featuredItem.desc}
                </p>

                <button
                  onClick={() => openLightbox(0)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.22)] transition duration-300 hover:scale-[1.03]"
                >
                  Open Featured Project
                  <FiArrowRight />
                </button>
              </div>
            </motion.div>

            <div className="grid gap-5">
              {filteredItems.slice(1, 4).map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onClick={() => openLightbox(idx + 1)}
                  className="group flex items-center gap-4 rounded-[26px] border border-[#dfe7d7] bg-white p-4 text-left shadow-[0_12px_30px_rgba(32,45,35,0.06)] transition hover:-translate-y-1"
                >
                  <Image
    src={item.image}
    alt={item.title}
    fill
    sizes="112px"
    className="rounded-[18px] object-cover"
    loading="lazy"
  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d7c6a]">
                      {item.category}
                    </p>
                    <h4 className="mt-2 text-lg font-semibold text-[#2f4633]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-[#5f6f60] line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section id="gallery-grid" className="relative px-[6%] pb-24">
        <div className="pointer-events-none absolute left-10 top-10 h-64 w-64 rounded-full bg-[#88a97b]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#6f8f4e]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 ${
                    active
                      ? "border-[#88a97b] bg-[#edf3e7] text-[#2f4633] shadow-sm"
                      : "border-[#dfe7d7] bg-white text-[#5f6f60] hover:bg-[#f1f5ed]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.button
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  onClick={() => openLightbox(index)}
                  className={`group relative overflow-hidden rounded-[30px] border border-[#dfe7d7] bg-white shadow-[0_14px_35px_rgba(32,45,35,0.07)] ${getCardHeight(
                    item.size
                  )}`}
                >
                <Image
    src={item.image}
    alt={item.title}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover transition duration-700 group-hover:scale-110"
    loading="lazy"
  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101812]/85 via-[#101812]/20 to-transparent" />
                  <div className="absolute inset-0 bg-[#0f1a12]/10 transition duration-500 group-hover:bg-[#0f1a12]/18" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {item.category}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                    <h3 className="text-xl md:text-2xl font-bold leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80 line-clamp-2">
                      {item.desc}
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-sm">
                      View Project
                      <FiArrowRight size={14} />
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxOpen && filteredItems[activeIndex] && (
          <motion.div
            className="fixed inset-0 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-[#0c130f]/90 backdrop-blur-md"
              onClick={() => setLightboxOpen(false)}
            />

            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                transition={{ duration: 0.28 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl"
              >
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="absolute right-2 top-2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  <FiX size={22} />
                </button>

                <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                  <Image
    src={filteredItems[activeIndex].image}
    alt={filteredItems[activeIndex].title}
    fill
    sizes="100vw"
    className="object-contain"
    loading="lazy"
  />
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                  <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                      {filteredItems[activeIndex].category}
                    </p>
                    <h3 className="mt-2 text-2xl md:text-3xl font-bold">
                      {filteredItems[activeIndex].title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm md:text-base leading-relaxed text-white/80">
                      {filteredItems[activeIndex].desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 justify-end">
                    <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-md">
                      {activeIndex + 1} / {filteredItems.length}
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

      {/* CTA */}
      <section className="px-[6%] pb-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-[#dfe7d7] bg-gradient-to-r from-[#edf3e7] via-[#f7f5ef] to-[#eef4e8] p-8 md:p-10 lg:p-12 shadow-[0_16px_40px_rgba(32,45,35,0.08)]"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-block rounded-full bg-[#dfead6] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                Inspired by what you see?
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#2f4633]">
                Let’s create something custom for your property
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-[#5f6f60]">
                Reach out to Aquanovus and start planning an outdoor project
                built around structure, beauty, and long-term confidence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.22)] transition duration-300 hover:scale-[1.03]"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#d7dfd1] bg-white px-7 py-3.5 text-sm font-semibold text-[#2f4633] transition hover:bg-[#edf3e7]"
              >
                View Services
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}