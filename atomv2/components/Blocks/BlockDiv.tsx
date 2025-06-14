"use client";

import { HTMLAttributes, ReactNode } from "react";
import AtomUrlV2, { AtomUrlV2Props } from "../Atoms/AtomUrlV2";

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
  | "main";

export interface BlockDivProps extends HTMLAttributes<HTMLElement> {
  type?: BlockElementType;
  url?: AtomUrlV2Props;
  children?: ReactNode;
}

export default function BlockDiv({
  type = "div",
  url,
  children,
  ...props
}: BlockDivProps) {
  const Element = type;

  return (
    <AtomUrlV2 {...url}>
      <Element {...props}>{children}</Element>
    </AtomUrlV2>
  );
}
