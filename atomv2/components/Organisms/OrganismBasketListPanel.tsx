import { removeItemArrayBasket2 } from "atomv2/util/widgetHelper";
import _ from "lodash";
import { useConfig } from "src/config/context/ConfigContext";
import BlockDiv from "../Blocks/BlockDiv";
import MoleculeBasketItem from "../Molecules/MoleculeBasketItem";

export default function OrganismBasketListPanel() {
  const { localConfig, setLocalConfig } = useConfig();
  const basketItems = localConfig.basketList || [];

  const handleRemove = (item: any) => {
    const updated = removeItemArrayBasket2(basketItems, item);
    setLocalConfig({ ...localConfig, basketList: updated });
  };

  return (
    <BlockDiv className="min-h-full flex-1">
      {basketItems.length === 0 ? (
        <BlockDiv className="p-6 text-center text-warning">
          Сагс хоосон байна
        </BlockDiv>
      ) : (
        <BlockDiv className="divide-y divide-muted/20">
          {_.map(basketItems, (item: any, index: number) => (
            <MoleculeBasketItem
              key={item.id || index}
              item={item}
              onRemove={() => handleRemove(item)}
            />
          ))}
        </BlockDiv>
      )}
    </BlockDiv>
  );
}
