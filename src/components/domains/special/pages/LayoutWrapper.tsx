import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import Footer from "../Widget/Footer";
import Navbar from "../Widget/NavMenu/Navbar";
import BlockSection from "atomv2/components/Blocks/BlockSection";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlockDiv type="main" className="flex flex-col min-h-screen">
      <Navbar />
      <BlockSection className="flex-grow">{children}</BlockSection>
      <Footer />
    </BlockDiv>
  );
}
