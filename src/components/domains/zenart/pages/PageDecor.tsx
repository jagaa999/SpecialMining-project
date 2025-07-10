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
import BlockScrollSnapScreenBlock from "atomv2/components/Blocks/BlockScrollSnapScreenBlock";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import TextH3 from "atomv2/components/Text/TextH3";
import { map } from "lodash";

export default function PageDecor() {
  return (
    <BlockScrollSnapScreenBlock>
      <SectionArtDecor />
      <ZenartSectionImageOnly />
      <SectionLightingDecor />
      <ZenartSectionImageOnly />
      <SectionTextile />
      <ZenartSectionImageOnly />
      <SectionFireplace />
      <ZenartSectionImageOnly />
      <SectionSanitary />
      <SectionFurniture />
    </BlockScrollSnapScreenBlock>
  );
}

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
        <BlockFlexRow className="items-start" key={index}>
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

const SectionSanitary = () => {
  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-gray-100" }}>
      <TextH1
        value="07"
        className="text-8xl font-bold bg-gradient-to-b from-[#d69559] to-gray-100 bg-clip-text text-transparent tracking-tighter"
      />
      <TextH1
        value="Сангийн тоноглол буюу Sanitary ware"
        className="text-gray-700"
      />
      <BlockFlexCol className="">
        {map(
          [
            {
              icon: "H",
              title: "Honestly – Hi-tech – Hygiene",
              desc: "Эрүүл ахуйн шийдэл гаргахад зориулагдсан",
            },
            {
              icon: "C",
              title: "Creativity – Compact – Comfort",
              desc: "Амьдралыг илүү хөнгөвчлөх утга учиртай болгох бүтээгдхүүнээр хангадаг",
            },
            {
              icon: "G",
              title: "Gratification – Globalization – Green",
              desc: "Байгаль орчны ногоон байгуулалтыг дэмжих бүтээгдхүүн үйлдвэрлэгчид",
            },
          ],
          (item, index) => (
            <BlockFlexRow key={index} className="items-start">
              <RenderAtom
                value={item?.icon}
                type="text"
                className="bg-gradient-to-r from-[#d69559] to-[#f1b985] text-white font-bold px-4 py-2  text-3xl inline-block"
              />
              <BlockFlexCol className="gap-0">
                <TextH3
                  value={item.title}
                  className="font-bold text-lg text-gray-800"
                />
                <TextHtml value={item.desc} className="text-gray-600" />
              </BlockFlexCol>
            </BlockFlexRow>
          )
        )}
      </BlockFlexCol>

      <RenderAtom
        value=" "
        type="line"
        className="w-full bg-[#d69559]"
        // height="1px"
      />

      <TextHtml
        value="Ариун цэврийн ерөнхий шийдэл бүтээгдхүүнийг үйлдвэрлэгч Тайван улсын 100 жилийн түүхт Hocheng групп буюу HCG брэнд нь ухаалаг дизайны тусламжтай тав тухтай байдлыг мэдрүүлдэг, орчин үеийн технологийн шийдэл болон ухаалаг төхөөрөмжийн төгс зохицол нь загвараар төдийгүй хяналттай байдал үүсгэдэг. Өдөр тутмын амьдралын хэрэглээ мэт боловч төгсгөлгүй загвар, хөнгөлөлт, бат бөх байдал нь хэрэглэгчдэд үнэ цэнийг өгч, та тухайн бүтээгдэхүүнийг үргэлжлүүлэн онцлог гэж хүлээн авна."
        className="text-gray-700 text-justify"
      />
    </ZenartSectionWrapper>
  );
};

const SectionFurniture = () => {
  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-[#f6c99e]" }}>
      <TextH1
        value="08"
        className="text-8xl font-bold bg-gradient-to-b from-[#d69559] to-[#f6c99e] bg-clip-text text-transparent tracking-tighter"
      />

      <TextH1 value="Тавилга" className="text-gray-700" />

      <TextHtml
        value="Орчин цагт албан байгууллагууд брэндийн өнгө төрх, байр суурь, цаашлаад өрсөлдөхүйц чанараа интерьер дизайнаар илэрхийлдэг болсон. Иймд ажилчдад бүтээмж, сэтгэл ханамжийг олгож, байгууллагад урт хугацааны эдийн засгийн хэмнэлтийг бий болгохын зэрэгцээ ухаалаг, оновчтой тавилгын шийдэл бүхий цогц үйлчилгээ үзүүлэх нь гол зорилго. “Artistic Living” уриан дор үргэлж тавилгын чиг хандлагыг тодорхойлогч байж, эрхэм харилцагчдынхаа сэтгэлд нийцсэн чанартай, аюулгүй үйлчилгээг хүргэхээр ажиллаж байна.<br /><br />2017 оноос хойш үйл ажиллагаагаа өргөжүүлэн, тэлсээр өнөөдөр өндөр хүчин чадал бүхий өөрийн үйлдвэрт дотоодын хэрэглэгчдийн онцлогт тохирсон тавилгыг үйлдвэрлэхийн сацуу тавилга байршуулалтын болон орон зайн ашигтай төлөвлөлтийн мэргэжлийн зөвлөгөө өгөх, план зураг гаргах, борлуулалтын дараах тавилгыг баталгаат засвар үйлчилгээ, сэлбэг хэрэгслээр тогтмол хангах үйлчилгээг үзүүлдэг болоод байна. Мөн дэлхийн зах зээл дээрээс шинэ шинэлэг шийдэл бүхий албан тасалгаа болон гэр ахуйн тавилга нийлүүлж, үйлдвэрлэж байна. Таны хэрэгцээнд төгс нийцэх дэлхийн шилдэг брэндүүдийг хамгийн чухал орон зайд…"
        className="text-gray-700 text-justify"
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
