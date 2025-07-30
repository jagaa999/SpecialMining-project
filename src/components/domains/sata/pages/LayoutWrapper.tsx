import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import Footer from "../Widget/SataFooter";
import SataNavbar from "../Widget/SataNavbar";
// import "../Widget/theme.css";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BlockDiv type="main" className="flex flex-col min-h-screen">
      <SataNavbar />
      <BlockDiv type="section" className="flex-grow">
        {children}
      </BlockDiv>
      <Footer />
    </BlockDiv>
  );
}
