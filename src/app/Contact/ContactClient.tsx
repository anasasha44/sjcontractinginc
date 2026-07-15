"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
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
  "Lawn Care & Maintenance",
  "Sod Installation",
  "Interlocking & Hardscape",
  "Garden Design & Planting",
  "Grading & Drainage",
  "Snow Removal",
  "Full Outdoor Transformation",
  "General Consultation",
];

const contactCards = [
  {
    icon: FiPhone,
    title: "Call Us",
    value: "(382) 880-0066",
    sub: "Speak directly with our Windsor team",
  },
  {
    icon: FiMail,
    title: "Email Us",
    value: "hello@aqua.com",
    sub: "Send us your landscaping project details",
  },
  {
    icon: FiMapPin,
    title: "Service Area",
    value: "Windsor, LaSalle, Tecumseh & Essex County",
    sub: "Proudly serving Windsor, Ontario and surrounding areas",
  },
];

const faqs = [
  {
    q: "Do you offer free landscaping estimates in Windsor?",
    a: "Yes! We provide free, no-obligation estimates for all landscaping services in Windsor, LaSalle, Tecumseh, and Essex County Ontario.",
  },
  {
    q: "What areas do you serve around Windsor Ontario?",
    a: "We serve Windsor and all surrounding communities including LaSalle, Tecumseh, Amherstburg, Kingsville, Leamington, Lakeshore, and the broader Essex County area.",
  },
  {
    q: "Do you handle both residential and commercial landscaping?",
    a: "Absolutely. We work with homeowners and commercial property owners throughout Windsor and Essex County for all landscaping and lawn care needs.",
  },
  {
    q: "When is the best time to contact you for spring landscaping?",
    a: "We recommend reaching out in late winter (February–March) to secure your spot for spring lawn care, sod installation, and landscaping projects in Windsor Ontario.",
  },
];

type SubmitState = {
  type: "idle" | "success" | "error";
  message: string;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  details: string;
  website: string; // honeypot
};

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
    <div className="rounded-[24px] border border-[#dfe7d7] bg-white/75 shadow-[0_10px_30px_rgba(32,45,35,0.06)]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
      >
        <span className="text-base font-semibold text-[#2f4633] md:text-lg">
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
            <div className="px-5 pb-5 leading-relaxed text-[#5f6f60] md:px-6">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  details: "",
  website: "",
};

export default function ContactClient() {
  const [activeService, setActiveService] = useState(services[0]);
  const [openFaq, setOpenFaq] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: "",
  });
  const [form, setForm] = useState<FormState>(initialFormState);

  const lastSubmitRef = useRef<number>(0);

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_PUBLIC_KEY;

    if (!publicKey) return;

    emailjs.init({
      publicKey,
      blockHeadless: true,
      limitRate: {
        id: "contact-form",
        throttle: 15000,
      },
    });
  }, []);

  const summary = useMemo(() => {
    if (!form.name.trim() && !form.city.trim() && !activeService) {
      return "Your request summary will appear here.";
    }

    return `${form.name.trim() || "Client"} is interested in ${activeService} in ${
      form.city.trim() || "Windsor, Ontario"
    }.`;
  }, [form.name, form.city, activeService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (submitState.type !== "idle") {
      setSubmitState({ type: "idle", message: "" });
    }
  };

  const sanitizeValue = (value: string) => value.replace(/\s+/g, " ").trim();

  const validateForm = () => {
    const cleaned = {
      name: sanitizeValue(form.name),
      email: sanitizeValue(form.email).toLowerCase(),
      phone: sanitizeValue(form.phone),
      city: sanitizeValue(form.city),
      details: form.details.trim(),
      website: form.website.trim(),
    };

    if (cleaned.website) {
      return {
        ok: false,
        message: "Spam detection triggered.",
        cleaned,
      };
    }

    const nameOk = /^[a-zA-Z\u0600-\u06FF\s'-]{2,50}$/.test(cleaned.name);
    if (!nameOk) {
      return {
        ok: false,
        message: "Please enter a valid full name.",
        cleaned,
      };
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned.email);
    if (!emailOk || cleaned.email.length > 100) {
      return {
        ok: false,
        message: "Please enter a valid email address.",
        cleaned,
      };
    }

    const phoneOk = /^[0-9+\-\s()]{7,20}$/.test(cleaned.phone);
    if (!phoneOk) {
      return {
        ok: false,
        message: "Please enter a valid phone number.",
        cleaned,
      };
    }

    const cityOk = /^[a-zA-Z\u0600-\u06FF\s,'-]{2,60}$/.test(cleaned.city);
    if (!cityOk) {
      return {
        ok: false,
        message: "Please enter a valid city or service area.",
        cleaned,
      };
    }

    if (cleaned.details.length < 10 || cleaned.details.length > 1200) {
      return {
        ok: false,
        message: "Project details must be between 10 and 1200 characters.",
        cleaned,
      };
    }

    return {
      ok: true,
      message: "",
      cleaned,
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSending) return;

    const now = Date.now();
    if (now - lastSubmitRef.current < 15000) {
      setSubmitState({
        type: "error",
        message: "Please wait a few seconds before sending another request.",
      });
      return;
    }

    setSubmitState({ type: "idle", message: "" });

    const validation = validateForm();
    if (!validation.ok) {
      setSubmitState({
        type: "error",
        message: validation.message,
      });
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitState({
        type: "error",
        message: "Email service is not configured correctly.",
      });
      return;
    }

    setIsSending(true);

    try {
      const { cleaned } = validation;

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: cleaned.name,
          email: cleaned.email,
          phone: cleaned.phone,
          city: cleaned.city,
          service: activeService,
          details: cleaned.details,
          summary: `${cleaned.name} is interested in ${activeService} in ${
            cleaned.city || "Windsor, Ontario"
          }.`,
          time: new Date().toLocaleString(),
        },
        {
          publicKey,
        }
      );

      lastSubmitRef.current = Date.now();

      setSubmitState({
        type: "success",
        message: "Your quote request has been sent successfully.",
      });

      setForm(initialFormState);
      setActiveService(services[0]);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setSubmitState({
        type: "error",
        message:
          "Something went wrong while sending your request. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#243126]">
      {/* HERO */}
      <section className="relative min-h-[95svh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/gmjmoldeh/landscap/hero-1.jpeg?tr=f-auto,q-auto')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08110b]/75 via-[#0f1a12]/60 to-[#08110b]/82" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-[#88a97b]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#6f8f4e]/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[95svh] max-w-7xl items-center px-[6%] pb-14 pt-30 lg:pt-50">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe7d1] backdrop-blur-md">
                Free Landscaping Quote — Windsor, Ontario
              </span>

              <h1 className="unbounded-font mt-5 text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Get a Free Landscaping Quote in Windsor, Ontario
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/82 md:text-lg lg:text-xl">
                Whether you need lawn care, sod, interlocking, or a full outdoor
                transformation — reach out and let Windsor&apos;s landscaping experts
                help. Serving Windsor, LaSalle, Tecumseh & Essex County.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.24)] transition duration-300 hover:scale-[1.03]"
                >
                  Get Your Free Quote
                </a>

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
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-[28px] border border-white/15 bg-gradient-to-r from-white/10 to-white/5 p-5 text-white backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#dbe7d1]">
                    <FiClock size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-white/65">
                      Response Time
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">
                      Fast Response — Usually Same Day
                    </h3>
                    <p className="mt-1 text-sm text-white/75">
                      Share your Windsor landscaping project details and we will
                      guide the next step.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CONTACT SECTION */}
      <section id="contact-form" className="relative px-[6%] py-24">
        <div className="pointer-events-none absolute left-10 top-10 h-64 w-64 rounded-full bg-[#88a97b]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#6f8f4e]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="inline-block rounded-full bg-[#e3ecdc] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
              Free Quote Form
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f4633] md:text-4xl lg:text-5xl">
              Tell us about your Windsor landscaping project
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5f6f60] md:text-lg">
              Choose the landscaping service you need, fill out your details, and
              we&apos;ll get back to you with a free estimate for your Windsor,
              LaSalle, Tecumseh, or Essex County property.
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
                  Select a Landscaping Service
                </p>

                <div className="mt-5 grid gap-3">
                  {services.map((service) => {
                    const active = activeService === service;
                    return (
                      <button
                        type="button"
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
                              Available in Windsor & Essex County
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
                    Selected Service
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[#2f4633]">
                    {activeService}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5f6f60] md:text-base">
                    Available across Windsor, LaSalle, Tecumseh, and all Essex
                    County communities. This helps us prepare the most relevant
                    estimate for your property.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Free Windsor estimate",
                      "Faster response",
                      "Local expertise",
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
              className="rounded-[34px] border border-[#dfe7d7] bg-white p-6 shadow-[0_18px_40px_rgba(32,45,35,0.08)] md:p-8"
            >
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                  Free Landscaping Quote — Windsor Ontario
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#2f4633] md:text-3xl">
                  Let&apos;s start with the essentials
                </h3>
              </div>

              <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
                {/* Honeypot field */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>

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
                      required
                      maxLength={50}
                      autoComplete="name"
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
                      required
                      maxLength={100}
                      autoComplete="email"
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
                      placeholder="(519) XXX-XXXX"
                      required
                      maxLength={20}
                      autoComplete="tel"
                      className="h-13 w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#425244]">
                      City / Area in Essex County
                    </label>
                    <input
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Windsor, LaSalle, Tecumseh..."
                      required
                      maxLength={60}
                      autoComplete="address-level2"
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
                    placeholder="Tell us about your Windsor landscaping project, property size, concerns, or timeline..."
                    required
                    maxLength={1200}
                    className="w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 py-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
                  />
                  <p className="mt-2 text-xs text-[#728173]">
                    {form.details.trim().length}/1200 characters
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] bg-[#f7f5ef] p-4">
                    <div className="flex items-start gap-3">
                      <FiShield className="mt-0.5 text-[#4f7c57]" />
                      <p className="text-sm leading-relaxed text-[#5f6f60]">
                        Your information is safe and helps us prepare a relevant
                        Windsor landscaping estimate.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[24px] bg-[#f7f5ef] p-4">
                    <div className="flex items-start gap-3">
                      <FiHome className="mt-0.5 text-[#4f7c57]" />
                      <p className="text-sm leading-relaxed text-[#5f6f60]">
                        More property details = a faster, more accurate quote
                        for your Essex County property.
                      </p>
                    </div>
                  </div>
                </div>

                {submitState.type !== "idle" && (
                  <div
                    className={`rounded-2xl border px-4 py-3 text-sm font-medium ${
                      submitState.type === "success"
                        ? "border-green-200 bg-green-50 text-green-700"
                        : "border-red-200 bg-red-50 text-red-700"
                    }`}
                  >
                    {submitState.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.22)] transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? "Sending..." : "Send My Free Quote Request"}
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
              text: "Serving Windsor, LaSalle, Tecumseh, Amherstburg, Kingsville, and all of Essex County Ontario.",
            },
            {
              icon: FiClock,
              title: "When to Reach Out",
              text: "Before spring lawn care season, when you need sod, interlock, or when drainage issues appear on your property.",
            },
            {
              icon: FiPhone,
              title: "How We Help",
              text: "We listen, assess your Windsor property, and recommend the right landscaping solution for your goals and budget.",
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
            <h2 className="mt-4 text-3xl font-bold text-[#2f4633] md:text-4xl">
              Common questions about Windsor landscaping quotes
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
          className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-[#dfe7d7] bg-gradient-to-r from-[#edf3e7] via-[#f7f5ef] to-[#eef4e8] p-8 shadow-[0_16px_40px_rgba(32,45,35,0.08)] md:p-10 lg:p-12"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-block rounded-full bg-[#dfead6] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                Ready to Get Started?
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#2f4633] md:text-4xl">
                Your Windsor landscaping project starts with one message
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5f6f60] md:text-lg">
                Contact Windsor&apos;s trusted landscaping team today for a free
                quote. Serving Windsor, LaSalle, Tecumseh, Amherstburg, and all
                of Essex County Ontario.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.22)] transition duration-300 hover:scale-[1.03]"
              >
                Get a Free Quote
              </a>
              <Link
                href="/About"
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