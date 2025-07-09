import { useActionBasketButton } from "atomv2/hooks/actions/useActionBasketButton";
import { ObjectButton } from "atomv2/types/objectTypes";
import { toMotoPrice } from "atomv2/util/widgetHelper";
import RenderAtom from "../../Atoms/RenderAtom";
import BlockDiv from "../../Blocks/BlockDiv";
import BlockFlexCol from "../../Blocks/BlockFlexCol";
import BlockFlexRow from "../../Blocks/BlockFlexRow";
import BlockScroll from "../../Blocks/BlockScroll";
import TextH4 from "../../Text/TextH4";
import TextHtml from "../../Text/TextHtml";
import OrganismBasketListPanel from "./OrganismBasketListPanel";

export default function OrganismBasketDrawer({
  basketButton,
}: {
  basketButton?: ObjectButton;
}) {
  const { total, length } = useActionBasketButton({});

  return (
    <BlockFlexCol className="h-screen max-h-screen justify-between">
      {/* Header */}
      <BlockDiv className="flex-none p-4 border-b border-gray-300">
        <BlockFlexRow>
          <TextH4 value="Сагс" />
          <TextHtml
            value={String(length)}
            className="bg-info text-bg rounded px-2 py-0.5 text-sm"
          />
        </BlockFlexRow>
      </BlockDiv>

      {/* Items with scroll */}
      <BlockScroll isActive={true} className="px-4">
        <OrganismBasketListPanel />
      </BlockScroll>
      {/* </BlockFlexCol> */}

      {/* Footer fixed */}
      <BlockDiv className="flex-none p-4 border-t border-gray-300">
        <BlockDiv className="flex justify-between mb-4">
          <RenderAtom value={"Нийт дүн:"} type="text" className="text-lg" />
          <RenderAtom
            value={toMotoPrice(total)}
            type="text"
            className="font-semibold text-lg"
          />
        </BlockDiv>

        <RenderAtom
          value={"Сагсны дэлгэрэнгүй"}
          type="button"
          className="w-full bg-brand text-bg text-base"
          url={{ href: "/cart", className: "w-full" }}
          {...basketButton}
        />
      </BlockDiv>
    </BlockFlexCol>
  );
}
