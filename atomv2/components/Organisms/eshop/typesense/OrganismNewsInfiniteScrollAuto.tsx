"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import PanelMain from "atomv2/components/Panel/PanelMain";
import { ReactNode } from "react";
import OrganismTypesenseFacetList from "./OrganismTypesenseFacetList";
import OrganismTypesenseListPageSizeDropdown from "./OrganismTypesenseListPageSizeDropdown";
import OrganismTypesenseListSearchBox from "./OrganismTypesenseListSearchBox";
import OrganismTypesenseListSortDropdown from "./OrganismTypesenseListSortDropdown";
import OrganismTypesenseListStats from "./OrganismTypesenseListStats";

export default function OrganismNewsInfiniteScrollAuto({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PanelMain className="max-w-5xl w-full">
      <BlockFlexRow className="gap-8 w-full justify-start items-start">
        <BlockDiv className="w-[250px] shrink-0">
          <LeftFilter />
        </BlockDiv>

        <BlockDiv className="flex-1 w-full min-w-0 min-h-[1px]">
          <RightMain children={children} />
        </BlockDiv>
      </BlockFlexRow>
    </PanelMain>
  );
}

const LeftFilter = () => {
  return (
    <BlockDiv className="bg-white border border-slate-200 px-4 py-7 rounded-brand overflow-hidden">
      <OrganismTypesenseFacetList />
    </BlockDiv>
  );
};

const RightMain = ({ children }: { children: ReactNode }) => {
  return (
    <BlockFlexCol>
      {/* header */}
      <BlockFlexCol>
        <OrganismTypesenseListSearchBox />

        <BlockFlexRow className="justify-end">
          <OrganismTypesenseListStats />
          <OrganismTypesenseListSortDropdown />
          <OrganismTypesenseListPageSizeDropdown />
        </BlockFlexRow>
      </BlockFlexCol>

      {/* body */}
      {/* <OrganismTypesenseNewsHits /> */}
      {children}
    </BlockFlexCol>
  );
};
