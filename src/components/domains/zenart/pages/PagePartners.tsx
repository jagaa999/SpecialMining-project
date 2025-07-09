"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function PagePartners() {
  return (
    <>
      <SectionPartners />
      <SectionPartnerLogos />
      <SectionFooter />
    </>
  );
}

const SectionPartners = () => {
  return (
    <BlockDiv
      type="section"
      className="relative w-full h-[720px] overflow-hidden">
      {/* --- Background Image (Blurred) --- */}
      <img
        src="https://images.pexels.com/photos/12289388/pexels-photo-12289388.jpeg"
        alt="ZenArt Room Background"
        className="absolute top-0 left-0 w-full h-full object-cover object-center blur-[8px] brightness-[0.85] scale-110 z-0"
      />

      {/* --- Top Left Logo + Divider + Text --- */}
      <BlockDiv className="absolute top-[56px] left-[64px] z-20 flex items-start space-x-6">
        {/* Logos */}
        <div className="flex flex-col space-y-2">
          <img
            src="https://cdn.moto.mn/moto/landing/13_zenart/home/23f83c14-1e15-422d-a5ea-971c8b8bd28a.png"
            alt="ZenArt Icon Logo"
            className="h-[50px] w-auto"
          />
          <img
            src="https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
            alt="ZenArt Text Logo"
            className="h-[28px] w-auto"
          />
        </div>

        {/* Divider */}
        <div className="h-[90px] w-[2px] bg-[#e3c3a2] rounded-sm" />

        {/* Quote Text */}
        <div className="max-w-[520px] text-left">
          <TextHtml
            value={`<span class='text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] text-[22px] lg:text-[28px] font-light leading-snug'>
                            Дотоод мэдрэмжид тань байх тэр л амар амгаланг,<br/>биет болгоход бид тусална...
                        </span>`}
          />
        </div>
      </BlockDiv>

      {/* --- Foreground Image (Right-aligned framed box, no rounded corners) --- */}
      <div className="absolute bottom-[20px] right-[80px] w-[68%] max-w-[920px] z-10 shadow-[0_4px_30px_rgba(0,0,0,0.4)] border border-white/30">
        <img
          src="https://images.pexels.com/photos/12289388/pexels-photo-12289388.jpeg"
          alt="ZenArt Foreground"
          className="w-full h-auto object-cover"
        />
      </div>
    </BlockDiv>
  );
};

const SectionPartnerLogos = () => {
  return (
    <BlockDiv
      type="section"
      className="relative w-full bg-white py-16 flex justify-center items-center">
      <img
        src="https://cdn.moto.mn/moto/landing/13_zenart/temp/d8dc8233-1ff7-4042-8871-e74d99d4f59c.png?t=1750904788381"
        alt="ZenArt Partners"
        className="w-full max-w-6xl h-auto object-contain"
      />
    </BlockDiv>
  );
};

const SectionFooter = () => {
  return (
    <BlockSection className="relative w-full h-screen">
      {/* Background Left + Right layout */}
      <BlockDiv className="absolute top-0 left-0 w-[calc(100%-100px)] h-full bg-[#0f1117] z-[-2]" />
      <BlockDiv className="absolute top-0 right-0 w-[20%] h-full bg-gradient-to-b from-[#f2cba8] to-[#e3b892] z-[-2]" />

      {/* Info Grid */}
      <PanelMain className="flex h-full items-center">
        <BlockFlexCol className="max-w-lg h-fit">
          {[
            {
              icon: "mdi:map-marker",
              text: "Улаанбаатар хот, Хан-уул дүүрэг 3-р хороо<br />Чингисийн өргөн чөлөө-44 Алтартана хотхон, 1-давхарт",
            },
            {
              icon: "mdi:web",
              text: "www.zenart.mn",
            },
            {
              icon: "mdi:instagram",
              text: "zenartistic",
            },
            {
              icon: "mdi:facebook",
              text: "Zen Art",
            },
            {
              icon: "mdi:phone",
              text: "7707-5088  |  8860-5088",
            },
          ].map((item, index) => (
            <BlockFlexRow key={item.icon + index} className={``}>
              <RenderAtom
                value={item.icon}
                type="icon"
                className={`text-[#e3c3a2] text-2xl flex-none`}
              />
              <RenderAtom
                value={item.text}
                type="text"
                className="text-gray-300"
              />
            </BlockFlexRow>
          ))}
        </BlockFlexCol>
      </PanelMain>
    </BlockSection>
  );
};
