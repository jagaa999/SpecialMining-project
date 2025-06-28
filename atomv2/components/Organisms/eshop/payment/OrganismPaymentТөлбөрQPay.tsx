import { Result } from "antd";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import BlockShowOnlyOne from "atomv2/components/Blocks/BlockShowOnlyOne";
import TextH4 from "atomv2/components/Text/TextH4";
import { useState } from "react";

export default function OrganismPaymentТөлбөрQPay({ setIsShowModal }: any) {
  const [index, setIndex] = useState(0);
  return (
    <BlockDiv className="px-4 py-3 space-y-8">
      <TextH4 value="QPay төлбөр" />

      <BlockShowOnlyOne index={index}>
        <BlockDiv className="space-y-8">
          <p className="text-sm text-muted">
            QPay төлбөрийн системийг ашиглан төлбөрөө хялбархан гүйцэтгэнэ үү.
          </p>

          <RenderAtom
            value={
              "Уучлаарай, одоогоор QPay холбоогүй байгаа тул та бусад сонголтоор захиалгаа хийнэ үү"
            }
            type="text"
            className="text-error text-sm"
          />

          <BlockFlexRow className="gap-2 justify-end">
            <RenderAtom
              value={"Cancel"}
              type="button"
              variant="action1"
              onClick={() => {
                setIndex(1);
                // setIsShowModal(false);
              }}
            />
            {/* <RenderAtom
            onClick={() => {
              setIsShowModal(false);
            }}
            value={"OK"}
            type="button"
            variant="action2"
          /> */}
          </BlockFlexRow>
        </BlockDiv>
        <BlockDiv className="space-y-8">
          <Result status="warning" subTitle="Та дараа дахин оролдоорой." />
          <BlockFlexRow className="gap-2 justify-end">
            <RenderAtom
              value={"Ойлголоо"}
              type="button"
              variant="action1"
              onClick={() => {
                setIsShowModal(false);
              }}
            />
          </BlockFlexRow>
        </BlockDiv>
      </BlockShowOnlyOne>
    </BlockDiv>
  );
}
