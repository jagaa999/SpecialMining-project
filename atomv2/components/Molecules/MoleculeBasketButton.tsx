"use client";

import { useActionBasketButton } from "atomv2/hooks/actions/useActionBasketButton";
import { ObjectLight } from "atomv2/types/objectTypes";
import { CSSProperties } from "react";
import RenderAtom from "../Atoms/RenderAtom";
import BlockFlexRow from "../Blocks/BlockFlexRow";

export default function MoleculeBasketButton({
  item,
  className = "",
  style,
  onClick,
  objectAdd,
  objectRemove,
}: {
  item: any;
  className?: string;
  style?: CSSProperties;
  objectAdd?: ObjectLight;
  objectRemove?: ObjectLight;
  onClick?: () => void;
}) {
  const { isInBasket, toggleItem } = useActionBasketButton({
    item,
    convertToSimple: true,
  });

  if (!item) {
    return null;
  }

  return (
    <BlockFlexRow
      onClick={() => {
        toggleItem();
        if (onClick) onClick();
      }}
      className={`gap-2 items-center justify-center text-white cursor-pointer hover:scale-105 px-5 py-2.5 rounded-lg transition-all duration-300 ${
        isInBasket
          ? `bg-slate-400 ${objectRemove?.className || ""}`
          : `bg-brand ${objectAdd?.className || ""}`
      } ${className}`}>
      <RenderAtom
        value={
          isInBasket
            ? "material-symbols:shopping-cart"
            : "material-symbols:shopping-cart-outline"
        }
        type="icon"
      />

      <RenderAtom
        value={
          isInBasket
            ? objectRemove?.value || "Хасах"
            : objectAdd?.value || "Сагс"
        }
        type="text"
        style={style}
        className={`text-xs`}
      />
    </BlockFlexRow>
  );
}
