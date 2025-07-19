"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import TextBody from "atomv2/components/Text/TextBody";
import TextH5 from "atomv2/components/Text/TextH5";
import { map } from "lodash";
import { useInfiniteHits } from "react-instantsearch";
import LoadMoreTrigger from "./LoadMoreTrigger";

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
            <RenderAtom
              value={hit.mainimage}
              type="image"
              alt={hit.title}
              className="w-full h-full object-cover"
            />
          </BlockDiv>

          <BlockFlexCol className="gap-2">
            <TextH5
              value={hit.title}
              url={{ href: `/news/detail?id=${hit.id}` }}
            />

            <TextBody value={hit.description} className="line-clamp-2" />
          </BlockFlexCol>
        </BlockDiv>
      ))}
    </BlockFlexCol>
  );
};
