"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <motion.h1
        className="text-5xl font-extrabold text-gray-800 mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}>
        😕 Хуудас олдсонгүй
      </motion.h1>

      <motion.p
        className="text-gray-600 mb-8 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}>
        Та буруу замаар орсон бололтой. Хайлтаа дахин шалгана уу эсвэл нүүр
        хуудас руу буцна уу.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          Нүүр хуудас руу буцах
        </Link>
      </motion.div>
    </motion.div>
  );
}
