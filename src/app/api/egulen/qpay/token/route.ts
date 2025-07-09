import { NextResponse } from "next/server";
import base64 from "base-64";

export async function POST() {
  try {
    const username = "EGULEN";
    const password = "pycpqK7l";

    const authHeader = "Basic " + base64.encode(`${username}:${password}`);

    const res = await fetch("https://merchant.qpay.mn/v2/auth/token", {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: data.message || "Auth failed" },
        { status: res.status }
      );
    }

    // 💾 LocalStorage руу client талд хадгалах тул access_token-оо буцаана
    return NextResponse.json({ access_token: data.access_token });
  } catch (error: any) {
    console.error("QPay Token Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
