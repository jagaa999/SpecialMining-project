"use client";

import { useState, useMemo } from "react";
import {
  processCloudinaryImage,
  processResponsiveCDNImageV2,
} from "atomv2/util/imagehelper";
import { isEmpty } from "lodash";
import { ImageProps } from "next/image";
import { AtomBaseProps } from "../../types/atomTypes";
import { cn } from "../../util/atomHelperV2";

type AtomImageProps = Omit<ImageProps, "src" | "onClick" | "alt"> &
  Omit<AtomBaseProps, "onClick" | "children" | "alt"> & {
    src?: string;
    onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
    alt?: string;
    cloudinaryParam?: string;
    fallbackSrc?: string; // ⬅️ Custom fallback
  };

export default function AtomImageV2({
  className,
  value,
  src,
  alt,
  cloudinaryParam,
  fallbackSrc = "/images/icon-no-image_tcse9o.svg",
  ...props
}: AtomImageProps) {
  // 1️⃣ Эхний зураг
  const initialSrc = useMemo(() => {
    const raw = src ?? String(value ?? "");
    // ❌ Хоосон, null string, /null path байвал шууд хоосон буцаана
    if (
      isEmpty(raw) ||
      raw === "null" ||
      raw.includes("/null") ||
      raw.includes("undefined")
    ) {
      return "";
    }
    return raw;
  }, [src, value]);

  // 2️⃣ Stateful image src
  const [imgSrc, setImgSrc] = useState(initialSrc);

  // 3️⃣ Хэрэв зураг байхгүй бол fallback руу шууд шилжүүлнэ
  if (!imgSrc)
    return (
      <img
        src={fallbackSrc}
        alt={alt || "no-image"}
        className={cn("object-contain rounded-brand", className)}
        loading="lazy"
        {...props}
      />
    );

  // 4️⃣ Cloudinary болон responsive CDN хувилбарууд
  const imgSrcReady = processCloudinaryImage(imgSrc, cloudinaryParam);
  const imgProps = processResponsiveCDNImageV2(imgSrcReady);

  return (
    <img
      src={imgProps.src}
      srcSet={imgProps.srcSet}
      sizes={imgProps.sizes}
      loading="lazy"
      onError={() => {
        // ❗ Зөвхөн нэг удаа fallback руу шилжүүлнэ
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
      className={cn("object-contain rounded-brand", className)}
      alt={alt || imgSrcReady}
      role="img"
      {...props}
    />
  );
}
