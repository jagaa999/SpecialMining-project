import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const requiredFields = [
      "USER_ID",
      "ACCESS_TOKEN",
      "invoice_no",
      "amount",
      "org_name",
      "token",
      "invoice_code",
      "account_id",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { message: `Missing field: ${field}` },
          { status: 400 }
        );
      }
    }

    const res = await fetch(
      `https://my.egulen.mn/iRestaurant_v4/qpay/create/${body.USER_ID}/${body.ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    console.log("sdfsdf", res.status);
    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Server error", error: error?.message },
      { status: 500 }
    );
  }
}
