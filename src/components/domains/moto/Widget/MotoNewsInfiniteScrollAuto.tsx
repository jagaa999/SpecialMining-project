"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import CustomFacetList from "./CustomFacetList";
import CustomPageSizeDropdown from "./CustomPageSizeDropdown";
import CustomSearchBox from "./CustomSearchBox";
import CustomSortDropdown from "./CustomSortDropdown";
import CustomStats from "./CustomStats";
import MotoNewsCustomHits from "./MotoNewsCustomHits";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";

export default function MotoNewsInfiniteScrollAuto() {
  return (
    <PanelMain className="max-w-5xl w-full">
      <BlockFlexRow className="gap-8 w-full justify-start items-start">
        <BlockDiv className="w-[250px] shrink-0">
          <LeftFilter />
        </BlockDiv>

        <BlockDiv className="flex-1 w-full min-w-0 min-h-[1px]">
          <RightMain />
        </BlockDiv>
      </BlockFlexRow>
    </PanelMain>
  );
}

const LeftFilter = () => {
  return (
    <BlockDiv className="bg-white border border-slate-200 px-4 py-7 rounded-brand overflow-hidden">
      <CustomFacetList />
    </BlockDiv>
  );
};

const RightMain = () => {
  return (
    <BlockFlexCol className="w-full">
      <MainHeader />
      <MainList />
    </BlockFlexCol>
  );
};

const MainHeader = () => {
  return (
    <>
      <BlockFlexCol className="">
        <CustomSearchBox />

        <BlockFlexRow className="justify-end">
          <CustomStats />
          <CustomSortDropdown />
          <CustomPageSizeDropdown />
        </BlockFlexRow>
      </BlockFlexCol>
    </>
  );
};

const MainList = () => {
  return <MotoNewsCustomHits />;
};
