"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiLock } from "react-icons/fi";

type Section = {
  title: string;
  text: string;
};

const privacySections: Section[] = [
  {
    title: "1. Information We Collect",
    text: "We may collect information such as your name, phone number, email address, service request details, and limited technical data like browser type or IP address.",
  },
  {
    title: "2. How Information Is Used",
    text: "Information may be used to respond to inquiries, provide service details, improve website functionality, and maintain internal records.",
  },
  {
    title: "3. Consent",
    text: "By submitting your information through this website, you consent to its collection and use in accordance with this Privacy Policy.",
  },
  {
    title: "4. Sharing of Information",
    text: "Personal information is not sold. It may only be shared with service providers assisting with website operations or when required by law.",
  },
  {
    title: "5. Data Security",
    text: "Reasonable measures are taken to protect information, but no online method of transmission or storage is completely secure.",
  },
  {
    title: "6. Cookies and Analytics",
    text: "This website may use cookies or analytics tools to improve user experience and understand site performance.",
  },
  {
    title: "7. User Rights",
    text: "Where applicable, users may request access to or correction of their personal information.",
  },
  {
    title: "8. Policy Updates",
    text: "This Privacy Policy may be updated at any time without prior notice. Continued use of the website means acceptance of the updated policy.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#243126]">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08110b]/90 to-[#1b2e20]" />
        <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-[#88a97b]/15 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-center px-[6%] lg:pt-45 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe7d1] backdrop-blur-sm">
              <FiLock /> Privacy Policy
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-white/80 text-lg leading-relaxed">
              This page explains how information may be collected, used, and protected when you interact with this website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-[6%] py-20">
        <div className="mx-auto max-w-4xl space-y-6">
          {privacySections.map((sec, i) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-[24px] border border-[#dfe7d7] bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-[#2f4633]">
                {sec.title}
              </h2>
              <p className="mt-3 text-[#5f6f60] leading-relaxed">
                {sec.text}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-[24px] bg-[#edf3e7] p-6"
          >
            <div className="flex items-start gap-3">
              <FiCheckCircle className="text-[#4f7c57] mt-1" />
              <p className="text-[#425244] text-sm leading-relaxed">
                By using this website, you agree to this Privacy Policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
