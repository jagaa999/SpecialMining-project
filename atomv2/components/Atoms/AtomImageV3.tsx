"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function AtomImageV3({
  item,
  alt,
  className = "",
  sizes = "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw",
  quality = 85,
  props,
}: {
  item: string;
  alt?: string;
  className?: string;
  sizes?: string;
  quality?: number;
  props?: any;
}) {
  return (
    <Image
      src={item}
      alt={alt || item}
      fill
      className={twMerge(
        `w-full h-full object-cover rounded-md shadow-lg transition-transform transform hover:scale-105 duration-300`,
        className
      )}
      sizes={sizes}
      quality={quality}
      {...props} // Spread the props here to pass them to the Image component
    />
  );
}
