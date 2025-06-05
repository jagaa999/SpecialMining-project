import { cn } from "atomv2/util/atomHelperV2";
import { generalTheme } from "src/components/domains/special/generalConfig";
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
      className={cn(generalTheme?.containerMain, className)}>
      {children}
    </BlockDiv>
  );
}
