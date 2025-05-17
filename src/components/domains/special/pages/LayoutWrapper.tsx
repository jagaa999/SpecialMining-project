"use client";

import Footer from "../Widget/Footer";
import Navbar from "../Widget/NavMenu/Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-grow">{children}</section>
      <Footer />
    </main>
  );
}
