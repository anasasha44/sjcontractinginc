"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheck, FiLock, FiX } from "react-icons/fi";

const STORAGE_KEY = "site_privacy_consent_v1";

type ConsentStatus = "accepted" | "rejected" | null;

export default function PrivacyConsentBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as ConsentStatus;
    if (!saved) {
      const timer = window.setTimeout(() => setIsVisible(true), 700);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const handleChoice = (value: Exclude<ConsentStatus, null>) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-3 z-[9999] px-3 md:bottom-5 md:px-6"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[22px] border border-white/10 bg-[#102016]/95 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#88a97b]" />

            <div className="relative grid gap-4 p-4 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-5 md:p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#dbe7d1]">
                <FiLock size={18} />
              </div>

              <div>
                <p className="text-xs leading-6 text-white/80 md:text-sm">
                  We use basic data to improve your experience. Read our{" "}
                  <Link
                    href="/Privacy"
                    className="font-semibold text-[#dbe7d1] underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center md:justify-end">
                {/* Accept FIRST on mobile */}
                <button
                  type="button"
                  onClick={() => handleChoice("accepted")}
                  className="order-1 sm:order-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_6px_15px_rgba(34,60,40,0.22)] transition hover:scale-[1.02]"
                >
                  <FiCheck size={14} />
                  Accept
                </button>

                <button
                  type="button"
                  onClick={() => handleChoice("rejected")}
                  className="order-2 sm:order-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/15"
                >
                  <FiX size={14} />
                  Reject
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
