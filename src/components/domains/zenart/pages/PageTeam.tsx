"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import TextH3 from "atomv2/components/Text/TextH3";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function ZenartTeamPage() {
    return (
        <>
            <SectionDesignTeam />
            <SectionImageOnly />
            <SectionExecutionTeam />
        </>
    );
}

const SectionDesignTeam = () => {
    return (
        <BlockDiv type="section" className="w-full flex flex-col lg:flex-row bg-[#101114] text-[#f1f1f1] py-20 px-8 lg:px-24">
            <BlockDiv className="w-full lg:w-1/2 space-y-4 lg:pr-10">
                <img
                    src="https://cdn.moto.mn/moto/landing/13_zenart/home/23f83c14-1e15-422d-a5ea-971c8b8bd28a.png"
                    alt="Zenart Logo"
                    className="w-12 h-auto mb-4"
                />
                <TextH3
                    value="01"
                    className="text-[#f6c99e] text-4xl font-semibold mb-2"
                />
                <TextH3
                    value="Зураг төслийн баг"
                    className="text-white text-2xl font-bold mb-4"
                />
                <TextHtml
                    value="Интерьер дизайнерын төлөвлөх орон зайн архитектурын шийдлээс шууд хамаарладаг бөгөөд энэ шийдэл нь тухайн интерьерийн үнсэн суурь болдог."
                    className="text-[#f6c99e] text-sm mb-6"
                />

                <ul className="list-disc list-inside space-y-2 text-sm text-[#94a3b8]">
                    <li><strong className="text-white">Архитектурын шийдэл:</strong> Барилгын үнсэн дизайн</li>
                    <li><strong className="text-white">Интерьер дизайн:</strong> Дотоод орон зай</li>
                    <li><strong className="text-white">Экстерьер дизайн:</strong> Гадна фасад</li>
                    <li><strong className="text-white">Ландшафт дизайн:</strong> Зүлэг, ногоон байгууламж</li>
                </ul>

                <TextHtml
                    value="Бидний хамгийн чухал орон зай бол гэр, ажлын байр, болон үйлчилгээний талбайн төлөвлөлт, жанр, шал, таазны өнгө болон хэлбэр зэрэг, тухайн тавилга, гэрэл, хөшиг зэрэг сонголтоос тав тухтай орчин бий болдог. Тиймээс интерьерийн зураг төсөл зохиох нь барилгын дизайны суурьлсан цогц үйл ажиллагааны нэгэн юм. Манай компанийн баг мэргэжлийн чадвартай дизайнерууд бөгөөд амьдралын эх мэдрэмж, эргономик, биомик, кинетик, өнгө, инстинкт, функцийн шаардлагад нийцсэн дизайны төлөвлөөг боловсруулж ажилласаар байна."
                    className="text-[#d1d5db] text-sm leading-6 pt-6"
                />
            </BlockDiv>

            <BlockDiv className="w-full lg:w-1/2 flex items-center justify-center mt-10 lg:mt-0">
                <img
                    src="https://images.pexels.com/photos/279645/pexels-photo-279645.jpeg"
                    alt="Design Team"
                    className="w-[90%] h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-[0_10px_30px_rgba(246,201,158,0.5)]"
                />
            </BlockDiv>
        </BlockDiv>
    );
};

const SectionImageOnly = () => {
    return (
        <BlockDiv type="section" className="w-full bg-[#101114]">
            <img
                src="https://images.pexels.com/photos/269252/pexels-photo-269252.jpeg"
                alt="Interior Sketch Split"
                className="w-full h-auto object-cover"
            />
        </BlockDiv>
    );
};

const SectionExecutionTeam = () => {
    return (
        <BlockDiv type="section" className="w-full flex flex-col lg:flex-row bg-[#f7f2eb] text-[#222] py-20 px-8 lg:px-24">
            <BlockDiv className="w-full lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0">
                <img
                    src="https://images.pexels.com/photos/4491910/pexels-photo-4491910.jpeg"
                    alt="Execution Team"
                    className="w-[90%] h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-[0_10px_30px_rgba(206,152,113,0.5)]"
                />
            </BlockDiv>

            <BlockDiv className="w-full lg:w-1/2 space-y-4 lg:pl-10">
                <img
                    src="https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
                    alt="Zenart Icon"
                    className="w-14 h-auto mb-4"
                />
                <TextH3
                    value="02"
                    className="text-[#ce9871] text-4xl font-semibold"
                />
                <TextH3
                    value="Гүйцэтгэлийн баг"
                    className="text-[#1a1a1a] text-2xl font-bold"
                />
                <TextHtml
                    value="Барилга бүтээн байгуулалтын ажил хийгдэж байгаа үед гүйцэтгэлийн баг интерьер, дотоод засал, гадна засал зэрэг бүхий л чиглэлд ажилладаг. Интерьер зураг төслөөр зассан гүйцэтгэл хийгдэж ашиглалтад, төлөвлөөгүй муутай орон зай, ил замбараагүй цахилгааны угсралт, өнгө зохицолгүй орчны бий болгох магадлал өндөр. Эдгээр алдаануудаас тооцоолох орчин, хэт давамжралт тухай засал гүйцэтгэл үр ашиггүй зардал болдог."
                    className="text-[#2a2a2a] text-sm leading-6"
                />
                <TextHtml
                    value="Гүйцэтгэлийн багийн гол зорилго нь тань тав тухтай ажиллаж амьдрах орчныг бүрдүүлэх юм. Шилдэг мэргэжилтэн байхгүй харин чадварлаг мэргэжилтэн гэж бий. Иймд бид олон жилийн турш нэг баг болон ажиллаж байгаа туршлагатай, мэргэшсэн хүмүүстэйгээр үйл ажиллагаагаа явуулсаар байна."
                    className="text-[#2a2a2a] text-sm leading-6"
                />
            </BlockDiv>
        </BlockDiv>
    );
};
