import React, { TextareaHTMLAttributes } from "react";
import { cn } from "atomv2/util/atomHelperV2";

interface AtomTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export default function AtomTextareaV2({
  className = "",
  ...props
}: AtomTextareaProps) {
  const inputBaseClassName =
    "block bg-white w-full rounded-brand border-0 ring-1 ring-gray-200 px-3 py-2 text-base shadow-none focus:outline-none focus:ring-brand placeholder-muted/30 placeholder:text-xs transition-all";

  return (
    <textarea
      {...props}
      className={cn(inputBaseClassName, "resize-y", className)}
    />
  );
}
