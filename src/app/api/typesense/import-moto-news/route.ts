import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  try {
    // 1. MySQL холболт
    const connection = await mysql.createConnection({
      host: process.env.MOTO_MYSQL_HOST || "",
      user: process.env.MOTO_MYSQL_USER || "",
      password: process.env.MOTO_MYSQL_PASSWORD || "",
      database: process.env.MOTO_MYSQL_DATABASE || "",
    });

    // 2. Өгөгдлийг татах
    const [rows] = await connection.execute("SELECT * FROM MOTO_NEWS");

    // 3. Хөрвүүлж document болгох
    const documents = (rows as any[]).map((row) => ({
      id: row.id.toString(),
      title: row.title || "",
      mainimage: row.mainimage || "",
      description: row.description || "",
      ref_newstype: row.ref_newstype || 0,
      ref_newssource: row.ref_newssource || 0,
      ref_carfirm: row.ref_carfirm || 0,
      ref_carmark: row.ref_carmark || 0,
      authorid: row.authorid || 0,
      body: row.body || "",
      link: row.link || "",
      isactive: row.isactive || 0,
      isspecial: row.isspecial || 0,
      ispayment: row.ispayment || 0,
      createddate: row.createddate
        ? Math.floor(new Date(row.createddate).getTime() / 1000)
        : 0,
      modifieddate: row.modifieddate
        ? Math.floor(new Date(row.modifieddate).getTime() / 1000)
        : 0,
    }));

    // 4. Typesense рүү илгээх
    const res = await fetch(
      "http://139.162.31.19:8108/collections/moto_news_v2/documents/import?action=upsert",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
          "X-TYPESENSE-API-KEY": "mytypesensekey",
        },
        body: documents.map((doc) => JSON.stringify(doc)).join("\n"),
      }
    );

    const result = await res.text(); // bulk import хариу нь текст байдаг
    await connection.end();

    return NextResponse.json({ message: "Импорт амжилттай", result });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Алдаа", error: err.message || err },
      { status: 500 }
    );
  }
}
