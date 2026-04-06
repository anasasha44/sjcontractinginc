"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroBackgroundPages({ desktopImages = [], mobileImages = [] }) {
  const [isMobile, setIsMobile] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  const onLoadImage = (index) => {
    setLoadedImages((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  return (
    <div className="absolute inset-0 -z-10">
      <Swiper
        effect="fade"
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={src}
                alt="background slide"
                onLoad={() => onLoadImage(index)}
                className={`
                  w-full h-full object-cover
                  duration-1200
                  ${
                    loadedImages[index]
                      ? "opacity-100 scale-100 blur-0"
                      : "opacity-0 scale-105 blur-md"
                  }
                `}
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
