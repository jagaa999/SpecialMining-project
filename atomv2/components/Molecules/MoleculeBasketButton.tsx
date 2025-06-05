import _ from "lodash";
import { CSSProperties } from "react";
import { useConfig } from "src/config/context/ConfigContext";
import {
  extractObjectMain,
  removeItemArrayBasket2,
  updateArrayBasket2,
} from "../../util/widgetHelper";
import RenderAtom from "../system/RenderAtom";
import { ObjectLight } from "atomv2/types/objectTypes";

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
  const { localConfig, setLocalConfig } = useConfig();
  const itemReady = extractObjectMain(item);
  const isInBasket = _.find(localConfig?.basketList, itemReady);

  return (
    <RenderAtom
      value={
        isInBasket ? objectRemove?.value || "Хасах" : objectAdd?.value || "Сагс"
      }
      type="text"
      style={style}
      className={`text-sm text-center text-white hover:scale-105 px-7 py-4 rounded-lg transition-all duration-300 cursor-pointer ${
        isInBasket
          ? `bg-gray-300 ${objectRemove?.className || ""}`
          : `bg-teal-400 ${objectAdd?.className || ""}`
      } ${className}`}
      onClick={() => {
        const updatedList = isInBasket
          ? removeItemArrayBasket2(localConfig.basketList, item)
          : updateArrayBasket2(localConfig.basketList, {
              ...itemReady,
              count: 1,
            });

        setLocalConfig({ ...localConfig, basketList: updatedList });

        if (onClick) onClick();
      }}
    />
  );
}
