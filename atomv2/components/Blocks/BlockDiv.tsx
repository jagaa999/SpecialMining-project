"use client";

import { cn } from "atomv2/util/atomHelperV2";
import { HTMLAttributes, ReactNode } from "react";

export type BlockElementType =
  | "div"
  | "span"
  | "p"
  | "section"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "main";

export interface BlockDivProps extends HTMLAttributes<HTMLElement> {
  type?: BlockElementType;
  children?: ReactNode;
}

export default function BlockDiv({
  type = "div",
  className,
  children,
  ...props
}: BlockDivProps) {
  const Element = type;

  return (
    <Element className={cn(className)} {...props}>
      {children}
    </Element>
  );
}
