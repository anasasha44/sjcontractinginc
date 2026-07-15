"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronDown,
  FiCloudSnow,
  FiDroplet,
  FiHome,
  FiShield,
  FiSun,
  FiTool,
  FiTruck,
  FiUsers,
} from "react-icons/fi";
import Image from "next/image";

/**
 * SJ Contracting Inc. — About Page
 * Five divisions, one crew: Home Renovation, Irrigation & Sprinklers,
 * Mobile Heavy-Duty Mechanic, Landscaping, and Annual Property
 * Maintenance Contracts. Serving Windsor, Essex, Chatham & Kingsville.
 *
 * NOTE: Image src values below reuse the existing ImageKit account/folder
 * from the previous version of this page as placeholders. Swap them for
 * real SJ Contracting project photos (kitchen remodel, sprinkler head,
 * service truck, lawn/interlock, snow removal) before shipping.
 */

const stats = [
  { label: "Service Divisions Under One Roof", value: 5, suffix: "" },
  { label: "Years of Combined Trade Experience", value: 15, suffix: "+" },
  { label: "Municipalities Served", value: 4, suffix: "+" },
  { label: "Mechanic Emergency Response", value: 24, suffix: "/7" },
];

const divisions = [
  {
    icon: FiHome,
    title: "Home Renovation",
    tag: "Kitchens · Baths · Basements · Flooring",
    text: "Full interior renovations — kitchen remodeling, bathroom renovation, basement finishing, flooring installation, painting, and general residential improvements — finished to a standard you'd put your own name on.",
  },
  {
    icon: FiDroplet,
    title: "Irrigation & Sprinkler Systems",
    tag: "Install · Repair · Seasonal Startup & Shutdown",
    text: "Design, installation, and repair of residential sprinkler systems, so your lawn gets exactly the water it needs without you thinking about it.",
  },
  {
    icon: FiTruck,
    title: "Mobile Heavy-Duty Mechanic",
    tag: "24 Hours · 7 Days · We Come To You",
    text: "Emergency road service, truck and trailer repairs, hydraulic systems, engine diagnostics, and heavy equipment repairs — on site, any hour, so a breakdown doesn't become a lost day.",
  },
  {
    icon: FiSun,
    title: "Landscaping",
    tag: "Lawns · Gardens · Interlock · Property Planting",
    text: "Lawn installation and maintenance, garden design, tree and shrub planting, mulch and stone installation, and interlocking patios — landscaping built for how the property is actually used.",
  },
  {
    icon: FiCloudSnow,
    title: "Property Maintenance Contracts",
    tag: "Snow Removal · Lawn Mowing · Year-Round",
    text: "Annual contracts that cover a property in every season — snow removal in the winter, lawn mowing through the growing season, and maintenance in between, with 24/7 customer support.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "One Call, One Team",
    text: "Tell us what's going on — a renovation, a stalled truck, an overgrown lawn, a maintenance contract — and we route it to the right division, free of charge.",
    icon: FiHome,
  },
  {
    number: "02",
    title: "Site Assessment",
    text: "We assess the property, the equipment, or the job site directly, so the plan is built around real conditions, not guesswork.",
    icon: FiTool,
  },
  {
    number: "03",
    title: "Plan & Free Quote",
    text: "A clear scope, materials, and timeline, priced honestly, before any tools come out.",
    icon: FiDroplet,
  },
  {
    number: "04",
    title: "Expert Execution",
    text: "Licensed, insured crews for each trade complete the work with the same standard, whether it's a kitchen or a hydraulic line.",
    icon: FiCheckCircle,
  },
];

const whyChooseUs = [
  {
    title: "One call solves it",
    text: "Renovation, landscaping, irrigation, a broken-down truck, or a snow-covered lot — one company, one number, five trades.",
  },
  {
    title: "Local Windsor-Essex crew",
    text: "We know the climate, the soil, and the roads across Windsor, Essex, Chatham & Kingsville — that shapes how every job is planned.",
  },
  {
    title: "Fully insured, every division",
    text: "From interior renovation to heavy equipment repair, every division operates fully insured, with clear communication start to finish.",
  },
];

const faqs = [
  {
    q: "Is SJ Contracting Inc. really one company for all these services?",
    a: "Yes. SJ Contracting Inc. is a single Windsor, Ontario based company operating five divisions — home renovation, irrigation & sprinklers, mobile heavy-duty mechanic services, landscaping, and annual property maintenance contracts.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Windsor, Essex, Chatham, and Kingsville, along with the surrounding Essex County area, for both residential and commercial properties.",
  },
  {
    q: "Is the mobile heavy-duty mechanic service really available 24/7?",
    a: "Yes. Our mobile heavy-duty mechanic team provides emergency road service, truck and trailer repairs, and heavy equipment repairs 24 hours a day, 7 days a week — we come to you.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes, free estimates are available for renovation, landscaping, irrigation, and annual property maintenance contracts.",
  },
  {
    q: "Do you work with commercial and residential clients?",
    a: "Yes. We work with homeowners, property managers, and commercial clients throughout Windsor, Essex, Chatham, and Kingsville.",
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
    <div className="rounded-3xl border border-[#e6ded0] bg-white/70 backdrop-blur-sm shadow-[0_10px_30px_rgba(20,24,26,0.06)]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
      >
        <span className="text-base md:text-lg font-semibold text-[#22261f]">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-[#a9803a]"
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
            <div className="px-5 pb-5 md:px-6 text-[#5f6259] leading-relaxed">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutClient() {
  const [activeDivision, setActiveDivision] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const activeDivisionData = useMemo(
    () => divisions[activeDivision],
    [activeDivision]
  );

  return (
    <main className="min-h-screen bg-[#f4efe4] text-[#23281f]">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-svh bg-[#14181a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/gmjmoldeh/landscap/hero-2.jpg?tr=f-auto,q-auto')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1011]/90 via-[#14181a]/80 to-[#0d1011]/95" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[#c69a4e]/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-[6%] lg:pt-50 pt-40 pb-16">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#e7d9b6] backdrop-blur-md">
                About Us — Windsor-Essex&apos;s Multi-Trade Contracting Crew
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-5xl font-bold leading-[1.05] tracking-tight text-white unbounded-font">
                One Crew. Five Trades. Every Property, Covered.
              </h1>

              <p className="mt-6 max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed text-white/82">
                SJ Contracting Inc. handles the renovation, the sprinkler
                line, the landscape, the snow-covered lot, and the truck that
                broke down on the way to the job site — all under one roof,
                serving Windsor, Essex, Chatham & Kingsville.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/Contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#a9803a] via-[#c69a4e] to-[#d6b06a] px-7 py-3.5 text-sm font-semibold text-[#1a1a16] shadow-[0_10px_25px_rgba(198,154,78,0.28)] transition duration-300 hover:scale-[1.03]"
                >
                  Get a Free Quote
                </Link>

                <Link
                  href="/service"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  Explore All Services
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
                  title: "Home Renovation",
                  icon: FiHome,
                  text: "Kitchens, baths, basements & flooring, done right.",
                },
                {
                  title: "Mobile Mechanic",
                  icon: FiTruck,
                  text: "24/7 heavy-duty truck & equipment repair, on site.",
                },
                {
                  title: "Irrigation & Landscaping",
                  icon: FiDroplet,
                  text: "Sprinklers, lawns, gardens & interlock, built to last.",
                },
                {
                  title: "Property Maintenance",
                  icon: FiCloudSnow,
                  text: "Snow removal & lawn mowing contracts, all year.",
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
                    className="rounded-[28px] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-[#e7d9b6]">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      {item.title}
                    </h3>
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
        <div className="pointer-events-none absolute left-10 top-16 h-64 w-64 rounded-full bg-[#c69a4e]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[34px] shadow-[0_22px_60px_rgba(20,24,26,0.18)]">
              {/* TODO: swap for an SJ Contracting renovation or crew photo */}
              <Image
                src="https://ik.imagekit.io/gmjmoldeh/landscap/hero-3.jpg?tr=f-auto,q-auto"
                alt="SJ Contracting Inc. project in Windsor Ontario"
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
              className="absolute -bottom-6 right-6 max-w-xs rounded-[28px] border border-[#e6ded0] bg-white/90 p-5 shadow-[0_16px_40px_rgba(20,24,26,0.14)] backdrop-blur-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
                Why Five Divisions
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#5f6259]">
                A property rarely needs just one trade — so we built a crew
                that covers the renovation, the yard, and everything in
                between.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <span className="inline-block rounded-full bg-[#eee4cd] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#22261f]">
              Most contractors do one thing. We built a crew for the whole
              property.
            </h2>

            <div className="mt-6 space-y-5 text-[#5f6259] text-base md:text-lg leading-relaxed">
              <p>
                SJ Contracting Inc. is a Windsor-based company built on a
                simple idea: a home or a fleet rarely has just one kind of
                problem, so a contractor shouldn&apos;t offer just one kind
                of fix.
              </p>
              <p>
                That&apos;s why we operate five divisions under one company —
                home renovation, irrigation and sprinkler systems, mobile
                heavy-duty mechanic services, landscaping, and annual
                property maintenance contracts — each staffed and equipped
                as its own trade.
              </p>
              <p>
                Whether it&apos;s a kitchen remodel in Windsor, a stalled
                truck on the 401, or a snow-covered lot in Kingsville, the
                same standard of craftsmanship and the same 24/7 reliability
                apply across every call.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Windsor-based, five divisions",
                "Residential & commercial clients",
                "24/7 mechanic emergency service",
                "Fully insured, every division",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#e6ded0] bg-white/70 px-4 py-4"
                >
                  <span className="mt-0.5 text-[#a9803a]">
                    <FiCheckCircle size={18} />
                  </span>
                  <span className="text-sm font-medium text-[#3a3f34]">
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
        <div className="mx-auto max-w-7xl rounded-[34px] border border-[#e6ded0] bg-gradient-to-r from-[#eee4cd] via-[#f4efe4] to-[#ece2c8] p-6 md:p-8 shadow-[0_16px_40px_rgba(20,24,26,0.08)]">
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
                <div className="text-3xl md:text-4xl font-bold text-[#22261f]">
                  <CountUp end={item.value} suffix={item.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-[#7a7a6d]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVISIONS - INTERACTIVE (signature section) */}
      <section className="px-[6%] pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="inline-block rounded-full bg-[#eee4cd] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
              What We Do
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#22261f] unbounded-font">
              Five divisions, one number to call
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-4">
              {divisions.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeDivision === index;

                return (
                  <button
                    key={item.title}
                    onClick={() => setActiveDivision(index)}
                    className={`rounded-[26px] border p-5 text-left transition duration-300 ${
                      isActive
                        ? "border-[#c69a4e] bg-[#eee4cd] shadow-[0_14px_30px_rgba(20,24,26,0.08)]"
                        : "border-[#e6ded0] bg-white/75 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${
                          isActive
                            ? "bg-[#a9803a] text-white"
                            : "bg-[#f1e9d5] text-[#a9803a]"
                        }`}
                      >
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-[#22261f]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-[#7a7a6d]">
                          {item.tag}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDivisionData.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-[34px] border border-[#e6ded0] bg-white p-8 md:p-10 shadow-[0_18px_40px_rgba(20,24,26,0.08)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#c69a4e]/12 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#55704a]/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e9d5] text-[#a9803a]">
                    <activeDivisionData.icon size={24} />
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-[#22261f]">
                    {activeDivisionData.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#a9803a]">
                    {activeDivisionData.tag}
                  </p>

                  <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-[#5f6259]">
                    {activeDivisionData.text}
                  </p>

                  <div className="mt-8">
                    <Link
                      href="/Contact"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#a9803a] via-[#c69a4e] to-[#d6b06a] px-6 py-3 text-sm font-semibold text-[#1a1a16] transition duration-300 hover:scale-[1.03]"
                    >
                      Request This Service
                      <FiArrowRight />
                    </Link>
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
            <span className="inline-block rounded-full bg-[#eee4cd] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#22261f]">
              How SJ Contracting Inc. handles every job, in every division
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
                  className="group relative overflow-hidden rounded-[30px] border border-[#e6ded0] bg-white p-6 shadow-[0_14px_35px_rgba(20,24,26,0.07)]"
                >
                  <div className="absolute right-5 top-5 text-5xl font-bold text-[#f1e9d5]">
                    {step.number}
                  </div>
                  <div className="relative z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f1e9d5] text-[#a9803a] group-hover:bg-[#a9803a] group-hover:text-white transition">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-[#22261f]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5f6259]">
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
            className="relative overflow-hidden w-full rounded-[34px] shadow-[0_20px_50px_rgba(20,24,26,0.16)] min-h-[400px]"
          >
            {/* TODO: swap for an SJ Contracting mechanic or crew photo */}
            <Image
              src="https://ik.imagekit.io/gmjmoldeh/landscap/hero-4.jpg?tr=f-auto,q-auto"
              alt="SJ Contracting Inc. crew at work in Windsor Ontario"
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
            className="rounded-[34px] border border-[#e6ded0] bg-white p-8 md:p-10 shadow-[0_16px_40px_rgba(20,24,26,0.08)]"
          >
            <span className="inline-block rounded-full bg-[#eee4cd] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#22261f]">
              Windsor-Essex&apos;s standard for multi-trade contracting
            </h2>

            <div className="mt-8 space-y-5">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] bg-[#f4efe4] px-5 py-5"
                >
                  <h3 className="text-lg font-semibold text-[#22261f]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5f6259]">
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
            <span className="inline-block rounded-full bg-[#eee4cd] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#22261f]">
              Common questions about SJ Contracting Inc.
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
          className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-[#e6ded0] bg-gradient-to-r from-[#eee4cd] via-[#f4efe4] to-[#ece2c8] p-8 md:p-10 lg:p-12 shadow-[0_16px_40px_rgba(20,24,26,0.08)]"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-block rounded-full bg-[#e6d7ae] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
                Ready to Get Started?
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#22261f]">
                Renovation, landscape, sprinklers, snow, or a stalled truck —
                one call covers it
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-[#5f6259]">
                Contact SJ Contracting Inc. for a free quote from any of our
                five divisions. Serving Windsor, Essex, Chatham & Kingsville.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/Contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#a9803a] via-[#c69a4e] to-[#d6b06a] px-7 py-3.5 text-sm font-semibold text-[#1a1a16] shadow-[0_10px_25px_rgba(198,154,78,0.26)] transition duration-300 hover:scale-[1.03]"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/service"
                className="inline-flex items-center gap-2 rounded-full border border-[#d9cfb5] bg-white px-7 py-3.5 text-sm font-semibold text-[#22261f] transition hover:bg-[#eee4cd]"
              >
                View All Services
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}