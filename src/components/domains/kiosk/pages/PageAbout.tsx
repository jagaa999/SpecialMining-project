"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function PageAbout() {
    return (
        <BlockDiv className="w-full bg-gradient-to-br from-[#fffdfc] to-[#f7f4f2] py-24 px-6 md:px-20 text-[#1a1a1a]">
            {/* Section Title */}
            <TextHtml
                value={`<h2 class='text-4xl md:text-5xl font-extrabold text-center leading-snug mb-10'>
          Бид <span class='text-[#ff6f3c]'>хэн</span> бэ?
        </h2>`}
            />

            {/* Description */}
            <BlockDiv className="max-w-4xl mx-auto text-center text-lg text-gray-700 leading-relaxed space-y-6">
                <p>
                    <strong>Kiosk.mn</strong> бол технологийн хэрэглээ, UI/UX дизайн, веб болон киоск систем хөгжүүлэлтэд төвлөрсөн бүтээлч баг юм. Бид
                    технологийг зөвхөн код биш — <span className="italic">бодит хэрэглэгчийн мэдрэмж, сэтгэл ханамж</span>-ийн үндсэн дээр бүтээдэг.
                </p>
                <p>
                    Бид төслийг цаасан дээрээс эхлүүлээд бүтээгдэхүүн болтол нь цогц байдлаар хөгжүүлдэг. Үйлчлүүлэгчийнхээ брэндийг зөв танилцуулж,
                    зөв мэдрэмж төрүүлэх интерфэйс бүтээх нь бидний хамгийн гол зорилго.
                </p>
                <p>
                    Өнгөрсөн хугацаанд 10+ киоск интерфэйс, 20+ вэб сайт, 5+ ERP системийг амжилттай хүлээлгэн өгсөн туршлагатай. Бидний бүтээл бүр
                    хэрэглэгчиддээ үнэ цэнэ өгч чаддаг байх нь хамгийн чухал үзүүлэлт юм.
                </p>
            </BlockDiv>

            {/* Highlights */}
            <BlockDiv className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "01. Шинэлэг сэтгэлгээ",
                        desc: "Бид дизайн болон хөгжүүлэлтийн сэтгэлгээг трендээс урьдчилан таамаглаж, илүү уран шийдлээр хөгжүүлдэг.",
                        icon: "💡",
                    },
                    {
                        title: "02. Салбартаа мэргэшсэн",
                        desc: "Киоск систем, ERP UI, хэрэглэгчийн веб интерфэйс дээр олон төсөл гүйцэтгэсэн туршлага, боловсруулсан компонентуудтай.",
                        icon: "🧠",
                    },
                    {
                        title: "03. Төслийг хариуцлагатай гүйцэтгэдэг",
                        desc: "Бид цагаа баримталдаг, багтаа найдвартай. Төслийг зөв гүйцэтгэж, эцсийн үр дүнг баталгаажуулдаг.",
                        icon: "✅",
                    },
                ].map((item, i) => (
                    <BlockDiv
                        key={i}
                        className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col items-start"
                    >
                        <span className="text-3xl">{item.icon}</span>
                        <h3 className="text-xl font-semibold mt-4 mb-2 text-[#ff6f3c]">{item.title}</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                    </BlockDiv>
                ))}
            </BlockDiv>

            {/* Call to action */}
            <BlockDiv className="mt-24 text-center">
                <TextHtml
                    value={`<p class="text-lg md:text-xl font-medium text-gray-800">
            Та бидэнтэй хамтран <span class="text-[#ff6f3c] font-bold">шинэлэг технологийн шийдэл</span> бүтээхэд бэлэн үү?
          </p>`}
                />
                <a
                    href="/contact"
                    className="inline-block mt-6 px-8 py-3 bg-[#ff6f3c] text-white text-sm font-semibold rounded-full hover:bg-orange-600 transition"
                >
                    Холбоо барих
                </a>
            </BlockDiv>
        </BlockDiv>
    );
}
