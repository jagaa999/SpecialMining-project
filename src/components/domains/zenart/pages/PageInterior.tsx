"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import TextH3 from "atomv2/components/Text/TextH3";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function PageFireplaceTextile() {
  return (
    <>
      <SectionTextile />
      <SectionFireplace />
    </>
  );
}

const SectionTextile = () => {
  return (
    <BlockDiv
      type="section"
      className="w-full flex flex-col lg:flex-row bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] text-white py-28 px-6 lg:px-32 gap-12">
      <BlockDiv className="w-full lg:w-1/2 rounded-[1.5rem] overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(246,201,158,0.4)] transition-shadow duration-500 border border-[#3d3d3d]">
        <img
          src="https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg"
          alt="Curtains Interior"
          className="w-full h-full object-cover object-center"
        />
      </BlockDiv>

      <BlockDiv className="w-full lg:w-1/2 px-4 lg:px-10 space-y-6">
        <TextH3
          value="05"
          className="text-[#f6c99e] text-5xl font-black tracking-wider"
        />
        <TextH3
          value="Хөшиг"
          className="text-white text-3xl font-extrabold tracking-tight"
        />
        <TextHtml
          value="Хөшиг бол интерьерийн голлох элементүүдийн нэг. Тиймээс хөшгийн материал, өнгө, дизайнд онцгой анхаарал хандуулах хэрэгтэй. Тавилга, гоёл чимэглэлийн элементүүдийн адилаар интерьерт чухал байр суурь эзлэх хөшгийг хэрхэн зохицуулж сонгохос танай гэрийн уур амьсгал бүрэн хамаардаг."
          className="text-[#f1f1f1] text-[15px] leading-7"
        />
        <TextHtml
          value="Өдөрт дунджаар 180км орчим текстил бүтээдэгчийг экспортлодог тус бренд нь дэлхийн хамгийн олон стандартуудыг бүрэн хангасан бүтээгдэхүүнүүдээ шинээрээ 100% бүрэн автомат үйлдвэрлэлийн технологитой компани юм."
          className="text-[#f1f1f1] text-[15px] leading-7"
        />
        <TextHtml
          value="Дэлхийн текстил үйлдвэрлэгчдийн хамгийн том, хамгийн өндөр зэрэглэлийн Бельги улсын Bru брэндийг 2019 оноос албан ёсны эрхтэйгээр тавилгын бүрээс болон хөшигний материалуудыг Монголын зах зээлд нийлүүлж, урлах эхэлсэн. Дизайнерын зөвлөх үйлчилгээг үзүүлдэг хэрэглэгчийн сэтгэлд тохирсон бүтээгдэхүүнүүдийг урладаг. Өнөөг хүртэл бид 7000 гаруй загварын материалаас нийт 60,000 метр орчим даавуун материалыг импортлож хэрэглэгчдэдээ санал болгосоор байна."
          className="text-[#f1f1f1] text-[15px] leading-7"
        />
        <BlockDiv className="flex items-center justify-between pt-4">
          <img
            src="https://cdn.moto.mn/moto/landing/13_zenart/temp/370dcaca-5c18-4f17-8f59-ba3f9b172987.webp?t=1750833346456"
            alt="Bru Logo"
            className="h-10"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg"
            alt="Belgium Flag"
            className="h-6"
          />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};

const SectionFireplace = () => {
  return (
    <BlockDiv
      type="section"
      className="w-full flex flex-col lg:flex-row-reverse bg-gradient-to-br from-[#fdf5ef] to-[#f5eadd] text-[#1a1a1a] py-28 px-6 lg:px-32 gap-12">
      <BlockDiv className="w-full lg:w-1/2 rounded-[1.5rem] overflow-hidden shadow-2xl hover:shadow-[0_0_60px_rgba(230,183,141,0.4)] transition-shadow duration-500 border border-[#e0d8ce]">
        <img
          src="https://images.pexels.com/photos/6301175/pexels-photo-6301175.jpeg"
          alt="Fireplace"
          className="w-full h-full object-cover object-center"
        />
      </BlockDiv>

      <BlockDiv className="w-full lg:w-1/2 px-4 lg:px-10 space-y-6">
        <TextH3 value="06" className="text-[#e6b78d] text-5xl font-black" />
        <TextH3
          value="Камин зуух"
          className="text-[#1a1a1a] text-3xl font-extrabold"
        />
        <TextHtml
          value="Дэлхийн хамгийн арвин туршлагатай камин зуух үйлдвэрлэгч 170 жилийн түүхтэй Норвеги улсын <b class='text-[#e6b78d]'>JØTUL</b> брэнд сайн чанарын ширэм, Scandinavian дизайнерын төгс дизайн, ухаалаг болон орчин үеийн хэв маягийг тусгаж камин зуухыг урладаг."
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
        <TextHtml
          value="1922 оноос хойш үйл ажиллагаа явуулж байгаа Хорват улсын хамгийн шилдэг ширмэн зуух үйлдвэрлэгч Plamen брэнд нь өндөр гүйцэтгэлийн жослон, орчин үеийн загвар, сайн чанарын ширмээр энгийн ч гярхай интерьер төсөл нийцэх камин зуухыг бүтээдэг."
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
        <TextHtml
          value="Хүний амьдралд эрч хүч нэмдэг, халуун дулаан уур амьсгалыг төрүүлдэг зүйл бол гол байдаг. Дэлхийн хамгийн хүйтэн бүс нутгийн хэрэглэгчдэд зориулан бүтээсэн ширмэн зуух нь өнгөрсөн хугацаанд чанар, дизайнаараа гайхагдсаар ирсээр байна."
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
        <TextHtml
          value="<b class='text-[#e6b78d]'>Орчин цагт камин зуух нь хэрэглэл гэхээсээ илүүтэй интерьер дизайны шийдлийн нэг болон хувьсаж байна.</b>"
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
        <BlockDiv className="flex items-center justify-between pt-4">
          <img
            src="https://cdn.moto.mn/moto/landing/13_zenart/temp/e48c14d9-88a3-452d-a6c4-9cd3fe650240.png?t=1750833212311"
            alt="Jotul Logo"
            className="h-10"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg"
            alt="Norway Flag"
            className="h-6"
          />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};
