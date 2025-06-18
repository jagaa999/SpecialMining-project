import React, { CSSProperties, ReactNode } from "react";
import { cn } from "atomv2/util/atomHelperV2";
import { isEmpty } from "lodash";

interface AtomLabelV2Props {
  value?: string;
  htmlFor?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  required?: boolean;
}

export default function AtomLabelV2({
  value,
  htmlFor,
  children,
  className = "",
  style,
  required = false,
}: AtomLabelV2Props) {
  if (isEmpty(value) && isEmpty(children)) return null;

  return (
    <label
      htmlFor={htmlFor}
      style={style}
      className={cn("block text-sm", className)}>
      {value ?? children}
      {required && <span className="text-error ml-1">*</span>}
    </label>
  );
}
