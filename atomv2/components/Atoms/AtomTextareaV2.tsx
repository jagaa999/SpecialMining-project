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
  return (
    <textarea
      {...props}
      className={cn(
        "block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none",
        className
      )}
    />
  );
}
