"use client";

import React, { useEffect, useState } from "react";
import _ from "lodash";

export default function Banner({
  item,
}: {
  item: {
    mainimage: string;
    title: string;
    subtitle: string;
  };
}) {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRandomImage() {
      const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;
      const url =
        "https://api.unsplash.com/photos/random?query=mining&orientation=landscape";

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setImageUrl(data.urls.full); // Fetch the full image URL
      } catch (err) {
        console.error("Error fetching the image:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRandomImage();
  }, []);

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
