import { motion } from "framer-motion";
import React from "react";

export default function BlockAnimateHover({
  once = false,
  duration = 0.29,
  children,
}: {
  type?: "default";
  once?: boolean;
  duration?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      whileInView="visible"
      viewport={{ once: once }}
      whileHover={{ scale: 1.06, opacity: 0.95 }}
      transition={{ duration: duration, ease: "easeIn" }}
      variants={{
        visible: { opacity: 1, scale: 1 },
      }}>
      {children}
    </motion.button>
  );
}
