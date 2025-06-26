"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import { prepareTitle } from "atomv2/util/widgetHelper";
import { map } from "lodash";
import RenderAtom from "../Atoms/RenderAtom";
import BlockFlexRow from "../Blocks/BlockFlexRow";
import MoleculeIconText from "../Molecules/MoleculeIconText";

export default function OrganismNavbarTopPanel({ item }: { item: any }) {
  return (
    <PanelMain className="py-0 w-full">
      <BlockDiv className="hidden md:flex justify-between items-center py-3 border-b border-gray-100">
        <BlockDiv className="flex flex-row gap-4">
          {map(item?.socials, (item: any, index: number) => (
            <RenderAtom
              key={item?.id || index}
              value={item?.icon}
              type="icon"
              className="text-xl hover:text-brand transition-all duration-300"
              url={{ baseUrl: item?.href }}
            />
          ))}
        </BlockDiv>

        <BlockFlexRow>
          {map(item?.contacts, (item: any, index: number) => (
            <MoleculeIconText
              key={item?.id || index}
              icon={{ value: item.icon, className: "text-brand/40 text-xs" }}
              title={{ value: prepareTitle(item), className: "text-xs" }}
            />
          ))}
        </BlockFlexRow>
      </BlockDiv>
    </PanelMain>
  );
}
