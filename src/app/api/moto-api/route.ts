import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const path = searchParams.get("path"); // 👈 path query-г авах
  searchParams.delete("path"); // 👈 үлдсэн query-г API рүү дамжуулах

  const queryString = searchParams.toString();

  if (!path) {
    return NextResponse.json(
      { error: "Missing 'path' query parameter" },
      { status: 400 }
    );
  }

  const apiUrl = `https://www.moto.mn/api/${path}${
    queryString ? `?${queryString}` : ""
  }`;
  const body = await req.json(); // 👈 client-оос ирсэн data

  // console.log("API before:", { apiUrl, body });

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    // console.log("API response:", data);

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch", message: error?.message },
      { status: 500 }
    );
  }
}
