"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import TextBody from "atomv2/components/Text/TextBody";
import TextH1 from "atomv2/components/Text/TextH1";
import TextH5 from "atomv2/components/Text/TextH5";
import TextHtml from "atomv2/components/Text/TextHtml";
import ZenartSectionImageOnly from "../Widget/ZenartSectionImageOnly";
import ZenartSectionWrapper from "../Widget/ZenartSectionWrapper";

export default function PageDecor() {
  return (
    <>
      {/* <ZenArtLogoTop /> */}
      <SectionArtDecor />
      <ZenartSectionImageOnly />
      <SectionLightingDecor />
      {/* <ZenArtLogoBottom /> */}
    </>
  );
}

// const ZenArtLogoTop = () => (
//   <BlockDiv className="w-full flex justify-center items-center py-4 bg-[#f7f2eb]">
//     <img
//       src="https://cdn.moto.mn/moto/landing/13_zenart/home/23f83c14-1e15-422d-a5ea-971c8b8bd28a.png"
//       alt="ZenArt Logo"
//       className="h-8"
//     />
//   </BlockDiv>
// );

// const ZenArtLogoBottom = () => (
//   <BlockDiv className="w-full flex justify-center items-center py-8 bg-[#1a1a1a]">
//     <img
//       src="https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
//       alt="ZenArt Logo"
//       className="h-8"
//     />
//   </BlockDiv>
// );

const SectionArtDecor = () => {
  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-gray-100" }}>
      <TextH1
        value="03"
        className="text-8xl font-bold bg-gradient-to-b from-[#d69559] to-gray-100 bg-clip-text text-transparent tracking-tighter"
      />
      <TextH1 value="Чимэглэх урлаг" className="text-gray-700" />
      {[
        {
          title: "Нацагдорж Отгонбат – Артист",
          desc: "Шинэ медиум технологи болох шингэн шил /Resin-Art/ хэмээх хүндхэн материалаар бүтээлээ туурвих түүний урлан амьд арт лаборатори мэт. Олон удаа алдах оножон туршилт явуулсан үр дүнд нь өвөрмөц гэсэн нэр төрх, хосгүй мэдрэмж бүхий тансаг бүтээл төрүүлдэг. Өнгө хором үерхэх хөдөлгөөнүүд бүдүүн ширхэгт чулуу дээр тод дүрслэл, содон огтлол, хуваалт ашигладаг нь яг л амьд дотоод мөн чанарыг илэрхийлдэг нь гайхалтай.",
        },
        {
          title: "Баатарцогт Мөнхзэцэг – Монументаль артист",
          desc: "‘Ханын чимэглэх’ урлагт том уран зураг, уран баримал гээд бүхнийг перлийг хамруулан ойлгож болно. Хэдэн ч метр өндөр, ямар ч орон зайд хүссэн өнгө, дизайны зохицлыг бүтээл болгон гаргадаг. ‘Гагцхүү дотоод сэтгэлийн үнэнийг илэрхийлсэн газар л урлаг төрдөг’ — түүний дотоод ертөнцөөс олон бүтээл гадагшилдаг.",
        },
        {
          title: "Гүүгэл Соёл-Эрдэнэ – Сэргээн засварлагч",
          desc: "Соёлын үнэт өвийг хамгаалах, сэргээх, уламжлалыг орчин үеийн мэдрэмжтэйгээр үргэлжлүүлэх онцгой авьяас, ой санамж, тэвчээр, чадвар шаардсан мэргэжил. Түүний ур чадвараар 30 гаруй жил мэргэжлээрээ ажиллаж байна.",
        },
      ].map((item, index) => (
        <BlockFlexRow className="items-start">
          <RenderAtom
            value={"mdi-light:arrow-right"}
            type="icon"
            className="text-[#f6c99e] text-3xl block flex-none"
          />

          <BlockFlexCol className="gap-1" key={index}>
            <TextH5 value={item?.title} className="text-gray-800" />
            <TextBody
              value={item?.desc}
              className="text-gray-700 text-justify"
            />
          </BlockFlexCol>
        </BlockFlexRow>
      ))}
      {/* <BlockDiv className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
      <img
        src="https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg"
        alt="Art Decor"
        className="w-[90%] h-auto rounded-[2rem_0_2rem_0] shadow-2xl hover:scale-105 transition-transform duration-500"
      />
      </BlockDiv> */}
    </ZenartSectionWrapper>
  );
};

const SectionLightingDecor = () => {
  return (
    <ZenartSectionWrapper>
      {/* <BlockDiv className="w-full lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0">
        <img
          src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg"
          alt="Lighting Decor"
          className="w-[90%] h-auto rounded-[2rem_0_2rem_0] shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </BlockDiv> */}

      <TextH1
        value="04"
        className="text-8xl font-bold bg-gradient-to-b from-[#f6c99e] to-slate-900 bg-clip-text text-transparent tracking-tighter"
      />
      <TextH1 value="Гэрэлтүүлэг" className="text-slate-300" />
      <TextHtml
        value="<b>Гэрэлтүүлгийг байгалийн ба зохиомол гэж хуваадаг.</b><br/><br/>Хүний анхаарлыг өрөөн доторх хамгийн тод цэг рүү татагладаг тул зохиомол гэрэлтүүлэг чимэглэлийн хэрэгсэл болон ашиглагддаг. Янз бүрийн гэрлийн чимэглэлийн хэрэгсэл болгон ашиглагддаг бөгөөд архитектурын зарим элементийг тодотгож өгдөг. Өнгө гэрлийн хослол нь өнгөний зохицол, гэрэлтүүлэг, байгалийн гэрэл, гэрэл зураг зэргийг хослуулан интерьер дизайн дахь чухал нөлөөг үзүүлдэг."
        className="text-gray-300 text-justify"
      />
      <TextHtml
        value="<b class='text-[#f6c99e]'>Гэрэлтүүлгийн төсөл шийдэл нь архитектурын концепцтэй уялдаж, үйл ажиллагааны эргэнд зориулагдсан функцийг хангах ёстой.</b><br/><span class='text-[#f6c99e]'>◉</span> Үндсэн концепцийн орон зайг гэрэлтүүлэх<br/><span class='text-[#f6c99e]'>◉</span> Үйл ажиллагаанд зориулагдсан гэрэлтүүлэг<br/><span class='text-[#f6c99e]'>◉</span> Онцгойлон чимэглэх гоёл чимэглэлийн гэрэлтүүлэг"
        className="text-gray-300"
      />
      <TextHtml
        value="Traditional, Modern, Midcentury, Classic, Art Deco, Rustic Style, Shabby-chic гээд Интерьер дизайны хэв маягас үл хамааран ямар ч орон зайд зохиомол гэрэлтүүлэг нь интерьерийн хөдөлгөөнийг, уран сайхны дүрслэлийг илэрхийлж чаддаг. Харин гэрэлтүүлэг буруу сонгогдвол хүний оюун санаа болон үйл хөдлөлийг сөрөгөөр өдөөнө. Нэг цэгт анхаарлаа хандуулах чадваргүй болгож түржийн эмх замбараагүй байдлыг үүсгэх учраас гэрлийг нарийн тооцоолон төлөвлөх нь зүйтэй."
        className="text-gray-300 text-justify"
      />
    </ZenartSectionWrapper>
  );
};
