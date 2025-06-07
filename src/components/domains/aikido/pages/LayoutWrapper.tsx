"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import AikidoFooter from "../Widget/AikidoFooter";
import AikidoNavbar from "../Widget/AikidoNavMenu/AikidoNavbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlockDiv type="main" className="flex flex-col min-h-screen">
      <AikidoNavbar />
      <BlockDiv type="section" className="flex-grow">
        {children}
      </BlockDiv>
      <AikidoFooter />
    </BlockDiv>
  );
}
