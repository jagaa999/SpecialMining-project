"use client";

import React, { ReactNode } from "react";
import { cn } from "../../util/atomHelperV2";
import BlockDiv from "./BlockDiv";

type BlockHalfType =
  | "90"
  | "80"
  | "70"
  | "60"
  | "50"
  | "40"
  | "30"
  | "20"
  | "10";

interface BlockHalfProps {
  children: [ReactNode, ReactNode];
  reverse?: boolean;
  type?: BlockHalfType;
  gap?: string; // Tailwind gap-x class: "gap-x-4", "gap-x-10" гэх мэт
  stretch?: boolean; // Хоёр талт блокнуудын өндөр адилхан байх уу?
  className?: string;
}

const typeToWidth: Record<BlockHalfType, [string, string]> = {
  "10": ["md:w-1/6", "md:w-5/6"],
  "20": ["md:w-1/5", "md:w-4/5"],
  "30": ["md:w-1/3", "md:w-2/3"],
  "40": ["md:w-2/5", "md:w-3/5"],
  "50": ["md:w-1/2", "md:w-1/2"],
  "60": ["md:w-3/5", "md:w-2/5"],
  "70": ["md:w-2/3", "md:w-1/3"],
  "80": ["md:w-4/5", "md:w-1/5"],
  "90": ["md:w-5/6", "md:w-1/6"],
};

/**
 * BlockHalf — 2 талт layout, хувь тохируулах боломжтой
 */
export default function BlockHalf({
  children,
  reverse = false,
  type = "50",
  gap = "gap-x-10",
  stretch = false,
  className,
  ...props
}: BlockHalfProps) {
  const [leftClass, rightClass] = typeToWidth[type];

  return (
    <BlockDiv
      data-block="BlockHalf"
      className={cn(
        "w-full h-fit flex flex-col md:flex-row items-center justify-center",
        stretch && "items-stretch",
        gap,
        className
      )}
      {...props}>
      <BlockDiv
        data-block="BlockHalfLeft"
        className={cn("w-full ", leftClass, reverse && "md:order-2")}>
        {React.Children.toArray(children)[0]}
      </BlockDiv>
      <BlockDiv
        data-block="BlockHalfRight"
        className={cn("w-full ", rightClass, reverse && "md:order-1")}>
        {React.Children.toArray(children)[1]}
      </BlockDiv>
    </BlockDiv>
  );
}
