"use client";

import { useState } from "react";

export function useEgulenQpayCreateInvoice() {
  const [invoice, setInvoice] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const userId = localStorage.getItem("USER_ID");
  const orgName = localStorage.getItem("ORG_NAME");
  const orgId = localStorage.getItem("ORG_ID") || "2059";

  const fetchToken = async (): Promise<string | null> => {
    try {
      const res = await fetch("/api/egulen/qpay/token", { method: "POST" });
      const data = await res.json();
      if (res.ok && data.access_token) {
        localStorage.setItem("QPAY_ACCESS_TOKEN", data.access_token);
        return data.access_token;
      }
      throw new Error("Token авахад алдаа гарлаа");
    } catch (err: any) {
      console.error("Token fetch error:", err);
      setError(err.message || "Token fetch failed");
      return null;
    }
  };

  const fetchInvoice = async (accessToken: string): Promise<Response> => {
    const invoice_no = egulenGenerateInvoiceNumber(orgId);
    localStorage.setItem("INVOICE_NO", invoice_no);

    const invoicePayload = {
      invoice_no: invoice_no,
      amount: "50",
      bill_id: "",
      org_name: orgName,
      token: accessToken,
      invoice_code: "EGULEN_INVOICE",
      account_id: "3660",
    };

    return await fetch("/api/egulen/qpay/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ACCESS_TOKEN: accessToken,
        USER_ID: userId,
        ...invoicePayload,
      }),
    });
  };

  const createInvoice = async () => {
    setLoading(true);
    setError(null);
    setInvoice(null);

    try {
      if (!userId || !orgName) throw new Error("USER_ID эсвэл ORG_NAME алга");

      let token = localStorage.getItem("QPAY_ACCESS_TOKEN");

      if (!token) {
        token = await fetchToken();
        if (!token) return;
      }

      let res = await fetchInvoice(token);
      let data = await res.json();

      if (
        res.status === 401 ||
        res.status === 403 ||
        (typeof data === "string" && data.startsWith("Connection interrupted"))
      ) {
        console.warn("Token дууссан, дахин шинэчилж байна...");
        localStorage.removeItem("QPAY_ACCESS_TOKEN");

        const retryToken = await fetchToken();
        if (!retryToken) return;

        res = await fetchInvoice(retryToken);
        data = await res.json();
      }

      if (!res.ok) {
        throw new Error(data.message || "Invoice үүсгэж чадсангүй");
      }

      setInvoice(data);
    } catch (err: any) {
      console.error("Create invoice error:", err);
      setError(err.message || "Invoice fetch error");
    } finally {
      setLoading(false);
    }
  };

  return {
    invoice,
    createInvoice,
    loading,
    error,
  };
}

export const egulenGenerateInvoiceNumber = (orgId: string): string => {
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const random = Math.floor(100000 + Math.random() * 900000);
  return `K${orgId}${yy}${mm}${dd}${random}`;
};
