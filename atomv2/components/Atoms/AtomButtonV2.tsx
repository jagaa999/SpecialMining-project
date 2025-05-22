"use client";

import { AtomBaseProps } from "../../types/atomTypes";
import { cn } from "../../util/atomHelperV2";

interface AtomButtonProps extends AtomBaseProps {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  type?: "button" | "submit" | "reset";
}

export default function AtomButtonV2({
  value,
  variant = "primary",
  type = "button",
  className,
  children,
  ...props
}: AtomButtonProps) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-medium transition-colors block w-full h-full cursor-pointer",
        variants[variant],
        className
      )}
      {...props}>
      {value ?? children}
    </button>
  );
}
