import { useActionBasketButton } from "atomv2/hooks/actions/useActionBasketButton";
import { ObjectLight } from "atomv2/types/objectTypes";
import { CSSProperties } from "react";
import RenderAtom from "../Atoms/RenderAtom";

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
  const { isInBasket, toggleItem } = useActionBasketButton(item);

  return (
    <RenderAtom
      value={
        isInBasket ? objectRemove?.value || "Хасах" : objectAdd?.value || "Сагс"
      }
      type="text"
      style={style}
      className={`text-xs text-center text-white hover:scale-105 px-5 py-2.5 rounded-lg transition-all duration-300 cursor-pointer ${
        isInBasket
          ? `bg-slate-400 ${objectRemove?.className || ""}`
          : `bg-brand ${objectAdd?.className || ""}`
      } ${className}`}
      onClick={() => {
        toggleItem();
        if (onClick) onClick();
      }}
    />
  );
}
