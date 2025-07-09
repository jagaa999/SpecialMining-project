"use client";

import { HTMLAttributes, ReactNode } from "react";
import BlockDiv from "./BlockDiv";

interface BlockGrid3Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function BlockGrid3({
  children,
  className,
  ...props
}: BlockGrid3Props) {
  return (
    <BlockDiv
      data-block="BlockGrid3"
      className={`grid grid-cols-3 gap-5 ${className}`}
      {...props}>
      {children}
    </BlockDiv>
  );
}
