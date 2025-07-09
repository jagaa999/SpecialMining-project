"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockGrid3 from "atomv2/components/Blocks/BlockGrid3";
import BlockMain from "atomv2/components/Blocks/BlockMain";
import PanelSectionMainFlex from "atomv2/components/Panel/PanelSectionMainFlex";
import TextBody from "atomv2/components/Text/TextBody";
import TextH2 from "atomv2/components/Text/TextH2";
import { map } from "lodash";

export default function PageAbout() {
  const highlights = [
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
  ];

  return (
    <BlockMain className="bg-gradient-to-r from-[#fffdfc] to-gray-200">
      <PanelSectionMainFlex>
        <TextH2
          value="Бид <span class='text-brand'>хэн</span> бэ?"
          className="text-left pl-16"
        />

        <TextBody
          value={`<strong>Kiosk.mn</strong> бол технологийн хэрэглээ, UI/UX дизайн, веб болон киоск систем хөгжүүлэлтэд төвлөрсөн бүтээлч баг юм. Бид технологийг зөвхөн код биш — <span class="italic">бодит хэрэглэгчийн мэдрэмж, сэтгэл ханамж</span>-ийн үндсэн дээр бүтээдэг.`}
          className="text-justify"
        />
        <TextBody
          value="Бид төслийг цаасан дээрээс эхлүүлээд бүтээгдэхүүн болтол нь цогц байдлаар хөгжүүлдэг. Үйлчлүүлэгчийнхээ брэндийг зөв танилцуулж, зөв мэдрэмж төрүүлэх интерфэйс бүтээх нь бидний хамгийн гол зорилго."
          className="text-justify"
        />
        <TextBody
          value="Өнгөрсөн хугацаанд 10+ киоск интерфэйс, 20+ вэб сайт, 5+ ERP системийг амжилттай хүлээлгэн өгсөн туршлагатай. Бидний бүтээл бүр хэрэглэгчиддээ үнэ цэнэ өгч чаддаг байх нь хамгийн чухал үзүүлэлт юм."
          className="text-justify"
        />
      </PanelSectionMainFlex>
      <PanelSectionMainFlex>
        <TextH2
          value="Бидний <span class='text-brand'>онцлог</span>"
          className="text-left pl-16"
        />
        <BlockDiv className="grid grid-cols-3 gap-10">
          {map(highlights, (item, index) => (
            <BlockDiv
              key={index}
              className="p-6 rounded-brand bg-white shadow-brand hover:shadow-2xl transition duration-300 border border-gray-100 flex flex-col items-start">
              <RenderAtom type="text" value={item.icon} className="text-3xl" />
              <TextBody
                value={item.title}
                className="text-xl font-semibold mt-4 mb-2 text-brand"
              />
              <TextBody
                value={item.desc}
                className="text-sm text-gray-700 leading-relaxed"
              />
            </BlockDiv>
          ))}
        </BlockDiv>
      </PanelSectionMainFlex>

      {/* CTA */}
      <PanelSectionMainFlex>
        <TextH2
          value="Яг <span class='text-brand'>одоо</span>?"
          className="text-left pl-16"
        />
        <TextBody
          value={`Та бидэнтэй хамтран шинэлэг технологийн шийдэл ажиллагаанд оруулахад бэлэн үү? Цаг алдалгүй, яаралтай эхлүүлцгээе.`}
        />
      </PanelSectionMainFlex>

      {/* Contact Section */}
      <PanelSectionMainFlex>
        <TextH2
          value="Бидэнтэй <span class='text-brand'>холбогдох</span>"
          className="text-left pl-16"
        />
        <TextBody value="Та санал, хүсэлт, хамтран ажиллах хүсэлтэй бол бидэнтэй холбогдоорой. Бид үргэлж нээлттэй, шуурхай хариу өгөх болно." />
      </PanelSectionMainFlex>

      <PanelSectionMainFlex>
        <TextH2
          value="Холбогдох <span class='text-brand'>сувгууд</span>"
          className="text-left pl-16"
        />
        <BlockGrid3>
          {[
            {
              icon: "📍 Хаяг",
              value: "УБ, ХУД, Мишээл Экспо",
            },
            {
              icon: "📞 Утас",
              value: "+976 9990-2070",
            },
            {
              icon: "📧 Имэйл",
              value: "kiosk@kt.mn",
            },
          ].map((item, idx) => (
            <BlockFlexCol
              key={idx}
              className="bg-white px-8 py-10 rounded-brand justify-start">
              <RenderAtom
                type="text"
                value={item.icon}
                className="text-lg font-bold text-brand"
              />
              <TextBody value={item.value} className="text-sm text-gray-700" />
            </BlockFlexCol>
          ))}
        </BlockGrid3>
      </PanelSectionMainFlex>
    </BlockMain>
  );
}
