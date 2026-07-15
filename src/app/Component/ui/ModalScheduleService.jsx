"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import ScheduleService from "./ScheduleService";

export default function ModalScheduleService() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* BUTTON */}
      <div className="mt-8 flex justify-center">
        <motion.button
          onClick={() => setOpen(true)}
          initial={{ opacity: 0, y: 18 }}
          animate={{
            opacity: 1,
            y: [0, -4, 0],
            scale: [1, 1.02, 1],
            boxShadow: [
              "0 10px 30px rgba(34,60,40,0.28)",
              "0 16px 38px rgba(62,102,67,0.42)",
              "0 10px 30px rgba(34,60,40,0.28)",
            ],
          }}
          transition={{
            opacity: { duration: 0.6 },
            y: {
              duration: 2.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            scale: {
              duration: 2.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            boxShadow: {
              duration: 2.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="
            group relative inline-flex items-center justify-center
            overflow-hidden rounded-full
            border border-[#d8e6d2]/30
            bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e]
            px-7 py-3.5
            text-sm font-semibold tracking-wide text-white
            transition-all duration-300 sm:text-base
          "
        >
          <motion.span
            aria-hidden
            className="absolute inset-0"
            animate={{ x: ["-120%", "120%"] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: "easeInOut",
            }}
          >
            <span className="absolute top-0 h-full w-16 rotate-12 bg-white/20 blur-md" />
          </motion.span>

          <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute -inset-1 rounded-full border border-white/10" />
          <span className="relative z-10">Schedule Service</span>

          <motion.span
            className="absolute inset-0 -z-10 rounded-full bg-[#7ea86f]/30 blur-xl"
            animate={{ opacity: [0.35, 0.6, 0.35] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </div>

      {/* MODAL */}
      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[9999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* BACKDROP */}
              <motion.div
                onClick={() => setOpen(false)}
                className="absolute inset-0 bg-[#0f1a12]/65 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* MODAL CENTER */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <motion.div
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.97 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="
                    relative w-full
                    max-h-[90vh]
                    max-w-md sm:max-w-lg lg:max-w-2xl
                    overflow-hidden
                    rounded-[28px]
                    border border-white/20
                    bg-gradient-to-br from-[#f7f5ef] via-[#f3f1e8] to-[#edf3e7]
                    shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                  "
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-24 rounded-t-[28px] bg-gradient-to-b from-[#88a97b]/20 to-transparent" />

                  <div className="sticky top-0 z-30 flex justify-end bg-gradient-to-b from-[#f6f4ed]/95 to-transparent p-4 backdrop-blur-[2px]">
                    <button
                      onClick={() => setOpen(false)}
                      className="
                        flex h-11 w-11 items-center justify-center
                        rounded-full
                        border border-[#d6dfcf]
                        bg-white/90
                        text-[#3d5a40]
                        shadow-sm
                        transition duration-300
                        hover:scale-105 hover:bg-white
                      "
                    >
                      <IoClose size={22} />
                    </button>
                  </div>

                  <div
                    className="
                      relative z-10
                      max-h-[calc(90vh-64px)]
                      overflow-y-auto
                      px-6 pb-6 sm:px-8 sm:pb-8
                      scrollbar-thin
                      scrollbar-thumb-[#9bb08f]
                      scrollbar-track-transparent
                    "
                    style={{
                      scrollbarGutter: "stable",
                    }}
                  >
                  <div className="mb-6 pr-2">
  <span className="inline-block rounded-full bg-[#eee4cd] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#a9803a]">
    SJ Contracting Inc. — Booking
  </span>

  <h2 className="mt-3 text-2xl font-bold text-[#22261f] sm:text-3xl">
    Let&apos;s Plan Your Project
  </h2>

  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#5f6259] sm:text-base">
    Book your service and let&apos;s get it done right — contracting,
    landscaping, or mobile mechanical — for your property in Windsor,
    Essex, Chatham & Kingsville.
  </p>
</div>
                    <div className="rounded-2xl bg-white/60 p-2 backdrop-blur-sm sm:p-3">
                      <ScheduleService />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}