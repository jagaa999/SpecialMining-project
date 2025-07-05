"use client";

import { Button, Result, Spin } from "antd";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import TextBody from "atomv2/components/Text/TextBody";
import TextH3 from "atomv2/components/Text/TextH3";
import { useActionBasketButton } from "atomv2/hooks/actions/useActionBasketButton";
import { isEmpty, map } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useEgulenOrderComplete } from "src/config/hooks/egulen/useEgulenOrderComplete";
import { useEgulenQpayCreateInvoice } from "src/config/hooks/egulen/useEgulenQpayCreateInvoice";

export default function QpayCheckoutPanel() {
  const { invoice, createInvoice, loading, error } =
    useEgulenQpayCreateInvoice();
  const { completeOrder, loading: orderLoading } = useEgulenOrderComplete();
  const { basketItems } = useActionBasketButton({});

  const [paidResult, setPaidResult]: any = useState();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    createInvoice();
  }, []);

  console.log("d----------", { invoice });
  // Төлбөр шалгах
  useEffect(() => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    const userId = localStorage.getItem("USER_ID");
    const token = localStorage.getItem("QPAY_ACCESS_TOKEN");

    if (invoice?.success?.invoice_id && accessToken && userId) {
      localStorage.setItem("QPAY_INVOICE_ID", invoice.success.invoice_id);
      intervalRef.current = setInterval(async () => {
        try {
          const res = await fetch("/api/egulen/qpay/check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              invoice_id: invoice.success.invoice_id,
              token: token,
              user_id: userId,
              access_token: accessToken,
            }),
          });

          const data = await res.json();

          console.log("ирсэн хариу", { data });

          if (res.ok && data.success?.count > 0) {
            console.log("Төлсөөөөн", { data });
            setPaidResult(data?.success);
            await completeOrder(
              prepareOrderData({ paidResult: data?.success, basketItems })
              // { products: [], bill: {} }
            );
            if (intervalRef.current) clearInterval(intervalRef.current);
          }
        } catch (err) {
          console.error("QPay төлбөр шалгах алдаа:", err);
        }
      }, 2000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [invoice]);

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

      {invoice?.success?.qr_image && isEmpty(paidResult) && (
        <BlockFlexCol className="text-center">
          <RenderAtom
            value={`data:image/png;base64,${invoice.success.qr_image}`}
            type="image"
            className="mx-auto w-[240px] h-[240px] object-contain"
          />

          <TextBody value="Та QR кодыг уншуулан төлбөрөө төлнө үү." />
        </BlockFlexCol>
      )}

      {!isEmpty(paidResult) && (
        <>
          <Result
            status="success"
            title="Төлбөр амжилттай хийгдлээ"
            subTitle="Баярлалаа!"
          />
          {orderLoading && <Spin className="mt-4" />}
        </>
      )}
    </BlockFlexCol>
  );
}

const prepareOrderData = ({ paidResult, basketItems }: any) => {
  console.log("dsfdsf", { paidResult });
  const paid_amount = paidResult?.paid_amount;
  const products = map(basketItems, (item) => item?.itemToOrder);
  return {
    products,
    bill: {
      receipt_number: localStorage.getItem("INVOICE_NO"),
      qpay_invoice_id: localStorage.getItem("QPAY_INVOICE_ID"),
      customer_info: {
        customer_reg_no: "99XXXXXX",
        customer_tin: "37900846788",
        customer_name: "КИОСК ХЭРЭГЛЭГЧ",
      },
      payments: [
        {
          type: "QPAY",
          amount: paid_amount,
          account_id: "3660",
          account_name: "QPay",
        },
      ],
    },
  };
};

// "id": "3660",
// "api_sign_key": null,
// "integration_ewallet": "0",
// "login_id": "EGULEN",
// "login_password": "pycpqK7l",
// "loyalty_id": "0",
// "hqCreated": "0",
// "org_id": "2059",
// "account_name": "QPay",
// "first_amount": "0.00",
// "current_amount": "1000.00",
// "is_cashier": "0",
// "is_card": "5",
// "gateway": null,
// "merchant": null,
// "key": null,
// "timeout": "1800",
// "currency_code": "sgd",
// "type": "sale",
// "is_deleted": "0",
// "created": "2023-03-09 11:02:51",
// "updated_at": "2023-03-09 11:02:51",
// "invoice_code": "EGULEN_INVOICE"

const testPaidResult = {
  count: 1,
  paid_amount: 50,
  rows: [
    {
      payment_id: "148430023728147",
      payment_status: "PAID",
      payment_amount: "50.00",
      trx_fee: "0.00",
      payment_currency: "MNT",
      payment_wallet: "Хаан банк апп",
      payment_type: "P2P",
      next_payment_date: null,
      next_payment_datetime: null,
      card_transactions: [],
      p2p_transactions: [
        {
          id: "592817480024176",
          transaction_bank_code: "050000",
          account_bank_code: "050000",
          account_bank_name: "Хаан банк",
          account_number: "5072046569",
          status: "SUCCESS",
          amount: "50.00",
          currency: "MNT",
          settlement_status: "SETTLED",
        },
      ],
    },
  ],
};
