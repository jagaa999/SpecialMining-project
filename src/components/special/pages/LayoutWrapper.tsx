"use client";

import Footer from "../Widget/Footer";
import Navbar from "../Widget/NavMenu/Navbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // const domain = useDomain();

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
