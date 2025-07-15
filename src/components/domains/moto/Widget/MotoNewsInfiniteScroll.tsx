"use client";

import { InfiniteHits, SearchBox, RefinementList } from "react-instantsearch";
import type { Hit as HitType } from "instantsearch.js";

function Hit({ hit }: { hit: HitType }) {
  return (
    <div className="p-4 border rounded-md shadow hover:shadow-md transition">
      <h2 className="font-bold text-lg">{hit.title}</h2>
      <p className="text-sm text-gray-600 line-clamp-2">{hit.description}</p>
    </div>
  );
}

export default function MotoNewsInfiniteScroll() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Filter Section */}
      <div className="md:col-span-1 space-y-4">
        <RefinementList attribute="ref_newstype" />
        <RefinementList attribute="ref_newssource" />
      </div>

      {/* Results Section */}
      <div className="md:col-span-3 space-y-4">
        <SearchBox placeholder="Хайлт хийх..." />
        <InfiniteHits
          hitComponent={Hit}
          // translations={{
          // loadMore: "Цааш харах",
          // noResultsText: "Үр дүн олдсонгүй",
          // }}
        />
      </div>
    </div>
  );
}
