import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import "../Widget/theme.css";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlockDiv type="main" className="flex flex-col min-h-screen">
      <BlockDiv type="section" className="flex-grow">
        {children}
      </BlockDiv>
    </BlockDiv>
  );
}
