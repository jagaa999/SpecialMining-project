import { useEffect, useState } from "react";

interface UnsplashResult {
  imageUrl: string | null;
  loading: boolean;
  error: string | null;
}

export default function useUnsplash(query: string = "mining"): UnsplashResult {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRandomImage() {
      const UNSPLASH_ACCESS_KEY = process.env.NEXT_PUBLIC_ACCESS_KEY;
      const url = `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape`;

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
        setImageUrl(data.urls.full);
      } catch (err: any) {
        console.error("Error fetching the image:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRandomImage();
  }, [query]);

  return { imageUrl, loading, error };
}
