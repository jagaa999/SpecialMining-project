import { ObjectFull, ObjectLight } from "atomv2/types/objectTypes";
import BlockDiv from "../Blocks/BlockDiv";
import PosIcon from "../Position/PosIcon";
import PosTitle from "../Position/PosTitle";
import PosValue from "../Position/PosValue";

export default function MoleculeCard02({
  item,
  outerBlock,
}: {
  item: ObjectFull;
  outerBlock?: ObjectLight;
}) {
  return (
    <BlockDiv type="div" {...outerBlock}>
      <PosIcon item={item} width={40} height={40} className="text-brand" />
      <PosTitle item={item} className="text-xl font-semibold text-brand" />
      <PosValue item={item} isHtml />
    </BlockDiv>
  );
}
