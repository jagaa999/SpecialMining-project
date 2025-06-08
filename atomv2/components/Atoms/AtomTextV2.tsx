"use client";

import { isEmpty } from "lodash";
import { AtomBaseProps } from "../../types/atomTypes";
import { cn } from "../../util/atomHelperV2";

interface AtomTextProps extends AtomBaseProps {
  variant?: "default" | "muted" | "error" | "highlight";
  isHtml?: boolean;
}

export default function AtomTextV2({
  value,
  variant = "default",
  isHtml = false,
  className,
  children,
  ...props
}: AtomTextProps) {
  if (isEmpty(value) && isEmpty(children)) return null;

  const variants = {
    default: "text-base text-gray-900",
    muted: "text-sm text-gray-500",
    error: "text-sm text-red-600",
    highlight: "text-base font-semibold text-primary",
  };

  if (isHtml && typeof value === "string") {
    return (
      <p
        className={cn(variants[variant], className)}
        dangerouslySetInnerHTML={{ __html: value }}
        {...props}
      />
    );
  }

  return (
    <p className={cn(variants[variant], className)} {...props}>
      {value ?? children}
    </p>
  );
}
