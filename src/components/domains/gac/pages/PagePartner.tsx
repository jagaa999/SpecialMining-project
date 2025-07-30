"use client";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { motion } from "framer-motion";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockMain from "atomv2/components/Blocks/BlockMain";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import TextH2 from "atomv2/components/Text/TextH2";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function PagePartner() {
  return (
    <BlockDiv type="main" className="w-full bg-black text-white">
      {/* Header */}
      <Header />

      {/* Main */}
      <BlockMain>
        {/* Section 1: Image */}
        <BlockSection className="w-full flex justify-center bg-black">
          <RenderAtom
            type="image"
            value="https://res.cloudinary.com/dg2qmka48/image/upload/v1753849364/autozar6/mainimages/2025/gac/partner1_gkxbld.jpg"
            className="w-full"
            alt="Partner Section 1"
          />
        </BlockSection>

        {/* Section 2: Video */}
        <BlockSection className="w-full min-h-screen flex justify-center items-center bg-white px-4 py-8">
          {/* <RenderAtom
            type="video"
            value="https://res.cloudinary.com/dg2qmka48/video/upload/v1753849543/autozar6/mainimages/2025/gac/partner2_dn0eta.mp4"
            className="w-full max-w-[1280px] h-auto rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            controls
            playsInline
          /> */}
          <video
            src="https://res.cloudinary.com/dg2qmka48/video/upload/v1753849543/autozar6/mainimages/2025/gac/partner2_dn0eta.mp4"
            className="w-full max-w-[1280px] h-auto rounded-lg shadow-lg"
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        </BlockSection>

        {/* Section 3: Image */}
        <BlockSection className="w-full flex justify-center bg-black">
          <RenderAtom
            type="image"
            value="https://res.cloudinary.com/dg2qmka48/image/upload/v1753849365/autozar6/mainimages/2025/gac/partner3_qaywgn.jpg"
            className="w-full"
            alt="Partner Section 3"
          />
        </BlockSection>

        {/* Section 4 – Contact */}
        <BlockSection className="w-full bg-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center px-4">
            <TextH2
              value="Contact"
              className="text-3xl font-semibold text-black mb-4"
            />
            <TextHtml
              value='Dealership application email: <span class="font-medium">GACI_CMD_CDS_OF@gac-international.com</span>'
              className="text-gray-800 mb-2"
            />
            <TextHtml
              value="Add: No.60, Donglong Avenue, Panyu District, Guangzhou, People's Republic of China"
              className="text-gray-800"
            />
          </motion.div>
        </BlockSection>
      </BlockMain>

      {/* Footer */}
      <Footer />
    </BlockDiv>
  );
}
