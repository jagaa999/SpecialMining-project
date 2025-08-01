import { NextRequest, NextResponse } from "next/server";
import { typesenseAdminClient } from "../typesenseAdminClient";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const COLLECTION_NAME = searchParams.get("collection") || "";

  if (!COLLECTION_NAME) {
    return NextResponse.json(
      { error: "Collection нэр заавал шаардлагатай" },
      { status: 400 }
    );
  }

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
      .filter((field: any) => !blacklist.includes(field.name))
      .map((field: any) => ({
        attribute: field.name,
        name: field.name,
        type: field.type,
        facet: field.facet,
        title: field.name,
        sort: field.sort,
        other: { ...field },
      }));

    return NextResponse.json(facetFields);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
