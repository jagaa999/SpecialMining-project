"use client";

import { cn } from "atomv2/util/atomHelperV2";
import { map } from "lodash";
import { InputHTMLAttributes } from "react";

interface OptionType {
  label: string;
  value: string | number;
}

interface AtomCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  options?: OptionType[];
  name?: string;
}

export default function AtomCheckBoxV2({
  className = "",
  options = [],
  name,
  ...props
}: AtomCheckBoxProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {map(options, (opt: any, index: number) => (
        <label key={index} className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            value={opt.value}
            name={name}
            className="form-checkbox h-4 w-4 text-primary focus:ring-primary"
            {...props}
          />
          <span className="text-sm text-gray-700">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
