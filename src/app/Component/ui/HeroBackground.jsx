"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

const desktopImages = [
  "https://ik.imagekit.io/gmjmoldeh/landscap/hero-1.jpeg",
  "https://ik.imagekit.io/gmjmoldeh/landscap/hero-2.jpg",
  "https://ik.imagekit.io/gmjmoldeh/landscap/hero-3.jpg",
  "https://ik.imagekit.io/gmjmoldeh/landscap/hero-4.jpg",
];

const mobileImages = [
  "https://ik.imagekit.io/gmjmoldeh/landscap/heroMobile-1.jpg",
  "https://ik.imagekit.io/gmjmoldeh/landscap/heroMobile-2.jpg",
  "https://ik.imagekit.io/gmjmoldeh/landscap/heroMobile-3.jpg",
  "https://ik.imagekit.io/gmjmoldeh/landscap/heroMobile-4.jpg",
];

export default function HeroBackground() {
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
              {/* Image background */}
                <Image
    src={src}
    alt="Renovation background slide"
    fill
    sizes="100vw"
    onLoad={() => onLoadImage(index)}
    loading="lazy"
    className={`
      object-cover 
      duration-1200
      ${
        loadedImages[index]
          ? "opacity-100 scale-100 blur-0"
          : "opacity-0 scale-105 blur-md"
      }
    `}
  />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/70" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
