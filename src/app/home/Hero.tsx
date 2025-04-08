"use client";

import React from "react";
import _ from "lodash";

const staticItem = {
  backgroundImage:
    "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
  title: "Blasting and\nDrilling Services",
  subtitle: "Expert in mining service. Contact us to start a project today.",
  buttons: [
    {
      label: "Our Services",
      href: "/services",
      style: "light",
    },
    {
      label: "About Us",
      href: "/about",
      style: "primary",
    },
  ],
};

export default function Hero() {
  return (
    <section
      className="h-[100vh] bg-cover bg-center flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `url('${staticItem?.backgroundImage}')`,
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="w-40 h-[3px] bg-[#c8102e] mx-auto mb-8" />
        <p className="text-6xl md:text-8xl font-extrabold leading-tight mb-8 whitespace-pre-line">
          {staticItem?.title}
        </p>
        <p className="text-xl md:text-3xl max-w-3xl mx-auto mb-10">
          {staticItem?.subtitle}
        </p>
        <div className="flex justify-center gap-6">
          {_.map(staticItem?.buttons, (item: any, index: number) => (
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
