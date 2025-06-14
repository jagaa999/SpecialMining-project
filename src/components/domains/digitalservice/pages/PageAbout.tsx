"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockHalf from "atomv2/components/Blocks/BlockHalf";
import MoleculeCTA01 from "atomv2/components/Molecules/MoleculeCTA01";
import OrganismHeroPanel from "atomv2/components/Organisms/OrganismHeroPanel";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextH1 from "atomv2/components/Text/TextH1";
import TextH4 from "atomv2/components/Text/TextH4";
import TextH6 from "atomv2/components/Text/TextH6";
import TextHtml from "atomv2/components/Text/TextHtml";
import { map } from "lodash";

export default function DigitalServicePageAbout() {
  return (
    <>
      <OrganismHeroPanel keyword="printer" item={item_local?.hero} />

      {/* <PanelMain> */}
      <div className="w-full bg-white text-gray-900">
        {/* Hero */}
        <BlockDiv
          type="section"
          className="min-h-screen bg-gradient-to-r from-brand to-brand/70 text-bg flex flex-col gap-24 items-center justify-center">
          <PanelMain className="text-left space-y-6">
            <TextH1 value="Бид хэн бэ?" className="text-bg text-5xl" />
            <TextHtml
              value="Принтерийн хор, засвар үйлчилгээ, дахин цэнэглэлтээр мэргэшсэн компани юм. <br />15+ жилийн туршлага, мянга мянган сэтгэл ханамжтай хэрэглэгчидтэй."
              className="text-white text-xl"
            />
            <TextHtml
              value="Технологийн шийдлийг хэрэглэгчийн гарт ..."
              className="text-slate-300 italic pt-14 text-lg"
            />
          </PanelMain>
        </BlockDiv>

        <BlockDiv
          type="section"
          className="bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center">
          <PanelMain className="space-y-12">
            <TextH1 value="Товч түүх" />
            <TextHtml
              className="text-justify"
              value="“Дижитал Сервис” ХХК 2007 онд байгуулагдан, 2010 онд мэдээллийн технологийн тоног төхөөрөмж, энтерпрайз шийдэл, үйлчилгээ,програм хангамж, мэдээллийн технологийн онлайн худалдааны платформ чиглэлээр хуулийн этгээд болон үйл ажиллагаагаа өнөөг хүртэл тасралтгүй явуулж байна.<br /><br />“Дижитал Сервис” ХХК 2007 онд байгуулагдан, 2010 онд мэдээллийн технологийн тоног төхөөрөмж, энтерпрайз шийдэл, үйлчилгээ,програм хангамж, мэдээллийн технологийн онлайн худалдааны платформ чиглэлээр хуулийн этгээд болон үйл ажиллагаагаа өнөөг хүртэл тасралтгүй явуулж байна.<br /><br />Бид 2011 оноос эцсийн хэрэглэгчдэд бараа бүтээгдэхүүнээ борлуулдаг баталгаат хүргэлттэй бизнес загварыг эхлүүлж, хамгийн том шууд борлуулалтын багуудыг бүрдүүлж, Монгол улсын нийслэл Улаанбаатар хотын 8 дүүрэг, 21 аймгийн 360 суманд шууд борлуулалт хийж ажилласан. 2017 оноос Төрийн худалдан авах ажиллагаанд оролцож нийт давхардсан тоогоор 280-аад удаагийн ажилаар бараа ажил
              үйлчилгээг төрийн байгуууллагуудад амжилттай хүргэн, чанарын баталгааг үзүүлэн ажиллаа.<br /><br />Компани 2024 оноос “АСО” брэндийн ISO9001, ISO14001, ISO45001,
              STMC олон улсын чанар, стандартын гэрчилгээтэй байгаль орчинд ээлтэй, хүний биед харшил үүсгэхгүй хэвлэгч, хувилагчийн хорны Монгол улс дахь албан ёсны борлуулагч болон орон даяар борлуулалт хийн ажиллаж байна.<br /><br />2025 оны байдлаар Dell, HP, Canon, Samsung, Acer, Brother, Xerox, Apple, UPS, Santak зэрэг брэндийн компьютер болон тэдгээрийн дагалдах хэрэгсэл, бичгийн хэрэглэлийн Deli, Schneider, бичгийн цаасны Double A брэндийн бараа бүтээгдэхүүнүүдийг албан ёсны эрхтэйгээр борлуулж байна."
            />
          </PanelMain>
        </BlockDiv>

        {/* Philosophy */}
        <BlockDiv type="section" className="min-h-screen bg-bg">
          <PanelMain className="flex flex-col gap-18">
            <BlockHalf>
              <RenderAtom
                value={
                  "https://c1.wallpaperflare.com/preview/474/958/384/cmyk-printer-colors-print.jpg"
                }
                type="image"
                className="shadow-brand"
              />
              <BlockFlexCol>
                <TextH4 value="Манай философи" />
                <ul className="list-disc list-inside space-y-2">
                  <li>Үр ашигтай, хэмнэлттэй шийдэл санал болгох</li>
                  <li>Тогтвортой байгальд ээлтэй хэрэглээг дэмжих</li>
                  <li>Хэрэглэгчийн сэтгэл ханамжийг тэргүүнд тавих</li>
                </ul>
              </BlockFlexCol>
            </BlockHalf>
            <BlockHalf>
              <BlockFlexCol>
                <TextH4 value="Борлуулдаг бүтээгдэхүүн" />
                <ul className="list-disc list-inside space-y-2">
                  <li>Суурин болон зөөврийн компьютер </li>
                  <li>Сервер компьютер </li>
                  <li>Канон, принтер </li>
                  <li>Канон, принтерийн хор </li>
                </ul>
              </BlockFlexCol>
              <RenderAtom
                value={
                  "https://img.freepik.com/premium-photo/printer-toner-hd-8k-wallpaper-stock-photographic-image_915071-69883.jpg"
                }
                type="image"
                className="shadow-brand"
              />
            </BlockHalf>
          </PanelMain>
        </BlockDiv>

        {/* How to Buy */}
        <BlockDiv type="section" className="min-h-screen h-full bg-gray-100">
          <PanelMain className="w-full h-full min-h-screen space-y-12 flex flex-col justify-center">
            <TextH1 value="Бараа бүтээгдэхүүнийг хэрхэн худалдан авах вэ?" />
            <ol className="divide-y divide-muted/50">
              {map(
                [
                  {
                    title: "• Каталогоос сонголт хийнэ",
                    value:
                      "Хэвлэгч, хувилагч төхөөрөмжид тохирох хорыг каталогоос сонгоно.",
                  },
                  {
                    title: "• Захиалга өгөх",
                    value:
                      "“Монгол шуудан”-гийн салбарт очих эсвэл 7012-2038 дугаарт захиалга өгч дэлгэрэнгүй мэдээлэл авна.",
                  },
                  {
                    title: "• Нэхэмжлэл авах",
                    value:
                      "Захиалгын дагуу байгууллагын нэхэмжлэлийг бичүүлж авна.",
                  },
                  {
                    title: "• Төлбөр төлөх",
                    value:
                      "Төлбөр шилжүүлэхдээ байгууллагын нэр, регистр, хаяг, утсыг тодорхой бичнэ.",
                  },
                  {
                    title: "• Бараа хүргэлт",
                    value: "Төлбөр баталгаажмагц шуудангаар барааг хүргэнэ.",
                  },
                ],
                (item: any, index: number) => (
                  <li key={item?.id || index} className="py-8">
                    <TextH6 value={item.title} />
                    <TextHtml value={item.value} />
                  </li>
                )
              )}
            </ol>
          </PanelMain>
        </BlockDiv>

        {/* Why Choose Us */}
        <section className="min-h-screen bg-white flex flex-col items-center justify-center px-10 py-20 space-y-24">
          <h2 className="text-4xl font-bold text-red-700 text-center">
            Яагаад биднийг сонгох вэ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl w-full text-center text-lg">
            <div className="bg-red-100 px-6 py-24 rounded-xl shadow-md">
              <p className="font-semibold mb-2">10+ жилийн туршлага</p>
              <p>Бид зах зээл дээр туршлагаараа тэргүүлдэг.</p>
            </div>
            <div className="bg-red-100 px-6 py-24 rounded-xl shadow-md">
              <p className="font-semibold mb-2">Баталгаат хор</p>
              <p>Чанарын баталгаатай бүтээгдэхүүнүүд.</p>
            </div>
            <div className="bg-red-100 px-6 py-24 rounded-xl shadow-md">
              <p className="font-semibold mb-2">Шуурхай үйлчилгээ</p>
              <p>1-3 цагийн дотор хүргэлт.</p>
            </div>
          </div>
        </section>

        {/* Order Info */}
        <section className="min-h-screen bg-red-50 flex items-center px-10 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-red-700">
              Захиалга өгөх тухай
            </h2>
            <p className="text-lg text-gray-700">
              Бидэнтэй утсаар, мессежээр эсвэл вэбээр дамжуулан захиалга өгөх
              боломжтой. Хэрвээ та шинэ хор захиалах, принтерийн хор цэнэглүүлэх
              эсвэл засвар үйлчилгээ авахыг хүсвэл бид таны гарт хамгийн хурдан,
              найдвартайгаар хүргэнэ.
            </p>
          </div>
        </section>

        {/* CTA Footer */}
        <MoleculeCTA01
          item={{
            title: "Та бидэнтэй холбогдоход бэлэн үү?",
            description:
              "Бид танд хэрэгтэй бүхий л мэдээлэл, тусламжийг өгөхөд бэлэн байна. Өнөөдөр холбогдож захиалгаа өгөөрэй!",
            button: {
              value: "Холбогдох",
              onClick: () => {
                console.log("Холбогдох товч дарав");
              },
            },
          }}
        />
      </div>
      {/* </PanelMain> */}
    </>
  );
}

const item_local = {
  title: "Overview",
  description:
    "Special Mining Services LLC (SMS) is a mining technology company that established in 2012 and is specialized in Drill & Blast and industrial chemicals. We are truly committed to safety, responsible operation and our clients’ interest.",
  video: {
    poster: "https://cdn.moto.mn/moto/landing/09_specialmining/thumb.jpg",
    src: "https://specialmining.bloomlink.mn/moavolen/2023/10/Teselgee.mp4",
  },
  hero: {
    backgroundImage:
      "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
    title: "Дижитал Сервис",
    subtitle:
      "Принтер, принтерийн хортой холбоотой худалдаа, засвар үйлчилгээ бүгд нэг дор",
    buttons: [
      {
        label: "Манай хорнууд",
        href: "/shop",
        style: "primary",
      },
      {
        label: "About Us",
        href: "/about",
        style: "light",
      },
    ],
  },
};
