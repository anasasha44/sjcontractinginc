"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function HeroVideoBackground() {
  const videoARef = useRef(null);
  const videoBRef = useRef(null);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isMobile, setIsMobile] = useState(null);
  const [activeVideo, setActiveVideo] = useState("a");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateDevice = () => {
      setIsMobile(mediaQuery.matches);
      setIsLoaded(false);
      setActiveVideo("a");
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    window.addEventListener("orientationchange", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
      window.removeEventListener("orientationchange", updateDevice);
    };
  }, []);

  const videoName = useMemo(() => {
    if (isMobile === null) return null;
    return isMobile ? "hero-mobile" : "hero-desktop";
  }, [isMobile]);

  useEffect(() => {
    if (!videoName) return;

    const videoA = videoARef.current;
    const videoB = videoBRef.current;

    if (!videoA || !videoB) return;

    let current = videoA;
    let next = videoB;
    let currentKey = "a";
    let isSwitching = false;

    const resetVideos = () => {
      videoA.pause();
      videoB.pause();

      videoA.currentTime = 0;
      videoB.currentTime = 0;

      videoA.load();
      videoB.load();
    };

    const start = async () => {
      resetVideos();

      try {
        await videoA.play();
        setIsLoaded(true);
      } catch {
        setIsLoaded(true);
      }
    };

    const tick = async () => {
      if (
        current.duration > 0 &&
        current.currentTime >= current.duration - 0.8 &&
        !isSwitching
      ) {
        isSwitching = true;

        next.currentTime = 0;

        try {
          await next.play();
        } catch {}

        setActiveVideo(currentKey === "a" ? "b" : "a");

        timeoutRef.current = window.setTimeout(() => {
          current.pause();
          current.currentTime = 0;

          const previous = current;
          current = next;
          next = previous;

          currentKey = currentKey === "a" ? "b" : "a";
          isSwitching = false;
        }, 800);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    start();
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      videoA.pause();
      videoB.pause();
    };
  }, [videoName]);

  const videoClass =
    "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out";

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#08110b]">
      {videoName && (
        <>
          <video
            key={`a-${videoName}`}
            ref={videoARef}
            muted
            playsInline
            preload="auto"
            className={`${videoClass} ${
              isLoaded && activeVideo === "a" ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={`/videos/${videoName}.webm`} type="video/webm" />
            <source src={`/videos/${videoName}.mp4`} type="video/mp4" />
          </video>

          <video
            key={`b-${videoName}`}
            ref={videoBRef}
            muted
            playsInline
            preload="auto"
            className={`${videoClass} ${
              isLoaded && activeVideo === "b" ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src={`/videos/${videoName}.webm`} type="video/webm" />
            <source src={`/videos/${videoName}.mp4`} type="video/mp4" />
          </video>
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
    </div>
  );
}