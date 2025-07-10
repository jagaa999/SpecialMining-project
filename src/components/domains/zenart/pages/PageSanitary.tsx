"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import TextH1 from "atomv2/components/Text/TextH1";
import TextH3 from "atomv2/components/Text/TextH3";
import TextHtml from "atomv2/components/Text/TextHtml";
import { map } from "lodash";
import ZenartSectionWrapper from "../Widget/ZenartSectionWrapper";
import BlockScrollSnapScreenBlock from "atomv2/components/Blocks/BlockScrollSnapScreenBlock";

export default function PageSanitaryFurniture() {
  return (
    <>
      <BlockScrollSnapScreenBlock>
        <SectionSanitary />
        <SectionFurniture />
      </BlockScrollSnapScreenBlock>
    </>
  );
}

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
