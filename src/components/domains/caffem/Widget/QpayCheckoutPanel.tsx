"use client";

import { Button, Result, Spin } from "antd";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import TextH3 from "atomv2/components/Text/TextH3";
import { useEffect } from "react";
import { useEgulenQpayCreateInvoice } from "src/config/hooks/egulen/useEgulenQpayCreateInvoice";

export default function QpayCheckoutPanel() {
  const { invoice, createInvoice, loading, error } =
    useEgulenQpayCreateInvoice();

  useEffect(() => {
    createInvoice();
  }, []);

  console.log("d----------", { invoice });

  return (
    <BlockFlexCol className="px-6 py-6 space-y-8 items-center">
      <TextH3 value="QPay төлбөр" />

      {loading && (
        <div className="flex justify-center py-10">
          <Spin />
        </div>
      )}

      {error && (
        <Result status="error" title="Алдаа" subTitle={error}>
          <Button type="primary" onClick={createInvoice}>
            Дахин оролдох
          </Button>
        </Result>
      )}

      {invoice?.success?.qr_image && (
        <div className="text-center">
          <img
            src={`data:image/png;base64,${invoice.success.qr_image}`}
            alt="QPay QR"
            className="mx-auto w-[240px] h-[240px] object-contain"
          />
          <p className="mt-4">Та QR кодыг уншуулан төлнө үү.</p>
        </div>
      )}
    </BlockFlexCol>
  );
}
