"use client";

import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BlockSliderSwiperProps {
  children: ReactNode[];
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  className?: string;
}

export default function BlockSliderSwiper({
  children,
  slidesPerView = 1,
  spaceBetween = 16,
  loop = false,
  className = "",
  ...props
}: BlockSliderSwiperProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      loop={loop}
      navigation
      pagination={{ clickable: true }}
      className={className}
      {...props}>
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
