// src/utils/getDomain.ts
import { headers } from "next/headers";
import { extractDomainFromHost } from "./extractDomainFromHost";

export async function getDomainFromHost(): Promise<string> {
  const headersList: any = headers();
  const host = headersList.get("host") || "";
  return extractDomainFromHost(host);
}
