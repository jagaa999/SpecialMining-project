import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const queryString = searchParams.toString(); // бүх query-г шууд дамжуулах

  if (!queryString) {
    return NextResponse.json(
      { error: "Missing query parameters" },
      { status: 400 }
    );
  }

  const apiUrl = `https://www.moto.mn/api/moto-product-v2?${queryString}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch", message: error?.message },
      { status: 500 }
    );
  }
}
