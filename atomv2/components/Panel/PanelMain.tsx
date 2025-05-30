import { cn } from "atomv2/util/atomHelperV2";
import { generalTheme } from "src/components/domains/special/generalConfig";
import BlockDiv from "../Blocks/BlockDiv";

export default function PanelMain({ className, children }: any) {
  return (
    <BlockDiv
      type="section"
      data-block="PanelMain"
      className={cn(
        generalTheme?.containerMain,
        "max-w-4xl py-20",
        generalTheme?.textMain,
        className
      )}>
      {children}
    </BlockDiv>
  );
}
