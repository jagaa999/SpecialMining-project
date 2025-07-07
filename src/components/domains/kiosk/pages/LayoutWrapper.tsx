// LayoutWrapper.tsx
"use client";

import Header from "../Widget/KioskHeader";
import Footer from "../Widget/KioskFooter";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
