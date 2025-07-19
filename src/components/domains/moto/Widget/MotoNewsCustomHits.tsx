"use client";

import { useInfiniteHits } from "react-instantsearch";
import LoadMoreTrigger from "./LoadMoreTrigger";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import { map } from "lodash";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";

export default function MotoNewsCustomHits() {
  return (
    <BlockFlexCol>
      <MainItems />
      <LoadMoreTrigger />
    </BlockFlexCol>
  );
}

const MainItems = () => {
  const { items } = useInfiniteHits();

  return (
    <BlockFlexCol className="gap-4">
      {map(items, (hit: any) => (
        <BlockDiv
          key={hit.id}
          className="flex gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
          <BlockDiv className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
            <img
              src={hit.mainimage}
              alt={hit.title}
              className="w-full h-full object-cover"
            />
          </BlockDiv>

          <BlockDiv className="flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-gray-800">{hit.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              {hit.description}
            </p>
          </BlockDiv>
        </BlockDiv>
      ))}
    </BlockFlexCol>
  );
};
