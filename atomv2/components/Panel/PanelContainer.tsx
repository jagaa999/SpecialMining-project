import { cn } from "atomv2/util/atomHelperV2";
import BlockDiv from "../Blocks/BlockDiv";

export default function PanelContainer({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <BlockDiv
      type="div"
      data-block="PanelContainer"
      className={cn("max-w-brand mx-auto", className)}>
      {children}
    </BlockDiv>
  );
}
