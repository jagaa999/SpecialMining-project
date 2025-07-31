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
import { FacetConfig } from "@/config/typesense/facetConfig";

export default function OrganismNewsInfiniteScrollAuto({
  collectionName,
  facetConfig,
  children,
}: {
  collectionName: string;
  facetConfig?: Record<string, Partial<FacetConfig>>;
  children: ReactNode;
}) {
  return (
    <PanelMain>
      <BlockFlexRow className="gap-8 w-full justify-start items-start">
        <BlockDiv className="w-[250px] shrink-0">
          <BlockDiv className="bg-white border border-slate-200 px-4 py-7 rounded-brand overflow-hidden">
            <OrganismTypesenseFacetList
              collectionName={collectionName}
              facetConfig={facetConfig}
            />
          </BlockDiv>
        </BlockDiv>

        <BlockDiv className="flex-1 w-full min-w-0 min-h-[1px]">
          <RightMain collectionName={collectionName} children={children} />
        </BlockDiv>
      </BlockFlexRow>
    </PanelMain>
  );
}

const RightMain = ({
  collectionName,
  children,
}: {
  collectionName: string;
  children: ReactNode;
}) => {
  return (
    <BlockFlexCol>
      {/* header */}
      <BlockFlexCol>
        <OrganismTypesenseListSearchBox />

        <BlockFlexRow className="justify-end">
          <OrganismTypesenseListStats />
          <OrganismTypesenseListSortDropdown collectionName={collectionName} />
          <OrganismTypesenseListPageSizeDropdown />
        </BlockFlexRow>
      </BlockFlexCol>

      {/* body */}
      {children}
    </BlockFlexCol>
  );
};
