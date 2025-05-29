"use client";

import { SWRConfig } from "swr";
import { fetcher } from "src/config/utils/fetcher";

export function ClientSWRProvider({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        shouldRetryOnError: true,
        errorRetryCount: 3,
      }}>
      {children}
    </SWRConfig>
  );
}
