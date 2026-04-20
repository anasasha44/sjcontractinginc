"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiCheckCircle,
  FiMapPin,
  FiPhone,
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSun,
} from "react-icons/fi";

const services = [
  "Lot Grading",
  "Drainage Solutions",
  "Landscape Preparation",
  "Front Yard Upgrade",
  "Backyard Transformation",
  "Other",
];

export default function ScheduleService() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: "",
    message: "",
  });

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const inquiryPreview = useMemo(() => {
    const fullName = `${form.firstName} ${form.lastName}`.trim() || "Client";
    const serviceText =
      selectedServices.length > 0
        ? selectedServices.join(", ")
        : "general outdoor services";

    return `${fullName} is interested in ${serviceText}${
      form.location ? ` in ${form.location}` : ""
    }.`;
  }, [form.firstName, form.lastName, form.location, selectedServices]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    const templateParams = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      location: form.location,
      details: form.details,
      services: selectedServices.length
        ? selectedServices.join(", ")
        : "Not specified",
      inquiryPreview,
      year: new Date().getFullYear(),
    };

    try {
      
     const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateUser = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_USER;
const templateAdmin = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ADMIN;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

await emailjs.send(serviceId, templateUser, templateParams, publicKey);

await emailjs.send(serviceId, templateAdmin, templateParams, publicKey);
      setSubmitStatus({
        type: "success",
        message:
          "Your request has been sent successfully. We will contact you soon.",
      });

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        details: "",
      });
      setSelectedServices([]);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setSubmitStatus({
        type: "error",
        message:
          "Something went wrong while sending your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="rounded-[28px] border border-[#e6ece0] bg-white/85 p-5 shadow-[0_16px_40px_rgba(32,45,35,0.06)] backdrop-blur-sm sm:p-6 md:p-7">
        {/* top summary */}
        <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="inline-block rounded-full bg-[#e3ecdc] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
              Premium Booking Form
            </span>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#2f4633] sm:text-3xl">
              Schedule Your Service
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-[#5f6f60] sm:text-base">
              Share your project details and let’s plan an outdoor solution that
              feels refined, functional, and built to last.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-[22px] border border-[#dfe7d7] bg-gradient-to-r from-[#edf3e7] via-[#f7f5ef] to-[#eef4e8] px-4 py-4 lg:max-w-[290px]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#58704e]">
              Inquiry Preview
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#425244]">
              {inquiryPreview}
            </p>
          </motion.div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* name */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#425244]">
                <FiUser className="text-[#4f7c57]" />
                First Name *
              </label>
              <input
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="h-13 w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#425244]">
                <FiUser className="text-[#4f7c57]" />
                Last Name *
              </label>
              <input
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="h-13 w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* email + phone */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#425244]">
                <FiMail className="text-[#4f7c57]" />
                Email *
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="h-13 w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#425244]">
                <FiPhone className="text-[#4f7c57]" />
                Phone *
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="h-13 w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* location */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#425244]">
              <FiMapPin className="text-[#4f7c57]" />
              Location *
            </label>
            <input
              name="location"
              type="text"
              value={form.location}
              onChange={handleChange}
              placeholder="City and State"
              className="h-13 w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* service chips */}
          <div>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <label className="flex items-center gap-2 text-sm font-medium text-[#425244]">
                <FiSun className="text-[#4f7c57]" />
                Services Needed
              </label>

              <span className="text-xs font-medium text-[#728173]">
                {selectedServices.length > 0
                  ? `${selectedServices.length} selected`
                  : "Select one or more"}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {services.map((service) => {
                const active = selectedServices.includes(service);

                return (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    disabled={isSubmitting}
                    className={`group inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium transition duration-300 ${
                      active
                        ? "border-[#88a97b] bg-[#edf3e7] text-[#2f4633] shadow-sm"
                        : "border-[#dfe7d7] bg-white text-[#5f6f60] hover:bg-[#f1f5ed]"
                    } ${isSubmitting ? "cursor-not-allowed opacity-70" : ""}`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] transition ${
                        active
                          ? "bg-[#4f7c57] text-white"
                          : "bg-[#e8efe2] text-[#4f7c57]"
                      }`}
                    >
                      <FiCheckCircle />
                    </span>
                    {service}
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {selectedServices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 rounded-[22px] bg-[#f7f5ef] p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                    Selected Services
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#425244]">
                    {selectedServices.join(" • ")}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* textarea */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#425244]">
              <FiMessageSquare className="text-[#4f7c57]" />
              How can we help? *
            </label>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder="Tell us about your project, concerns, or goals..."
              className="min-h-[150px] w-full rounded-2xl border border-[#dfe7d7] bg-[#fbfaf7] px-4 py-4 text-[#243126] outline-none transition focus:border-[#88a97b] focus:ring-2 focus:ring-[#88a97b]/20"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* note boxes */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[22px] bg-[#f7f5ef] p-4">
              <p className="text-sm leading-relaxed text-[#5f6f60]">
                The more project details you include, the better we can guide
                your next step.
              </p>
            </div>

            <div className="rounded-[22px] bg-[#f7f5ef] p-4">
              <p className="text-sm leading-relaxed text-[#5f6f60]">
                All fields marked with an asterisk{" "}
                <span className="font-semibold">*</span> are required.
              </p>
            </div>
          </div>

          {/* status message */}
          <AnimatePresence>
            {submitStatus.message && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                  submitStatus.type === "success"
                    ? "border border-[#cfe5c8] bg-[#edf7e9] text-[#355b31]"
                    : "border border-[#f3c7c7] bg-[#fff1f1] text-[#9c2f2f]"
                }`}
              >
                {submitStatus.message}
              </motion.div>
            )}
          </AnimatePresence>

          {/* submit */}
          <motion.button
            type="submit"
            whileHover={!isSubmitting ? { scale: 1.015 } : {}}
            whileTap={!isSubmitting ? { scale: 0.985 } : {}}
            disabled={isSubmitting}
            className={`group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-6 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(34,60,40,0.22)] transition sm:text-base ${
              isSubmitting ? "cursor-not-allowed opacity-80" : ""
            }`}
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10">
              {isSubmitting ? "Sending Request..." : "Submit Request"}
            </span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
              <FiCheckCircle />
            </span>
          </motion.button>
        </form>
      </div>
    </div>
  );
}