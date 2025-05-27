"use client";

import { HTMLAttributes, ReactNode } from "react";
import BlockDiv from "./BlockDiv";

export interface BlockFlexRowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function BlockFlexRow({
  children,
  className,
  ...props
}: BlockFlexRowProps) {
  return (
    <BlockDiv
      data-block="BlockFlexRow"
      className={`flex flex-row gap-5 items-center ${className}`}
      {...props}>
      {children}
    </BlockDiv>
  );
}
