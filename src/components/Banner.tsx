"use client";

import React, { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import useUnsplash from "../config/useUnsplash";

export default function Banner({
  item,
}: {
  item: {
    mainimage: string;
    title: string;
    subtitle: string;
  };
}) {
  const { imageUrl, loading, error } = useUnsplash("mining");

  // Default image in case of error or loading
  const defaultImage = "/images/dddd.jpg";
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setHasLoaded(true); // Image is loaded, enable effects
    }
  }, [loading]);

  // Scroll hook to capture page scroll progress
  const { scrollYProgress } = useScroll();

  // Parallax effect for title and subtitle
  const parallaxTitle = useTransform(scrollYProgress, [0, 1], [0, 100]); // title moves slower than scroll
  const parallaxSubtitle = useTransform(scrollYProgress, [0, 1], [0, 50]); // subtitle moves slower than title

  return (
    <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
      {/* Background Image with subtle zoom animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${
            error ? defaultImage : imageUrl || defaultImage
          })`, // Use default if there's an error
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: hasLoaded ? 1 : 1.1 }}
        transition={{ duration: 4, ease: "easeOut" }}
      />

      {/* Dark + Pinkish gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-pink-500/10 to-black/60" />

      {/* Text Content with parallax effect */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: hasLoaded ? 1 : 0,
          y: hasLoaded ? 0 : 20,
        }}
        transition={{ duration: 1 }}>
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white drop-shadow-md transition-all duration-500"
          style={{
            y: parallaxTitle, // Apply parallax effect to title
          }}>
          {item?.title}
        </motion.h1>
        <motion.p
          className="mt-3 text-lg font-light text-white drop-shadow transition-all duration-500"
          style={{
            y: parallaxSubtitle, // Apply parallax effect to subtitle
          }}>
          {item?.subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
}
