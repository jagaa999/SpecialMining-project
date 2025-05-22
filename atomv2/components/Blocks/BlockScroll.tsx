"use client";

import { HTMLAttributes, ReactNode } from "react";
import BlockDiv from "./BlockDiv";

type ScrollDirection = "x" | "y" | "both" | "auto";

interface BlockScrollProps extends HTMLAttributes<HTMLDivElement> {
  /** Scroll чиглэл */
  direction?: ScrollDirection;
  /** Tailwind class */
  className?: string;
  /** Scrollable элементүүд */
  children: ReactNode;
}

/**
 * Scrollable wrapper layout - `BlockScroll`
 */
export default function BlockScroll({
  direction = "auto",
  children,
  className,
  ...props
}: BlockScrollProps) {
  const directionClasses: Record<ScrollDirection, string> = {
    x: "overflow-x-auto whitespace-nowrap",
    y: "overflow-y-auto",
    both: "overflow-auto",
    auto: "overflow-auto",
  };

  return (
    <BlockDiv
      data-block="BlockScroll"
      className={`w-full scrollbar scrollbar-thumb-slate-300 hover:scrollbar-thumb-slate-400 scrollbar-thumb-rounded scrollbar-w-[8px] ${directionClasses[direction]} ${className}`}
      {...props}>
      {children}
    </BlockDiv>
  );
}
