"use client";

import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import BlockScrollSnapScreenBlock from "atomv2/components/Blocks/BlockScrollSnapScreenBlock";
import TextH1 from "atomv2/components/Text/TextH1";
import TextHtml from "atomv2/components/Text/TextHtml";
import ZenartSectionImageOnly from "../Widget/ZenartSectionImageOnly";
import ZenartSectionWrapper from "../Widget/ZenartSectionWrapper";

export default function PageFireplaceTextile() {
  return (
    <>
      <BlockScrollSnapScreenBlock>
        <SectionTextile />
        <ZenartSectionImageOnly />
        <SectionFireplace />
        <ZenartSectionImageOnly />
      </BlockScrollSnapScreenBlock>
    </>
  );
}

const SectionTextile = () => {
  return (
    <ZenartSectionWrapper>
      {/* <BlockDiv className="w-full lg:w-1/2 rounded-[1.5rem] overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(246,201,158,0.4)] transition-shadow duration-500 border border-[#3d3d3d]">
        <img
          src="https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg"
          alt="Curtains Interior"
          className="w-full h-full object-cover object-center"
        />
      </BlockDiv> */}

      <TextH1
        value="05"
        className="text-8xl font-bold bg-gradient-to-b from-[#f6c99e] to-slate-900 bg-clip-text text-transparent tracking-tighter"
      />
      <TextH1 value="Хөшиг" className="text-slate-300" />

      <TextHtml
        value="Хөшиг бол интерьерийн голлох элементүүдийн нэг. Тиймээс хөшгийн материал, өнгө, дизайнд онцгой анхаарал хандуулах хэрэгтэй. Тавилга, гоёл чимэглэлийн элементүүдийн адилаар интерьерт чухал байр суурь эзлэх хөшгийг хэрхэн зохицуулж сонгохос танай гэрийн уур амьсгал бүрэн хамаардаг.<br /><br />Өдөрт дунджаар 180км орчим текстил бүтээдэгчийг экспортлодог тус бренд нь дэлхийн хамгийн олон стандартуудыг бүрэн хангасан бүтээгдэхүүнүүдээ шинээрээ 100% бүрэн автомат үйлдвэрлэлийн технологитой компани юм.<br /><br />Дэлхийн текстил үйлдвэрлэгчдийн хамгийн том, хамгийн өндөр зэрэглэлийн Бельги улсын Bru брэндийг 2019 оноос албан ёсны эрхтэйгээр тавилгын бүрээс болон хөшигний материалуудыг Монголын зах зээлд нийлүүлж, урлах эхэлсэн. Дизайнерын зөвлөх үйлчилгээг үзүүлдэг хэрэглэгчийн сэтгэлд тохирсон бүтээгдэхүүнүүдийг урладаг. Өнөөг хүртэл бид 7000 гаруй загварын материалаас нийт 60,000 метр орчим даавуун материалыг импортлож хэрэглэгчдэдээ санал болгосоор байна."
        className="text-gray-300 text-justify"
      />

      <BlockFlexRow className="justify-between">
        <img
          src="https://cdn.moto.mn/moto/landing/13_zenart/temp/370dcaca-5c18-4f17-8f59-ba3f9b172987.webp?t=1750833346456"
          alt="Bru Logo"
          className="h-16 w-auto"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg"
          alt="Belgium Flag"
          className="h-12 w-auto"
        />
      </BlockFlexRow>
    </ZenartSectionWrapper>
  );
};

const SectionFireplace = () => {
  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-[#faebdd]" }}>
      <TextH1
        value="06"
        className="text-8xl font-bold bg-gradient-to-b from-[#d69559] to-[#faebdd] bg-clip-text text-transparent tracking-tighter"
      />

      <TextH1 value="Камин зуух" className="text-gray-700" />

      <TextHtml
        value="Дэлхийн хамгийн арвин туршлагатай камин зуух үйлдвэрлэгч 170 жилийн түүхтэй Норвеги улсын <b class='text-[#e6b78d]'>JØTUL</b> брэнд сайн чанарын ширэм, Scandinavian дизайнерын төгс дизайн, ухаалаг болон орчин үеийн хэв маягийг тусгаж камин зуухыг урладаг.<br /><br />1922 оноос хойш үйл ажиллагаа явуулж байгаа Хорват улсын хамгийн шилдэг ширмэн зуух үйлдвэрлэгч Plamen брэнд нь өндөр гүйцэтгэлийн жослон, орчин үеийн загвар, сайн чанарын ширмээр энгийн ч гярхай интерьер төсөл нийцэх камин зуухыг бүтээдэг."
        className="text-gray-700 text-justify"
      />

      <TextHtml
        value="Орчин цагт камин зуух нь хэрэглэл гэхээсээ илүүтэй интерьер дизайны шийдлийн нэг болон хувьсаж байна."
        className="text-gray-800 font-bold py-8 border-t border-[#d69559] border-b max-w-xl"
      />
      <BlockFlexRow className="justify-between">
        <img
          src="https://cdn.moto.mn/moto/landing/13_zenart/temp/e48c14d9-88a3-452d-a6c4-9cd3fe650240.png?t=1750833212311"
          alt="Bru Logo"
          className="h-16 w-auto"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg"
          alt="Belgium Flag"
          className="h-12 w-auto"
        />
      </BlockFlexRow>
    </ZenartSectionWrapper>
  );
};
