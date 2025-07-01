// app/api/auth/route.ts

import { NextResponse } from "next/server";

export async function POST() {
  const credentials = {
    username: "uniqcash",
    password: "cash1",
    group_id: "4",
  };

  try {
    const formData = new FormData();
    formData.append("username", credentials.username);
    formData.append("password", credentials.password);
    formData.append("group_id", credentials.group_id);

    const res = await fetch("https://my.egulen.mn/iRestaurant_v4/user/login", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        { message: "Login failed", data },
        { status: res.status }
      );
    }

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
