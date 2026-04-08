"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiChevronDown,
  FiClock,
  FiHome,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiShield,
  FiSun,
} from "react-icons/fi";

const services = [
  "Lot Grading",
  "Drainage Solutions",
  "Landscape Preparation",
  "Full Outdoor Transformation",
  "General Consultation",
];

const contactCards = [
  {
    icon: FiPhone,
    title: "Call Us",
    value: "(555) 123-4567",
    sub: "Speak directly with our team",
  },
  {
    icon: FiMail,
    title: "Email Us",
    value: "hello@aquanovus.com",
    sub: "Send us your project details",
  },
  {
    icon: FiMapPin,
    title: "Service Area",
    value: "Windsor & Nearby Areas",
    sub: "Serving surrounding communities",
  },
];

const faqs = [
  {
    q: "How quickly do you respond to inquiries?",
    a: "We aim to respond as quickly as possible, typically within one business day.",
  },
  {
    q: "Can I contact you even if I am unsure which service I need?",
    a: "Yes. Tell us about your property and concerns, and we will guide you toward the right solution.",
  },
  {
    q: "Do you provide consultations for drainage and grading issues?",
    a: "Absolutely. We can review your situation and recommend a practical next step for your property.",
  },
];

function FAQItem({ item, open, onToggle }) {
  return (
    <div className="rounded-[24px] border border-[#dfe7d7] bg-white/75 shadow-[0_10px_30px_rgba(32,45,35,0.06)]">
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
          className="text-[#4f7c57]"
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

export default function ContactPage() {
  const [activeService, setActiveService] = useState(services[0]);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    details: "",
  });

  const summary = useMemo(() => {
    if (!form.name && !form.city && !activeService) return "Your request summary will appear here.";
    return `${form.name || "Client"} is interested in ${activeService}${
      form.city ? ` in ${form.city}` : ""
    }.`;
  }, [form.name, form.city, activeService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#243126]">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[95svh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://ik.imagekit.io/gmjmoldeh/landscap/hero-1.jpeg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08110b]/75 via-[#0f1a12]/60 to-[#08110b]/82" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-[#88a97b]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#6f8f4e]/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[95svh] max-w-7xl items-center px-[6%] pt-30 lg:pt-50 pb-14">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe7d1] backdrop-blur-md">
                Contact Aquanovus
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.04] tracking-tight text-white unbounded-font">
                Let’s Build Something Exceptional for Your Property
              </h1>

              <p className="mt-6 max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed text-white/82">
                Whether you need grading, drainage, or a complete outdoor
                transformation, reach out and start the conversation with a team
                focused on function, beauty, and long-term value.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.24)] transition duration-300 hover:scale-[1.03]"
                >
                  Start Your Inquiry
                </a>

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
              className="grid gap-5"
            >
              {contactCards.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.18 + i * 0.08 }}
                    whileHover={{ y: -4 }}
                    className="rounded-[28px] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#dbe7d1]">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.16em] text-white/65">
                          {item.title}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold">
                          {item.value}
                        </h3>
                        <p className="mt-1 text-sm text-white/75">{item.sub}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[28px] border border-white/15 bg-gradient-to-r from-white/10 to-white/5 p-5 text-white backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#dbe7d1]">
                    <FiClock size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-white/65">
                      Availability
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">
                      Fast Response, Clear Next Steps
                    </h3>
                    <p className="mt-1 text-sm text-white/75">
                      Share your project details and we will help guide the next move.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CONTACT SECTION */}
      <section
        id="contact-form"
        className="relative px-[6%] py-24 "
      >
        <div className="pointer-events-none absolute left-10 top-10 h-64 w-64 rounded-full bg-[#88a97b]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#6f8f4e]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
              Interactive Inquiry
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#2f4633]">
              Tell us about your project
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-[#5f6f60]">
              Choose the type of service you are interested in, fill out your
              details, and let us build the right next step for your property.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT INTERACTIVE PANEL */}
            <motion.div
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="rounded-[30px] border border-[#dfe7d7] bg-white/80 p-6 shadow-[0_16px_40px_rgba(32,45,35,0.08)] backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                  Select a Service
                </p>

                <div className="mt-5 grid gap-3">
                  {services.map((service) => {
                    const active = activeService === service;
                    return (
                      <button
                        key={service}
                        onClick={() => setActiveService(service)}
                        className={`rounded-[22px] border px-4 py-4 text-left transition duration-300 ${
                          active
                            ? "border-[#88a97b] bg-[#edf3e7] shadow-[0_12px_25px_rgba(32,45,35,0.06)]"
                            : "border-[#e6ece0] bg-[#fbfaf7] hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-10 w-10 items-center justify-center rounded-full ${
                              active
                                ? "bg-[#4f7c57] text-white"
                                : "bg-[#e8efe2] text-[#4f7c57]"
                            }`}
                          >
                            <FiSun size={18} />
                          </span>
                          <div>
                            <h3 className="text-base font-semibold text-[#2f4633]">
                              {service}
                            </h3>
                            <p className="mt-0.5 text-sm text-[#728173]">
                              Click to tailor your inquiry
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="rounded-[30px] border border-[#dfe7d7] bg-gradient-to-r from-[#edf3e7] via-[#f7f5ef] to-[#eef4e8] p-6 shadow-[0_16px_40px_rgba(32,45,35,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                    Current Selection
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[#2f4633]">
                    {activeService}
                  </h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-[#5f6f60]">
                    This helps us understand the direction of your request so we
                    can respond with a more relevant recommendation.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Tailored guidance",
                      "Faster response",
                      "More relevant estimate",
                      "Project-focused support",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-white/70 px-4 py-4 text-sm font-medium text-[#425244]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="rounded-[30px] border border-[#dfe7d7] bg-white/75 p-6 shadow-[0_16px_40px_rgba(32,45,35,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                  Live Request Preview
                </p>
                <div className="mt-4 rounded-[22px] bg-[#f7f5ef] p-5">
                  <p className="text-base leading-relaxed text-[#425244]">
                    {summary}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.7 }}
              className="rounded-[34px] border border-[#dfe7d7] bg-white p-6 md:p-8 shadow-[0_18px_40px_rgba(32,45,35,0.08)]"
            >
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                  Project Inquiry Form
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-[#2f4633]">
                  Let’s start with the essentials
                </h3>
              </div>

              <form className="grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#425244]">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="h-13 w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#425244]">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="h-13 w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#425244]">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="h-13 w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#425244]">
                      City / Area
                    </label>
                    <input
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your city"
                      className="h-13 w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#425244]">
                    Selected Service
                  </label>
                  <div className="flex min-h-13 items-center rounded-2xl border border-[#dfe7d7] bg-[#edf3e7] px-4 text-sm font-semibold text-[#2f4633]">
                    {activeService}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#425244]">
                    Project Details
                  </label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project, concerns, goals, or timeline..."
                    className="w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 py-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] bg-[#f7f5ef] p-4">
                    <div className="flex items-start gap-3">
                      <FiShield className="mt-0.5 text-[#4f7c57]" />
                      <p className="text-sm leading-relaxed text-[#5f6f60]">
                        Your information helps us prepare a more relevant response.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[24px] bg-[#f7f5ef] p-4">
                    <div className="flex items-start gap-3">
                      <FiHome className="mt-0.5 text-[#4f7c57]" />
                      <p className="text-sm leading-relaxed text-[#5f6f60]">
                        The more property details you include, the better we can guide you.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.22)] transition duration-300 hover:scale-[1.02]"
                >
                  Send Inquiry
                  <FiSend className="transition group-hover:translate-x-0.5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP */}
      <section className="px-[6%] pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            {
              icon: FiMapPin,
              title: "Where We Work",
              text: "Serving Windsor and surrounding areas with outdoor improvement expertise.",
            },
            {
              icon: FiClock,
              title: "When to Reach Out",
              text: "Before a project starts, when drainage appears, or when your yard needs direction.",
            },
            {
              icon: FiPhone,
              title: "How We Help",
              text: "We listen, assess, and recommend the next best step for your property goals.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-[28px] border border-[#dfe7d7] bg-white p-6 shadow-[0_14px_35px_rgba(32,45,35,0.07)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#edf3e7] text-[#4f7c57]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#2f4633]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f6f60]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
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
              Questions before you reach out
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
                Let’s Start
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#2f4633]">
                Your next outdoor improvement starts with one message
              </h2>
              <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-[#5f6f60]">
                Reach out today and let Aquanovus help shape the right plan for
                a more functional, beautiful, and dependable property.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.22)] transition duration-300 hover:scale-[1.03]"
              >
                Contact Aquanovus
              </a>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[#d7dfd1] bg-white px-7 py-3.5 text-sm font-semibold text-[#2f4633] transition hover:bg-[#edf3e7]"
              >
                Learn More About Us
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}