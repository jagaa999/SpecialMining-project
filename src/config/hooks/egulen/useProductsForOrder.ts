"use client";

import { useEffect, useState } from "react";
import { isEmpty } from "lodash";

interface UseProductsResult {
  products: any;
  loading: boolean;
  error: string | null;
}

export function useProductsForOrder(): UseProductsResult {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      let ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
      let USER_ID = localStorage.getItem("USER_ID");
      let ORG_ID = localStorage.getItem("ORG_ID");

      if (isEmpty(ACCESS_TOKEN) || isEmpty(USER_ID) || isEmpty(ORG_ID)) {
        try {
          const loginRes = await fetch("/api/egulen/login", {
            method: "POST",
          });

          const loginData = await loginRes.json();

          if (!loginRes.ok || !loginData.success) {
            setError("Login failed");
            setLoading(false);
            return;
          }

          const user = loginData.success;

          ACCESS_TOKEN = user.access_token;
          USER_ID = user.id;
          ORG_ID = user.organization?.id;

          if (!ACCESS_TOKEN || !USER_ID || !ORG_ID) {
            setError("Incomplete login response");
            setLoading(false);
            return;
          }

          localStorage.setItem("ACCESS_TOKEN", ACCESS_TOKEN);
          localStorage.setItem("USER_ID", USER_ID);
          localStorage.setItem("ORG_ID", ORG_ID);
          localStorage.setItem("ORG_NAME", user.organization?.title || "");
        } catch (err) {
          console.error("Login error:", err);
          setError("Login request error");
          setLoading(false);
          return;
        }
      }

      try {
        // console.log("wwwwwweee", { ACCESS_TOKEN, USER_ID, ORG_ID });
        const res = await fetch("/api/egulen/products", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ACCESS_TOKEN, USER_ID, ORG_ID }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.message || "Failed to load products");
        } else {
          setProducts(data?.success || data); // products[] directly эсвэл data wrapper
        }
      } catch (err) {
        console.error("Product fetch error:", err);
        setError("Network error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}
