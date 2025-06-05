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
    primary: "bg-primary text-white",
    secondary: "bg-gray-200 text-gray-800",
    danger: "bg-red-600 text-white",
    ghost: "bg-transparent text-gray-700",
  };

  return (
    <button
      type={type}
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-medium transition duration-200 block w-full h-full cursor-pointer hover:brightness-95 ",
        variants[variant],
        className
      )}
      {...props}>
      {value ?? children}
    </button>
  );
}
