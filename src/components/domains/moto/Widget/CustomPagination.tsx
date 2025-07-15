"use client";

import { usePagination } from "react-instantsearch";

export default function CustomPagination() {
  const { pages, currentRefinement, isFirstPage, isLastPage, refine, nbPages } =
    usePagination();

  if (nbPages <= 1) return null;

  return (
    <div className="mt-6 flex justify-center items-center gap-2 flex-wrap">
      <button
        onClick={() => refine(currentRefinement - 1)}
        disabled={isFirstPage}
        className="px-3 py-1 rounded-md border text-sm disabled:opacity-50">
        ← Өмнөх
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => refine(page)}
          className={`px-3 py-1 rounded-md border text-sm ${
            currentRefinement === page
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}>
          {page + 1}
        </button>
      ))}

      <button
        onClick={() => refine(currentRefinement + 1)}
        disabled={isLastPage}
        className="px-3 py-1 rounded-md border text-sm disabled:opacity-50">
        Дараах →
      </button>
    </div>
  );
}
