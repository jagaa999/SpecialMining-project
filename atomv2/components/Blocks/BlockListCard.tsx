"use client";

import React, { HTMLAttributes, ReactNode } from "react";
import BlockDiv from "./BlockDiv";

type BlockListCardType = "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11";

interface BlockListCardProps extends HTMLAttributes<HTMLElement> {
  /** Responsive grid төрлүүд: хэдэн баганатай байхаа заана */
  type?: BlockListCardType;
  /** Grid дотор орох элементүүд */
  children: ReactNode;
}

/**
 * `BlockListCard` component
 *
 * Responsive grid layout-ийг `type`-оор удирдах олон төрлийн structure.
 */
export default function BlockListCard({
  type = "5",
  className,
  children,
  ...props
}: BlockListCardProps) {
  const gridColumns: Record<string, string> = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 sm:grid-cols-2",
    "3": "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    "4": "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4",
    "5": "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
    "6": "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",
    "7": "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7",
    "8": "grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8",
    "9": "grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-9",
    "10": "grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10",
    "11": "grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 2xl:grid-cols-11",
    "12": "grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-12",
    "13": "grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10 2xl:grid-cols-13",
    "14": "grid-cols-4 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-11 2xl:grid-cols-14",
    "15": "grid-cols-4 md:grid-cols-8 lg:grid-cols-11 xl:grid-cols-12 2xl:grid-cols-15",
  };

  return (
    <BlockDiv
      data-block="BlockListCard"
      className={`w-full grid gap-6 md:gap-7 lg:gap-8 xl:gap-9 ${gridColumns[type]} ${className}`}
      {...props}>
      {React.Children.toArray(children)}
    </BlockDiv>
  );
}
