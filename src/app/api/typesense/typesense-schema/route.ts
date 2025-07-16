import { NextResponse } from "next/server";
import { typesenseAdminClient } from "../typesenseAdminClient";

export async function GET() {
  const COLLECTION_NAME = "moto_news_v2";
  // ⛔️ Blacklist хийх facet нэрс
  const blacklist = [
    "authorid",
    "isactive",
    "ispayment",
    // "createddate",
    // "modifieddate",
  ];

  try {
    const schema = await typesenseAdminClient
      .collections(COLLECTION_NAME)
      .retrieve();

    const facetFields = schema.fields
      .filter((field: any) => field.facet && !blacklist.includes(field.name))
      .map((field: any) => ({
        attribute: field.name,
        type: field.type,
        facet: field.facet,
        title: field.name,
      }));

    // console.log("ssdsd", schema, facetFields);

    return NextResponse.json({ facets: facetFields });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
