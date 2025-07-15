"use client";

import { useEffect } from "react";
import { SearchBox, useInfiniteHits, Stats } from "react-instantsearch";
import { useInView } from "react-intersection-observer";
import CustomRefinementList from "./CustomRefinementList";

function InfiniteHits() {
  const { items: hits, showMore, isLastPage } = useInfiniteHits();

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && !isLastPage) {
      showMore();
    }
  }, [inView, isLastPage, showMore]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {hits.map((hit: any) => (
          <div
            key={hit.id}
            className="p-4 border rounded shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold">{hit.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {hit.description}
            </p>
          </div>
        ))}
      </div>

      {!isLastPage && (
        <div ref={ref} className="py-6 text-center text-gray-500">
          Уншиж байна...
        </div>
      )}
      {isLastPage && (
        <div className="py-6 text-center text-gray-400">
          Бүх үр дүнг харууллаа
        </div>
      )}
    </>
  );
}

export default function MotoNewsInfiniteScrollAuto() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Filter */}
      <div className="md:col-span-1 space-y-6">
        <CustomRefinementList attribute="ref_newstype" title="Мэдээний төрөл" />
        <CustomRefinementList
          attribute="ref_newssource"
          title="Мэдээний эх сурвалж"
        />
        <CustomRefinementList attribute="ref_carfirm" title="Машины фирм" />
      </div>

      {/* Search + Results */}
      <div className="md:col-span-3 space-y-6">
        <SearchBox placeholder="Мэдээ хайх..." />
        <Stats classNames={{ root: "text-sm text-gray-600" }} />
        <InfiniteHits />
      </div>
    </div>
  );
}
