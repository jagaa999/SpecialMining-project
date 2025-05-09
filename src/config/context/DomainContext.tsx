"use client";

import { createContext, useContext } from "react";

// DomainContext.tsx
const DomainContext = createContext({ domain: "default" });
export const useDomain = () => useContext(DomainContext);

export function DomainProvider({
  domain,
  children,
}: {
  domain: string;
  children: React.ReactNode;
}) {
  return (
    <DomainContext.Provider value={{ domain }}>
      {children}
    </DomainContext.Provider>
  );
}
