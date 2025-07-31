"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockShowOnlyOne from "atomv2/components/Blocks/BlockShowOnlyOne";
import TextH4 from "atomv2/components/Text/TextH4";
import { useState } from "react";
import OrganismPaymentТөлбөрЗахиалгаарАвчрах01Before from "./OrganismPaymentТөлбөрЗахиалгаарАвчрах01Before";
import OrganismPaymentТөлбөрЗахиалгаарАвчрах02After from "./OrganismPaymentТөлбөрЗахиалгаарАвчрах02After";

export default function OrganismPaymentТөлбөрЗахиалгаарАвчрах({
  lastUrl = "shop",
  setIsShowModal,
}: {
  lastUrl?: string;
  setIsShowModal: any;
}) {
  const [index, setIndex] = useState(0);
  const [result, setResult]: any = useState();

  return (
    <BlockDiv className="px-4 py-3 space-y-8">
      <TextH4 value="Захиалгаар авах" />

      <BlockShowOnlyOne index={index}>
        {/* 1. Захиалга өгөхийн өмнө */}
        <OrganismPaymentТөлбөрЗахиалгаарАвчрах01Before
          setIsShowModal={setIsShowModal}
          setIndex={setIndex}
          setResult={setResult}
        />

        {/* 2. Захиалга өгсний дараа */}
        <OrganismPaymentТөлбөрЗахиалгаарАвчрах02After
          setIsShowModal={setIsShowModal}
          result={result}
          lastUrl={lastUrl}
        />
      </BlockShowOnlyOne>
    </BlockDiv>
  );
}
