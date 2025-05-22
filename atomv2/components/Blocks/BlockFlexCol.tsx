"use client";

import { HTMLAttributes, ReactNode } from "react";
import BlockDiv from "./BlockDiv";

interface BlockFlexColProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function BlockFlexCol({
  children,
  className,
  ...props
}: BlockFlexColProps) {
  return (
    <BlockDiv
      data-block="BlockFlexCol"
      className={`flex flex-col gap-5 justify-center ${className}`}
      {...props}>
      {children}
    </BlockDiv>
  );
}
