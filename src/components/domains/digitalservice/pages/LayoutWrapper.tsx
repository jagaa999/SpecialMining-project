"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import DigitalServiceFooter from "../Widget/DigitalServiceFooter";
import DigitalServiceNavbar from "../Widget/DigitalServiceNavMenu/DigitalServiceNavbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlockDiv type="main" className="flex flex-col min-h-screen">
      <DigitalServiceNavbar />
      <BlockDiv type="section" className="flex-grow">
        {children}
      </BlockDiv>
      <DigitalServiceFooter />
    </BlockDiv>
  );
}
