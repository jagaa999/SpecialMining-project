"use client";

import { useEffect, useState } from "react";

export function useEgulenQpayToken() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const existingToken = localStorage.getItem("QPAY_ACCESS_TOKEN");

        if (existingToken) {
          setToken(existingToken);
          setLoading(false);
          return;
        }

        const res = await fetch("/api/egulen/qpay/token", { method: "POST" });
        const data = await res.json();

        if (res.ok && data.access_token) {
          localStorage.setItem("QPAY_ACCESS_TOKEN", data.access_token);
          setToken(data.access_token);
        } else {
          throw new Error(data.message || "Token fetch failed");
        }
      } catch (err: any) {
        console.error("QPay token error:", err);
        setError(err.message || "Token error");
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, []);

  return { token, loading, error };
}
