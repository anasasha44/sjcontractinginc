"use client";

import { useEffect, useMemo, useState } from "react";

export default function HeroVideoBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [loadedKey, setLoadedKey] = useState("");
  const [viewport, setViewport] = useState({
    width: 1920,
    height: 1080,
  });

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setViewport({ width, height });
      setIsMobile(width < 768);
    };

    updateViewport();

    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);

  const desktopVideoId = "pOToGZ8swcs";
  const mobileVideoId = "3wyhL9nA9hg";

  const activeVideoId = isMobile ? mobileVideoId : desktopVideoId;

  const videoSrc = `https://www.youtube.com/embed/${activeVideoId}?autoplay=1&mute=1&loop=1&playlist=${activeVideoId}&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1`;

  const iframeSize = useMemo(() => {
    const videoRatio = 16 / 9;
    const screenRatio = viewport.width / viewport.height;

    let width;
    let height;

    if (screenRatio > videoRatio) {
      width = viewport.width;
      height = width / videoRatio;
    } else {
      height = viewport.height;
      width = height * videoRatio;
    }

    const overscan = isMobile ? 1.45 : 1.18;

    return {
      width: `${width * overscan}px`,
      height: `${height * overscan}px`,
    };
  }, [viewport.width, viewport.height, isMobile]);

  const isLoaded = loadedKey === videoSrc;

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#08110b]">
      <div className="relative h-full w-full overflow-hidden">
        <iframe
          key={videoSrc}
          src={videoSrc}
          title="Hero Video Background"
          allow="autoplay; fullscreen"
          onLoad={() => setLoadedKey(videoSrc)}
          className={`
            pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-0
            transition-all duration-1000 ease-out
            ${isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"}
          `}
          style={iframeSize}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>
    </div>
  );
}