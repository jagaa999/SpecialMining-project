import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import MoleculeEmptyItemState from "atomv2/components/Molecules/MoleculeEmptyItemState";
import PosTitle from "atomv2/components/Position/PosTitle";
import TextH5 from "atomv2/components/Text/TextH5";
import TextHtml from "atomv2/components/Text/TextHtml";
import { useActionBasketButton } from "atomv2/hooks/actions/useActionBasketButton";
import { toMotoPrice } from "atomv2/util/widgetHelper";
import { map } from "lodash";

export default function OrganismPaymentСагсныХатууПанель() {
  const { total, length, basketItems } = useActionBasketButton({});

  return (
    <BlockDiv className="bg-info/10 px-brand-x py-brand-y rounded-brand shadow-brand space-y-8">
      <TextH5 value="Таны захиалга" />

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
        <>
          <BlockDiv className="grid grid-cols-4 gap-2">
            {map(basketItems, (item: any, index: number) => (
              <BlockDiv
                key={item.id || index}
                className="flex flex-row items-center justify-between gap-4 py-2 w-full">
                <BlockFlexCol className="gap-2 w-full">
                  <RenderAtom
                    value={item.mainimage}
                    type="image"
                    className="object-cover object-center rounded-brand border border-gray-200 w-full aspect-square"
                  />
                  <PosTitle
                    item={item}
                    className="text-xs text-gray-700 line-clamp-2"
                  />
                  <RenderAtom
                    value={`${item.count} x ${toMotoPrice(item.price)}`}
                    type="text"
                    className="text-xs text-gray-600 block w-fit whitespace-nowrap"
                  />
                </BlockFlexCol>
              </BlockDiv>
            ))}
          </BlockDiv>

          <BlockDiv className="flex justify-between">
            <TextHtml value="Нийт дүн:" />
            <TextHtml value={toMotoPrice(total)} />
          </BlockDiv>
        </>
      )}
    </BlockDiv>
  );
}
