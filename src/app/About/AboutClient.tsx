"use client";
 
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronDown,
  FiCompass,
  FiDroplet,
  FiHome,
  FiLayers,
  FiShield,
  FiStar,
  FiSun,
  FiTool,
  FiUsers,
} from "react-icons/fi";
import Image from "next/image";
 
const stats = [
  { label: "Projects Completed", value: 240, suffix: "+" },
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Essex County Communities Served", value: 12, suffix: "+" },
];
 
const values = [
  {
    icon: FiShield,
    title: "Built to Last",
    text: "We focus on durable landscaping solutions that protect Windsor properties and perform beautifully season after season.",
  },
  {
    icon: FiCompass,
    title: "Thoughtful Design",
    text: "Every project in Windsor and Essex County is shaped around function, flow, drainage, and a clean visual finish tailored to your home.",
  },
  {
    icon: FiUsers,
    title: "Client First",
    text: "We prioritize clear communication, trust, and a process that feels smooth from consultation to completion — every time.",
  },
  {
    icon: FiTool,
    title: "Craftsmanship",
    text: "We bring precision, care, and detail to every lawn care, sod, interlock, and landscape improvement project across Windsor ON.",
  },
];
 
const processSteps = [
  {
    number: "01",
    title: "Free Consultation",
    text: "We learn about your Windsor property, your concerns, and the outdoor outcome you want to achieve — at no cost.",
    icon: FiHome,
  },
  {
    number: "02",
    title: "Site Assessment",
    text: "We evaluate your lawn, grading, water flow, and site conditions to identify the right landscaping solution.",
    icon: FiDroplet,
  },
  {
    number: "03",
    title: "Planning & Design",
    text: "We prepare a clear landscape plan that balances performance, drainage, appearance, and long-term value for your property.",
    icon: FiLayers,
  },
  {
    number: "04",
    title: "Expert Execution",
    text: "Our Windsor landscaping team completes the work with precision, professionalism, and respect for your property.",
    icon: FiCheckCircle,
  },
];
 
const faqs = [
  {
    q: "Are you a locally owned landscaping company in Windsor Ontario?",
    a: "Yes. We are a locally owned and operated landscaping company based in Windsor, Ontario, proudly serving the entire Essex County region including LaSalle, Tecumseh, and Amherstburg.",
  },
  {
    q: "What landscaping services do you offer in Windsor?",
    a: "We offer full landscaping services in Windsor ON including lawn care, sod installation, interlocking, garden design, grading, drainage solutions, and seasonal snow removal across Windsor and Essex County.",
  },
  {
    q: "Do you work on both residential and commercial properties?",
    a: "Yes. We work with homeowners, property managers, and commercial clients throughout Windsor, LaSalle, Tecumseh, and surrounding Essex County communities.",
  },
  {
    q: "Do you offer free estimates for landscaping in Windsor?",
    a: "Absolutely. Contact us for a free, no-obligation estimate for any landscaping project in Windsor or the surrounding Essex County area.",
  },
];
 
function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const startTime = performance.now();
 
    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * end);
      setCount(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
 
    requestAnimationFrame(animate);
  }, [inView, end]);
 
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
 
function FAQItem({
  item,
  open,
  onToggle,
}: {
  item: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-3xl border border-[#dfe7d7] bg-white/70 backdrop-blur-sm shadow-[0_10px_30px_rgba(32,45,35,0.06)]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
      >
        <span className="text-base md:text-lg font-semibold text-[#2f4633]">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-[#4f7c57]"
        >
          <FiChevronDown size={20} />
        </motion.span>
      </button>
 
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 md:px-6 text-[#5f6f60] leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
 
export default function AboutClient() {
  const [activeValue, setActiveValue] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
 
  const activeValueData = useMemo(() => values[activeValue], [activeValue]);
 
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#243126]">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-svh">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/gmjmoldeh/landscap/hero-2.jpg?tr=f-auto,q-auto')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08110b]/75 via-[#0f1a12]/55 to-[#08110b]/80" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#88a97b]/10 blur-3xl" />
 
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-[6%] lg:pt-50 pt-40 pb-16">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe7d1] backdrop-blur-md">
                About Us — {"Windsor's Landscaping Experts"}
              </span>
 
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white unbounded-font">
               {" Windsor's Landscaping Experts — Built on Precision, Passion & Local Pride"}
              </h1>
 
              <p className="mt-6 max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed text-white/82">
                We create beautiful, functional outdoor spaces for homeowners
                and businesses across Windsor, LaSalle, Tecumseh, and Essex
                County Ontario — from lawn care and sod to interlocking and full
                landscape transformations.
              </p>
 
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.24)] transition duration-300 hover:scale-[1.03]"
                >
                  Get a Free Quote
                </Link>
 
                <Link
                  href="/service"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  Explore Services
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
                  title: "Lawn Care & Sod",
                  icon: FiDroplet,
                  text: "Professional lawn maintenance and sod installation across Windsor ON.",
                },
                {
                  title: "Interlock & Hardscape",
                  icon: FiSun,
                  text: "Beautiful interlocking driveways, patios, and walkways in Windsor.",
                },
                {
                  title: "Trusted Local Team",
                  icon: FiUsers,
                  text: "Windsor-based landscapers with deep roots in Essex County.",
                },
                {
                  title: "Year-Round Service",
                  icon: FiStar,
                  text: "Landscaping, garden care, and snow removal — all seasons covered.",
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
 
      {/* STORY */}
      <section className="relative px-[6%] py-24">
        <div className="pointer-events-none absolute left-10 top-16 h-64 w-64 rounded-full bg-[#88a97b]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[34px] shadow-[0_22px_60px_rgba(32,45,35,0.14)]">
              <Image
                src="https://ik.imagekit.io/gmjmoldeh/landscap/hero-3.jpg?tr=f-auto,q-auto"
                alt="Professional landscaping project in Windsor Ontario"
                width={1600}
                height={800}
                priority
                sizes="100vw"
                className="w-full h-[520px] object-cover"
              />
            </div>
 
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 right-6 max-w-xs rounded-[28px] border border-[#dfe7d7] bg-white/90 p-5 shadow-[0_16px_40px_rgba(32,45,35,0.12)] backdrop-blur-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                Our Windsor Approach
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#5f6f60]">
                Every Windsor landscaping project starts with understanding how
                your property should function before we shape how it looks.
              </p>
            </motion.div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
              Our Story
            </span>
 
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#2f4633]">
             {" Windsor's landscaping should do more than look good"}
            </h2>
 
            <div className="mt-6 space-y-5 text-[#5f6f60] text-base md:text-lg leading-relaxed">
              <p>
                We are a Windsor-based landscaping company built on the belief
                that outdoor spaces should be as functional as they are
                beautiful. Every lawn, garden, and hardscape we create across
                Essex County is designed to last.
              </p>
              <p>
                From sod installation in LaSalle to interlocking driveways in
                Tecumseh and full garden designs in Windsor — we bring
                technical precision and design sensitivity to every project we
                take on.
              </p>
              <p>
                Whether you need seasonal lawn care, grading, drainage
                correction, or a complete outdoor transformation, our Windsor
                team delivers clean results with long-term impact.
              </p>
            </div>
 
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Windsor-based local experts",
                "Lawn care, sod & interlocking",
                "Grading & drainage solutions",
                "Snow removal — all seasons covered",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#dfe7d7] bg-white/70 px-4 py-4"
                >
                  <span className="mt-0.5 text-[#4f7c57]">
                    <FiCheckCircle size={18} />
                  </span>
                  <span className="text-sm font-medium text-[#425244]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
 
      {/* STATS */}
      <section className="px-[6%] pb-24">
        <div className="mx-auto max-w-7xl rounded-[34px] border border-[#dfe7d7] bg-gradient-to-r from-[#edf3e7] via-[#f7f5ef] to-[#eef4e8] p-6 md:p-8 shadow-[0_16px_40px_rgba(32,45,35,0.08)]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55 }}
                className="rounded-[26px] border border-white/60 bg-white/65 p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#2f4633]">
                  <CountUp end={item.value} suffix={item.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-[#6c7a6b]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
 
      {/* VALUES - INTERACTIVE */}
      <section className="px-[6%] pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
              What Drives Us
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#2f4633]">
              Core values that shape every Windsor landscaping project
            </h2>
          </div>
 
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4">
              {values.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeValue === index;
 
                return (
                  <button
                    key={item.title}
                    onClick={() => setActiveValue(index)}
                    className={`rounded-[26px] border p-5 text-left transition duration-300 ${
                      isActive
                        ? "border-[#88a97b] bg-[#edf3e7] shadow-[0_14px_30px_rgba(32,45,35,0.08)]"
                        : "border-[#dfe7d7] bg-white/75 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${
                          isActive
                            ? "bg-[#4f7c57] text-white"
                            : "bg-[#e8efe2] text-[#4f7c57]"
                        }`}
                      >
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-[#2f4633]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#728173]">
                          Click to explore
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
 
            <AnimatePresence mode="wait">
              <motion.div
                key={activeValueData.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-[34px] border border-[#dfe7d7] bg-white p-8 md:p-10 shadow-[0_18px_40px_rgba(32,45,35,0.08)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#88a97b]/12 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#6f8f4e]/10 blur-3xl" />
 
                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#edf3e7] text-[#4f7c57]">
                    <activeValueData.icon size={24} />
                  </div>
 
                  <h3 className="mt-6 text-3xl font-bold text-[#2f4633]">
                    {activeValueData.title}
                  </h3>
 
                  <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-[#5f6f60]">
                    {activeValueData.text}
                  </p>
 
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      "Windsor-focused planning",
                      "Property-first decisions",
                      "Clean and polished finish",
                      "Long-term Essex County value",
                    ].map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-center gap-3 rounded-2xl bg-[#f7f5ef] px-4 py-4"
                      >
                        <FiCheckCircle className="text-[#4f7c57]" />
                        <span className="text-sm font-medium text-[#425244]">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
 
      {/* PROCESS */}
      <section className="px-[6%] pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl text-center mx-auto">
            <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#2f4633]">
              How we deliver landscaping excellence in Windsor Ontario
            </h2>
          </div>
 
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[30px] border border-[#dfe7d7] bg-white p-6 shadow-[0_14px_35px_rgba(32,45,35,0.07)]"
                >
                  <div className="absolute right-5 top-5 text-5xl font-bold text-[#edf3e7]">
                    {step.number}
                  </div>
                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf3e7] text-[#4f7c57] group-hover:bg-[#4f7c57] group-hover:text-white transition">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-[#2f4633]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5f6f60]">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
 
      {/* WHY CHOOSE US */}
      <section className="px-[6%] pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden w-full rounded-[34px] shadow-[0_20px_50px_rgba(32,45,35,0.12)] min-h-[400px]"
          >
            <Image
              src="https://ik.imagekit.io/gmjmoldeh/landscap/hero-4.jpg?tr=f-auto,q-auto"
              alt="Windsor Ontario landscaping project by our team"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[34px] border border-[#dfe7d7] bg-white p-8 md:p-10 shadow-[0_16px_40px_rgba(32,45,35,0.08)]"
          >
            <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
              Why Choose Us
            </span>
 
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#2f4633]">
             {" Windsor's premium standard for outdoor landscaping"}
            </h2>
 
            <div className="mt-8 space-y-5">
              {[
                {
                  title: "Local Windsor expertise",
                  text: "We know Windsor's climate, soil, and neighborhoods — that local knowledge shapes every project we deliver.",
                },
                {
                  title: "Reliable communication",
                  text: "You always know the direction, the scope, and the intention behind the landscaping work on your property.",
                },
                {
                  title: "Detail-focused execution",
                  text: "From lawn edging to final interlock finish, we pay attention to what other Windsor landscapers overlook.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] bg-[#f7f5ef] px-5 py-5"
                >
                  <h3 className="text-lg font-semibold text-[#2f4633]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5f6f60]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
 
      {/* FAQ */}
      <section className="px-[6%] pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#2f4633]">
              Common questions about our Windsor landscaping services
            </h2>
          </div>
 
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>
 
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
                Ready to Get Started?
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#2f4633]">
                Transform your outdoor space in Windsor Ontario
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-[#5f6f60]">
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
                View Our Services
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}