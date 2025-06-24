"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextH3 from "atomv2/components/Text/TextH3";
import TextH4 from "atomv2/components/Text/TextH4";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function ZenartPageAbout() {
  return (
    <>
      <Section1 />
      <Section2 />
    </>
  );
}

const Section1 = () => {
  return (
    <BlockDiv
      type="section"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center bg-gradient-to-r from-[#f6c99e] to-[#ce9871]"
      // style={{
      //   backgroundImage: `url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg)`, //
      // }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content */}
      <BlockDiv className="relative z-10 text-center px-4">
        <img
          src="https://cdn.moto.mn/moto/landing/13_zenart/home/cf0fa9a4-4a6f-4a8c-81ad-f7c21f5a9344.png"
          alt="Zen Art Logo"
          className="mx-auto w-64 h-auto"
        />
      </BlockDiv>
    </BlockDiv>
  );
};

const Section2 = () => {
  return (
    <BlockDiv
      type="section"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center bg-[#171c21]">
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content */}
      <PanelMain className="relative z-10 px-4 flex flex-col justify-start gap-24">
        <img
          src="https://cdn.moto.mn/moto/landing/13_zenart/home/23f83c14-1e15-422d-a5ea-971c8b8bd28a.png"
          alt="Zen Art Logo"
          className="w-16 h-auto"
        />

        <TextHtml
          value="Интерьер дизайны мөн чанар нь хүмүүний амьдрах хэв маягийн тухай юм.<br />
          Дан ганц загварлаг байдлын талаар бус харин сэтгэл татам эргономик, утга учиртай бодит орчинг бий болгох тухай.<br />
          Энэ нь хүн бүрийн анхны төсөөлөл шиг тийм ч хялбар ажил биш юмаа.
"
          className="text-slate-300 lext-left text-sm leading-7 tracking-wide"
        />
        <TextH3
          value="Таны уран бүтээлч амьдралын хэв маяг..."
          className="bg-gradient-to-r from-[#f6c99e] to-[#ce9871] bg-clip-text text-transparent"
        />

        <img
          src="https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
          alt="Zen Art Logo"
          className="w-32 h-auto"
        />
      </PanelMain>
    </BlockDiv>
  );
};
