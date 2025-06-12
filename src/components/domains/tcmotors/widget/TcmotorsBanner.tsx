"use client";

import React, { useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function TcmotorsBanner({
    item,
}: {
    item: {
        mainimage: string;
        title: string;
        subtitle?: string;
    };
}) {
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = item.mainimage;
        img.onload = () => setHasLoaded(true);
    }, [item.mainimage]);

    const { scrollYProgress } = useScroll();
    const parallaxTitle = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const parallaxSubtitle = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
            {/* Background Image with subtle zoom animation */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center scale-110"
                style={{
                    backgroundImage: `url(${item.mainimage})`,
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: hasLoaded ? 1 : 1.1 }}
                transition={{ duration: 4, ease: "easeOut" }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-red-500/10 to-black/60" />

            {/* Text Content with parallax effect */}
            <motion.div
                className="relative z-10 text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: hasLoaded ? 1 : 0,
                    y: hasLoaded ? 0 : 20,
                }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white drop-shadow-md transition-all duration-500"
                    style={{ y: parallaxTitle }}
                >
                    {item.title}
                </motion.h1>
                {item.subtitle && (
                    <motion.p
                        className="mt-3 text-lg font-light text-white drop-shadow transition-all duration-500"
                        style={{ y: parallaxSubtitle }}
                    >
                        {item.subtitle}
                    </motion.p>
                )}
            </motion.div>
        </section>
    );
}
