import sanitizeHtml from "sanitize-html";
import mysql from "mysql2/promise";
import { NextResponse } from "next/server";
import { typesenseAdminClient } from "../typesenseAdminClient";

export async function GET() {
  try {
    // 1. MySQL connection
    const connection = await mysql.createConnection({
      host: process.env.MOTO_MYSQL_HOST || "",
      user: process.env.MOTO_MYSQL_USER || "",
      password: process.env.MOTO_MYSQL_PASSWORD || "",
      database: process.env.MOTO_MYSQL_DATABASE || "",
    });

    // 3. Fetch data from MySQL
    const [rows] = await connection.execute("SELECT * FROM MOTO_PRODUCT");
    await connection.end();

    // 4. Transform data for Typesense
    const documents = (rows as any[]).map((row) => ({
      id: row.id.toString(),
      code: row.code || "",
      ref_productcategory: row.ref_productcategory || 0,
      ref_brand: row.ref_brand || 0,
      look_company: row.look_company || 0,
      title: sanitizeHtml(row.title || ""),
      price: row.price || 0,
      price2: row.price2 || 0,
      mainimage: sanitizeHtml(row.mainimage || ""),
      description: sanitizeHtml(row.description || ""),
      body: sanitizeHtml(row.body || ""),
      images: row.images || [],
      look_user: row.look_user || 0,
      address: sanitizeHtml(row.address || ""),
      contactphone: row.contactphone || "",
      contactphone2: row.contactphone2 || "",
      contactfacebook: sanitizeHtml(row.contactfacebook || ""),
      contactemail: sanitizeHtml(row.contactemail || ""),
      ref_carfirm: row.ref_carfirm || 0,
      ref_carmark: row.ref_carmark || 0,
      inactive: row.inactive || 0,
      isspecial: row.isspecial || 0,
      ispayment: row.ispayment || 0,
      createddate: row.createddate
        ? Math.floor(new Date(row.createddate).getTime() / 1000)
        : Math.floor(Date.now() / 1000),
      modifieddate: row.modifieddate
        ? Math.floor(new Date(row.modifieddate).getTime() / 1000)
        : null,
    }));

    // 5. Single bulk import to Typesense
    let successfulImports = 0;
    let failedImports = 0;
    const errors = [];

    try {
      const importResults = await typesenseAdminClient
        .collections("moto_product")
        .documents()
        .import(documents, { action: "upsert" });

      // Process results
      importResults.forEach((result: any, index: number) => {
        if (result.success) {
          successfulImports++;
        } else {
          failedImports++;
          errors.push(
            `Error at document ${index} (id: ${documents[index].id}): ${result.error}`
          );
        }
      });
    } catch (err: any) {
      failedImports = documents.length;
      errors.push(err.message);
    }

    return NextResponse.json({
      message: "Импорт дууссан",
      stats: {
        total: documents.length,
        successful: successfulImports,
        failed: failedImports,
      },
      errors: errors.length > 0 ? errors.slice(0, 10) : undefined, // Return first 10 errors if any
      // sss: error.importResults
    });
  } catch (err: any) {
    return NextResponse.json(
      { message: "Алдаа", error: err.message || err },
      { status: 500 }
    );
  }
}
