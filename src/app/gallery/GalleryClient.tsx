"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
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
    title: "Modern Backyard Landscaping",
    category: "Backyard",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/hero-1.jpeg?tr=f-auto,q-auto",
    size: "large",
    desc: "A full backyard transformation in Windsor Ontario — clean grading, elegant layout, and premium outdoor flow.",
  },
  {
    id: 2,
    title: "Cutting Pre Service Windsor",
    category: "Cutting",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/Cutpre.jpg?tr=f-auto,q-auto",
    size: "small",
    desc: "Precision cutting service for a Windsor property — ensures clean preparation and accurate results for all surq work.",
  },
  {
    id: 3,
    title: "Landscape Preparation Essex County",
    category: "Preparation",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/hero-3.jpg?tr=f-auto,q-auto",
    size: "small",
    desc: "Site preparation in Essex County designed for structure, beauty, and future sod or garden installation.",
  },
  {
    id: 4,
    title: "Front Yard Upgrade Windsor",
    category: "Front Yard",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/frontyard.jpg?tr=f-auto,q-auto",
    size: "medium",
    desc: "A curb appeal upgrade in Windsor ON — balanced landscaping, rich texture, and a premium visual finish.",
  },
  {
    id: 5,
    title: "Lot Grading & Leveling Windsor",
    category: "Grading",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/design-build-main.jpg?tr=f-auto,q-auto",
    size: "medium",
    desc: "Precision lot grading in Windsor that improves drainage, functionality, and the final landscape result.",
  },
  {
    id: 6,
    title: "Backyard Flow Design LaSalle",
    category: "Backyard",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/hero-6.jpg?tr=f-auto,q-auto",
    size: "small",
    desc: "An outdoor arrangement in LaSalle Ontario focused on movement, structure, and year-round comfort.",
  },
  {
    id: 7,
    title: "Water Control & Drainage System",
    category: "Drainage",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/backyard.jpg?tr=f-auto,q-auto",
    size: "large",
    desc: "A drainage-focused landscaping solution in Windsor designed to handle seasonal runoff with confidence.",
  },
  {
    id: 8,
    title: "Front Yard Landscaping Tecumseh",
    category: "Front Yard",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/front-yard.jpg?tr=f-auto,q-auto",
    size: "small",
    desc: "Front yard landscaping in Tecumseh ON — an exterior update that strengthens the first impression of the home.",
  },
  {
    id: 9,
    title: "Site Readiness Windsor Ontario",
    category: "Preparation",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/hero-4.jpg?tr=f-auto,q-auto",
    size: "medium",
    desc: "Ground preparation in Windsor completed with a clean finish and clear direction for the next landscaping phase.",
  },
  {
    id: 10,
    title: "Backyard Outdoor Structure",
    category: "Backyard",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/Full.jpg?tr=f-auto,q-auto",
    size: "small",
    desc: "Designed for function and visual calm — a premium outdoor identity for a Windsor Essex County property.",
  },
  {
    id: 11,
    title: "Slope & Grade Control Essex County",
    category: "Grading",
    image: "https://ik.imagekit.io/gmjmoldeh/landscap/drainage.jpg?tr=f-auto,q-auto",
    size: "medium",
    desc: "A carefully managed slope grading solution in Essex County to improve site performance and drainage.",
  },
];

const categories = [
  "All",
  "Backyard",
  "Drainage",
  "Preparation",
  "Front Yard",
  "Grading",
  "Cutting",
];

function getCardHeight(size: string) {
  if (size === "large") return "h-[420px]";
  if (size === "medium") return "h-[320px]";
  return "h-[260px]";
}

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const safeActiveIndex =
    activeIndex >= filteredItems.length ? 0 : activeIndex;

  const featuredItem = filteredItems[0] || galleryItems[0];

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = useCallback(() => {
    setActiveIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  }, [filteredItems.length]);

  const prevImage = useCallback(() => {
    setActiveIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#243126]">
      {/* HERO */}
      <section className="relative min-h-[90svh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/gmjmoldeh/landscap/hero-4.jpg?tr=f-auto,q-auto')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08110b]/78 via-[#0f1a12]/55 to-[#08110b]/82" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#88a97b]/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-7xl items-center px-[6%] pb-14 pt-30 lg:pt-50">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe7d1] backdrop-blur-md">
                Landscaping Portfolio — Windsor, Ontario
              </span>

              <h1 className="unbounded-font mt-5 text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Real Landscaping Projects in Windsor & Essex County
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/82 md:text-lg lg:text-xl">
                Browse our portfolio of completed landscaping projects across
                Windsor, LaSalle, Tecumseh, and Essex County Ontario — from
                lawn care and sod to interlocking, grading, and drainage.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#gallery-grid"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.24)] transition duration-300 hover:scale-[1.03]"
                >
                  Browse Our Work
                </a>

                <Link
                  href="/Contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  Get a Free Quote
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
                  title: "Windsor Projects",
                  text: "Real landscaping results from Windsor, LaSalle, Tecumseh and Essex County.",
                },
                {
                  icon: FiLayers,
                  title: "Every Service Shown",
                  text: "Sod, interlock, garden design, grading, drainage and full transformations.",
                },
                {
                  icon: FiGrid,
                  title: "Filter by Category",
                  text: "Browse by service type and open every project in full screen.",
                },
                {
                  icon: FiArrowRight,
                  title: "Get Inspired",
                  text: "See what&apos;s possible for your Windsor or Essex County property.",
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
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f4633] md:text-4xl lg:text-5xl">
                A closer look at our Windsor landscaping standard
              </h2>
            </div>

            <div className="rounded-full border border-[#dfe7d7] bg-white px-5 py-3 text-sm font-medium text-[#5f6f60] shadow-sm">
              {filteredItems.length} projects in this view
            </div>
          </div>

          <motion.div layout className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              key={featuredItem.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65 }}
              className="overflow-hidden rounded-[34px] border border-[#dfe7d7] bg-white shadow-[0_18px_40px_rgba(32,45,35,0.08)]"
            >
              <div className="relative h-[380px]">
                <Image
                  src={featuredItem.image}
                  alt={`${featuredItem.title} — Windsor Ontario landscaping project`}
                  fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"

                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101812]/70 via-transparent to-transparent" />
                <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {featuredItem.category}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#2f4633] md:text-3xl">
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

            <div className="grid content-start gap-5">
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
                  <div className="relative h-[80px] w-[112px] shrink-0 overflow-hidden rounded-[18px]">
                    <Image
                      src={item.image}
                      alt={`${item.title} — Windsor landscaping`}
                      fill
                      sizes="112px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d7c6a]">
                      {item.category}
                    </p>
                    <h4 className="mt-2 text-lg font-semibold text-[#2f4633]">
                      {item.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-sm text-[#5f6f60]">
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
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveIndex(0);
                  }}
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
                    alt={`${item.title} — Windsor Ontario landscaping`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101812]/85 via-[#101812]/20 to-transparent" />
                  <div className="absolute inset-0 bg-[#0f1a12]/10 transition duration-500 group-hover:bg-[#0f1a12]/18" />

                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {item.category}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                    <h3 className="text-xl font-bold leading-snug md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80">
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
        {lightboxOpen && filteredItems[safeActiveIndex] && (
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

                <div className="relative h-[60vh] overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                  <Image
                    src={filteredItems[safeActiveIndex].image}
                    alt={`${filteredItems[safeActiveIndex].title} — Windsor Ontario landscaping project`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                  <div className="rounded-[24px] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                      {filteredItems[safeActiveIndex].category}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                      {filteredItems[safeActiveIndex].title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
                      {filteredItems[safeActiveIndex].desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-end gap-3">
                    <div className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-md">
                      {safeActiveIndex + 1} / {filteredItems.length}
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
          className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-[#dfe7d7] bg-gradient-to-r from-[#edf3e7] via-[#f7f5ef] to-[#eef4e8] p-8 shadow-[0_16px_40px_rgba(32,45,35,0.08)] md:p-10 lg:p-12"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-block rounded-full bg-[#dfead6] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                Inspired by what you see?
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f4633] md:text-4xl">
                Let&apos;s create something custom for your Windsor property
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5f6f60] md:text-lg">
                Contact Windsor&apos;s trusted landscaping team for a free quote.
                Serving Windsor, LaSalle, Tecumseh, Amherstburg, and all of
                Essex County Ontario.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/Contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.22)] transition duration-300 hover:scale-[1.03]"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/service"
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