"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiChevronDown,
  FiClock,
  FiCloudSnow,
  FiDroplet,
  FiHome,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiShield,
  FiSun,
  FiTool,
  FiTruck,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
/**
 * SJ Contracting Inc. — Contact / Free Quote Page
 * Covers all five divisions: Home Renovation, Irrigation & Sprinklers,
 * Mobile Heavy-Duty Mechanic, Landscaping, and Annual Property
 * Maintenance Contracts. Serving Windsor, Essex, Chatham & Kingsville.
 *
 * NOTE: phone/email in contactCards are placeholders carried over from the
 * previous version of this page — replace with SJ Contracting's real
 * number and inbox before shipping.
 */

const services = [
  { label: "Kitchen & Bathroom Renovation", icon: FiHome },
  { label: "Basement Finishing & Flooring", icon: FiHome },
  { label: "Painting & Interior Design", icon: FiHome },
  { label: "Sprinkler & Irrigation Install/Repair", icon: FiDroplet },
  { label: "Emergency Truck & Heavy Equipment Repair", icon: FiTruck },
  { label: "Lawn Care, Sod & Garden Design", icon: FiSun },
  { label: "Interlocking & Hardscape", icon: FiSun },
  { label: "Snow Removal Contract", icon: FiCloudSnow },
  { label: "Lawn Mowing Contract", icon: FiCloudSnow },
  { label: "General Consultation", icon: FiTool },
];

const contactCards = [
  {
    icon: FiPhone,
    title: "Call Us",
    value: "(226) 344-0303",
    sub: "Speak directly with our Windsor-Essex team",
    href: "tel:+12263440303",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "(226) 344-0303",
    sub: "Chat with us directly on WhatsApp",
    href: "https://wa.me/12263440303?text=Hi%2C%20I%E2%80%99m%20interested%20in%20getting%20a%20quote%20from%20SJ%20Contracting%20Inc.%20Please%20let%20me%20know%20the%20next%20steps.%20Thanks%21",
  },
  {
    icon: FiMail,
    title: "Email Us",
    value: "sjcontractinginc@hotmail.com",
    sub: "Send us your project or service request details",
    href: "mailto:sjcontractinginc@hotmail.com",
  },
  {
    icon: FiMapPin,
    title: "Service Area",
    value: "Windsor, Essex, Chatham & Kingsville",
    sub: "Proudly serving Windsor, Ontario and surrounding Essex County",
    href: null,
  },
];
const faqs = [
  {
    q: "Do you offer free estimates for all five divisions?",
    a: "Yes. We provide free, no-obligation estimates for home renovation, landscaping, irrigation, and annual property maintenance contracts across Windsor, Essex, Chatham & Kingsville.",
  },
  {
    q: "Is the mobile heavy-duty mechanic service available right now?",
    a: "Yes, our mobile heavy-duty mechanic team runs 24 hours a day, 7 days a week for emergency road service, truck and trailer repairs, and heavy equipment repairs — we come to you.",
  },
  {
    q: "What areas do you serve around Windsor Ontario?",
    a: "We serve Windsor and all surrounding communities including Essex, Chatham, Kingsville, LaSalle, Tecumseh, and the broader Essex County area.",
  },
  {
    q: "Do you handle both residential and commercial requests?",
    a: "Absolutely. We work with homeowners, property managers, and commercial clients throughout Windsor and Essex County for renovation, landscaping, irrigation, mechanic services, and maintenance contracts.",
  },
  {
    q: "When is the best time to contact you for a property maintenance contract?",
    a: "We recommend reaching out in late winter (February–March) for spring landscaping and lawn mowing contracts, or in early fall for snow removal contracts, though we take on renovation and mechanic requests year-round.",
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
    <div className="rounded-[24px] border border-[#e6ded0] bg-white/75 shadow-[0_10px_30px_rgba(20,24,26,0.06)]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
      >
        <span className="text-base font-semibold text-[#22261f] md:text-lg">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-[#a9803a]"
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
            <div className="px-5 pb-5 leading-relaxed text-[#5f6259] md:px-6">
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
  const [activeService, setActiveService] = useState(services[0].label);
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

  const activeServiceIcon = useMemo(() => {
    const match = services.find((s) => s.label === activeService);
    return match ? match.icon : FiTool;
  }, [activeService]);

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
      setActiveService(services[0].label);
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
    <main className="min-h-screen bg-[#f4efe4] text-[#23281f]">
      {/* HERO */}
      <section className="relative min-h-[95svh] overflow-hidden bg-[#14181a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/gmjmoldeh/landscap/hero-1.jpeg?tr=f-auto,q-auto')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1011]/90 via-[#14181a]/80 to-[#0d1011]/95" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-[#c69a4e]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#55704a]/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[95svh] max-w-7xl items-center px-[6%] pb-14 pt-30 lg:pt-50">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#e7d9b6] backdrop-blur-md">
                Free Quote — Windsor, Essex, Chatham & Kingsville
              </span>

              <h1 className="unbounded-font mt-5 text-4xl font-bold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Get a Free Quote From Any of Our Five Divisions
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/82 md:text-lg lg:text-xl">
                Renovation, irrigation, landscaping, an emergency mechanic
                call, or a property maintenance contract — reach out and
                let&apos;s figure out what your property needs. Serving
                Windsor, Essex, Chatham & Kingsville.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#a9803a] via-[#c69a4e] to-[#d6b06a] px-7 py-3.5 text-sm font-semibold text-[#1a1a16] shadow-[0_10px_25px_rgba(198,154,78,0.28)] transition duration-300 hover:scale-[1.03]"
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
  const CardTag = item.href ? motion.a : motion.div;

  return (
    <CardTag
      key={item.title}
      {...(item.href
        ? {
            href: item.href,
            target: item.href.startsWith("http") ? "_blank" : undefined,
            rel: item.href.startsWith("http")
              ? "noopener noreferrer"
              : undefined,
          }
        : {})}
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: 0.18 + i * 0.08 }}
      whileHover={{ y: -4 }}
      className={`rounded-[28px] border border-white/15 bg-white/10 p-5 text-white backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.25)] ${
        item.href ? "block cursor-pointer transition hover:bg-white/15" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#e7d9b6]">
          <Icon size={20} />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-white/65">
            {item.title}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{item.value}</h3>
          <p className="mt-1 text-sm text-white/75">{item.sub}</p>
        </div>
      </div>
    </CardTag>
  );
})}

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-[28px] border border-white/15 bg-gradient-to-r from-white/10 to-white/5 p-5 text-white backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#e7d9b6]">
                    <FiClock size={20} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-white/65">
                      Response Time
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">
                      Fast Response — Mechanic Calls Answered 24/7
                    </h3>
                    <p className="mt-1 text-sm text-white/75">
                      Share your project or service request and we&apos;ll
                      guide the next step, whatever the division.
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
        <div className="pointer-events-none absolute left-10 top-10 h-64 w-64 rounded-full bg-[#c69a4e]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#55704a]/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <span className="inline-block rounded-full bg-[#eee4cd] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
              Free Quote Form
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#22261f] md:text-4xl lg:text-5xl">
              Tell us what your property needs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5f6259] md:text-lg">
              Choose the service you need — from any of our five divisions —
              fill out your details, and we&apos;ll get back to you with a
              free estimate for your Windsor, Essex, Chatham, or Kingsville
              property.
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
              <div className="rounded-[30px] border border-[#e6ded0] bg-white/80 p-6 shadow-[0_16px_40px_rgba(20,24,26,0.08)] backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
                  Select a Service
                </p>

                <div className="mt-5 grid gap-3">
                  {services.map((service) => {
                    const active = activeService === service.label;
                    const Icon = service.icon;
                    return (
                      <button
                        type="button"
                        key={service.label}
                        onClick={() => setActiveService(service.label)}
                        className={`rounded-[22px] border px-4 py-4 text-left transition duration-300 ${
                          active
                            ? "border-[#c69a4e] bg-[#eee4cd] shadow-[0_12px_25px_rgba(20,24,26,0.06)]"
                            : "border-[#ece3d1] bg-[#fbf9f4] hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-10 w-10 items-center justify-center rounded-full ${
                              active
                                ? "bg-[#a9803a] text-white"
                                : "bg-[#f1e9d5] text-[#a9803a]"
                            }`}
                          >
                            <Icon size={18} />
                          </span>
                          <div>
                            <h3 className="text-base font-semibold text-[#22261f]">
                              {service.label}
                            </h3>
                            <p className="mt-0.5 text-sm text-[#7a7a6d]">
                              Available in Windsor, Essex, Chatham & Kingsville
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
                  className="rounded-[30px] border border-[#e6ded0] bg-gradient-to-r from-[#eee4cd] via-[#f4efe4] to-[#ece2c8] p-6 shadow-[0_16px_40px_rgba(20,24,26,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
                    Selected Service
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a9803a] text-white">
                      {(() => {
                        const Icon = activeServiceIcon;
                        return <Icon size={18} />;
                      })()}
                    </span>
                    <h3 className="text-2xl font-bold text-[#22261f]">
                      {activeService}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#5f6259] md:text-base">
                    Available across Windsor, Essex, Chatham, and Kingsville.
                    This helps us route your request to the right division
                    and prepare the most relevant estimate.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Free estimate",
                      "Faster response",
                      "Local Windsor-Essex crew",
                      "Right division, first time",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-white/70 px-4 py-4 text-sm font-medium text-[#3a3f34]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="rounded-[30px] border border-[#e6ded0] bg-white/75 p-6 shadow-[0_16px_40px_rgba(20,24,26,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
                  Live Request Preview
                </p>
                <div className="mt-4 rounded-[22px] bg-[#f4efe4] p-5">
                  <p className="text-base leading-relaxed text-[#3a3f34]">
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
              className="rounded-[34px] border border-[#e6ded0] bg-white p-6 shadow-[0_18px_40px_rgba(20,24,26,0.08)] md:p-8"
            >
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
                  Free Quote — Windsor, Essex, Chatham & Kingsville
                </p>
                <h3 className="mt-3 text-2xl font-bold text-[#22261f] md:text-3xl">
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
                    <label className="mb-2 block text-sm font-medium text-[#3a3f34]">
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
                      className="h-13 w-full rounded-2xl border border-[#e6ded0] bg-[#fbf9f4] px-4 text-[#23281f] outline-none transition focus:border-[#c69a4e] focus:ring-2 focus:ring-[#c69a4e]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#3a3f34]">
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
                      className="h-13 w-full rounded-2xl border border-[#e6ded0] bg-[#fbf9f4] px-4 text-[#23281f] outline-none transition focus:border-[#c69a4e] focus:ring-2 focus:ring-[#c69a4e]/20"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#3a3f34]">
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
                      className="h-13 w-full rounded-2xl border border-[#e6ded0] bg-[#fbf9f4] px-4 text-[#23281f] outline-none transition focus:border-[#c69a4e] focus:ring-2 focus:ring-[#c69a4e]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#3a3f34]">
                      City / Area
                    </label>
                    <input
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Windsor, Essex, Chatham, Kingsville..."
                      required
                      maxLength={60}
                      autoComplete="address-level2"
                      className="h-13 w-full rounded-2xl border border-[#e6ded0] bg-[#fbf9f4] px-4 text-[#23281f] outline-none transition focus:border-[#c69a4e] focus:ring-2 focus:ring-[#c69a4e]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#3a3f34]">
                    Selected Service
                  </label>
                  <div className="flex min-h-13 items-center rounded-2xl border border-[#e6ded0] bg-[#eee4cd] px-4 text-sm font-semibold text-[#22261f]">
                    {activeService}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#3a3f34]">
                    Project / Service Details
                  </label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project, property, equipment, or timeline..."
                    required
                    maxLength={1200}
                    className="w-full rounded-2xl border border-[#e6ded0] bg-[#fbf9f4] px-4 py-4 text-[#23281f] outline-none transition focus:border-[#c69a4e] focus:ring-2 focus:ring-[#c69a4e]/20"
                  />
                  <p className="mt-2 text-xs text-[#7a7a6d]">
                    {form.details.trim().length}/1200 characters
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] bg-[#f4efe4] p-4">
                    <div className="flex items-start gap-3">
                      <FiShield className="mt-0.5 text-[#a9803a]" />
                      <p className="text-sm leading-relaxed text-[#5f6259]">
                        Your information is safe and helps us prepare a
                        relevant estimate for your property.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[24px] bg-[#f4efe4] p-4">
                    <div className="flex items-start gap-3">
                      <FiHome className="mt-0.5 text-[#a9803a]" />
                      <p className="text-sm leading-relaxed text-[#5f6259]">
                        More details = a faster, more accurate quote for your
                        Windsor-Essex property.
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
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#a9803a] via-[#c69a4e] to-[#d6b06a] px-7 py-4 text-sm font-semibold text-[#1a1a16] shadow-[0_10px_25px_rgba(198,154,78,0.26)] transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
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
              text: "Serving Windsor, Essex, Chatham, Kingsville, and all of Essex County Ontario.",
            },
            {
              icon: FiClock,
              title: "When to Reach Out",
              text: "Any time for the mobile mechanic (24/7). Before spring for landscaping and mowing contracts, and early fall for snow removal.",
            },
            {
              icon: FiPhone,
              title: "How We Help",
              text: "We listen, assess the property or equipment, and route your request to the right division for the job.",
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
                className="rounded-[28px] border border-[#e6ded0] bg-white p-6 shadow-[0_14px_35px_rgba(20,24,26,0.07)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f1e9d5] text-[#a9803a]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#22261f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f6259]">
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
            <span className="inline-block rounded-full bg-[#eee4cd] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#22261f] md:text-4xl">
              Common questions about requesting a quote
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
          className="mx-auto max-w-6xl overflow-hidden rounded-[36px] border border-[#e6ded0] bg-gradient-to-r from-[#eee4cd] via-[#f4efe4] to-[#ece2c8] p-8 shadow-[0_16px_40px_rgba(20,24,26,0.08)] md:p-10 lg:p-12"
        >
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="inline-block rounded-full bg-[#e6d7ae] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
                Ready to Get Started?
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#22261f] md:text-4xl">
                Your project starts with one message
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5f6259] md:text-lg">
                Contact SJ Contracting Inc. today for a free quote from any of
                our five divisions. Serving Windsor, Essex, Chatham &
                Kingsville.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#a9803a] via-[#c69a4e] to-[#d6b06a] px-7 py-3.5 text-sm font-semibold text-[#1a1a16] shadow-[0_10px_25px_rgba(198,154,78,0.26)] transition duration-300 hover:scale-[1.03]"
              >
                Get a Free Quote
              </a>
              <Link
                href="/About"
                className="inline-flex items-center gap-2 rounded-full border border-[#d9cfb5] bg-white px-7 py-3.5 text-sm font-semibold text-[#22261f] transition hover:bg-[#eee4cd]"
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