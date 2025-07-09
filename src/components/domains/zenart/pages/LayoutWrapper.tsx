"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import ZenartNavbar from "../Widget/ZenartNavbar";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ZenartNavbar />
      <BlockDiv type="main" className="min-h-screen bg-gray-200">
        {children}
      </BlockDiv>
    </>
  );
}
