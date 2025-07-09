"use client";

import { useState } from "react";

export function useEgulenOrderComplete() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const completeOrder = async ({
    products,
    bill,
  }: {
    products: any[];
    bill: any;
  }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const USER_ID = localStorage.getItem("USER_ID");
      const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
      const ORG_ID = localStorage.getItem("ORG_ID");

      if (!USER_ID || !ACCESS_TOKEN || !ORG_ID) {
        throw new Error("Missing credentials");
      }

      console.log("Захиалга баталгаажуулж байна", { products, bill });

      // 🔽 Энд захиалга баталгаажуулах API дуудаарай
      const res = await fetch("/api/egulen/order/complete_order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ USER_ID, ACCESS_TOKEN, ORG_ID, products, bill }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || "Захиалга амжилтгүй");

      setSuccess(true);
      return data;
    } catch (err: any) {
      console.error("Order complete error:", err);
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return {
    completeOrder,
    loading,
    success,
    error,
  };
}
