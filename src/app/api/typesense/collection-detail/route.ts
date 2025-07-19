import { NextRequest, NextResponse } from "next/server";
import { typesenseAdminClient } from "../typesenseAdminClient";

const COLLECTION_NAME = "moto_news_v2";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Missing 'id' query parameter" },
      { status: 400 }
    );
  }

  try {
    const document = await typesenseAdminClient
      .collections(COLLECTION_NAME)
      .documents(id)
      .retrieve();

    return NextResponse.json(document);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch document", message: error.message },
      { status: 500 }
    );
  }
}
