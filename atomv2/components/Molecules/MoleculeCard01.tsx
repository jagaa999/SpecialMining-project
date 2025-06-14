import { ObjectFull } from "atomv2/types/objectTypes";
import { cn } from "../../util/atomHelperV2";
import BlockDiv from "../Blocks/BlockDiv";
import PosImage from "../Position/PosImage";
import PosTitle from "../Position/PosTitle";

export interface MoleculeCard01Props {
  item: ObjectFull;
  className?: string;
}

export default function MoleculeCard01({
  item,
  className,
}: MoleculeCard01Props) {
  return (
    <BlockDiv
      className={cn(
        "flex flex-col items-center bg-white px-6 py-12 rounded-brand shadow-brand ring-1 ring-brand hover:shadow-2xl transition-all duration-500 ease-in-out w-56",
        className
      )}>
      <PosImage item={item} className="h-24 object-contain mb-5" />
      <PosTitle item={item} className="text-gray-500 font-light text-sm" />
    </BlockDiv>
  );
}
