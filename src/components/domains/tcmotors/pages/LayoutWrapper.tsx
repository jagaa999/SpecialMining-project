import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import TcmotorsFooter from "../Widget/TcmotorsFooter";
import TcmotorsNavbar from "../Widget/TcmotorsNavbar";
import TcmotorsBanner from "../Widget/TcmotorsBanner";
import "../Widget/theme.css";

export default function LayoutWrapper({
  children,
  banner,
}: {
  children: React.ReactNode;
  banner?: {
    mainimage: string;
    title: string;
    subtitle?: string;
  };
}) {
  return (
    <BlockDiv
      type="main"
      className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <TcmotorsNavbar />

      {/* Dynamic Banner */}
      {banner && <TcmotorsBanner item={banner} />}

      {/* Page Content */}
      <BlockDiv type="section" className="flex-grow">
        {children}
      </BlockDiv>

      {/* Footer */}
      <TcmotorsFooter />
    </BlockDiv>
  );
}
