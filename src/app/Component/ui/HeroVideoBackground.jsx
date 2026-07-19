"use client";

import { useEffect, useState } from "react";

export default function HeroVideoBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);

  // غيّر هاي المسارات حسب مكان الفيديو عندك:
  // - إذا الفيديو داخل public/videos → "/videos/desktop.mp4"
  // - إذا مستضاف خارجياً (Vercel Blob / Cloudinary / S3) → حط الرابط المباشر (https://...mp4)
  const desktopSrc = "/videos/hero-desktop.mp4";
  const mobileSrc = "/videos/Video Project 1.mp4";

  const activeSrc = isMobile ? mobileSrc : desktopSrc;

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#08110b]">
      <div className="relative h-full w-full overflow-hidden">
        <video
          key={activeSrc}
          src={activeSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setIsLoaded(true)}
          className={`
            pointer-events-none absolute left-1/2 top-1/2 h-full w-full
            -translate-x-1/2 -translate-y-1/2 object-cover
            transition-opacity duration-700 ease-out
            ${isLoaded ? "opacity-100" : "opacity-0"}
          `}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>
    </div>
  );
}