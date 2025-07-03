"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import TextH3 from "atomv2/components/Text/TextH3";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function PageSanitaryFurniture() {
  return (
    <>
      <SectionSanitary />
      <SectionFurniture />
    </>
  );
}

const SectionSanitary = () => {
  return (
    <BlockDiv
      type="section"
      className="w-full flex flex-col lg:flex-row bg-[#fefaf6] text-[#1a1a1a] pt-0 pb-28 px-0 lg:px-0 gap-0">
      <BlockDiv className="w-full lg:w-1/2 bg-white px-6 lg:px-16 py-12 space-y-6 flex flex-col justify-center">
        <TextH3 value="07" className="text-[#f4be8a] text-5xl font-black" />
        <TextH3
          value="Сангийн тоноглол буюу Sanitary ware"
          className="text-[#1a1a1a] text-3xl font-extrabold"
        />
        <TextHtml
          value="<b class='block mb-2'><span class='bg-[#f4be8a] text-white font-bold px-2 py-1 mr-2 inline-block'>H</span>Honestly – Hi-tech – Hygiene</b><br />Эрүүл ахуйн шийдэл гаргахад зориулагдсан"
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
        <TextHtml
          value="<b class='block mb-2'><span class='bg-[#f4be8a] text-white font-bold px-2 py-1 mr-2 inline-block'>C</span>Creativity – Compact – Comfort</b><br />Амьдралыг илүү хөнгөвчлөх утга учиртай болгох бүтээгдхүүнээр хангадаг"
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
        <TextHtml
          value="<b class='block mb-2'><span class='bg-[#f4be8a] text-white font-bold px-2 py-1 mr-2 inline-block'>G</span>Gratification – Globalization – Green</b><br />Байгаль орчны ногоон байгуулалтыг дэмжих бүтээгдхүүн үйлдвэрлэгчид"
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
        <TextHtml
          value="Ариун цэврийн ерөнхий шийдэл бүтээгдхүүнийг үйлдвэрлэгч Тайван улсын 100 жилийн түүхт Hocheng групп буюу HCG брэнд нь ухаалаг дизайны тусламжтай тав тухтай байдлыг мэдрүүлдэг, орчин үеийн технологийн шийдэл болон ухаалаг төхөөрөмжийн төгс зохицол нь загвараар төдийгүй хяналттай байдал үүсгэдэг. Өдөр тутмын амьдралын хэрэглээ мэт боловч төгсгөлгүй загвар, хөнгөлөлт, бат бөх байдал нь хэрэглэгчдэд үнэ цэнийг өгч, та тухайн бүтээгдэхүүнийг үргэлжлүүлэн онцлог гэж хүлээн авна."
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
      </BlockDiv>

      <BlockDiv className="w-full lg:w-1/2">
        <img
          src="https://images.pexels.com/photos/3741317/pexels-photo-3741317.jpeg"
          alt="Sanitary Ware"
          className="w-full h-full object-cover object-center"
        />
      </BlockDiv>
    </BlockDiv>
  );
};

const SectionFurniture = () => {
  return (
    <BlockDiv type="section" className="w-full bg-[#fefaf6] text-[#1a1a1a] py-20 px-6">
      <BlockDiv className="max-w-screen-xl mx-auto space-y-8">
        <TextH3 value="08" className="text-[#f4be8a] text-5xl font-black" />
        <TextH3 value="Тавилга" className="text-3xl font-extrabold" />
        <TextHtml
          value="Орчин цагт албан байгууллагууд брэндийн өнгө төрх, байр суурь, цаашлаад өрсөлдөхүйц чанараа интерьер дизайнаар илэрхийлдэг болсон..."
          className="text-[#2a2a2a] text-[15px] leading-7"
        />
      </BlockDiv>
    </BlockDiv>
  );
};
