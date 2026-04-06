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

const stats = [
  { label: "Projects Completed", value: 240, suffix: "+" },
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Service Areas Covered", value: 15, suffix: "+" },
];

const values = [
  {
    icon: FiShield,
    title: "Built to Last",
    text: "We focus on durable outdoor solutions that protect your property and perform beautifully over time.",
  },
  {
    icon: FiCompass,
    title: "Thoughtful Design",
    text: "Every project is shaped around function, flow, drainage, and a clean visual finish tailored to your home.",
  },
  {
    icon: FiUsers,
    title: "Client First",
    text: "We prioritize clear communication, trust, and a process that feels smooth from consultation to completion.",
  },
  {
    icon: FiTool,
    title: "Craftsmanship",
    text: "We bring precision, care, and detail to every grading, drainage, and landscape improvement project.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    text: "We learn about your property, your concerns, and the outcome you want to achieve.",
    icon: FiHome,
  },
  {
    number: "02",
    title: "Site Assessment",
    text: "We evaluate slope, grading, water flow, and site conditions to identify the right solution.",
    icon: FiDroplet,
  },
  {
    number: "03",
    title: "Planning & Design",
    text: "We prepare a clear approach that balances performance, drainage, appearance, and long-term value.",
    icon: FiLayers,
  },
  {
    number: "04",
    title: "Execution",
    text: "Our team completes the work with precision, professionalism, and respect for your property.",
    icon: FiCheckCircle,
  },
];

const faqs = [
  {
    q: "What kind of projects does Aquanovus handle?",
    a: "We focus on grading, drainage, outdoor improvements, and landscape-ready property solutions designed for durability and beauty.",
  },
  {
    q: "Do you work with both new builds and existing homes?",
    a: "Yes. We work on both new construction properties and existing homes that need drainage correction, grading, or outdoor upgrades.",
  },
  {
    q: "Can you help if I am not sure what solution I need?",
    a: "Absolutely. We assess the site, explain the issue clearly, and recommend the most practical and visually cohesive solution.",
  },
  {
    q: "Do you serve areas outside your main service zone?",
    a: "In many cases, yes. Contact us with your location and project details, and we will confirm availability.",
  },
];

function CountUp({ end, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * end);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
    return () => {
      start = 0;
    };
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function FAQItem({ item, open, onToggle }) {
  return (
    <div className="rounded-[24px] border border-[#dfe7d7] bg-white/70 backdrop-blur-sm shadow-[0_10px_30px_rgba(32,45,35,0.06)]">
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

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const activeValueData = useMemo(() => values[activeValue], [activeValue]);

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#243126]">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[100svh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Images/hero-2.jpg')" }}
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
                About Aquanovus
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white unbounded-font">
                We Build Outdoor Spaces With Purpose, Precision, and Presence
              </h1>

              <p className="mt-6 max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed text-white/82">
                Aquanovus creates refined outdoor environments through grading,
                drainage, and landscape-focused solutions that protect your
                property and elevate the way it looks and feels.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.24)] transition duration-300 hover:scale-[1.03]"
                >
                  Book a Consultation
                </Link>

                <Link
                  href="/services"
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
                  title: "Functional Solutions",
                  icon: FiDroplet,
                  text: "Drainage and grading that solve real property issues.",
                },
                {
                  title: "Refined Finish",
                  icon: FiSun,
                  text: "Outdoor improvements that feel clean, modern, and intentional.",
                },
                {
                  title: "Trusted Process",
                  icon: FiUsers,
                  text: "Clear communication and dependable project delivery.",
                },
                {
                  title: "Long-Term Value",
                  icon: FiStar,
                  text: "Work designed to enhance both protection and curb appeal.",
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
              <img
                src="/Images/hero-3.jpg"
                alt="Aquanovus project"
                className="h-[520px] w-full object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 right-6 max-w-xs rounded-[28px] border border-[#dfe7d7] bg-white/90 p-5 shadow-[0_16px_40px_rgba(32,45,35,0.12)] backdrop-blur-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                Our Approach
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#5f6f60]">
                Every project starts with understanding how your property should
                function before we shape how it should feel.
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
              Outdoor work should do more than look good
            </h2>

            <div className="mt-6 space-y-5 text-[#5f6f60] text-base md:text-lg leading-relaxed">
              <p>
                At Aquanovus, we believe the best outdoor spaces are built on a
                foundation of purpose. A property should drain correctly,
                perform reliably, and feel visually balanced from every angle.
              </p>
              <p>
                That is why we approach each project with a mix of technical
                thinking and design sensitivity. We do not just improve yards.
                We create spaces that feel intentional, protect your home, and
                support lasting value.
              </p>
              <p>
                Whether the need is drainage correction, grading, or preparing a
                space for a more complete landscape transformation, our team is
                focused on delivering clean results with long-term impact.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Drainage-focused expertise",
                "Refined modern landscape vision",
                "Clear communication throughout",
                "Quality-driven execution",
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
              Core values that shape every project
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
                      "Strategic planning",
                      "Property-first decisions",
                      "Clean and polished finish",
                      "Long-term confidence",
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
              A clear path from first call to final result
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
            className="overflow-hidden rounded-[34px] shadow-[0_20px_50px_rgba(32,45,35,0.12)]"
          >
            <img
              src="/Images/hero-4.jpg"
              alt="Outdoor project by Aquanovus"
              className="h-full min-h-[420px] w-full object-cover"
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
              Why Aquanovus
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#2f4633]">
              A premium standard for outdoor improvement
            </h2>

            <div className="mt-8 space-y-5">
              {[
                {
                  title: "Function and aesthetics together",
                  text: "We create results that solve issues and elevate the visual identity of your property.",
                },
                {
                  title: "Reliable communication",
                  text: "You always know the direction, the scope, and the intention behind the work.",
                },
                {
                  title: "Detail-focused execution",
                  text: "From surface grading to final finish, we pay attention to what others overlook.",
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
              Common questions
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
                Let’s Create Something Exceptional
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#2f4633]">
                Ready to transform your outdoor space?
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-[#5f6f60]">
                Connect with Aquanovus to discuss your property, your goals,
                and the right next step for a more functional and beautiful
                outdoor environment.
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