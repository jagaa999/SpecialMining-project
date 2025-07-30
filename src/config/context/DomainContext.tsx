"use client";

import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

type DomainContextType = {
  domain: string;
  slugs: string[];
};

const DomainContext = createContext<DomainContextType>({
  domain: "default",
  slugs: [],
});

export const useDomain = () => useContext(DomainContext);

export function DomainProvider({
  domain,
  children,
}: {
  domain: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // eg: "/shop/category/socket"
  const slugs = pathname.split("/").filter((s) => s); // ["shop", "category", "socket"]

  return (
    <DomainContext.Provider value={{ domain, slugs }}>
      {children}
    </DomainContext.Provider>
  );
}
