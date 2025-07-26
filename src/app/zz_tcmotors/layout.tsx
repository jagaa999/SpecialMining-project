"use client";

import TcmotorsBanner from "@/components/domains/tcmotors/Widgetddd/TcmotorsBanner";
import TcmotorsFooter from "@/components/domains/tcmotors/Widgetddd/TcmotorsFooter";
import TcmotorsNavbar from "@/components/domains/tcmotors/Widgetddd/TcmotorsNavbar";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";

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
