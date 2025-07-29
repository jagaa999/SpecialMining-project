"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import TextBody from "atomv2/components/Text/TextBody";
import { useStats } from "react-instantsearch";

export default function OrganismTypesenseListStats() {
  const { nbHits, processingTimeMS } = useStats();

  return (
    <BlockDiv className="text-sm text-gray-600">
      {nbHits > 0 ? (
        <BlockFlexRow className="gap-1">
          <TextBody
            value={`Нийт: <span class="font-semibold">${String(nbHits)}</span>`}
            className=""
          />
          <TextBody
            value={`(${processingTimeMS}мс)`}
            className="text-xs text-gray-200"
            tooltip={`Хайлт хийхэд ${processingTimeMS} мс зарцуулсан.`}
          />
        </BlockFlexRow>
      ) : (
        <>Илэрц олдсонгүй.</>
      )}
    </BlockDiv>
  );
}
