import React, { InputHTMLAttributes } from "react";
import { cn } from "atomv2/util/atomHelperV2";

interface AtomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function AtomInputV2({
  className = "",
  ...props
}: AtomInputProps) {
  const inputBaseClassName =
    "block bg-white w-full rounded-brand border-0 ring-1 ring-gray-200 px-3 py-2 text-sm shadow-none focus:outline-none focus:ring-brand placeholder-muted/30 placeholder:text-xs transition-all";
  return <input {...props} className={cn(inputBaseClassName, "", className)} />;
}
