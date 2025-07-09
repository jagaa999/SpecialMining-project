import BlockFlexCol from "../Blocks/BlockFlexCol";
import PanelMain from "./PanelMain";
import PanelSection from "./PanelSection";

export default function PanelSectionMainFlex({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PanelSection>
      <PanelMain>
        <BlockFlexCol>{children}</BlockFlexCol>
      </PanelMain>
    </PanelSection>
  );
}
