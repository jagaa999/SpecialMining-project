import {
  extractObjectMain,
  removeItemArrayBasket2,
  totalPrice,
  updateArrayBasket2,
} from "../../util/widgetHelper";
import _ from "lodash";
import { useConfig } from "src/config/context/ConfigContext";

export function useActionBasketButton({ item }: any) {
  const itemReady = extractObjectMain(item);

  const { localConfig, setLocalConfig } = useConfig();
  const basketItems = localConfig.basketList || [];
  const isInBasket = _.find(basketItems, itemReady);
  const total = totalPrice(basketItems);

  const toggleItem = () => {
    const updatedList = isInBasket
      ? removeItemArrayBasket2(basketItems, item)
      : updateArrayBasket2(basketItems, {
          ...itemReady,
          count: 1,
        });

    setLocalConfig({ ...localConfig, basketList: updatedList });
  };

  return {
    itemReady,
    basketItems,
    isInBasket,
    toggleItem,
    total,
    length: basketItems.length,
  };
}
