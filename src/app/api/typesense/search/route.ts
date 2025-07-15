// app/api/search/route.ts
import { NextResponse } from "next/server";
import { typesenseClient } from "../typesenseClient";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = url.searchParams.get("q") || "*";

  const searchParams = {
    q,
    query_by: "title,description,body",
    per_page: 10,
    page: 1,
    filter_by: "ref_newstype:=1712723346302736",
    facet_by: "ref_newssource,ref_carfirm,ref_carmark",
  };

  const searchResults = await typesenseClient
    .collections("moto_news_v2")
    .documents()
    .search(searchParams);

  return NextResponse.json(searchResults);
}
