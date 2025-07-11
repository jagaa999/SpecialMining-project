"use client";

import React, { SelectHTMLAttributes } from "react";
import { cn } from "atomv2/util/atomHelperV2";
import { map } from "lodash";

interface OptionType {
  id?: string | number;
  title?: string;
  label?: string;
  value?: string | number;
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
  const inputBaseClassName =
    "block bg-white w-full rounded-brand border-0 ring-1 ring-gray-200 px-3 py-2 text-sm shadow-none focus:outline-none focus:ring-brand placeholder-muted/30 placeholder:text-xs transition-all";

  return (
    <select className={cn(inputBaseClassName, className)} {...props}>
      {children ||
        map(options, (opt: any, index: number) => (
          <option key={opt?.id || index} value={opt?.value || opt?.id}>
            {opt?.title || opt?.label}
          </option>
        ))}
    </select>
  );
}
