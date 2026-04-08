"use client";

import { useState, useEffect } from "react";

export default function HeroVideoBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopVideoId = "pOToGZ8swcs";
  const mobileVideoId = "3wyhL9nA9hg";

  const activeVideoId = isMobile ? mobileVideoId : desktopVideoId;

  const videoSrc = `https://www.youtube.com/embed/${activeVideoId}?autoplay=1&mute=1&loop=1&playlist=${activeVideoId}&controls=0&modestbranding=1&rel=0&playsinline=1`;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      <div className="relative h-full w-full">
        <iframe
          key={videoSrc}
          src={videoSrc}
          title="Hero Video Background"
          allow="autoplay; fullscreen"
          onLoad={() => setIsLoaded(true)}
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            pointer-events-none
            ${isMobile ? "h-screen w-[177.78vh] max-w-none" : "h-[120%] w-[200%]"}
            duration-1000 ease-in-out
            ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>
    </div>
  );
}