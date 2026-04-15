"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiFileText } from "react-icons/fi";

const sections = [
  {
    title: "1. Use of the Website",
    text: "This website is intended to provide information about services and allow users to submit inquiries or request quotes. You agree to use this website only for lawful purposes.",
  },
  {
    title: "2. Services",
    text: "This website may present information about landscaping or related services. Submitting a request does not guarantee service availability or acceptance.",
  },
  {
    title: "3. Information Provided",
    text: "By submitting your name, phone number, email, or project details, you confirm that the information is accurate and you consent to being contacted.",
  },
  {
    title: "4. Quotes and Estimates",
    text: "Any estimates provided are for informational purposes only and may change based on project scope, materials, or site conditions.",
  },
  {
    title: "5. Intellectual Property",
    text: "All website content including text, design, and images may not be copied or reused without permission.",
  },
  {
    title: "6. Disclaimer",
    text: "This website is provided as is without warranties. We do not guarantee accuracy or uninterrupted availability.",
  },
  {
    title: "7. Limitation of Liability",
    text: "We are not responsible for any damages resulting from the use of this website.",
  },
  {
    title: "8. Changes",
    text: "These Terms may be updated at any time without prior notice.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#243126]">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#08110b]/90 to-[#1b2e20]" />

        <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-7xl items-center px-[6%] lg:pt-45 pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#dbe7d1]">
              <FiFileText /> Terms & Conditions
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
              Terms & Conditions
            </h1>

            <p className="mt-6 max-w-2xl text-white/80 text-lg">
              Please read these terms carefully before using this website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-[6%] py-20">
        <div className="mx-auto max-w-4xl space-y-6">
          {sections.map((sec, i) => (
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

          {/* EXTRA INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-[24px] bg-[#edf3e7] p-6"
          >
            <div className="flex items-start gap-3">
              <FiCheckCircle className="text-[#4f7c57] mt-1" />
              <p className="text-[#425244] text-sm">
                By using this website, you agree to these Terms & Conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
