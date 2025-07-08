"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import TextBody from "atomv2/components/Text/TextBody";
import TextH1 from "atomv2/components/Text/TextH1";
import TextHtml from "atomv2/components/Text/TextHtml";
import { map } from "lodash";
import ZenartSectionImageOnly from "../Widget/ZenartSectionImageOnly";
import ZenartSectionWrapper from "../Widget/ZenartSectionWrapper";

export default function ZenartTeamPage() {
  return (
    <>
      <SectionDesignTeam />
      <ZenartSectionImageOnly />
      <SectionExecutionTeam />
      <ZenartSectionImageOnly />
    </>
  );
}

const SectionDesignTeam = () => {
  return (
    <ZenartSectionWrapper>
      <TextH1
        value="01"
        className="text-8xl font-bold bg-gradient-to-b from-[#f6c99e] to-slate-900 bg-clip-text text-transparent tracking-tighter"
      />
      <TextH1 value="Зураг төслийн баг" className="text-slate-300" />
      <TextHtml
        value="Интерьер дизайнерын төлөвлөх орон зайн архитектурын шийдлээс шууд хамаарладаг бөгөөд энэ шийдэл нь тухайн интерьерийн үнсэн суурь болдог."
        className="text-[#f6c99e]"
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
              />

              <BlockFlexCol className="gap-1" key={index}>
                <TextBody value={item?.title} className="text-slate-300" />
                <TextBody value={item?.desc} className="text-slate-600" />
              </BlockFlexCol>
            </BlockFlexRow>
          )
        )}
      </BlockDiv>

      <TextHtml
        value="Бидний хамгийн чухал орон зай бол гэр, ажлын байр, болон үйлчилгээний талбайн төлөвлөлт, жанр, шал, таазны өнгө болон хэлбэр зэрэг, тухайн тавилга, гэрэл, хөшиг зэрэг сонголтоос тав тухтай орчин бий болдог. Тиймээс интерьерийн зураг төсөл зохиох нь барилгын дизайны суурьлсан цогц үйл ажиллагааны нэгэн юм. Манай компанийн баг мэргэжлийн чадвартай дизайнерууд бөгөөд амьдралын эх мэдрэмж, эргономик, биомик, кинетик, өнгө, инстинкт, функцийн шаардлагад нийцсэн дизайны төлөвлөөг боловсруулж ажилласаар байна."
        className="text-[#d1d5db] text-sm leading-6 pt-6"
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
