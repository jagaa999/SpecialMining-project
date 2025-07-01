import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { USER_ID, ACCESS_TOKEN, ORG_ID } = await req.json();

    console.log("dfsdfdsf", { USER_ID, ACCESS_TOKEN, ORG_ID });

    if (!USER_ID || !ACCESS_TOKEN || !ORG_ID) {
      return NextResponse.json(
        { message: "Missing required credentials" },
        { status: 400 }
      );
    }

    const url = `https://my.egulen.mn/iRestaurant_v4/product/getProductsForOrder/${USER_ID}/${ACCESS_TOKEN}/${ORG_ID}`;

    const res = await fetch(url);
    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error("Product API error:", error);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
