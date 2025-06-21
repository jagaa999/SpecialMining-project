"use client";

import { AtomBaseProps } from "../../types/atomTypes";
import { cn } from "../../util/atomHelperV2";

interface AtomButtonProps extends AtomBaseProps {
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "ghost"
    | "action1"
    | "action2";
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
    action1:
      "!px-4 !py-2 text-sm border border-slate-200 bg-white text-slate-500 shadow-none rounded w-fit",
    action2:
      "!px-4 !py-2 text-sm bg-brand text-white shadow-none rounded w-fit",
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
