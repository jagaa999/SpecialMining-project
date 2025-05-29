// src/utils/extractDomainFromHost.ts

const secondLevelTLDs = ["co.mn", "gov.mn", "edu.mn", "org.mn", "com.mn"]; // тааруулах жагсаалт

export function extractDomainFromHost(hostname: string): string {
  const hostnameLower = hostname.toLowerCase();
  const baseHost = hostnameLower.replace(/^www\./, "");

  const matchedTLD = secondLevelTLDs.find((tld) => baseHost.endsWith(tld));
  const parts = baseHost.split(".");

  let domain = "special"; // default fallback

  if (matchedTLD) {
    if (parts.length > 2) {
      domain = parts.slice(0, -2).join(""); // subdomain
    } else {
      domain = parts[0]; // e.g., digitalservice.kt.mn
    }
  } else {
    if (parts.length > 2) {
      domain = parts.slice(0, -2).join("");
    } else if (parts.length === 2) {
      domain = parts[0];
    }
  }

  return domain;
}
