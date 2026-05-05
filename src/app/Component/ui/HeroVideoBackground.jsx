"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideoBackground() {
  const playerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateDevice = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateDevice();
    mediaQuery.addEventListener("change", updateDevice);

    return () => mediaQuery.removeEventListener("change", updateDevice);
  }, []);

  useEffect(() => {
    if (isMobile === null) return;

    const videoId = isMobile ? "uRntI2VlDNM" : "Vn6zjtHRjjY";

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
        },
      });

      // loop سموذ (تقريبًا)
      setInterval(() => {
        const player = playerRef.current;
        if (!player) return;

        const duration = player.getDuration();
        const current = player.getCurrentTime();

        if (duration && current > duration - 0.3) {
          player.seekTo(0, true);
        }
      }, 100);
    };
  }, [isMobile]);

  if (isMobile === null) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div
        id="yt-player"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
    </div>
  );
}