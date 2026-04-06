"use client";

import Link from "next/link";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const [showAlert, setShowAlert] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/your-email@example.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setShowAlert(true);
        form.reset();
        setTimeout(() => setShowAlert(false), 3000);
      }
    } catch (error) {
      console.error("Subscription failed:", error);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#0c140f] text-white">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-[#6f8f4e]/12 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#88a97b]/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="unbounded-font text-3xl font-bold tracking-[0.12em] text-white sm:text-4xl">
              Aquanovus
            </h2>

            <p className="mt-2 text-sm font-medium uppercase tracking-[0.22em] text-[#a9c29a]">
              Landscaping • Renovation
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
              We transform outdoor and residential spaces with premium
              landscaping, remodeling, and renovation solutions designed with
              elegance, durability, and thoughtful detail.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="#"
                aria-label="Instagram"
                className="
                  flex h-11 w-11 items-center justify-center rounded-full
                  border border-white/10 bg-white/5 text-white/70
                  transition duration-300
                  hover:border-[#88a97b]/40
                  hover:bg-[#6f8f4e]
                  hover:text-white
                "
              >
                <FaInstagram className="text-lg" />
              </Link>

              <Link
                href="#"
                aria-label="X / Twitter"
                className="
                  flex h-11 w-11 items-center justify-center rounded-full
                  border border-white/10 bg-white/5 text-white/70
                  transition duration-300
                  hover:border-[#88a97b]/40
                  hover:bg-[#6f8f4e]
                  hover:text-white
                "
              >
                <FaXTwitter className="text-lg" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="unbounded-font text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-white/65 transition hover:text-[#a9c29a]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/65 transition hover:text-[#a9c29a]"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-white/65 transition hover:text-[#a9c29a]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/before-visit"
                  className="text-white/65 transition hover:text-[#a9c29a]"
                >
                  Before Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="unbounded-font text-lg font-semibold text-white">
              Support
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-white/65 transition hover:text-[#a9c29a]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/65 transition hover:text-[#a9c29a]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/65 transition hover:text-[#a9c29a]"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="unbounded-font text-xl font-semibold text-white">
              Stay Updated
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
              Subscribe to receive design inspiration, outdoor improvement tips,
              and our latest project updates directly in your inbox.
            </p>

            <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
              {showAlert && (
                <div className="mb-3 rounded-2xl border border-[#88a97b]/25 bg-[#88a97b]/15 px-4 py-3 text-sm text-[#dce9d5]">
                  You&apos;re subscribed successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="
                    h-12 w-full rounded-2xl
                    border border-white/10
                    bg-black/20 px-4
                    text-sm text-white
                    placeholder:text-white/40
                    outline-none transition
                    focus:border-[#88a97b]/50
                    focus:ring-2 focus:ring-[#88a97b]/20
                  "
                />

                <input type="hidden" name="_captcha" value="false" />

                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="
                    h-12 rounded-2xl
                    bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e]
                    px-5 text-sm font-semibold text-white
                    shadow-[0_10px_25px_rgba(34,60,40,0.25)]
                    transition duration-300
                    hover:scale-[1.01]
                    hover:shadow-[0_14px_32px_rgba(34,60,40,0.35)]
                  "
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center text-sm text-white/50 md:flex-row md:text-left">
          <p>© {currentYear} Aquanovus. All rights reserved.</p>

          <p>
            Crafted by{" "}
            <span className="font-semibold text-[#dbe7d1]">Anas Asha</span>
          </p>
        </div>
      </div>
    </footer>
  );
}