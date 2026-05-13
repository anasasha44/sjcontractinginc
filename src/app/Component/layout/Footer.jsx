"use client";

import CustomLink from "../ui/CustomLink";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const [showAlert, setShowAlert] = useState(false);
  const currentYear = new Date().getFullYear();

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);
  const email = formData.get("email");

  try {
    const res = await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Telegram Error:", JSON.stringify(data, null, 2));
      alert(data.error || "Something went wrong");
      return;
    }

    setShowAlert(true);
    form.reset();
    setTimeout(() => setShowAlert(false), 3000);
  } catch (error) {
    console.error("Telegram Fetch Error:", error);
    alert("Network error");
  }
};

  return (
    <footer className="relative overflow-hidden bg-[#0c140f] text-white">
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-y-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_0.75fr_1.45fr] lg:gap-x-8 xl:gap-x-10"
        >
          <div>
            <h2 className="unbounded-font text-3xl font-bold tracking-[0.12em] text-white sm:text-4xl">
              AQUAVIOR
            </h2>

            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#a9c29a]">
              Landscaping • irrigation system
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/aqu.anovus?igsh=cWZ5M3VzcDN5MjJh"
                className="btn-social"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/share/18mAzEcLgJ/"
                className="btn-social"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="lg:justify-self-center">
            <h3 className="unbounded-font text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <CustomLink href="/About" className="footer-link">
                  About Us
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/Services" className="footer-link">
                  Our Services
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/Gallery" className="footer-link">
                  Projects
                </CustomLink>
              </li>
            </ul>
          </div>

          <div className="lg:justify-self-start">
            <h3 className="unbounded-font text-lg font-semibold text-white">
              Support
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <CustomLink href="/Contact" className="footer-link">
                  Contact Us
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/Privacy" className="footer-link">
                  Privacy Policy
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/TermsPage" className="footer-link">
                  Terms & Conditions
                </CustomLink>
              </li>
            </ul>
          </div>

          <div className="relative min-w-0 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-md sm:p-7 lg:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7fa36b]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex rounded-full border border-[#a9c29a]/20 bg-[#a9c29a]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bfd4b2]">
                Newsletter
              </span>

              <h3 className="mt-4 max-w-[16ch] text-2xl font-semibold leading-tight tracking-tight text-white sm:text-[1.5rem]">
                Stay Updated With AQUAVIOR
              </h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <div className="group flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition duration-300 focus-within:border-[#a9c29a]/50 focus-within:bg-white/[0.07]">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/35 outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#7fa36b] via-[#90b37d] to-[#b5cfa4] px-5 py-3.5 text-sm font-semibold text-[#102014] shadow-[0_10px_30px_rgba(127,163,107,0.25)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_14px_35px_rgba(127,163,107,0.32)]"
                >
                  Subscribe Now
                </button>

                {showAlert && (
                  <div className="rounded-2xl border border-[#a9c29a]/20 bg-[#a9c29a]/10 px-4 py-3 text-sm text-[#dbead2]">
                    ✅ Subscription sent successfully.
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>

        <div className="pt-6 text-center text-sm text-white/50">
          <p>© {currentYear} Aquanovus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}