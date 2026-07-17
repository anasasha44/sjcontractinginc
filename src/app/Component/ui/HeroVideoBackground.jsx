"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function HeroVideoBackground() {
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const intervalRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
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

  const desktopVideoId = "Vn6zjtHRjjY";
  const mobileVideoId = "uRntI2VlDNM";

  const activeVideoId = isMobile ? mobileVideoId : desktopVideoId;

  const videoSrc = useMemo(() => {
    return `https://www.youtube.com/embed/4kMMtK2HJE8?autoplay=1&mute=1&loop=1&playlist=4kMMtK2HJE8&controls=0&rel=0&playsinline=1&enablejsapi=1&disablekb=1&iv_load_policy=3&fs=0`;
  }, [activeVideoId]);

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

  useEffect(() => {
    setIsLoaded(false);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const createPlayer = () => {
      if (!iframeRef.current || !window.YT?.Player) return;

      playerRef.current = new window.YT.Player(iframeRef.current, {
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
            setIsLoaded(true);

            intervalRef.current = setInterval(() => {
              const player = playerRef.current;
              if (!player?.getDuration || !player?.getCurrentTime) return;

              const duration = player.getDuration();
              const currentTime = player.getCurrentTime();

              if (duration && currentTime >= duration - 0.35) {
                player.seekTo(0, true);
                player.playVideo();
              }
            }, 150);
          },
        },
      });
    };

    if (window.YT?.Player) {
      createPlayer();
    } else {
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }

      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (playerRef.current?.destroy) playerRef.current.destroy();
    };
  }, [activeVideoId]);

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden bg-[#08110b]">
      <div className="relative h-full w-full overflow-hidden">
        <iframe
          ref={iframeRef}
          key={activeVideoId}
          src={videoSrc}
          title="Hero Video Background"
          allow="autoplay; fullscreen"
          className={`
            pointer-events-none absolute left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2 border-0
            transition-opacity duration-1000 ease-out
            ${isLoaded ? "opacity-100" : "opacity-0"}
          `}
          style={iframeSize}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      </div>
    </div>
  );
}