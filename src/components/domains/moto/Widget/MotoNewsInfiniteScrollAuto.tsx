"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import CustomFacetList from "./CustomFacetList";
import CustomPageSizeDropdown from "./CustomPageSizeDropdown";
import CustomSearchBox from "./CustomSearchBox";
import CustomSortDropdown from "./CustomSortDropdown";
import CustomStats from "./CustomStats";
import MotoNewsCustomHits from "./MotoNewsCustomHits";

export default function MotoNewsInfiniteScrollAuto() {
  return (
    <PanelMain className="max-w-5xl">
      <BlockDiv className="flex gap-12">
        <BlockDiv className="w-[250px] shrink-0">
          <LeftFilter />
        </BlockDiv>

        <BlockDiv className="flex-1">
          <RightMain />
        </BlockDiv>
      </BlockDiv>
    </PanelMain>
  );
}

const LeftFilter = () => {
  return <CustomFacetList />;
};

const RightMain = () => {
  return (
    <BlockDiv>
      <BlockDiv className="flex flex-wrap items-center justify-between gap-4">
        <CustomSearchBox />

        <BlockDiv className="flex gap-3">
          <CustomSortDropdown />
          <CustomPageSizeDropdown />
        </BlockDiv>
      </BlockDiv>

      <CustomStats />
      <MotoNewsCustomHits />
    </BlockDiv>
  );
};
