"use client";

import { useDomain } from "@/config/context/DomainContext";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockListCard from "atomv2/components/Blocks/BlockListCard";
import MoleculeBasketButton from "atomv2/components/Molecules/MoleculeBasketButton";
import MoleculeIconText from "atomv2/components/Molecules/MoleculeIconText";
import PosDesc from "atomv2/components/Position/PosDesc";
import PosImage from "atomv2/components/Position/PosImage";
import PosTitle from "atomv2/components/Position/PosTitle";
import { toMotoPrice } from "atomv2/util/widgetHelper";
import { map } from "lodash";
import { useInfiniteHits } from "react-instantsearch";
import OrganismTypesenseLisLoadMoreTrigger from "./OrganismTypesenseLisLoadMoreTrigger";

export default function OrganismTypesensePartHits() {
  return (
    <BlockFlexCol>
      <MainItems />
      <OrganismTypesenseLisLoadMoreTrigger />
    </BlockFlexCol>
  );
}

const MainItems = () => {
  const { items } = useInfiniteHits();
  const { slugs } = useDomain();
  console.log("🚀 ~ MainItems ~ items:", items);

  return (
    <BlockListCard type="3">
      {map(items, (hit: any) => {
        const myUrl = `/${slugs?.[0]}/detail?id=${hit.id}`;
        return (
          <BlockFlexCol
            key={hit.id}
            className="w-full h-full rounded-brand hover:shadow-md transition bg-white border border-slate-200 hover:border-brand overflow-hidden gap-2 relative">
            <BlockDiv className="w-full h-44 shrink-0 overflow-hidden bg-white">
              <PosImage
                item={hit}
                alt={hit.title}
                className="w-full h-full object-cover object-center p-0 rounded-brand hover:text-brand"
                url={{
                  href: myUrl,
                  className: "block w-full h-full",
                }}
              />
            </BlockDiv>

            <BlockFlexCol className="gap-2 flex-1 px-3 py-2 justify-start ">
              <PosTitle
                item={hit}
                url={{ href: myUrl }}
                className="text-sm hover:text-brand line-clamp-4"
                animation={{
                  type: "slideDown",
                }}
              />
              <PosDesc
                item={hit}
                className="line-clamp-2 text-sm"
                animation={{
                  type: "slideUp",
                }}
              />

              <MoleculeIconText
                className="text-sm text-slate-500"
                icon={{ value: "mdi:tag-outline" }}
                title={{ value: toMotoPrice(hit?.price) }}
              />
            </BlockFlexCol>

            <BlockDiv className="px-3 py-2">
              <MoleculeBasketButton item={hit} />
            </BlockDiv>
          </BlockFlexCol>
        );
      })}
    </BlockListCard>
  );
};
