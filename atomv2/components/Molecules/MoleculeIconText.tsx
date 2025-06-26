import { ObjectLight } from "atomv2/types/objectTypes";
import RenderAtom from "../Atoms/RenderAtom";
import BlockFlexRow from "../Blocks/BlockFlexRow";

export default function MoleculeIconText({
  icon,
  title,
  className,
}: {
  icon: ObjectLight;
  title: ObjectLight;
  className?: string;
}) {
  return (
    <BlockFlexRow
      data-block="MoleculeIconText"
      className={`gap-2 ${className}`}>
      <RenderAtom type="icon" item={icon} />
      <RenderAtom type="text" item={title} />
    </BlockFlexRow>
  );
}
