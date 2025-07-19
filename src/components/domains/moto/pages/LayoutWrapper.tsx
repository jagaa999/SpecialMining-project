"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import MotoBanner from "../Widget/MotoLayout/MotoBanner";
import MotoFooter from "../Widget/MotoLayout/MotoFooter";
import MotoHeader from "../Widget/MotoLayout/MotoHeader";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlockDiv
      type="main"
      className="flex flex-col min-h-screen"
      data-block="MotoLayoutWrapper">
      <MotoHeader />

      <MotoBanner />

      {children}

      <MotoFooter />
    </BlockDiv>
  );
}
