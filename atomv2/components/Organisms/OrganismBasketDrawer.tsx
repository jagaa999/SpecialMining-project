import { toMotoPrice } from "atomv2/util/widgetHelper";
import { useConfig } from "src/config/context/ConfigContext";
import BlockDiv from "../Blocks/BlockDiv";
import BlockScroll from "../Blocks/BlockScroll";
import RenderAtom from "../system/RenderAtom";
import OrganismBasketListPanel from "./OrganismBasketListPanel";

export default function OrganismBasketDrawer() {
  const { localConfig } = useConfig();
  const basketItems = localConfig.basketList || [];

  const total = basketItems.reduce(
    (sum: number, item: any) => sum + (item.price || 0),
    0
  );

  return (
    <BlockDiv className="flex flex-col h-full max-h-screen">
      {/* Header */}
      <BlockDiv className="p-4 border-b border-gray-300">
        <RenderAtom
          value={`Сагс (${basketItems.length})`}
          type="text"
          className="text-lg font-semibold text-gray-800"
        />
      </BlockDiv>

      {/* Items with scroll */}
      <BlockScroll isActive={true} className="">
        <OrganismBasketListPanel />
        {/* <div className="min-h-full">
          {basketItems.length === 0 ? (
            <div className="p-6 text-center text-gray-400">
              Сагс хоосон байна
            </div>
          ) : (
            <BlockDiv className="divide-y divide-gray-200">
              {_.map(basketItems, (item: any, index: number) => (
                <MoleculeBasketItem
                  key={item.id || index}
                  item={item}
                  onRemove={() => handleRemove(item)}
                />
              ))}
            </BlockDiv>
          )}
        </div> */}
      </BlockScroll>

      {/* Footer fixed */}
      <BlockDiv className="p-4 border-t border-gray-300">
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
          className="w-full bg-teal-500 hover:brightness-95 text-white py-4 rounded transition text-base"
          url={{ href: "/cart", className: "w-full" }}
        />
      </BlockDiv>
    </BlockDiv>
  );
}
