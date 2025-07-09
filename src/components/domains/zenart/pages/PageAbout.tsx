"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import TextH3 from "atomv2/components/Text/TextH3";
import TextHtml from "atomv2/components/Text/TextHtml";
import ZenartSectionWrapper from "../Widget/ZenartSectionWrapper";
import BlockScrollSnapScreenBlock from "atomv2/components/Blocks/BlockScrollSnapScreenBlock";

export default function ZenartPageAbout() {
  return (
    <>
      <BlockScrollSnapScreenBlock>
        <Section0 />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </BlockScrollSnapScreenBlock>
    </>
  );
}

const Section0 = () => {
  return (
    <BlockSection className="relative w-full h-screen bg-cover bg-center flex items-center justify-center bg-gradient-to-r from-[#f6c99e] to-[#ce9871] animate-fade-in">
      <BlockDiv className="relative z-10 text-center px-4 animate-fade-in">
        <RenderAtom
          value={
            "https://cdn.moto.mn/moto/landing/13_zenart/home/cf0fa9a4-4a6f-4a8c-81ad-f7c21f5a9344.png"
          }
          type="image"
          className="mx-auto w-64 h-auto animate-bounce-sm"
        />
      </BlockDiv>
    </BlockSection>
  );
};

const Section1 = () => {
  return (
    <ZenartSectionWrapper>
      <RenderAtom
        value={
          "https://cdn.moto.mn/moto/landing/13_zenart/home/23f83c14-1e15-422d-a5ea-971c8b8bd28a.png"
        }
        type="image"
        alt="Zen Art Logo"
        className="w-14 h-auto"
      />
      <TextHtml
        value="Интерьер дизайны мөн чанар нь хүмүүний амьдрах хэв маягийн тухай юм.<br />Дан ганц загварлаг байдлын талаар бус харин сэтгэл татам эргономик, утга учиртай бодит орчинг бий болгох тухай.<br />Энэ нь хүн бүрийн анхны төсөөлөл шиг тийм ч хялбар ажил биш юмаа."
        className="text-slate-400"
      />

      <TextH3
        value="Таны уран бүтээлч амьдралын хэв маяг..."
        className="bg-gradient-to-r from-[#f6c99e] to-[#ce9871] bg-clip-text text-transparent"
      />

      <RenderAtom
        value={
          "https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
        }
        type="image"
        alt="Zen Art Logo"
        className="w-28 h-auto"
      />
    </ZenartSectionWrapper>
  );
};

const Section2 = () => {
  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-[#f6c99e]" }}>
      {/* <img
          src="https://cdn.moto.mn/moto/landing/13_zenart/temp/67da18bb-528b-4e03-a4a9-4ce067e86ab9.jpg?t=1750756608485"
          alt="Zen Art Interior"
          className="w-[80%] h-auto rounded-tr-[60px] rounded-br-[60px] shadow-2xl transition-transform duration-500 hover:scale-105"
        /> */}

      <TextH3
        value="БИДНИЙ ТУХАЙ"
        className="bg-gradient-to-r from-[#d38c49] to-[#977861] bg-clip-text text-transparent uppercase"
      />
      <TextHtml
        value="Зэн Арт ХХК нь 2017 онд гэр ахуйн тавилгын худалдааны чиглэлээр үйл ажиллагаа эрхлэн байгуулагдсан. 2018 оноос эхлэн Интерьер, Экстерьер зураг төслийг иж бүрэн боловсруулан түүнийгээ дагуу гүйцэтгэл хийж ажиллаж байна. Үл хөдлөх хөрөнгийн үнэ цэнийг тодорхойлоход чухал нөлөөтэй байдаг интерьер дизайны үйлчилгээ үзүүлэхдээ дэлхийн жишигт нийцсэн шинэлэг дизайныг бүтээж байна.<br /><br />Өнөөдөр манай компанийн зураг төсөл, гүйцэтгэлийн чадвартай мэргэжилтнүүдтэй хамтран орон сууц, оффис, үйлчилгээний байгууллагуудад 100 гаруй зураг төслийг чанарын өндөр түвшинд хийж гүйцэтгэсэн туршлагатай.<br /><br />Орчин үеийн амьдралын хэв маяг, дизайны чиг хандлага, интерьер зураг төсөл, декораци, гэрийн тохижилт, зөвлөгөө зэрэг дизайны иж бүрэн үйлчилгээг хэрэгцээнд санал болгож Интерьер болон Art студи юм."
        className="text-slate-700 text-justify"
      />
      <RenderAtom
        value={
          "https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
        }
        type="image"
        alt="Zen Art Logo"
        className="w-28 h-auto"
      />
    </ZenartSectionWrapper>
  );
};

const Section3 = () => {
  return (
    <BlockSection className="relative w-full h-screen">
      <RenderAtom
        value={
          "https://cdn.moto.mn/moto/landing/13_zenart/temp/f89304eb-f8ed-4c8c-9127-78fc2754307e.jpg?t=1750756711601"
        }
        type="image"
        className="w-full h-full object-cover object-center"
      />
      <TextH3
        value="Artistic Living..."
        className="bg-gradient-to-r from-[#f6c99e] to-[#ce9871] bg-clip-text text-transparent absolute top-[40%] -translate-y-[50%] left-24 text-7xl uppercase"
      />
      <BlockDiv className="w-[93%] h-[94%] m-auto border-2 border-[#f6c99e] absolute inset-0" />
    </BlockSection>
  );
};

const Section4 = () => {
  return (
    <ZenartSectionWrapper>
      <TextH3 value="БИДНИЙ ТУХАЙ" className="text-slate-800 uppercase" />
      <TextH3
        value="Бид дараах чиглэлээр үйл ажиллагаагаа явуулдаг"
        className="bg-gradient-to-r from-[#f6c99e] to-[#ce9871] bg-clip-text text-transparent"
      />
      <ul className="list-disc pl-6 space-y-3 text-base leading-7 text-slate-400">
        <li>Интерьерийн зөвлөх үйлчилгээ, зураг төсөл, гүйцэтгэл</li>
        <li>Тавилга үйлдвэрлэл, захиалгат худалдаа</li>
        <li>Хөшигний зөвлөх үйлчилгээ, худалдаа</li>
        <li>Гэрэлтүүлэг зөвлөх үйлчилгээ, худалдаа</li>
        <li>Ариун цэврийн өрөөний тоноглол худалдаа</li>
        <li>Европ камин зуух худалдаа</li>
        <li>Урлагийн зөвлөх үйлчилгээ</li>
      </ul>

      <RenderAtom
        value={
          "https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
        }
        type="image"
        alt="Zen Art Logo"
        className="w-28 h-auto"
      />
    </ZenartSectionWrapper>
  );
};
