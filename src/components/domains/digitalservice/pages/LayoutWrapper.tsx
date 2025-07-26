import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import DigitalServiceNavbar from "../Widget/DigitalServiceNavbar";
import DigitalServiceFooter from "../Widget/DigitalServiceFooter";
import "../Widget/theme.css";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlockDiv type="main" className="flex flex-col min-h-screen">
      <DigitalServiceNavbar />
      <BlockDiv type="section" className="flex-grow">
        {children}
      </BlockDiv>
      <DigitalServiceFooter />
    </BlockDiv>
  );
}
