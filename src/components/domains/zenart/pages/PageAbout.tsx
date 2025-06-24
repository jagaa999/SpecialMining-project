"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextH3 from "atomv2/components/Text/TextH3";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function ZenartPageAbout() {
  return (
    <>
      <Section0 />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}

const Section0 = () => {
  return (
    <BlockDiv
      type="section"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center bg-gradient-to-r from-[#f6c99e] to-[#ce9871]"
    >
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

const Section1 = () => {
  return (
    <BlockDiv type="section" className="w-full h-screen flex flex-col lg:flex-row bg-[#171c21]">
      <BlockDiv className="w-full lg:w-1/2 flex flex-col justify-center px-10 lg:px-24 py-12">
        <img
          src="https://cdn.moto.mn/moto/landing/13_zenart/home/23f83c14-1e15-422d-a5ea-971c8b8bd28a.png"
          alt="Zen Art Logo"
          className="w-10 mb-8"
        />
        <TextHtml
          value="Интерьер дизайны мөн чанар нь хүмүүний амьдрах хэв маягийн тухай юм.<br />Дан ганц загварлаг байдлын талаар бус харин сэтгэл татам эргономик, утга учиртай бодит орчинг бий болгох тухай.<br />Энэ нь хүн бүрийн анхны төсөөлөл шиг тийм ч хялбар ажил биш юмаа."
          className="text-slate-300 text-sm leading-7 tracking-wide mb-8"
        />
        <TextH3
          value="Таны уран бүтээлч амьдралын хэв маяг..."
          className="bg-gradient-to-r from-[#f6c99e] to-[#ce9871] bg-clip-text text-transparent text-xl font-semibold"
        />
      </BlockDiv>
      <BlockDiv className="w-full lg:w-1/2 relative flex items-center justify-center">
        <img
          src="https://cdn.moto.mn/moto/landing/13_zenart/temp/8ae42cbe-c321-4781-b96c-4b41171c3e8c.jpg?t=1750756511474"
          alt="Interior Photo"
          className="w-[75%] h-auto rounded-tl-[80px] rounded-bl-[80px] shadow-xl"
        />
        <BlockDiv className="absolute bottom-10 left-10">
          <img
            src="https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
            alt="Zen Art Logo"
            className="w-24"
          />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};

const Section2 = () => {
  return (
    <BlockDiv type="section" className="w-full h-screen flex flex-col lg:flex-row bg-[#f6c99e]">
      <BlockDiv className="w-full lg:w-1/2 h-full flex items-center justify-center">
        <img
          src="https://cdn.moto.mn/moto/landing/13_zenart/temp/67da18bb-528b-4e03-a4a9-4ce067e86ab9.jpg?t=1750756608485"
          alt="Zen Art Interior"
          className="w-[80%] h-auto rounded-tr-[60px] rounded-br-[60px] shadow-2xl"
        />
      </BlockDiv>
      <BlockDiv className="w-full lg:w-1/2 px-12 py-16 flex flex-col justify-center">
        <TextH3
          value="БИДНИЙ ТУХАЙ"
          className="text-[#8c6a5d] uppercase text-sm tracking-widest mb-6"
        />
        <TextHtml
          value="Зэн Арт ХХК нь 2017 онд гэр ахуйн тавилгын худалдааны чиглэлээр үйл ажиллагаа эрхлэн байгуулагдсан. 2018 оноос эхлэн Интерьер, Экстерьер зураг төслийг иж бүрэн боловсруулан түүнийгээ дагуу гүйцэтгэл хийж ажиллаж байна. Үл хөдлөх хөрөнгийн үнэ цэнийг тодорхойлоход чухал нөлөөтэй байдаг интерьер дизайны үйлчилгээ үзүүлэхдээ дэлхийн жишигт нийцсэн шинэлэг дизайныг бүтээж байна.<br /><br />Өнөөдөр манай компанийн зураг төсөл, гүйцэтгэлийн чадвартай мэргэжилтнүүдтэй хамтран орон сууц, оффис, үйлчилгээний байгууллагуудад 100 гаруй зураг төслийг чанарын өндөр түвшинд хийж гүйцэтгэсэн туршлагатай.<br /><br />Орчин үеийн амьдралын хэв маяг, дизайны чиг хандлага, интерьер зураг төсөл, декораци, гэрийн тохижилт, зөвлөгөө зэрэг дизайны иж бүрэн үйлчилгээг хэрэгцээнд санал болгож Интерьер болон Art студи юм."
          className="text-[#2a2a2a] text-base leading-7 tracking-wide"
        />
        <BlockDiv className="mt-10">
          <img
            src="https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
            alt="Zen Art Logo"
            className="w-20"
          />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};

const Section3 = () => {
  return (
    <BlockDiv type="section" className="w-full h-screen flex flex-col lg:flex-row bg-[#171c21]">
      <BlockDiv className="w-full lg:w-2/3 h-full">
        <img
          src="https://cdn.moto.mn/moto/landing/13_zenart/temp/f89304eb-f8ed-4c8c-9127-78fc2754307e.jpg?t=1750756711601"
          alt="Living Room"
          className="w-full h-full object-cover"
        />
      </BlockDiv>
      <BlockDiv className="w-full lg:w-1/3 text-white p-10 flex flex-col justify-center">
        <TextH3
          value="БИДНИЙ ТУХАЙ"
          className="text-[#888] uppercase text-sm tracking-widest mb-4"
        />
        <TextH3
          value="Бид дараах чиглэлээр үйл ажиллагаагаа явуулдаг"
          className="text-[#f6c99e] text-lg font-bold mb-6"
        />
        <ul className="list-disc pl-6 space-y-3 text-base leading-7">
          <li>Интерьерийн зөвлөх үйлчилгээ, зураг төсөл, гүйцэтгэл</li>
          <li>Тавилга үйлдвэрлэл, захиалгат худалдаа</li>
          <li>Хөшигний зөвлөх үйлчилгээ, худалдаа</li>
          <li>Гэрэлтүүлэг зөвлөх үйлчилгээ, худалдаа</li>
          <li>Ариун цэврийн өрөөний тоноглол худалдаа</li>
          <li>Европ камин зуух худалдаа</li>
          <li>Урлагийн зөвлөх үйлчилгээ</li>
        </ul>
        <BlockDiv className="mt-10">
          <img
            src="https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
            alt="Zen Art Logo"
            className="w-24"
          />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};
