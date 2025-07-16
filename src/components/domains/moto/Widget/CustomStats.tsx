"use client";

import { useStats } from "react-instantsearch";

export default function CustomStats() {
  const { nbHits, processingTimeMS, query } = useStats();

  return (
    <div className="text-sm text-gray-600 mb-4">
      {nbHits > 0 ? (
        <>
          <strong>{nbHits}</strong> үр дүн{" "}
          {query && (
            <>
              ‘<span className="text-blue-600">{query}</span>’
            </>
          )}{" "}
          хайлтаар олдлоо. ({processingTimeMS}мс)
        </>
      ) : (
        <>Хайлтаар илэрц олдсонгүй.</>
      )}
    </div>
  );
}
