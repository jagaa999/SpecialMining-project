import { cn } from "atomv2/util/atomHelperV2";
import React, { CSSProperties } from "react";

export default function AtomLineV2({
  className = "",
  style,
  variant = "solid",
  height,
}: {
  className?: string;
  style?: CSSProperties;
  variant?: "solid" | "dashed" | "dotted" | "gradient" | "vertical";
  height?: string | number;
}) {
  const isVertical = variant === "vertical";

  const variants = {
    solid: "bg-gray-300",
    dashed:
      "bg-[length:4px_1px] bg-repeat-x bg-[linear-gradient(to_right,_gray_50%,_transparent_50%)]",
    dotted:
      "bg-[length:2px_1px] bg-repeat-x bg-[linear-gradient(to_right,_gray_50%,_transparent_50%)]",
    gradient: "bg-gradient-to-r from-transparent via-gray-400 to-transparent",
    vertical: "bg-gray-300",
  };

  return (
    <div
      className={cn(
        "my-5",
        isVertical ? "w-px" : "w-full",
        variants[variant],
        className
      )}
      style={{
        ...style,
        height: isVertical ? height || "100%" : height || "1px",
      }}
    />
  );
}
