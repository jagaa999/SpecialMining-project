import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import "../Widget/theme.css";
import BlockSection from "atomv2/components/Blocks/BlockSection";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlockDiv type="main" className="flex flex-col min-h-screen">
      <BlockSection className="flex-grow">{children}</BlockSection>
    </BlockDiv>
  );
}
