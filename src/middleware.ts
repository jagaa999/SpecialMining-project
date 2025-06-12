import { NextRequest, NextResponse } from "next/server";
import { extractDomainFromHost } from "./config/utils/extractDomainFromHost";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const domain = extractDomainFromHost(host);

  const response = NextResponse.next();
  response.cookies.set("domain", domain);
  response.headers.set("x-theme", domain);
  return response;
}

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

// Жич
// http://www.special.local:3000/
// http://www.moto.local:3000/ гэж дуудах ёстой

// hosts файл дотор
// 127.0.0.1   www.special.local
// 127.0.0.1   www.moto.local
// 127.0.0.1   www.digitalservice.local
// 127.0.0.1   www.mungundent.local
