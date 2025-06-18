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
    <div className={cn("flex flex-col gap-2", className)}>
      {map(options, (item: any, index: number) => (
        <label
          key={item?.id || index}
          className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            value={item.value}
            name={name}
            className="form-checkbox h-4 w-4 focus:ring-brand"
            {...props}
          />
          <span className="text-sm">{item.label}</span>
        </label>
      ))}
    </div>
  );
}
