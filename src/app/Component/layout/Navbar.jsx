"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import CustomLink from "../ui/CustomLink";
import { usePageLoader } from "../ui/PageLoader";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/Services", label: "SERVICES" },
  { href: "/Gallery", label: "GALLERY" },
  { href: "/areas-we-serve", label: "AREAS WE SERVE" },
  { href: "/About", label: "ABOUT" },
  { href: "/Contact", label: "CONTACT" },
  { href: "/Store", label: "STORE" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { stopLoading } = usePageLoader();

  // ✅ FIXED (بدون setState داخل effect)
  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoading();
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, stopLoading]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f7f5ef]/95 text-[#243126] shadow-[0_10px_35px_rgba(20,31,22,0.12)] backdrop-blur-md border-b border-[#dfe7d7]"
          : "bg-transparent text-white border-b border-white/10"
      }`}
    >
      <div
        className={`transition-colors duration-500 ${
          scrolled ? "border-b border-[#dfe7d7]" : "md:border-b md:border-white/10"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 grid grid-cols-3 items-center transition-all duration-500 ${
            scrolled ? "h-20" : "h-28"
          }`}
        >
          {/* LEFT */}
          <div
            className={`hidden md:flex items-center gap-6 text-sm font-semibold tracking-[0.18em] transition ${
              scrolled ? "text-[#2f4633]" : "text-white"
            }`}
          >
            <CustomLink href="/About" className="transition hover:text-[#6f8f4e]">
              ABOUT US
            </CustomLink>

            <CustomLink href="/Contact" className="transition hover:text-[#6f8f4e]">
              CONTACT
            </CustomLink>
          </div>

          {/* LOGO */}
          <div className="flex justify-center col-start-2">
            <CustomLink href="/">
              <div
                className={`flex flex-col items-center justify-center leading-none transition-all duration-500 ${
                  scrolled ? "scale-95" : "scale-100"
                }`}
              >
                <span
                  className={`unbounded-font font-bold tracking-[0.1em] transition-all duration-500 ${
                    scrolled ? "text-2xl text-[#2f4633]" : "text-2xl text-white"
                  }`}
                >
                  AQUAVIOR
                </span>

                <span
                  className={`mt-2 text-[10px] tracking-[0.38em] uppercase transition-all text-center duration-500 ${
                    scrolled ? "text-[#6f8f4e]" : "text-[#dbe7d1]"
                  }`}
                >
                  Landscaping • irrigation system
                </span>
              </div>
            </CustomLink>
          </div>

          {/* RIGHT */}
          <div
            className={`hidden md:flex items-center justify-end gap-5 text-lg transition ${
              scrolled ? "text-[#2f4633]" : "text-white"
            }`}
          >
            <CustomLink href="https://www.facebook.com/share/18mAzEcLgJ/" className="transition hover:text-[#6f8f4e]">
              <FaFacebookF />
            </CustomLink>

            <CustomLink href="https://www.instagram.com/aqu.anovus?igsh=cWZ5M3VzcDN5MjJh" className="transition hover:text-[#6f8f4e]">
              <FaInstagram />
            </CustomLink>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className={`md:hidden col-start-3 justify-self-end text-3xl mr-1 transition ${
              scrolled ? "text-[#2f4633]" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <nav
        className={`hidden md:block transition ${
          scrolled ? "text-[#2f4633]" : "text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center gap-10 h-14 text-sm font-bold tracking-[0.18em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <CustomLink
                  href={link.href}
                  className={`relative transition duration-300 hover:text-[#6f8f4e] after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:rounded-full after:bg-[#6f8f4e] after:transition-all after:duration-300 hover:after:w-full ${
                    pathname === link.href ? "text-[#6f8f4e] after:w-full" : ""
                  }`}
                >
                  {link.label}
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          scrolled
            ? "bg-[#f7f5ef]/98 text-[#243126] backdrop-blur-md"
            : "bg-[#101712]/85 backdrop-blur-md text-white"
        } ${open ? "max-h-125" : "max-h-0"}`}
      >
        <ul className="px-6 py-5 space-y-5 text-sm font-bold tracking-[0.16em]">
          {navLinks.map((link) => (
            <li key={link.href} onClick={() => setOpen(false)}>
              <CustomLink
                href={link.href}
                className={`block transition ${
                  pathname === link.href
                    ? "text-[#6f8f4e]"
                    : "hover:text-[#6f8f4e]"
                }`}
              >
                {link.label}
              </CustomLink>
            </li>
          ))}

          <li className="pt-2" onClick={() => setOpen(false)}>
            <CustomLink
              href="/About"
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#3f6b4b] via-[#4f7c57] to-[#6f8f4e] px-5 py-2.5 text-white shadow-[0_10px_25px_rgba(34,60,40,0.25)] transition hover:scale-[1.03]"
            >
              FREE ESTIMATE
            </CustomLink>
          </li>
        </ul>
      </div>
    </header>
  );
}