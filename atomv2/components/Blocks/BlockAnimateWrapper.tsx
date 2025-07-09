"use client";

import BlockAnimateFadeView from "./BlockAnimateFadeView";
import { Children, ReactNode } from "react";

interface BlockAnimateWrapperProps {
  children: ReactNode;
  type?:
    | "full"
    | "small"
    | "default"
    | "landing"
    | "wallpaper"
    | "bottom"
    | "top"
    | "right"
    | "left";
  once?: boolean;
  duration?: number;
  className?: string;
  childClassName?: string;
}

export default function BlockAnimateWrapper({
  children,
  type = "default",
  once = false,
  duration = 0.57,
  childClassName = "",
}: BlockAnimateWrapperProps) {
  return (
    <>
      {/* {children.map((child, index) => ( */}
      {Children.toArray(children).map((itemChildren, index) => (
        <BlockAnimateFadeView
          key={index}
          type={type}
          once={once}
          duration={duration}
          className={childClassName}>
          {itemChildren}
        </BlockAnimateFadeView>
      ))}
    </>
  );
}
