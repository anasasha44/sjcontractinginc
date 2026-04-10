"use client";

import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaEnvelope, FaComments } from "react-icons/fa";

export default function ContactButton() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-5 right-5 z-[9998] flex items-end justify-end"
    >
      <div className="relative flex h-28 w-28 items-end justify-end">
        {/* WHATSAPP */}
        <a
          href="https://wa.me/962786659173"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className={`
            absolute right-1 bottom-14
            flex h-11 w-11 items-center justify-center
            rounded-full border border-[#d7e3d2]
            bg-white/95 text-[#4f7c57]
            shadow-[0_12px_25px_rgba(32,45,35,0.18)]
            backdrop-blur-md
            transition-all duration-300 ease-out
            hover:scale-105 hover:bg-[#edf3e7]
            ${open ? "translate-x-0 -translate-y-1 opacity-100 scale-100" : "translate-y-3 opacity-0 scale-75 pointer-events-none"}
          `}
        >
          <FaWhatsapp className="text-lg" aria-hidden="true" />
        </a>

        {/* EMAIL */}
        <a
          href="mailto:booking@aqua.com"
          aria-label="Send Email to booking@aqua.com"
          className={`
            absolute right-12 bottom-12
            flex h-11 w-11 items-center justify-center
            rounded-full border border-[#d7e3d2]
            bg-white/95 text-[#3f6b4b]
            shadow-[0_12px_25px_rgba(32,45,35,0.18)]
            backdrop-blur-md
            transition-all duration-300 ease-out
            hover:scale-105 hover:bg-[#edf3e7]
            ${open ? "-translate-x-1 -translate-y-10 opacity-100 scale-100" : "translate-y-2 opacity-0 scale-75 pointer-events-none"}
          `}
        >
          <FaEnvelope className="text-base" aria-hidden="true" />
        </a>

        {/* MAIN BUTTON */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Open contact options"
          className="
            group relative z-10
            flex h-13 w-13 items-center justify-center
            rounded-full
            border border-[#d8e6d2]/30
            bg-gradient-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e]
            text-white
            shadow-[0_14px_30px_rgba(34,60,40,0.26)]
            transition-all duration-300
            hover:scale-[1.05]
          "
        >
          <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute -inset-1 -z-10 rounded-full bg-[#7ea86f]/20 blur-xl" />

          <FaComments
            className={`relative z-10 text-[1.15rem] transition-transform duration-300 ${
              open ? "rotate-[-8deg] scale-95" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}