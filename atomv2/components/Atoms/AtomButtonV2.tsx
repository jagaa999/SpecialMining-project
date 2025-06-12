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
    primary: "bg-brand text-bg",
    secondary: "bg-secondary text-bg",
    danger: "bg-error text-bg",
    ghost: "bg-transparent text-fg",
  };

  const buttonThemeBrandClass = `
      rounded-brand
      px-brand-x
      py-brand-y
      shadow-brand
  `;

  return (
    <button
      type={type}
      className={cn(
        "block w-fit h-fit cursor-pointer transition duration-200 hover:brightness-95",
        buttonThemeBrandClass,
        variants[variant],
        className
      )}
      {...props}>
      {value ?? children}
    </button>
  );
}
