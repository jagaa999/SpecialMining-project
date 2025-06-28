import { removeItemArrayBasket2 } from "atomv2/util/widgetHelper";
import _ from "lodash";
import { useConfig } from "src/config/context/ConfigContext";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import MoleculeBasketItem from "../Molecules/MoleculeBasketItem";
import MoleculeEmptyItemState from "../Molecules/MoleculeEmptyItemState";

export default function OrganismBasketListPanel() {
  const { localConfig, setLocalConfig } = useConfig();
  const basketItems = localConfig.basketList || [];

  const handleRemove = (item: any) => {
    const updated = removeItemArrayBasket2(basketItems, item);
    setLocalConfig({ ...localConfig, basketList: updated });
  };

  return (
    <BlockDiv className="min-h-full flex-1">
      {basketItems.length <= 0 ? (
        <MoleculeEmptyItemState
          icon={{ value: "mdi-light:cart" }}
          title={{ value: "Хоосон" }}
          description={{ value: "Сагс хоосон байна" }}>
          <RenderAtom
            value={"Дэлгүүр →"}
            type="button"
            variant="action1"
            className="opacity-40"
            url={{ href: "/shop" }}
          />
        </MoleculeEmptyItemState>
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
