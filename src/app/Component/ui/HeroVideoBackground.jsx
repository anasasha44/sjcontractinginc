"use client";

import { useEffect, useMemo, useState } from "react";

export default function HeroVideoBackground() {
  const [isMobile, setIsMobile] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateDevice = () => {
      setIsMobile(mediaQuery.matches);
      setIsLoaded(false);
    };

    updateDevice();
    mediaQuery.addEventListener("change", updateDevice);
    window.addEventListener("orientationchange", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
      window.removeEventListener("orientationchange", updateDevice);
    };
  }, []);

  const videoId = useMemo(() => {
    if (isMobile === null) return null;

    return isMobile ? "uRntI2VlDNM" : "Vn6zjtHRjjY";
  }, [isMobile]);

  const youtubeSrc = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`
    : "";

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#08110b]">
      {videoId && (
        <iframe
          key={videoId}
          src={youtubeSrc}
          title="Hero background video"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
    </div>
  );
}