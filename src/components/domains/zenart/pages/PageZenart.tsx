"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import BlockScrollSnapScreenBlock from "atomv2/components/Blocks/BlockScrollSnapScreenBlock";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import OrganismBannerUnsplash from "atomv2/components/Organisms/banner/OrganismBannerUnsplash";
import TextBody from "atomv2/components/Text/TextBody";
import TextH1 from "atomv2/components/Text/TextH1";
import TextH3 from "atomv2/components/Text/TextH3";
import TextHtml from "atomv2/components/Text/TextHtml";
import { map } from "lodash";
import ZenartSectionImageOnly from "../Widget/ZenartSectionImageOnly";
import ZenartSectionWrapper from "../Widget/ZenartSectionWrapper";

export default function ZenartPageZenart() {
  return (
    <>
      <BlockScrollSnapScreenBlock>
        <SectionFullLogo />
        <OrganismBannerUnsplash
          keyWord="interior"
          item={{
            title: "Zenart",
            description: "Living Art",
          }}
        />
        <SectionText02 />
        <SectionБиднийТухай />
        <OrganismBannerUnsplash
          keyWord="furniture"
          item={{
            title: "Luxury",
            description: "Living Art",
          }}
        />
        <SectionБиднийҮйлАжиллагаа />
        <OrganismBannerUnsplash
          keyWord="interior"
          item={{
            title: "Articstic Living...",
            description: "We are know about it",
          }}
        />
        <SectionDesignTeam />
        <ZenartSectionImageOnly />
        <SectionExecutionTeam />
        <ZenartSectionImageOnly />
      </BlockScrollSnapScreenBlock>
    </>
  );
}

const SectionFullLogo = () => {
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

const SectionText02 = () => {
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

const SectionБиднийТухай = () => {
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

const SectionБиднийҮйлАжиллагаа = () => {
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

const SectionDesignTeam = () => {
  return (
    <ZenartSectionWrapper>
      <TextH1
        value="01"
        className="text-8xl font-bold bg-gradient-to-b from-[#f6c99e] to-slate-900 bg-clip-text text-transparent tracking-tighter"
        animation={{
          type: "fadeIn",
        }}
      />
      <TextH1
        value="Зураг төслийн баг"
        className="text-slate-300"
        animation={{
          type: "slideUp",
        }}
      />
      <TextHtml
        value="Интерьер дизайнерын төлөвлөх орон зайн архитектурын шийдлээс шууд хамаарладаг бөгөөд энэ шийдэл нь тухайн интерьерийн үнсэн суурь болдог."
        className="text-[#f6c99e]"
        animation={{
          type: "slideUp",
        }}
      />

      <BlockDiv className="grid grid-cols-2 gap-5 w-[60%]">
        {map(
          [
            {
              title: "Архитектурын шийдэл",
              desc: "Барилгын үнсэн дизайн",
            },
            {
              title: "Интерьер дизайн",
              desc: "Дотоод орон зай",
            },
            {
              title: "Экстерьер дизайн",
              desc: "Гадна фасад",
            },
            {
              title: "Ландшафт дизайн",
              desc: "Зүлэг, ногоон байгууламж",
            },
          ],
          (item, index) => (
            <BlockFlexRow className="items-start">
              <RenderAtom
                value={"mdi-light:arrow-right"}
                type="icon"
                className="text-[#f6c99e] text-xl"
                animation={{
                  type: "fadeIn",
                  loop: true,
                  loopType: "mirror",
                  duration: 2,
                }}
              />

              <BlockFlexCol className="gap-1" key={index}>
                <TextBody
                  value={item?.title}
                  className="text-slate-300"
                  animation={{
                    type: "slideUp",
                  }}
                />
                <TextBody value={item?.desc} className="text-slate-600" />
              </BlockFlexCol>
            </BlockFlexRow>
          )
        )}
      </BlockDiv>

      <TextHtml
        value="Бидний хамгийн чухал орон зай бол гэр, ажлын байр, болон үйлчилгээний талбайн төлөвлөлт, жанр, шал, таазны өнгө болон хэлбэр зэрэг, тухайн тавилга, гэрэл, хөшиг зэрэг сонголтоос тав тухтай орчин бий болдог. Тиймээс интерьерийн зураг төсөл зохиох нь барилгын дизайны суурьлсан цогц үйл ажиллагааны нэгэн юм. Манай компанийн баг мэргэжлийн чадвартай дизайнерууд бөгөөд амьдралын эх мэдрэмж, эргономик, биомик, кинетик, өнгө, инстинкт, функцийн шаардлагад нийцсэн дизайны төлөвлөөг боловсруулж ажилласаар байна."
        className="text-[#d1d5db] text-sm leading-6 pt-6"
        animation={{
          type: "slideUp",
        }}
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

const SectionExecutionTeam = () => {
  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-[#f6c99e]" }}>
      <TextH1
        value="02"
        className="text-8xl font-bold bg-gradient-to-b from-[#d69559] to-[#f6c99e] bg-clip-text text-transparent tracking-tighter"
      />

      <TextH1 value="Гүйцэтгэлийн баг" className="text-gray-700" />
      <TextHtml
        value="Барилга бүтээн байгуулалтын ажил хийгдэж байгаа үед гүйцэтгэлийн баг интерьер, дотоод засал, гадна засал зэрэг бүхий л чиглэлд ажилладаг. Интерьер зураг төслөөр зассан гүйцэтгэл хийгдэж ашиглалтад, төлөвлөөгүй муутай орон зай, ил замбараагүй цахилгааны угсралт, өнгө зохицолгүй орчны бий болгох магадлал өндөр. Эдгээр алдаануудаас тооцоолох орчин, хэт давамжралт тухай засал гүйцэтгэл үр ашиггүй зардал болдог.<br /><br />Гүйцэтгэлийн багийн гол зорилго нь тань тав тухтай ажиллаж амьдрах орчныг бүрдүүлэх юм. Шилдэг мэргэжилтэн байхгүй харин чадварлаг мэргэжилтэн гэж бий. Иймд бид олон жилийн турш нэг баг болон ажиллаж байгаа туршлагатай, мэргэшсэн хүмүүстэйгээр үйл ажиллагаагаа явуулсаар байна."
        className="text-gray-700 text-justify"
      />
    </ZenartSectionWrapper>
  );
};
