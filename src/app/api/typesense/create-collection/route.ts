import { NextResponse } from "next/server";

export async function GET() {
  const schema = {
    name: "moto_news_v2",
    fields: [
      { name: "id", type: "int64" },
      { name: "title", type: "string" },
      { name: "mainimage", type: "string" },
      { name: "description", type: "string" },
      { name: "ref_newstype", type: "int64", facet: true },
      { name: "ref_newssource", type: "int64", facet: true },
      { name: "ref_carfirm", type: "int64", facet: true },
      { name: "ref_carmark", type: "int64", facet: true },
      { name: "authorid", type: "int64", facet: true },
      { name: "body", type: "string" },
      { name: "link", type: "string" },
      { name: "isactive", type: "int32", facet: true },
      { name: "isspecial", type: "int32", facet: true },
      { name: "ispayment", type: "int32", facet: true },
      { name: "createddate", type: "int32", facet: true },
      { name: "modifieddate", type: "int32", facet: true },
    ],
    default_sorting_field: "createddate",
  };

  console.log("энд орсон уу?", { schema });

  try {
    const res = await fetch("http://139.162.31.19:8108/collections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-TYPESENSE-API-KEY": "mytypesensekey",
      },
      body: JSON.stringify(schema),
    });

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json(
        { message: "Failed", error },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json({ message: "Collection created", data });
  } catch (err: any) {
    return NextResponse.json(
      {
        message: "Unexpected error",
        error: err.message || err,
      },
      { status: 500 }
    );
  }
}
