"use client";

import { HTMLAttributes, ReactNode } from "react";
import BlockDiv from "./BlockDiv";

type ScrollDirection = "x" | "y" | "both" | "auto";

interface BlockScrollProps extends HTMLAttributes<HTMLDivElement> {
  /** Scroll чиглэл */
  direction?: ScrollDirection;
  /** Tailwind class */
  className?: string;
  isActive?: boolean;
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
  isActive = true,
  ...props
}: BlockScrollProps) {
  if (!isActive) children;

  const directionClasses: Record<ScrollDirection, string> = {
    x: "overflow-x-auto whitespace-nowrap",
    y: "overflow-y-auto",
    both: "overflow-auto",
    auto: "overflow-auto",
  };

  return (
    <BlockDiv
      data-block="BlockScroll"
      className={`w-full scrollbar scrollbar-thumb-slate-50 hover:scrollbar-thumb-slate-200 scrollbar-thumb-rounded scrollbar-w-[5px] ${directionClasses[direction]} ${className}`}
      {...props}>
      {children}
    </BlockDiv>
  );
}
