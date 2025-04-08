"use client";

import React, { useEffect, useState } from "react";
import _ from "lodash";
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

  return (
    <section
      className="h-[60vh] bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          {item?.title}
        </h1>
        <p className="mt-2 text-lg font-light text-white">{item?.subtitle}</p>
      </div>
    </section>
  );
}
