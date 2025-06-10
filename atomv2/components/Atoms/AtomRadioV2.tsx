"use client";

import { cn } from "atomv2/util/atomHelperV2";
import { InputHTMLAttributes } from "react";

interface OptionType {
  label: string;
  value: string | number;
}

interface AtomRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  options?: OptionType[];
  name?: string;
}

export default function AtomRadioV2({
  className = "",
  options = [],
  name,
  ...props
}: AtomRadioProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {options.map((opt, index) => (
        <label key={index} className="inline-flex items-center space-x-2">
          <input
            type="radio"
            value={opt.value}
            name={name}
            className="form-radio h-4 w-4 text-primary focus:ring-primary"
            {...props}
          />
          <span className="text-sm text-gray-700">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
