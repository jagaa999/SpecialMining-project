// app/api/egulen/qpay/check/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = {
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

  return NextResponse.json({ success: data }, { status: 200 });

  try {
    const { invoice_id, token, user_id, access_token } = await req.json();

    // console.log("dddd", { invoice_id, token, user_id, access_token });

    if (!invoice_id || !token || !user_id || !access_token) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const url = `https://my.egulen.mn/iRestaurant_v4/qpay/check/${user_id}/${access_token}`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ invoice_id, token }),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error("QPay check error:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
