import { BasketItemLight, ObjectLight } from "atomv2/types/objectTypes";
import { toMotoPrice } from "atomv2/util/widgetHelper";
import BlockFlexCol from "../Blocks/BlockFlexCol";
import PosImage from "../Position/PosImage";
import TextBody from "../Text/TextBody";
import TextH4 from "../Text/TextH4";

export default function MoleculeCard03({
  item,
  outerBlock,
  imageBlock,
  titleBlock,
  priceBlock,
  other,
}: {
  item: BasketItemLight;
  outerBlock?: ObjectLight;
  imageBlock?: ObjectLight;
  titleBlock?: ObjectLight;
  priceBlock?: ObjectLight;
  other?: React.ReactNode;
}) {
  return (
    <BlockFlexCol
      key={item.id}
      {...outerBlock}
      className={`border border-brand/10 p-4 rounded-lg hover:shadow-lg transition bg-white items-center gap-2 ${
        outerBlock?.className || ""
      }`}>
      {/* Зураг */}
      <PosImage
        item={item}
        {...imageBlock}
        className={`w-full h-24 object-contain rounded-md bg-gray-50 ${
          imageBlock?.className || ""
        }`}
      />

      {/* Гарчиг */}
      <TextH4
        {...titleBlock}
        value={String(item.title)}
        className={titleBlock?.className || ""}
      />

      {/* Үнэ */}
      <TextBody
        {...priceBlock}
        value={toMotoPrice(item.price)}
        className={priceBlock?.className || ""}
      />

      {other}
    </BlockFlexCol>
  );
}
