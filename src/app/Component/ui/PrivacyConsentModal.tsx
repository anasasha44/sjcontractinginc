"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck, FiLock, FiShield, FiX } from "react-icons/fi";

const STORAGE_KEY = "site_privacy_consent_v1";

export default function PrivacyConsentModal() {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return !saved;
  });

  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleAccept = () => {
    if (!accepted) return;
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#08110b]/70 px-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[32px] border border-white/10 bg-[#f7f5ef] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#88a97b]" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#88a97b]/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-[#6f8f4e]/15 blur-3xl" />

            <div className="relative p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf3e7] text-[#4f7c57] shadow-inner">
                    <FiLock size={24} />
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-[#e3ecdc] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#58704e]">
                      Privacy Notice
                    </span>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#2f4633] md:text-3xl">
                      Before you continue
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-[#dfe7d7] bg-white p-2 text-[#5f6f60] transition hover:bg-[#edf3e7]"
                >
                  <FiX size={18} />
                </button>
              </div>

              <p className="mt-6 text-sm leading-7 text-[#5f6f60] md:text-base">
                We use your submitted information such as your name, phone
                number, email address, and service request details only to
                respond to your inquiry, provide service-related communication,
                and improve your experience on this website.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {[
                  {
                    icon: <FiShield size={18} />,
                    title: "Protected",
                    text: "Your submitted details are handled with care.",
                  },
                  {
                    icon: <FiLock size={18} />,
                    title: "Transparent",
                    text: "You can review the policy at any time.",
                  },
                  {
                    icon: <FiCheck size={18} />,
                    title: "Your Choice",
                    text: "Consent is required before using the form.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-[#dfe7d7] bg-white/85 p-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf3e7] text-[#4f7c57]">
                      {item.icon}
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-[#2f4633]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-[#5f6f60]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <label className="mt-7 flex cursor-pointer items-start gap-3 rounded-[22px] border border-[#dfe7d7] bg-white px-4 py-4 shadow-sm">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-[#b7c6b0] text-[#4f7c57] focus:ring-[#4f7c57]"
                />
                <span className="text-sm leading-7 text-[#425244]">
                  I have read and agree to the website&apos;s{" "}
                  <Link
                    href="/Privacy"
                    className="font-semibold text-[#3f6b4b] underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6 text-[#6c7a6b]">
                  This notice appears only once on this device after acceptance.
                </p>

                <button
                  type="button"
                  onClick={handleAccept}
                  disabled={!accepted}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(34,60,40,0.24)] transition duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                >
                  Accept & Continue
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}