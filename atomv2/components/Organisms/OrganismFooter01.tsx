"use client";

import { Icon } from "@iconify/react";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextBody from "atomv2/components/Text/TextBody";
import TextHtml from "atomv2/components/Text/TextHtml";
import { map } from "lodash";

export default function OrganismFooter01({ item }: { item: any }) {
  return (
    <BlockDiv type="footer" className="w-full bg-neutral-800 relative">
      <PanelMain className="w-full py-10">
        <BlockFlexRow className="w-full gap-12 items-start">
          <BlockDiv className="flex flex-col items-center md:items-start gap-2 w-1/5">
            <RenderAtom
              value={item?.contact.logo}
              type="image"
              className="w-24 filter invert grayscale hover:grayscale-0 hover:invert-0 transition duration-300"
            />
          </BlockDiv>

          <BlockDiv className="flex flex-col gap-2 justify-center items-center md:items-start w-2/5">
            <TextBody value="Contact us" className="text-sm text-gray-500" />
            {[
              {
                icon: "fa:phone",
                title: item?.contact.phone1,
              },
              {
                icon: "fa:phone",
                title: item?.contact.phone2,
              },
            ].map((item, index) => (
              <BlockFlexRow key={index}>
                <Icon icon={item.icon} className="text-sm text-gray-600" />
                <TextHtml
                  value={item.title}
                  className="text-sm text-gray-400"
                />
              </BlockFlexRow>
            ))}
          </BlockDiv>

          <BlockFlexCol className="w-2/5">
            <TextHtml
              value={item?.contact.description}
              className="text-sm text-gray-500"
            />
            <TextHtml
              value={item?.copyright}
              className="text-sm text-gray-500"
            />
          </BlockFlexCol>

          <BlockDiv className="flex flex-wrap gap-3 justify-center md:justify-start items-center w-1/5">
            {map(item?.socialLinks, (item: any, index: number) => (
              <RenderAtom
                key={item?.id || index}
                value={item?.icon}
                type="icon"
                url={{
                  baseUrl: item?.href,
                  className:
                    "w-12 h-12 bg-gray-700 text-gray-400 rounded flex items-center justify-center hover:bg-gray-600 transition",
                }}
              />
            ))}
          </BlockDiv>
        </BlockFlexRow>
      </PanelMain>
    </BlockDiv>
  );
}
