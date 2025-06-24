"use client";

import RenderAtom from "../Atoms/RenderAtom";
import BlockFlexCol from "../Blocks/BlockFlexCol";
import BlockHalf from "../Blocks/BlockHalf";
import TextH4 from "../Text/TextH4";
import TextHtml from "../Text/TextHtml";

export default function OrganismHalfImageTextList({
  items,
}: {
  items: {
    image: string;
    title: string;
    description: string;
    other?: React.ReactNode;
  }[];
}) {
  return (
    <BlockFlexCol className="w-full gap-16">
      {items.map((item, index) => (
        <BlockHalf key={index} stretch reverse={index % 2 === 1}>
          <RenderAtom value={item.image} type="image" />
          <BlockFlexCol>
            <TextH4 value={item.title} />
            <TextHtml value={item.description} />
            {item.other}
          </BlockFlexCol>
        </BlockHalf>
      ))}
    </BlockFlexCol>
  );
}
