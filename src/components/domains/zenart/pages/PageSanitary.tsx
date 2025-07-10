"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import TextH1 from "atomv2/components/Text/TextH1";
import TextH3 from "atomv2/components/Text/TextH3";
import TextHtml from "atomv2/components/Text/TextHtml";
import { map } from "lodash";
import ZenartSectionWrapper from "../Widget/ZenartSectionWrapper";
import BlockScrollSnapScreenBlock from "atomv2/components/Blocks/BlockScrollSnapScreenBlock";

export default function PageSanitaryFurniture() {
  return (
    <>
      <BlockScrollSnapScreenBlock>
        <SectionSanitary />
        <SectionFurniture />
      </BlockScrollSnapScreenBlock>
    </>
  );
}
