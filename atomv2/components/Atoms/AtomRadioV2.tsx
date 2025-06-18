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
    <div className={cn("flex flex-col gap-2", className)}>
      {options.map((item: any, index: number) => (
        <label
          key={item?.id || index}
          className="inline-flex items-center space-x-2">
          <input
            type="radio"
            value={item.value}
            name={name}
            className="form-radio h-4 w-4 focus:ring-brand"
            {...props}
          />
          <span className="text-sm">{item.label}</span>
        </label>
      ))}
    </div>
  );
}
