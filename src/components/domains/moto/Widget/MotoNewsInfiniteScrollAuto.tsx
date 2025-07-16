"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import CustomFacetList from "./CustomFacetList";
import CustomPageSizeDropdown from "./CustomPageSizeDropdown";
import CustomSearchBox from "./CustomSearchBox";
import CustomSortDropdown from "./CustomSortDropdown";
import CustomStats from "./CustomStats";
import MotoNewsCustomHits from "./MotoNewsCustomHits";

export default function MotoNewsInfiniteScrollAuto() {
  return (
    <BlockDiv className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Filter */}
      <BlockDiv className="md:col-span-1 space-y-6">
        <CustomFacetList />
      </BlockDiv>

      {/* Search + Results */}
      <BlockDiv className="md:col-span-3 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <CustomSearchBox />
          <div className="flex gap-3">
            <CustomSortDropdown />
            <CustomPageSizeDropdown />
          </div>
        </div>
        <CustomStats />
        <MotoNewsCustomHits />
      </BlockDiv>
    </BlockDiv>
  );
}
