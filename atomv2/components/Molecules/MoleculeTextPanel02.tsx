import { ObjectFull, ObjectLight } from "atomv2/types/objectTypes";
import BlockDiv from "../Blocks/BlockDiv";
import PanelMain from "../Panel/PanelMain";
import TextH1 from "../Text/TextH1";
import TextHtml from "../Text/TextHtml";

export default function MoleculeTextPanel02({
  item,
  outerBlock,
}: {
  item: ObjectFull;
  outerBlock?: ObjectLight;
}) {
  return (
    <BlockDiv
      type="section"
      {...outerBlock}
      className={`h-screen min-h-screen bg-bg flex items-center justify-center ${outerBlock?.className}`}>
      <PanelMain className="text-center space-y-12 flex flex-col items-center">
        <TextH1 item={item} className="uppercase" />
        <TextHtml item={item} className="text-xl" />
      </PanelMain>
    </BlockDiv>
  );
}
