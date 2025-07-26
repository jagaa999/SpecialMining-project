import { NextRequest, NextResponse } from "next/server";
import { extractDomainFromHost } from "./config/utils/extractDomainFromHost";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const domain = extractDomainFromHost(host);

  // Хуучин нь
  // const response = NextResponse.next();
  // response.cookies.set("domain", domain);
  // response.headers.set("x-theme", domain);
  // return response;

  // Шинэ нь
  if (!domain) return new NextResponse("Unknown domain", { status: 404 });

  const url = request.nextUrl.clone();
  url.pathname = `/${domain}${url.pathname}`;

  const response = NextResponse.rewrite(url);
  response.headers.set("x-domain-id", domain); // headers-д domain-ийг хадгална

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
    // "/((?!api|_next/static|_next/image|favicon.ico|.*\\.ico$).*)",
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
