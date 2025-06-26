"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import TextH3 from "atomv2/components/Text/TextH3";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function PageDecor() {
  return (
    <>
      <ZenArtLogoTop />
      <SectionArtDecor />
      <SectionArtImageOnly />
      <SectionLightingDecor />
      <ZenArtLogoBottom />
    </>
  );
}

const ZenArtLogoTop = () => (
  <BlockDiv className="w-full flex justify-center items-center py-4 bg-[#f7f2eb]">
    <img
      src="https://cdn.moto.mn/moto/landing/13_zenart/home/23f83c14-1e15-422d-a5ea-971c8b8bd28a.png"
      alt="ZenArt Logo"
      className="h-8"
    />
  </BlockDiv>
);

const ZenArtLogoBottom = () => (
  <BlockDiv className="w-full flex justify-center items-center py-8 bg-[#1a1a1a]">
    <img
      src="https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
      alt="ZenArt Logo"
      className="h-8"
    />
  </BlockDiv>
);

const SectionArtDecor = () => {
  return (
    <BlockDiv
      type="section"
      className="w-full flex flex-col lg:flex-row bg-[#f7f2eb] text-[#222] py-20 px-8 lg:px-24">
      <BlockDiv className="w-full lg:w-1/2 space-y-6 lg:pr-10">
        <TextH3 value="03" className="text-[#ce9871] text-4xl font-semibold" />
        <TextH3
          value="Чимэглэх урлаг"
          className="text-[#1a1a1a] text-2xl font-bold"
        />
        <TextHtml
          value="<span class='text-[#f6c99e]'>◉</span> <b>Нацагдорж Отгонбат – Артист</b><br/>Шинэ медиум технологи болох шингэн шил /Resin-Art/ хэмээх хүндхэн материалаар бүтээлээ туурвих түүний урлан амьд арт лаборатори мэт. Олон удаа алдах оножон туршилт явуулсан үр дүнд нь өвөрмөц гэсэн нэр төрх, хосгүй мэдрэмж бүхий тансаг бүтээл төрүүлдэг. Өнгө хором үерхэх хөдөлгөөнүүд бүдүүн ширхэгт чулуу дээр тод дүрслэл, содон огтлол, хуваалт ашигладаг нь яг л амьд дотоод мөн чанарыг илэрхийлдэг нь гайхалтай."
          className="text-[#2a2a2a] text-sm leading-6"
        />
        <TextHtml
          value="<span class='text-[#f6c99e]'>◉</span> <b>Баатарцогт Мөнхзэцэг – Монументаль артист</b><br/>‘Ханын чимэглэх’ урлагт том уран зураг, уран баримал гээд бүхнийг перлийг хамруулан ойлгож болно. Хэдэн ч метр өндөр, ямар ч орон зайд хүссэн өнгө, дизайны зохицлыг бүтээл болгон гаргадаг. ‘Гагцхүү дотоод сэтгэлийн үнэнийг илэрхийлсэн газар л урлаг төрдөг’ — түүний дотоод ертөнцөөс олон бүтээл гадагшилдаг."
          className="text-[#2a2a2a] text-sm leading-6"
        />
        <TextHtml
          value="<span class='text-[#f6c99e]'>◉</span> <b>Гүцгээ Соёл-Эрдэнэ – Сэргэн засварлагч</b><br/>Соёлын үнэт өвийг хамгаалах, сэргээх, уламжлалыг орчин үеийн мэдрэмжтэйгээр үргэлжлүүлэх онцгой авьяас, ой санамж, тэвчээр, чадвар шаардсан мэргэжил. Түүний ур чадвараар 30 гаруй жил мэргэжлээрээ ажиллаж байна."
          className="text-[#2a2a2a] text-sm leading-6"
        />
      </BlockDiv>

      <BlockDiv className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
        <img
          src="https://images.pexels.com/photos/1125130/pexels-photo-1125130.jpeg"
          alt="Art Decor"
          className="w-[90%] h-auto rounded-[2rem_0_2rem_0] shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </BlockDiv>
    </BlockDiv>
  );
};

const SectionArtImageOnly = () => {
  return (
    <BlockDiv type="section" className="w-full bg-[#f7f2eb]">
      <img
        src="https://images.pexels.com/photos/6835089/pexels-photo-6835089.jpeg"
        alt="Art Decor Divider"
        className="w-full h-auto object-cover hover:brightness-105"
      />
    </BlockDiv>
  );
};

const SectionLightingDecor = () => {
  return (
    <BlockDiv
      type="section"
      className="w-full flex flex-col lg:flex-row bg-[#1a1a1a] text-[#f1f1f1] py-20 px-8 lg:px-24">
      <BlockDiv className="w-full lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0">
        <img
          src="https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg"
          alt="Lighting Decor"
          className="w-[90%] h-auto rounded-[2rem_0_2rem_0] shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </BlockDiv>

      <BlockDiv className="w-full lg:w-1/2 space-y-6 lg:pl-10">
        <TextH3 value="04" className="text-[#f6c99e] text-4xl font-semibold" />
        <TextH3 value="Гэрэлтүүлэг" className="text-white text-2xl font-bold" />
        <TextHtml
          value="<b>Гэрэлтүүлгийг байгалийн ба зохиомол гэж хуваадаг.</b><br/>Хүний анхаарлыг өрөөн доторх хамгийн тод цэг рүү татагладаг тул зохиомол гэрэлтүүлэг чимэглэлийн хэрэгсэл болон ашиглагддаг. Янз бүрийн гэрлийн чимэглэлийн хэрэгсэл болгон ашиглагддаг бөгөөд архитектурын зарим элементийг тодотгож өгдөг. Өнгө гэрлийн хослол нь өнгөний зохицол, гэрэлтүүлэг, байгалийн гэрэл, гэрэл зураг зэргийг хослуулан интерьер дизайн дахь чухал нөлөөг үзүүлдэг."
          className="text-[#f1f1f1] text-sm leading-6"
        />
        <TextHtml
          value="<b class='text-[#f6c99e]'>Гэрэлтүүлгийн төсөл шийдэл нь архитектурын концепцтэй уялдаж, үйл ажиллагааны эргэнд зориулагдсан функцийг хангах ёстой.</b><br/><span class='text-[#f6c99e]'>◉</span> Үндсэн концепцийн орон зайг гэрэлтүүлэх<br/><span class='text-[#f6c99e]'>◉</span> Үйл ажиллагаанд зориулагдсан гэрэлтүүлэг<br/><span class='text-[#f6c99e]'>◉</span> Онцгойлон чимэглэх гоёл чимэглэлийн гэрэлтүүлэг"
          className="text-[#f1f1f1] text-sm leading-6"
        />
        <TextHtml
          value="Traditional, Modern, Midcentury, Classic, Art Deco, Rustic Style, Shabby-chic гээд Интерьер дизайны хэв маягас үл хамааран ямар ч орон зайд зохиомол гэрэлтүүлэг нь интерьерийн хөдөлгөөнийг, уран сайхны дүрслэлийг илэрхийлж чаддаг. Харин гэрэлтүүлэг буруу сонгогдвол хүний оюун санаа болон үйл хөдлөлийг сөрөгөөр өдөөнө. Нэг цэгт анхаарлаа хандуулах чадваргүй болгож түржийн эмх замбараагүй байдлыг үүсгэх учраас гэрлийг нарийн тооцоолон төлөвлөх нь зүйтэй."
          className="text-[#d1d1d1] text-sm leading-6"
        />
      </BlockDiv>
    </BlockDiv>
  );
};
