import BlockAnimateWrapper from "atomv2/components/Blocks/BlockAnimateWrapper";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockScroll from "atomv2/components/Blocks/BlockScroll";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import PanelMain from "atomv2/components/Panel/PanelMain";
import { ObjectLight } from "atomv2/types/objectTypes";

export default function ZenartSectionWrapper({
  BlockSectionObject,
  PanelMainObject,
  BlockFlexColObject,
  children,
}: {
  BlockSectionObject?: ObjectLight;
  PanelMainObject?: ObjectLight;
  BlockFlexColObject?: ObjectLight;
  children: React.ReactNode;
}) {
  return (
    <BlockSection
      {...BlockSectionObject}
      className={`w-full h-screen overflow-hidden bg-[#171c21] ${BlockSectionObject?.className}`}>
      <BlockScroll className="h-screen">
        <PanelMain
          {...PanelMainObject}
          className={`h-full ${PanelMainObject?.className}`}>
          <BlockFlexCol
            {...BlockFlexColObject}
            className={`h-full relative gap-16 ${BlockFlexColObject?.className}`}>
            <BlockAnimateWrapper type="wallpaper">
              {children}
            </BlockAnimateWrapper>
          </BlockFlexCol>
        </PanelMain>
      </BlockScroll>
    </BlockSection>
  );
}
