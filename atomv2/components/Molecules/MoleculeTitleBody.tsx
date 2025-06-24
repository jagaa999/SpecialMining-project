import { ObjectFull, ObjectLight } from "atomv2/types/objectTypes";
import BlockFlexCol from "../Blocks/BlockFlexCol";
import TextBody from "../Text/TextBody";
import TextH4 from "../Text/TextH4";

export default function MoleculeTitleBody({
  item,
  outerBlock,
}: {
  item: ObjectFull;
  outerBlock?: ObjectLight;
}) {
  return (
    <BlockFlexCol {...outerBlock} className={` ${outerBlock?.className}`}>
      <TextH4 item={item.title} />
      <TextBody item={item.description} />
    </BlockFlexCol>
  );
}
