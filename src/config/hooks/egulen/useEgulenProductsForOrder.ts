"use client";

import { useEffect, useState } from "react";
import { startsWith } from "lodash";
import { useEgulenLogin } from "./useEgulenLogin";

interface UseProductsResult {
  products: any;
  loading: boolean;
  error: string | null;
}

export function useEgulenProductsForOrder(): UseProductsResult {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { login } = useEgulenLogin();

  const fetchWithToken = async ({
    ACCESS_TOKEN,
    USER_ID,
    ORG_ID,
  }: {
    ACCESS_TOKEN: string;
    USER_ID: string;
    ORG_ID: string;
  }) => {
    const res = await fetch("/api/egulen/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ACCESS_TOKEN, USER_ID, ORG_ID }),
    });

    const data = await res.json();
    return { res, data };
  };

  const fetchProducts = async () => {
    try {
      // ➜ always fetch valid credentials (auto-relogins if needed)
      const { accessToken, userId, orgId } = await login();

      let { res, data } = await fetchWithToken({
        ACCESS_TOKEN: accessToken,
        USER_ID: userId,
        ORG_ID: orgId,
      });

      // Token expiry + server disconnect case
      if (
        res.status === 401 ||
        res.status === 403 ||
        startsWith(data?.success, "Connection interrupted")
      ) {
        const retry = await login(true); // ✅ force login
        ({ res, data } = await fetchWithToken({
          ACCESS_TOKEN: retry.accessToken,
          USER_ID: retry.userId,
          ORG_ID: retry.orgId,
        }));
      }

      if (!res.ok) {
        setError(data.message || "Failed to load products");
      } else {
        setProducts(data?.success || data);
      }
    } catch (err: any) {
      console.error("Product fetch error:", err);
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error };
}
