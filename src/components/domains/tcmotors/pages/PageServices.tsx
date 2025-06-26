"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import MoleculeTitleBody from "atomv2/components/Molecules/MoleculeTitleBody";
import OrganismHeroPanel from "atomv2/components/Organisms/OrganismHeroPanel";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextH2 from "atomv2/components/Text/TextH2";

export default function TcmotorsPageServices() {
  return (
    <>
      <OrganismHeroPanel
        keyword="toyota prius"
        fade={{ className: "bg-black/70" }}
        item={{
          backgroundImage:
            "https://images.unsplash.com/photo-1580128637391-f3c8d51f17db?auto=format&fit=crop&w=1600&q=80",
          title: "Авто Сэлбэгийн Үйлчилгээ",
          subtitle:
            "Таны машины найдвартай хамтрагч — хурдан, хямд, баталгаатай",
          buttons: [
            {
              label: "Үйлчилгээ үзэх",
              href: "/services",
              style: "primary",
            },
            {
              label: "Захиалга өгөх",
              href: "/contact",
              style: "light",
            },
          ],
        }}
      />

      <BlockDiv type="section">
        <PanelMain className="flex flex-col items-start gap-14">
          <TextH2 value="Манай үндсэн үйлчилгээнүүд" />

          {[
            {
              title: "Хуучин Сэлбэгийн борлуулалт",
              description:
                "Манай дэлгүүрт шалгагдсан, чанарын баталгаатай хуучин сэлбэгүүдийг өргөн сонголтоор авах боломжтой. Хөдөлгүүр, хурдны хайрцаг, амортизатор, сэнс, гэрэл гэх мэт бүх төрлийн эд ангийг хямд үнээр санал болгож байна.",
            },
            {
              title: "Засварын Зөвлөгөө",
              description:
                "Та яг ямар сэлбэг хэрэгтэйгээ мэдэхгүй байна уу? Бидний мэргэшсэн механикчид таны машины асуудлыг үнэгүй оношлон, хамгийн тохиромжтой шийдлийг санал болгоно. Утас, чат, газар дээрх зөвлөгөө — бүгд боломжтой!",
            },
            {
              title: "Баталгаат Сэлбэгийн Үйлчилгээ",
              description:
                "Манай баталгаатай сэлбэгүүд 14–30 хоногийн баталгаатай нийлүүлэгддэг. Хэрвээ тухайн хугацаанд сэлбэг гэмтэлтэй бол солих буюу засварлах нөхцөлийг бид хариуцна.",
            },
            {
              title: "Сэлбэг Захиалга ба Түгээлт",
              description:
                "Хэрвээ танд яг тухайн эд анги дэлгүүрт байхгүй бол бид танд зориулж Япон, Солонгос, Хятад болон Монголын ханган нийлүүлэгчдээс захиалж, 1–5 хоногийн дотор хүргэж өгнө.",
            },
          ].map((item, index) => (
            <MoleculeTitleBody
              key={index}
              item={{
                title: item.title,
                description: item.description,
              }}
            />
          ))}
        </PanelMain>
      </BlockDiv>

      {/* Why Choose Us Section */}
      <BlockSection className="bg-slate-50">
        <PanelMain className="flex flex-col items-start gap-14">
          <TextH2 value="Биднийг сонгох үндсэн шалтгаан" />
          <ul className="grid grid-cols-1 gap-4 list-none">
            {[
              "✅ 1000+ сэлбэгийн нэр төрөл",
              "✅ Хамгийн хурдан хүргэлт",
              "✅ Туршлагатай зөвлөх баг",
              "✅ Байнгын хөнгөлөлт, урамшуулал",
              "✅ Гарал үүсэл нь тодорхой, итгэлтэй эд ангиуд",
              "✅ Хэрэглэгч бүрт зориулсан уян хатан үйлчилгээ",
              "✅ Баталгаатай чанар",
              "✅ Хямд үнэ, уян хатан төлбөрийн нөхцөл",
              "✅ 24/7 онлайн дэмжлэг",
              "✅ Бүх төрлийн авто сэлбэгийн нөөцтэй",
              "✅ Хэрэглэгчдийн сэтгэл ханамж 98%",
            ].map((item, index) => (
              <RenderAtom
                key={item || index}
                value={item}
                type="text"
                as="li"
              />
            ))}
          </ul>
        </PanelMain>
      </BlockSection>

      {/* Testimonials Section */}
      <BlockSection>
        <PanelMain className="flex flex-col items-start gap-14">
          <TextH2 value="Хэрэглэгчдийн сэтгэгдэл" />

          <BlockDiv className="space-y-6">
            {[
              {
                title:
                  "Түгээлт маш хурдан ирсэн. Хуучин сэлбэг гэмтэлгүй, яг таарсан!",
                description: "Б. Ганбаатар",
              },
              {
                title: "Эндэхийн зөвлөх яг оношлоод зөв сэлбэг санал болгосон.",
                description: "О. Энхмаа",
              },
              {
                title: "Үнийн хувьд хамгийн боломжийн газар байсан.",
                description: "Ц. Ариунболд",
              },
              {
                title:
                  "Олдохгүй ховор сэлбэг энд байж таарсан. Маш зовж олсон доо. Эртхэн мэдсэн бол амар байхгүй юу",
                description: "Г. Алтансүх",
              },
            ].map((item, index) => (
              <RenderAtom
                type="text"
                as="blockquote"
                isHtml={true}
                key={item?.title || index}
                className="border-l-4 border-brand/50 pl-4 italic"
                value={`“${item.title}” — <b>${item.description}</b>`}
              />
            ))}
          </BlockDiv>
        </PanelMain>
      </BlockSection>
    </>
  );
}
