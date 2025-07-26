import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import ZenartNavbar from "../Widget/ZenartNavbar";
import OrganismScrollToTopButton from "atomv2/components/Organisms/OrganismScrollToTopButton";
import "../Widget/theme.css";

export default function ZenartLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ZenartNavbar />
      <BlockDiv type="main" className="min-h-screen bg-gray-200">
        {children}
      </BlockDiv>
      <OrganismScrollToTopButton />
    </>
  );
}
