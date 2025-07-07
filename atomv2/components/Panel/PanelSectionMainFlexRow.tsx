import BlockFlexRow from "../Blocks/BlockFlexRow";
import PanelMain from "./PanelMain";
import PanelSection from "./PanelSection";

export default function PanelSectionMainFlexRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PanelSection>
      <PanelMain>
        <BlockFlexRow>{children}</BlockFlexRow>
      </PanelMain>
    </PanelSection>
  );
}
