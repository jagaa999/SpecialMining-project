import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  // Hostname-ыг хэсгүүдэд хуваах
  const parts = hostname.split(".");

  let domain;

  if (parts.length > 2) {
    // Subdomain байгаа тохиолдолд (e.g., sub.example.com)
    if (parts[0] === "www") {
      // www.sub.example.com гэх мэт тохиолдолд
      domain = parts.slice(1, -1).join("");
    } else {
      // sub.example.com гэх мэт энгийн тохиолдолд
      domain = parts.slice(0, -1).join("");
    }
  } else if (parts.length === 2) {
    // Энгийн домэйн (e.g., example.com)
    domain = parts[0];
  } else {
    // Хэрэв домэйн олдоогүй бол 'default' утга оноох
    domain = "special";
  }

  if (domain === "specialminingvercel") {
    domain = "special";
  }

  // Layout төрлийг cookie-д дамжуулах
  const response = NextResponse.next();
  response.cookies.set("domain", domain);

  return response;
}

// Subdomain + Domain нийлсэн формат (TLD-гүй):
// sub.example.com -> domain = "subexample"
// another.sub.example.com -> domain = "anothersubexample"

// www дэмжлэг:
// www.example.com -> domain = "example"
// www.sub.example.com -> domain = "subexample"

// Энгийн домэйн дэмжлэг:
// example.com -> domain = "example"
// mysite.org -> domain = "mysite"

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
