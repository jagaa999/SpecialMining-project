"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimationType =
  | "full"
  | "small"
  | "default"
  | "landing"
  | "wallpaper"
  | "bottom"
  | "top"
  | "right"
  | "left";

interface BlockAnimateFadeViewProps {
  type?: AnimationType;
  once?: boolean;
  duration?: number;
  children: ReactNode;
  className?: string;
}

const animationVariants: Record<
  AnimationType,
  {
    visible: Record<string, any>;
    hidden: Record<string, any>;
  }
> = {
  full: {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.65 },
  },
  default: {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0.5, scale: 0.77 },
  },
  small: {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0.92, scale: 0.93 },
  },
  landing: {
    visible: { opacity: 1 },
    hidden: { opacity: 0.5 },
  },
  wallpaper: {
    visible: { scale: 1 },
    hidden: { scale: 1.15 },
  },
  bottom: {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: { opacity: 0.3, scale: 0.95, y: 70 },
  },
  top: {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: { opacity: 0.3, scale: 0.95, y: -10 },
  },
  right: {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: { opacity: 0.85, scale: 0.99, x: -12 },
  },
  left: {
    visible: { opacity: 1, scale: 1, x: 0 },
    hidden: { opacity: 0.85, scale: 0.99, x: 12 },
  },
};

export default function BlockAnimateFadeView({
  type = "full",
  once = false,
  duration = 0.57,
  children,
  className = "",
  ...props
}: BlockAnimateFadeViewProps) {
  const variants = animationVariants[type];

  return (
    <motion.div
      className={className}
      layout="position"
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{ duration, ease: "easeInOut" }}
      variants={variants}
      {...props}>
      {children}
    </motion.div>
  );
}
