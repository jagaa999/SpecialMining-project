"use client";

import { ObjectFull } from "atomv2/types/objectTypes";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import PanelMain from "../Panel/PanelMain";
import PosDesc from "../Position/PosDesc";
import PosTitle from "../Position/PosTitle";

export default function MoleculeCTA01({
  item,
  className,
}: {
  item: ObjectFull;
  className?: string;
}) {
  return (
    <BlockDiv
      type="section"
      className={`min-h-screen h-full bg-brand ${className}`}>
      <PanelMain className="min-h-screen h-full flex flex-col items-center justify-center text-center space-y-12">
        <PosTitle
          item={item}
          className="text-bg"
          as="h2"
          {...Object(item?.title)}
        />
        <PosDesc
          item={item}
          className="text-bg"
          {...Object(item?.description)}
        />
        <RenderAtom
          type="button"
          className="bg-bg text-brand text-xl"
          {...item?.button}
        />
      </PanelMain>
    </BlockDiv>
  );
}
