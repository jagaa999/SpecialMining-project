import { useActionBasketButton } from "atomv2/hooks/actions/useActionBasketButton";
import { BasketItemLight } from "atomv2/types/objectTypes";
import { toMotoPrice } from "atomv2/util/widgetHelper";
import { CSSProperties } from "react";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import BlockFlexCol from "../Blocks/BlockFlexCol";
import BlockFlexRow from "../Blocks/BlockFlexRow";
import PosTitle from "../Position/PosTitle";

export default function MoleculeBasketItem01({
  item,
  className = "",
  style,
}: {
  item: BasketItemLight;
  style?: CSSProperties;
  className?: string;
}) {
  const { toggleItem, addNumber, removeNumber } = useActionBasketButton({
    item,
  });

  return (
    <BlockDiv
      className={`flex items-center gap-4 py-2 relative group ${className}`}
      style={style}>
      {/* Зураг */}
      <RenderAtom
        value={item.mainimage || "/placeholder.png"}
        type="image"
        className="w-16 h-16 object-contain object-center rounded border border-muted/30"
      />

      {/* Гарчиг, үнэ */}
      <BlockFlexCol className="gap-0 w-full">
        <PosTitle
          item={item}
          className="text-sm text-gray-700 font-semibold group-hover:text-brand transition-colors duration-300 line-clamp-2"
          url={{ href: "/product" }}
        />

        <RenderAtom
          value={`${item.count} x ${toMotoPrice(item.price)}`}
          type="text"
          className="font-light text-gray-600 text-sm"
        />
      </BlockFlexCol>

      <BlockFlexRow className="items-center gap-2 mt-1">
        <RenderAtom
          type="button"
          value="-"
          onClick={removeNumber}
          variant="action1"
        />
        <RenderAtom
          type="button"
          value="+"
          onClick={addNumber}
          variant="action1"
        />
      </BlockFlexRow>

      {/* Устгах */}
      <RenderAtom
        type="icon"
        value="material-symbols:delete-outline"
        className="text-error text-xl cursor-pointer"
        onClick={toggleItem}
        tooltip={{ title: "Устгах", placement: "left" }}
      />
    </BlockDiv>
  );
}
