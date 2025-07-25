"use client";

import { cn } from "atomv2/util/atomHelperV2";
import BlockDiv from "../Blocks/BlockDiv";

export default function PanelMain({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <BlockDiv
      type="section"
      data-block="PanelMain"
      className={cn(
        // generalTheme?.containerMain,
        "max-w-4xl mx-auto py-20 px-5",
        // generalTheme?.textMain,
        className
      )}>
      {children}
    </BlockDiv>
  );
}
