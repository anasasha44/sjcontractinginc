"use client";

import CustomLink from "../ui/CustomLink";
import { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
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
              AQUAVIOR
            </h2>

            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#a9c29a]">
                               Landscaping • irrigation system

            </p>

           
            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.instagram.com/aqu.anovus?igsh=cWZ5M3VzcDN5MjJh" className="btn-social">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/share/18mAzEcLgJ/" className="btn-social">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
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

          {/* Support */}
          <div>
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
                <CustomLink href="/privacy-policy" className="footer-link">
                  Privacy Policy
                </CustomLink>
              </li>
              <li>
                <CustomLink href="/terms" className="footer-link">
                  Terms & Conditions
                </CustomLink>
              </li>
            </ul>
          </div>

          {/* Newsletter (بدون تغيير) */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Stay Updated
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="input"
              />

              <button type="submit" className="btn">
                Subscribe Now
              </button>
            </form>
          </div>
        </motion.div>

        <div className="pt-6 text-center text-sm text-white/50">
          <p>© {currentYear} Aquanovus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}