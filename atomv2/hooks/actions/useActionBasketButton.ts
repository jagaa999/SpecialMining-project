import { find } from "lodash";
import { useConfig } from "src/config/context/ConfigContext";
import {
  extractObjectMain,
  removeItemArrayBasket2,
  totalPrice,
  updateArrayBasket2,
} from "../../util/widgetHelper";

export function useActionBasketButton({
  item,
  convertToSimple = true,
}: {
  item?: any;
  convertToSimple?: boolean;
}) {
  const itemReady = convertToSimple ? extractObjectMain(item) : item;

  const { localConfig, setLocalConfig } = useConfig();
  const basketItems = localConfig.basketList || [];
  const matchedItem = find(basketItems, (b) => b?.id === itemReady?.id);
  const total = totalPrice(basketItems);

  const toggleItem = () => {
    const updatedList = matchedItem
      ? removeItemArrayBasket2(basketItems, item)
      : updateArrayBasket2(basketItems, {
          ...itemReady,
          count: 1,
        });

    setLocalConfig({ ...localConfig, basketList: updatedList });
  };

  const addNumber = () => {
    let updatedList;

    if (matchedItem) {
      updatedList = updateArrayBasket2(basketItems, {
        ...matchedItem,
        count: (matchedItem.count || 1) + 1,
      });
    } else {
      updatedList = updateArrayBasket2(basketItems, {
        ...itemReady,
        count: 1,
      });
    }

    setLocalConfig({ ...localConfig, basketList: updatedList });
  };

  const removeNumber = () => {
    if (!matchedItem) return;

    const newCount = (matchedItem.count || 1) - 1;

    const updatedList =
      newCount <= 0
        ? removeItemArrayBasket2(basketItems, itemReady)
        : updateArrayBasket2(basketItems, {
            ...matchedItem,
            count: newCount,
          });

    setLocalConfig({ ...localConfig, basketList: updatedList });
  };

  const clearBasket = () => {
    setLocalConfig({
      ...localConfig,
      basketList: undefined,
    });
  };

  const clearOrder = () => {
    setLocalConfig({ ...localConfig, orderInfo: undefined });
  };

  const clearAll = async () => {
    setLocalConfig({
      ...localConfig,
      basketList: undefined,
      orderInfo: undefined,
    });
  };

  return {
    itemReady,
    basketItems,
    isInBasket: !!matchedItem,
    toggleItem,
    addNumber,
    removeNumber,
    clearBasket,
    clearOrder,
    clearAll,
    total,
    length: basketItems.length,
    currentItem: matchedItem,
  };
}
