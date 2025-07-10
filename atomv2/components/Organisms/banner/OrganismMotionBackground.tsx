"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OrganismMotionBackground({
  imageUrl,
  defaultImage,
  error,
}: {
  imageUrl?: string;
  defaultImage: string;
  error?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  // Image load tracking
  useEffect(() => {
    if (!imageUrl) return;
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setLoaded(true);
  }, [imageUrl]);

  // Track in-view
  const { ref, inView } = useInView({
    triggerOnce: false, // ← дахин дахин trigger хийх
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      key={inView ? "visible" : "hidden"} // key өөрчлөгдөхөд анимэйшн шинэчлэгдэнэ
      initial={{ scale: 1.05, opacity: 0.6 }}
      animate={loaded && inView ? { scale: 1.1, opacity: 1 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${
          error ? defaultImage : imageUrl || defaultImage
        })`,
      }}
    />
  );
}
