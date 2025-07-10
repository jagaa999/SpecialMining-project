"use client";

import { AtomBaseProps } from "atomv2/types/atomTypes";
import { cn } from "atomv2/util/atomHelperV2";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export interface AtomAnimationV2Props extends AtomBaseProps {
  delay?: number;
  duration?: number;
  type?:
    | "fadeIn"
    | "scaleIn"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "rotateIn"
    | "zoomIn";
  loop?: boolean | number;
  loopType?: "loop" | "reverse" | "mirror";
  triggerOnce?: boolean; // inView нэг удаа trigger хийх үү
  threshold?: number; // visible хувь
}

export default function AtomAnimationV2({
  children,
  delay,
  duration = 1.0,
  type = "fadeIn",
  loop,
  loopType,
  triggerOnce = false,
  threshold = 0.2,
  className,
  ...rest
}: AtomAnimationV2Props) {
  const hasAnimationProps =
    delay ||
    duration ||
    loop ||
    loopType ||
    !triggerOnce ||
    threshold !== 0.2 ||
    type !== "fadeIn";

  if (!hasAnimationProps) return children;

  const { ref, inView } = useInView({ triggerOnce, threshold });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={variants[type] as any}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={{ delay, duration, loop, loopType }}
      {...rest}>
      {children}
    </motion.div>
  );
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: ({ delay = 0, duration = 0.5, loop, loopType }: any) => ({
      opacity: 1,
      transition: {
        delay,
        duration,
        repeat: loop ? (typeof loop === "number" ? loop : Infinity) : 0,
        repeatType: loopType || "loop",
      },
    }),
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: ({ delay = 0, duration = 0.4, loop, loopType }: any) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration,
        repeat: loop ? (typeof loop === "number" ? loop : Infinity) : 0,
        repeatType: loopType || "loop",
      },
    }),
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: ({ delay = 0, duration = 0.5, loop, loopType }: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration,
        repeat: loop ? (typeof loop === "number" ? loop : Infinity) : 0,
        repeatType: loopType || "loop",
      },
    }),
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: ({ delay = 0, duration = 0.5, loop, loopType }: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration,
        repeat: loop ? (typeof loop === "number" ? loop : Infinity) : 0,
        repeatType: loopType || "loop",
      },
    }),
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: ({ delay = 0, duration = 0.5, loop, loopType }: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration,
        repeat: loop ? (typeof loop === "number" ? loop : Infinity) : 0,
        repeatType: loopType || "loop",
      },
    }),
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: ({ delay = 0, duration = 0.5, loop, loopType }: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration,
        repeat: loop ? (typeof loop === "number" ? loop : Infinity) : 0,
        repeatType: loopType || "loop",
      },
    }),
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -15 },
    visible: ({ delay = 0, duration = 0.6, loop, loopType }: any) => ({
      opacity: 1,
      rotate: 0,
      transition: {
        delay,
        duration,
        ease: "easeOut",
        repeat: loop ? (typeof loop === "number" ? loop : Infinity) : 0,
        repeatType: loopType || "loop",
      },
    }),
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: ({ delay = 0, duration = 0.6, loop, loopType }: any) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration,
        ease: "easeOut",
        repeat: loop ? (typeof loop === "number" ? loop : Infinity) : 0,
        repeatType: loopType || "loop",
      },
    }),
  },
};
