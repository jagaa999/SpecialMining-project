"use client";

import { useInfiniteHits } from "react-instantsearch";
import LoadMoreTrigger from "./LoadMoreTrigger";

export default function MotoNewsCustomHits() {
  const { items: hits } = useInfiniteHits();

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

      <LoadMoreTrigger />
    </>
  );
}
