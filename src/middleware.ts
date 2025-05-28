import _ from "lodash";
import { NextRequest, NextResponse } from "next/server";

// Монгол болон олон улсад нийтлэг хэрэглэгддэг хоёр үе шаттай TLD-ууд
const secondLevelTLDs = ["kt.mn", "moto.mn", "atom.mn", "gov.mn", "org.mn"];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const hostnameLower = _.toLower(hostname);

  // www-гүйгээр hostname
  const baseHost = hostnameLower.replace(/^www\./, "");

  // Сүүлчийн 2 хэсгийг domain гэж үзэх TLD байна уу шалгах
  const matchedTLD = secondLevelTLDs.find((tld) => baseHost.endsWith(tld));
  const parts = baseHost.split(".");

  let domain = "special"; // default fallback

  if (matchedTLD) {
    // 2-оос олон хэсэгтэй үед subdomain орсон гэж үзнэ
    if (parts.length > 2) {
      domain = parts.slice(0, -2).join(""); // subdomain(s)
    } else {
      domain = parts[0]; // e.g., digitalservice.kt.mn
    }
  } else {
    // Жирийн TLD (.com, .mn гэх мэт)
    if (parts.length > 2) {
      domain = parts.slice(0, -2).join("");
    } else if (parts.length === 2) {
      domain = parts[0];
    }
  }

  // Vercel дээрх тусгай тохиргоо
  if (domain === "specialminingvercel") {
    domain = "special";
  }

  const response = NextResponse.next();
  response.cookies.set("domain", domain);
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
