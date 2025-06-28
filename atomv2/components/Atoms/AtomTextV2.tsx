"use client";

import { isEmpty } from "lodash";
import { AtomBaseProps } from "../../types/atomTypes";
import { cn } from "../../util/atomHelperV2";

interface AtomTextProps extends AtomBaseProps {
  as?:
    | "p"
    | "span"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "small"
    | "li"
    | "blockquote";
  variant?: "default" | "muted" | "info" | "warning" | "error" | "highlight";
  isHtml?: boolean;
}

export default function AtomTextV3({
  as = "p",
  value,
  variant = "default",
  isHtml = false,
  className,
  children,
  ...props
}: AtomTextProps) {
  if (isEmpty(value) && isEmpty(children)) return null;

  const variants = {
    default: "",
    muted: "text-muted",
    info: "text-info",
    warning: "text-warning",
    error: "text-error",
    highlight: "font-semibold text-primary",
  };

  const Tag = as;

  if (isHtml && typeof value === "string") {
    return (
      <Tag
        className={cn(variants[variant], className)}
        dangerouslySetInnerHTML={{ __html: value }}
        {...props}
      />
    );
  }

  return (
    <Tag className={cn(variants[variant], className)} {...props}>
      {value ?? children}
    </Tag>
  );
}
