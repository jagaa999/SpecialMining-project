import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { USER_ID, ACCESS_TOKEN, ORG_ID, products, bill } = await req.json();

    if (!USER_ID || !ACCESS_TOKEN || !ORG_ID || !products || !bill) {
      return NextResponse.json({ message: "Incomplete data" }, { status: 400 });
    }

    const url = `https://my.egulen.mn/iRestaurant_v4/order/complete_order_from_kiosk/${USER_ID}/${ACCESS_TOKEN}/${ORG_ID}`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ products, bill }),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (err) {
    console.error("Order complete error:", err);
    return NextResponse.json(
      { message: "Internal error", error: err },
      { status: 500 }
    );
  }
}
