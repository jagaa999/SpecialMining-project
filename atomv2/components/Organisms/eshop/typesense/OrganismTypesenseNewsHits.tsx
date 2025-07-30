"use client";

import { useDomain } from "@/config/context/DomainContext";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import MoleculeIconText from "atomv2/components/Molecules/MoleculeIconText";
import PosDesc from "atomv2/components/Position/PosDesc";
import PosImage from "atomv2/components/Position/PosImage";
import PosTitle from "atomv2/components/Position/PosTitle";
import { toMotoDate } from "atomv2/util/widgetHelper";
import { map } from "lodash";
import { useInfiniteHits } from "react-instantsearch";
import OrganismTypesenseLisLoadMoreTrigger from "./OrganismTypesenseLisLoadMoreTrigger";

export default function OrganismTypesenseNewsHits() {
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
    <BlockFlexCol className="gap-7">
      {map(items, (hit: any) => {
        const myUrl = `/${slugs?.[0]}/detail?id=${hit.id}`;
        return (
          <BlockFlexRow
            key={hit.id}
            className="w-full h-44 rounded-brand hover:shadow-md transition bg-white pr-3 border border-slate-200 hover:border-brand">
            <BlockDiv className="w-56 h-full shrink-0 overflow-hidden bg-gray-100">
              <PosImage
                item={hit}
                alt={hit.title}
                className="w-full h-full object-cover object-center px-0 py-0 rounded-r-none hover:text-brand rounded-brand"
                url={{
                  href: myUrl,
                  className: "block w-full h-full",
                }}
              />
            </BlockDiv>

            <BlockFlexCol className="gap-2 flex-1">
              <PosTitle
                item={hit}
                url={{ href: myUrl }}
                className="text-lg font-semibold hover:text-brand line-clamp-2"
                animation={{
                  type: "slideLeft",
                }}
              />
              <PosDesc
                item={hit}
                className="line-clamp-2 text-sm"
                animation={{
                  type: "slideLeft",
                }}
              />

              <MoleculeIconText
                className="text-sm text-slate-500"
                icon={{ value: "material-symbols:date-range" }}
                title={{ value: toMotoDate(hit?.createddate) }}
              />
            </BlockFlexCol>
          </BlockFlexRow>
        );
      })}
    </BlockFlexCol>
  );
};
