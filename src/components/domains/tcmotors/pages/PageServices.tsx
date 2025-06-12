"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import PanelTextMain from "atomv2/components/Panel/PanelTextMain";
import PanelTitle2 from "atomv2/components/Panel/PanelTitle2";
import PanelTitle from "atomv2/components/Panel/PanelTitleMain";
import TcmotorsHomeHero from "../widget/TcmotorsHomeHero";

export default function TcmotorsPageServices() {
  return (
    <>
      <TcmotorsHomeHero
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

      <PanelMain className="flex flex-col items-start gap-14">
        <PanelTitle value="Манай Үндсэн Үйлчилгээнүүд" />

        <BlockDiv type="section">
          <PanelTitle2 value="Хуучин Сэлбэг Худалдан Авах" />
          <PanelTextMain value="Манай дэлгүүрт шалгагдсан, чанарын баталгаатай хуучин сэлбэгүүдийг өргөн сонголтоор авах боломжтой. Хөдөлгүүр, хурдны хайрцаг, амортизатор, сэнс, гэрэл гэх мэт бүх төрлийн эд ангийг хямд үнээр санал болгож байна." />
        </BlockDiv>

        <BlockDiv type="section">
          <PanelTitle2 value="Засварын Зөвлөгөө" />
          <PanelTextMain value="Та яг ямар сэлбэг хэрэгтэйгээ мэдэхгүй байна уу? Бидний мэргэшсэн механикчид таны машины асуудлыг үнэгүй оношлон, хамгийн тохиромжтой шийдлийг санал болгоно. Утас, чат, газар дээрх зөвлөгөө — бүгд боломжтой!" />
        </BlockDiv>

        <BlockDiv type="section">
          <PanelTitle2 value="Баталгаат Сэлбэгийн Үйлчилгээ" />
          <PanelTextMain value="Манай баталгаатай сэлбэгүүд 14–30 хоногийн баталгаатай нийлүүлэгддэг. Хэрвээ тухайн хугацаанд сэлбэг гэмтэлтэй бол солих буюу засварлах нөхцөлийг бид хариуцна." />
        </BlockDiv>

        <BlockDiv type="section">
          <PanelTitle2 value="Сэлбэг Захиалга ба Түгээлт" />
          <PanelTextMain value="Хэрвээ танд яг тухайн эд анги дэлгүүрт байхгүй бол бид танд зориулж Япон, Солонгос, Хятад болон Монголын ханган нийлүүлэгчдээс захиалж, 1–5 хоногийн дотор хүргэж өгнө." />
        </BlockDiv>

        {/* Why Choose Us Section */}
        <BlockDiv
          type="section"
          className="bg-red-50 rounded-xl shadow-md p-8 w-full">
          <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
            Яагаад биднийг сонгох вэ?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 font-medium list-none">
            <li>✅ 1000+ сэлбэгийн нэр төрөл</li>
            <li>✅ Хамгийн хурдан хүргэлт</li>
            <li>✅ Туршлагатай зөвлөх баг</li>
            <li>✅ Байнгын хөнгөлөлт, урамшуулал</li>
            <li>✅ Гарал үүсэл нь тодорхой, итгэлтэй эд ангиуд</li>
            <li>✅ Хэрэглэгч бүрт зориулсан уян хатан үйлчилгээ</li>
          </ul>
        </BlockDiv>

        {/* Testimonials Section */}
        <BlockDiv
          type="section"
          className="bg-blue-100 rounded-xl shadow-md p-8 w-full">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
            Хэрэглэгчдийн үнэлгээ
          </h2>
          <div className="space-y-6 text-gray-700">
            <blockquote className="border-l-4 border-blue-400 pl-4 italic">
              “Түгээлт маш хурдан ирсэн. Хуучин сэлбэг гэмтэлгүй, яг таарсан!” —{" "}
              <b>Б. Ганбаатар</b>
            </blockquote>
            <blockquote className="border-l-4 border-blue-400 pl-4 italic">
              “Эндэхийн зөвлөх яг оношлоод зөв сэлбэг санал болгосон. Маш их
              баярласан!” — <b>О. Энхмаа</b>
            </blockquote>
            <blockquote className="border-l-4 border-blue-400 pl-4 italic">
              “Үнийн хувьд хамгийн боломжийн газар байсан. Баталгаат хугацаа ч
              байдаг нь том давуу тал.” — <b>Ц. Ариунболд</b>
            </blockquote>
          </div>
        </BlockDiv>
      </PanelMain>
    </>
  );
}
