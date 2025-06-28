import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import TextH4 from "atomv2/components/Text/TextH4";

export default function OrganismPaymentТөлбөрДансаар({ setIsShowModal }: any) {
  return (
    <BlockDiv className="px-4 py-3 space-y-8">
      <TextH4 value="Дансаар шилжүүлэх" />
      <p className="text-sm text-muted">
        Дансы мэдээллийн дагуу төлбөрөө хялбархан шилжүүлж болно.
      </p>

      <RenderAtom
        value={
          "Уучлаарай, одоогоор Дансны мэдээлэл тодорхойгүй байгаа тул та бусад сонголтоор захиалгаа хийнэ үү"
        }
        type="text"
        className="text-error text-sm"
      />

      <BlockFlexRow className="gap-2 justify-end">
        <RenderAtom
          value={"Cancel"}
          type="button"
          variant="action1"
          onClick={() => setIsShowModal(false)}
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
  );
}
