import { toMotoPrice } from "atomv2/util/widgetHelper";
import { useConfig } from "src/config/context/ConfigContext";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import BlockFlexRow from "../Blocks/BlockFlexRow";
import BlockScroll from "../Blocks/BlockScroll";
import TextH4 from "../Text/TextH4";
import TextHtml from "../Text/TextHtml";
import OrganismBasketListPanel from "./OrganismBasketListPanel";
import BlockFlexCol from "../Blocks/BlockFlexCol";

export default function OrganismBasketDrawer() {
  const { localConfig } = useConfig();
  const basketItems = localConfig.basketList || [];

  const total = basketItems.reduce(
    (sum: number, item: any) => sum + (item.price || 0),
    0
  );

  return (
    <BlockFlexCol className="h-screen max-h-screen justify-between">
      {/* <BlockFlexCol className="w-full h-full flex-none gap-5 justify-start"> */}
      {/* Header */}
      <BlockDiv className="flex-none p-4 border-b border-gray-300">
        <BlockFlexRow>
          <TextH4 value="Сагс" />
          <TextHtml
            value={String(basketItems.length)}
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
        />
      </BlockDiv>
    </BlockFlexCol>
  );
}
