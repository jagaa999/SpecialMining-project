"use client";

import { useActionBasketButton } from "atomv2/hooks/actions/useActionBasketButton";
import { ObjectLight } from "atomv2/types/objectTypes";
import _ from "lodash";
import RenderAtom from "../../Atoms/RenderAtom";
import BlockDiv from "../../Blocks/BlockDiv";
import MoleculeBasketItem01 from "../../Molecules/MoleculeBasketItem01";
import MoleculeBasketItem02 from "../../Molecules/MoleculeBasketItem02";
import MoleculeEmptyItemState from "../../Molecules/MoleculeEmptyItemState";

interface Props {
  variant?: "MoleculeBasketItem01" | "MoleculeBasketItem02";
  OrganismBasketListPanelOuter?: ObjectLight;
  OrganismBasketListPanelItemListOuter?: ObjectLight;
}

export default function OrganismBasketListPanel({
  variant = "MoleculeBasketItem01",
  OrganismBasketListPanelOuter,
  OrganismBasketListPanelItemListOuter,
}: Props) {
  const { basketItems, length } = useActionBasketButton({});

  return (
    <BlockDiv
      className="min-h-full flex-1"
      data-block="OrganismBasketListPanelOuter"
      {...OrganismBasketListPanelOuter}>
      {length <= 0 ? (
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
        <BlockDiv
          className="divide-y divide-muted/20"
          data-block="OrganismBasketListPanelItemListOuter"
          {...OrganismBasketListPanelItemListOuter}>
          {_.map(basketItems, (item: any, index: number) => {
            return (
              <BasketItemWrapper
                key={item.id || index}
                item={item}
                variant={variant}
              />
            );
          })}
        </BlockDiv>
      )}
    </BlockDiv>
  );
}

const ComponentMap: Record<string, any> = {
  MoleculeBasketItem01,
  MoleculeBasketItem02,
};

// BasketItemWrapper.tsx
const BasketItemWrapper = ({
  item,
  variant,
  ...props
}: {
  item: any;
  variant: string;
  [key: string]: any;
}) => {
  const BasketItemComponent = ComponentMap[variant] || MoleculeBasketItem01;

  return <BasketItemComponent item={item} {...props} />;
};
