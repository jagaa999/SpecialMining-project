"use client";

import DigitalServiceFooter from "../Widget/DigitalServiceFooter";
import DigitalServiceNavbar from "../Widget/DigitalServiceNavMenu/DigitalServiceNavbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <DigitalServiceNavbar />
      <section className="flex-grow">{children}</section>
      <DigitalServiceFooter />
    </main>
  );
}
