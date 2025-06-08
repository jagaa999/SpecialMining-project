"use client";

import React, { SelectHTMLAttributes } from "react";
import { cn } from "atomv2/util/atomHelperV2";

interface OptionType {
  label: string;
  value: string | number;
}

interface AtomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options?: OptionType[]; // Dropdown-ий сонголтууд
  children?: React.ReactNode; // Альтернатив slot
}

export default function AtomSelectV2({
  className = "",
  children,
  options,
  ...props
}: AtomSelectProps) {
  return (
    <select
      className={cn(
        "block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all",
        className
      )}
      {...props}>
      {children ||
        options?.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
    </select>
  );
}
