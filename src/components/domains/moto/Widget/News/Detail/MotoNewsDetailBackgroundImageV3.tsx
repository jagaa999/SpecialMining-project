import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import PanelContainer from "atomv2/components/Panel/PanelContainer";
import PosImage from "atomv2/components/Position/PosImage";
import TextBody from "atomv2/components/Text/TextBody";
import TextH2 from "atomv2/components/Text/TextH2";
import { toMotoDate } from "atomv2/util/widgetHelper";

export default function MotoNewsDetailBackgroundImageV3({
  item,
}: {
  item: any;
}) {
  return (
    <BlockDiv className="w-full relative h-[65vh] text-gray-200">
      <PosImage
        item={item}
        className="absolute inset-0 w-full h-full object-cover object-center brightness-75 bg-[#222222]"
      />

      <BlockDiv className="absolute inset-y-0 left-0 w-full h-full flex items-center">
        <PanelContainer>
          <BlockFlexCol>
            <TextH2
              value={item?.title}
              className="text-white"
              animation={{ type: "slideDown" }}
            />
            <BlockFlexRow>
              <TextBody
                value={
                  item?.type_desc ||
                  item?.typetitle ||
                  item?.type_title ||
                  item?.ref_newstype_title
                }
              />
              <TextBody
                value={
                  item?.source_desc ||
                  item?.sourcetitle ||
                  item?.source_title ||
                  item?.ref_newssource_title
                }
              />
              <TextBody value={toMotoDate(item?.createddate)} />
            </BlockFlexRow>
          </BlockFlexCol>
        </PanelContainer>
      </BlockDiv>
    </BlockDiv>
  );
}
