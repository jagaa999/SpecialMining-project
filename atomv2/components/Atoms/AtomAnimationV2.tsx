"use client";

import { motion } from "framer-motion";
import { AtomBaseProps } from "atomv2/types/atomTypes";
import { useInView } from "react-intersection-observer";

export interface AtomAnimationV2Props extends AtomBaseProps {
  delay?: number;
  duration?: number;
  type?: "fadeIn" | "scaleIn" | "slideUp";
  loop?: boolean | number;
  loopType?: "loop" | "reverse" | "mirror";
  triggerOnce?: boolean; // inView нэг удаа trigger хийх үү
  threshold?: number; // visible хувь
}

export default function AtomAnimationV2({
  children,
  delay,
  duration,
  type = "fadeIn",
  loop,
  loopType,
  triggerOnce = true,
  threshold = 0.2,
  className,
  ...rest
}: AtomAnimationV2Props) {
  const { ref, inView } = useInView({ triggerOnce, threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[type]}
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
};
