import React, { CSSProperties, ReactNode } from "react";
import { cn } from "atomv2/util/atomHelperV2";

interface AtomLabelV2Props {
  htmlFor?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  required?: boolean;
}

export default function AtomLabelV2({
  htmlFor,
  children,
  className = "",
  style,
  required = false,
}: AtomLabelV2Props) {
  return (
    <label
      htmlFor={htmlFor}
      style={style}
      className={cn("block text-sm font-medium text-gray-700 mb-1", className)}>
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}
