"use client";

import { AtomBaseProps } from "../../types/atomTypes";
import { cn } from "../../util/atomHelperV2";

interface AtomTextProps extends AtomBaseProps {
  variant?: "default" | "muted" | "error" | "highlight";
}

export default function AtomTextV2({
  value,
  variant = "default",
  className,
  children,
  ...props
}: AtomTextProps) {
  const variants = {
    default: "text-base text-gray-900",
    muted: "text-sm text-gray-500",
    error: "text-sm text-red-600",
    highlight: "text-base font-semibold text-primary",
  };

  return (
    <p className={cn(variants[variant], className)} {...props}>
      {value ?? children}
    </p>
  );
}
