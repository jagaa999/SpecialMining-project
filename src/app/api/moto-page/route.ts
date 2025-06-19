// app/api/moto-page/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const pageslug = req.nextUrl.searchParams.get("pageslug");
  if (!pageslug) {
    return NextResponse.json({ error: "Missing pageslug" }, { status: 400 });
  }

  const apiUrl = `https://www.moto.mn/api/moto-page-v2?apicommand=list&domain=special&pageslug=${pageslug}`;

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
