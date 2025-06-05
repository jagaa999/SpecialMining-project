import { BasketItemLight } from "atomv2/types/objectTypes";
import { toMotoPrice } from "atomv2/util/widgetHelper";
import { CSSProperties } from "react";
import BlockDiv from "../Blocks/BlockDiv";
import BlockFlexCol from "../Blocks/BlockFlexCol";
import RenderAtom from "../system/RenderAtom";

export default function MoleculeBasketItem({
  item,
  onRemove,
  className = "",
  style,
}: {
  item: BasketItemLight;
  onRemove?: () => void;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <BlockDiv
      className={`flex items-center gap-4 p-4 ${className}`}
      style={style}>
      {/* Зураг */}
      <img
        src={item.mainimage || "/placeholder.png"}
        alt={item.title}
        className="w-16 h-16 object-contain object-center rounded border border-gray-200"
      />

      {/* Гарчиг, үнэ */}
      <BlockFlexCol className="gap-0 w-full">
        <RenderAtom
          value={item.title}
          type="text"
          className="text-base font-semibold text-gray-800 group-hover:text-[#c8102e] transition-colors duration-300 line-clamp-2"
        />

        <RenderAtom
          value={`${item.count} x ${toMotoPrice(item.price)}`}
          type="text"
          className="font-light text-gray-500 text-sm"
        />
      </BlockFlexCol>

      {/* Үнэ + Устгах */}

      <RenderAtom
        type="icon"
        value="material-symbols:delete-outline"
        className="text-red-300 text-xl cursor-pointer"
        onClick={onRemove}
      />
    </BlockDiv>
  );
}
