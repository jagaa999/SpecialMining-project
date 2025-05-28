"use client";

import React from "react";
import _ from "lodash";
import useUnsplash from "src/config/hooks/useUnsplash";

export default function DigitalServiceHomeHero({ item }: { item: any }) {
  const { imageUrl, loading, error } = useUnsplash("beautiful background");
  const defaultImage = "/images/dddd.jpg";

  // If loading, show a placeholder or loading state
  if (loading) {
    return (
      <section className="h-[100vh] bg-gray-200 flex items-center justify-center text-gray-500">
        Loading...
      </section>
    );
  }

  console.log("dfsdfdsf sdf dsf sd:", { item });

  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `url(${
          error ? defaultImage : imageUrl?.regular || defaultImage
        })`, // Use default if there's an error
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="w-40 h-[3px] bg-[#c8102e] mx-auto mb-8" />
        <p className="text-6xl md:text-8xl font-extrabold leading-tight mb-8 whitespace-pre-line">
          {item?.title}
        </p>

        <p className="text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          {item?.subtitle}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {_.map(item?.buttons, (item: any, index: number) => (
            <a
              key={index}
              href={item.href}
              className={`font-semibold px-8 py-4 text-lg transition-all flex items-center gap-2 ${
                item.style === "primary"
                  ? "bg-[#c8102e] text-white hover:bg-red-700"
                  : "bg-white text-black border hover:bg-gray-100"
              }`}>
              {item.label}
              {item.style === "light" && <span className="text-xl">→</span>}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
