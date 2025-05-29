"use client";

import { cn } from "atomv2/util/atomHelperV2";
import Image from "next/image";

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
      className={cn(
        `w-full h-full object-cover rounded-md shadow-lg transition-transform transform hover:scale-105 duration-300`,
        className
      )}
      sizes={sizes}
      quality={quality}
      {...props} // Spread the props here to pass them to the Image component
    />
  );
}
