"use client";

import { useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const CONTACTS = [
  {
    id: "whatsapp",
    icon: FaWhatsapp,
    label: "WhatsApp",
    sub: "(382)880-0066",
href: "https://wa.me/13828800066?text=Hi%2C%20I%E2%80%99m%20interested%20in%20getting%20a%20quote%20for%20landscaping%20services.%20Please%20let%20me%20know%20the%20next%20steps.%20Thanks%21",
    color: "#25D366",
    bg: "linear-gradient(135deg,#1fbe5b,#25D366)",
  },
  {
    id: "email",
    icon: FaEnvelope,
    label: "Email",
    sub: "booking@aqua.com",
    href: "mailto:booking@aqua.com",
    color: "#60a5fa",
    bg: "linear-gradient(135deg,#3b82f6,#60a5fa)",
  },
];

export default function ContactButton() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [ripple, setRipple] = useState(false);
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

  const handleToggle = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
    setOpen((prev) => !prev);
  };

  return (
    <div ref={wrapperRef}>
      <div
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9990,
          background: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity .4s cubic-bezier(.4,0,.2,1)",
        }}
      />

      <div
        role="dialog"
        aria-label="Contact options"
        style={{
          position: "fixed",
          bottom: 108,
          right: 20,
          zIndex: 9995,
          width: 270,
          background: "rgba(15,18,22,0.82)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 20,
          padding: "20px 18px 16px",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04) inset, 0 1px 0 rgba(255,255,255,0.12) inset",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          transformOrigin: "bottom right",
          transform: open ? "scale(1) translateY(0)" : "scale(0.7) translateY(20px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition:
            "transform .45s cubic-bezier(.34,1.56,.64,1), opacity .3s ease",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
            paddingBottom: 14,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #4ade80, #3b82f6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 17,
              color: "#fff",
              fontWeight: 700,
              flexShrink: 0,
              boxShadow: "0 0 0 3px rgba(74,222,128,0.15)",
            }}
          >
            A
          </div>

          <div>
            <div
              style={{
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Contact Us
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 11,
                marginTop: 2,
              }}
            >
              We reply within minutes
            </div>
          </div>

          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: 10,
              color: "#4ade80",
              fontWeight: 500,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 6px #4ade80",
                display: "inline-block",
              }}
            />
            Online
          </div>
        </div>

        {CONTACTS.map((c) => {
          const Icon = c.icon;
          const isHovered = hovered === c.id;

          return (
            <a
              key={c.id}
              href={c.href}
              target={c.id === "whatsapp" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={c.label}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 13,
                padding: "11px 12px",
                borderRadius: 13,
                cursor: "pointer",
                textDecoration: "none",
                border: isHovered
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid transparent",
                background: isHovered ? "rgba(255,255,255,0.06)" : "transparent",
                transform: isHovered ? "translateX(-3px)" : "translateX(0)",
                transition: "background .25s, border-color .25s, transform .2s",
                marginBottom: c.id === "email" ? 0 : 8,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 17,
                  color: "#fff",
                  flexShrink: 0,
                  background: c.bg,
                  transform: isHovered ? "scale(1.08)" : "scale(1)",
                  boxShadow: isHovered
                    ? `0 6px 20px ${c.color}55`
                    : `0 4px 12px ${c.color}33`,
                  transition: "transform .2s, box-shadow .2s",
                }}
              >
                <Icon />
              </div>

              <div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 11,
                    marginTop: 1,
                  }}
                >
                  {c.sub}
                </div>
              </div>

              <span
                style={{
                  marginLeft: "auto",
                  color: isHovered
                    ? "rgba(255,255,255,0.6)"
                    : "rgba(255,255,255,0.25)",
                  fontSize: 12,
                  transform: isHovered ? "translateX(-3px)" : "translateX(0)",
                  transition: "transform .2s, color .2s",
                }}
              >
                ←
              </span>
            </a>
          );
        })}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 40,
          right: 22,
          zIndex: 9999,
        }}
      >
        {!open && (
          <>
            <div
              style={{
                position: "absolute",
                width: 56,
                height: 56,
                borderRadius: 18,
                border: "2px solid rgba(74,222,128,0.22)",
                pointerEvents: "none",
                top: 0,
                left: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 66,
                height: 66,
                borderRadius: 22,
                border: "2px solid rgba(74,222,128,0.12)",
                pointerEvents: "none",
                top: -5,
                left: -5,
              }}
            />
          </>
        )}

        <button
          onClick={handleToggle}
          aria-label="Open contact options"
          aria-expanded={open}
          style={{
            position: "relative",
            width: 56,
            height: 56,
            borderRadius: 18,
            border: "none",
            cursor: "pointer",
            background: open
              ? "linear-gradient(135deg, #1a1f2e 0%, #2d3952 50%, #1e2840 100%)"
              : "linear-gradient(135deg, #1a2e1f 0%, #2d5239 50%, #1e3d28 100%)",
            boxShadow: open
              ? "0 16px 48px rgba(20,30,60,0.45), 0 4px 12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.12) inset"
              : "0 8px 32px rgba(34,80,50,0.55), 0 2px 8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.07) inset",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            transform: open ? "scale(1)" : "scale(1)",
            transition:
              "transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s, background .3s",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 18,
              background: "rgba(255,255,255,0.2)",
              transform: ripple ? "scale(2.5)" : "scale(0)",
              opacity: ripple ? 0 : 1,
              transition: "transform .6s ease-out, opacity .6s ease-out",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform .4s cubic-bezier(.34,1.56,.64,1)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4.5,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 2,
                  borderRadius: 2,
                  background: "#fff",
                  display: "block",
                  transform: open
                    ? "translateY(6.5px) rotate(45deg)"
                    : "translateY(0) rotate(0)",
                  transition:
                    "transform .35s cubic-bezier(.4,0,.2,1), opacity .25s, width .35s",
                }}
              />
              <span
                style={{
                  width: 20,
                  height: 2,
                  borderRadius: 2,
                  background: "#fff",
                  display: "block",
                  opacity: open ? 0 : 1,
                  transform: open ? "scaleX(0)" : "scaleX(1)",
                  transition:
                    "transform .35s cubic-bezier(.4,0,.2,1), opacity .25s, width .35s",
                }}
              />
              <span
                style={{
                  width: 20,
                  height: 2,
                  borderRadius: 2,
                  background: "#fff",
                  display: "block",
                  transform: open
                    ? "translateY(-6.5px) rotate(-45deg)"
                    : "translateY(0) rotate(0)",
                  transition:
                    "transform .35s cubic-bezier(.4,0,.2,1), opacity .25s, width .35s",
                }}
              />
            </div>
          </div>

          {!open && (
            <div
              style={{
                position: "absolute",
                top: -5,
                right: -5,
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: "#ef4444",
                border: "2px solid #0a0d0a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 9,
                fontWeight: 700,
                color: "#fff",
                zIndex: 3,
              }}
            >
              1
            </div>
          )}
        </button>
      </div>
    </div>
  );
}