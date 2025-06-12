import { cn } from "atomv2/util/atomHelperV2";
import BlockDiv from "../Blocks/BlockDiv";

export default function PanelSection({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <BlockDiv
      type="section"
      data-block="PanelSection"
      className={cn("max-w-2xl py-20", className)}>
      {children}
    </BlockDiv>
  );
}
