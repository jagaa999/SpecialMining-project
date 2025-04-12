"use client";

import { useEffect, useState } from "react";

export const useMotoPage = (pageslug: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!pageslug) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/moto-page?pageslug=${pageslug}`);
        const json = await res.json();

        setData(json);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageslug]);

  return { data, loading, error };
};
