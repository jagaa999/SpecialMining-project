"use client";

import { Spin } from "antd";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import { useState } from "react";
import { Highlight, Hits, SearchBox, Stats } from "react-instantsearch";
import CustomPagination from "./CustomPagination";
import CustomRefinementList from "./CustomRefinementList";

function Hit({ hit }: any) {
  console.log("dsfdsfds fds", { hit });
  return (
    <BlockFlexCol className="p-4 border rounded-2xl shadow-md bg-white hover:shadow-lg transition duration-200">
      <img src={hit.mainimage} alt={hit.name} className="w-32 h-24" />
      <h2 className="text-lg font-semibold text-gray-800">
        <Highlight attribute="title" hit={hit} />
      </h2>
      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
        <Highlight attribute="description" hit={hit} />
      </p>
    </BlockFlexCol>
  );
}

export default function MotoNewsSearch() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-6">
      {/* Sidebar - Filters */}
      <aside className="md:col-span-1 space-y-6">
        <h3 className="text-xl font-bold text-gray-700">Шүүлтүүрүүд</h3>
        <CustomRefinementList attribute="ref_newstype" title="Мэдээний төрөл" />
        <CustomRefinementList
          attribute="ref_newssource"
          title="Мэдээний эх сурвалж"
        />
        <CustomRefinementList attribute="ref_carfirm" title="Машины фирм" />
      </aside>

      {/* Main content - Search */}
      <main className="md:col-span-3 space-y-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          {/* <Configure /> */}
          <SearchBox
            placeholder="Хайх түлхүүр үгээ оруулна уу..."
            // onLoading={() => setLoading(true)}
            // onReset={() => setLoading(false)}
            onSubmit={() => setLoading(false)}
            classNames={{
              input: "border rounded-lg px-4 py-2 w-full shadow-sm",
            }}
          />
          <Stats classNames={{ root: "text-sm text-gray-600" }} />
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-32">
            <Spin /> {/* өөрийн spinner байхгүй бол loading text тавьж болно */}
          </div>
        ) : (
          <>
            <Hits hitComponent={Hit} />

            <CustomPagination />
          </>
        )}
      </main>
    </div>
  );
}
