"use client";

import { HTMLAttributes, ReactNode } from "react";
import AtomUrlV2, { AtomUrlV2Props } from "../Atoms/AtomUrlV2";
import { cn } from "atomv2/util/atomHelperV2";

export type BlockElementType =
  | "div"
  | "span"
  | "p"
  | "nav"
  | "section"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "main"
  | "body";

export interface BlockDivProps extends HTMLAttributes<HTMLElement> {
  type?: BlockElementType;
  url?: AtomUrlV2Props;
  className?: string;
  children?: ReactNode;
}

export default function BlockDiv({
  type = "div",
  url,
  children,
  className,
  ...props
}: BlockDivProps) {
  const Element = type;

  return (
    <AtomUrlV2 {...url}>
      <Element className={cn(className)} {...props}>
        {children}
      </Element>
    </AtomUrlV2>
  );
}
