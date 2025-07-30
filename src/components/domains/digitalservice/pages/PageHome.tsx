import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockHalf from "atomv2/components/Blocks/BlockHalf";
import MoleculeCard from "atomv2/components/Molecules/MoleculeCard01";
import MoleculeCTA01 from "atomv2/components/Molecules/MoleculeCTA01";
import OrganismHeroPanel from "atomv2/components/Organisms/OrganismHeroPanel";
import PanelMain from "atomv2/components/Panel/PanelMain";
import PosTitle from "atomv2/components/Position/PosTitle";
import TextH1 from "atomv2/components/Text/TextH1";
import TextH2 from "atomv2/components/Text/TextH2";
import TextH3 from "atomv2/components/Text/TextH3";
import TextHtml from "atomv2/components/Text/TextHtml";
import { map } from "lodash";

export default function DigitalServicePageHome() {
  return (
    <>
      <OrganismHeroPanel keyword="beatiful wallpaper" item={item_local?.hero} />

      {/* <PanelMain> */}
      <BlockDiv type="main" className="w-full bg-white text-gray-900">
        {/* Hero Banner */}
        <BlockDiv
          type="section"
          className="h-screen bg-white text-gray-700 flex items-center justify-center px-10">
          <PanelMain className="text-center space-y-12 flex flex-col items-center">
            <TextH1
              value={"Принтерийн Хорны<br />Бүх Шийдэл Бидэнд Байна"}
              className="uppercase"
            />
            <TextHtml value="Чанартай хороор найдвартай үйлчилгээ үзүүлнэ. Хамгийн өргөн сонголттой, шуурхай хүргэлттэй." />

            <RenderAtom
              value={"Захиалга өгөх"}
              type="button"
              className="text-xl"
              variant="secondary"
            />
          </PanelMain>
        </BlockDiv>

        {/* Хорны ач холбогдол */}
        <BlockDiv
          type="section"
          className="min-h-screen bg-gradient-to-br from-white via-slate-200 to-gray-100 py-24 space-y-24">
          <PanelMain className="flex flex-col items-center space-y-24">
            {map(tonerTips, (item: any, index: number) => (
              <BlockHalf
                key={item?.id || index}
                reverse={index % 2 === 1}
                stretch={true}>
                <img
                  src={item?.mainImage}
                  alt="Хорны ач тус"
                  className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                />
                <BlockDiv className="space-y-4 w-full h-full">
                  <TextH3 item={item} />

                  <ul className="list-disc list-inside space-y-2 text-lg">
                    {map(
                      item?.advantages,
                      (advantage: string, index: number) => (
                        <li key={index}>
                          <TextHtml value={advantage} className="inline" />
                        </li>
                      )
                    )}
                  </ul>
                  <TextHtml
                    value={`📝 Зөвлөмж: ${item?.recommendation}`}
                    variant="muted"
                    className="text-sm italic"
                  />
                </BlockDiv>
              </BlockHalf>
            ))}
          </PanelMain>
        </BlockDiv>

        {/* Давуу талууд */}
        <BlockDiv
          type="section"
          className="min-h-screen bg-white flex items-center px-10 py-20">
          <PanelMain className="text-center space-y-24">
            <TextH2 value="Бидний давуу тал" />
            <BlockDiv className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {map(
                [
                  {
                    icon: "mdi:medal", // туршлага
                    title: "10+ жилийн туршлага, өөрийн сүлжээ",
                  },
                  {
                    icon: "mdi:printer-alert", // баталгаат хор
                    title: "Өндөр чанартай баталгаат хор",
                  },
                  {
                    icon: "mdi:truck-delivery", // хүргэлт
                    title: "Улаанбаатар хот даяар хүргэлттэй",
                  },
                ],
                (item: any, index: number) => (
                  <BlockDiv
                    key={item?.id || index}
                    className="bg-brand/7 px-brand-x py-brand-y rounded-brand shadow-brand ring ring-brand/40 hover:shadow-2xl transition-all duration-700 ease-in-out flex flex-col items-center space-y-4">
                    <RenderAtom
                      value={item.icon}
                      type="icon"
                      className="text-brand"
                      width={78}
                      height={78}
                    />
                    <PosTitle item={item} />
                  </BlockDiv>
                )
              )}
            </BlockDiv>
          </PanelMain>
        </BlockDiv>

        {/* Хорны төрөл */}
        <BlockDiv
          type="section"
          className="h-screen bg-brand/7 flex items-center">
          <PanelMain className="text-center space-y-16">
            <RenderAtom value={"Хорны өргөн нэр төрөл"} type="text" as="h2" />

            <TextHtml
              value={
                "Бүх төрлийн лазер, инкжет, хувилагч машины хор бидэнд бий. HP, Canon, Epson, Brother, Samsung, Lexmark гээд танд байгаа бүх принтерийн хор, засвар бэлэн."
              }
            />

            <BlockDiv className="flex flex-wrap justify-center gap-12">
              {map(
                [
                  {
                    title: "HP",
                    mainImage:
                      "https://logowik.com/content/uploads/images/640_hp.jpg",
                  },
                  {
                    title: "Canon",
                    mainImage:
                      "https://logowik.com/content/uploads/images/canon-new6894.jpg",
                  },
                  {
                    title: "Epson",
                    mainImage:
                      "https://logowik.com/content/uploads/images/t_154_epson.jpg",
                  },
                  {
                    title: "Brother",
                    mainImage:
                      "https://logowik.com/content/uploads/images/brother4525.logowik.com.webp",
                  },
                  {
                    title: "Samsung",
                    mainImage:
                      "https://logowik.com/content/uploads/images/samsung35309.logowik.com.webp",
                  },
                  {
                    title: "Lexmark",
                    mainImage:
                      "https://logowik.com/content/uploads/images/965_lexmark.jpg",
                  },
                ],
                (item: any, index: number) => (
                  <MoleculeCard item={item} key={item?.id || index} />
                )
              )}
            </BlockDiv>
          </PanelMain>
        </BlockDiv>

        <MoleculeCTA01
          item={{
            title: "Онлайнаар захиалаарай",
            description:
              "Та бидэнтэй холбогдож хүссэн хороо яг одоо захиалаарай. Бид 1-3 цагийн дотор юмуу маргааш өдөр хүргэж өгнө!",
            button: {
              value: "Захиалга өгөх",
            },
          }}
        />
      </BlockDiv>
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

const tonerTips = [
  {
    title: "Яагаад оригиналь (OEM) хор хэрэглэх нь илүү ухаалаг сонголт вэ?",
    mainImage:
      "https://www.inkstation.com.au/blog/wp-content/uploads/2025/01/pexels-photo-23534042.webp",
    advantages: [
      "Хэвлэлийн чанар өндөр – Үйлдвэрлэгчийн өөрийн хор учраас өнгөний ялгарал, хурц дүрслэл бүрэн хадгалагдана.",
      "Принтерт тохирсон найдвартай байдал – Хор, принтер хоёр хоорондоо бүрэн нийцтэй тул саатал, эвдрэл үүсэх эрсдэл багатай.",
      "Баталгаат хугацаа алдагддаггүй – Оригиналь хор хэрэглэснээр үйлдвэрлэгчийн баталгааг хадгалж үлдэнэ.",
    ],
    recommendation:
      "Хэрвээ та албан бичиг, гэрээ, тайлан эсвэл нарийн зураг хэвлэдэг бол OEM хор бол танай хамгийн найдвартай хөрөнгө оруулалт.",
  },
  {
    title: "“A Copy” сайн чанарын хор хэрэглэх нь яагаад үр дүнтэй вэ?",
    mainImage:
      "https://www.inkstation.com.au/blog/wp-content/uploads/2025/01/pexels-photo-23534042.webp",
    advantages: [
      "Өртөг багатай мөртлөө чанартай – Зарим сайн брендийн хуулбар хор нь OEM-тэй дүйцэхүйц хэвлэх чанартай.",
      "Өндөр хуудасны тоо – Зарим “compatible” хорнууд илүү их хуудас хэвлэх чадалтай байдаг.",
      "Байгаль орчинд ээлтэй хувилбарууд ч бий – Зарим брэндүүд дахин боловсруулсан савлагаатай, хаягдал багатайгаар үйлдвэрлэдэг.",
    ],
    recommendation:
      "Хэрвээ та өртөгөө бууруулах шаардлагатай бол, чанар сайтай A copy хор үйлдвэрлэгч (Ex: G&G, JetWorld, Static Control гэх мэт) сонгохыг зөвлөж байна.",
  },
  {
    title: "Хор цэнэглүүлэх нь ямар үед хамгийн оновчтой шийдэл вэ?",
    mainImage:
      "https://www.inkstation.com.au/blog/wp-content/uploads/2025/01/pexels-photo-23534042.webp",
    advantages: [
      "Хамгийн хямд өртөгтэй хувилбар – Шинэ хор худалдаж авахтай харьцуулахад 2–3 дахин хямд.",
      "Олон удаа ашиглах боломжтой – Зарим хорны хайрцаг 3–5 удаа цэнэглэгдэх боломжтой.",
      "Хог хаягдал буурна – Нэг хайрцгийг дахин дахин ашигласнаар байгальд ээлтэй.",
    ],
    recommendation:
      "Хор цэнэглүүлдэг бол мэргэжлийн үйлчилгээтэй газар сонгох нь хамгийн чухал. Муу цэнэглэлт нь хэвлэх чанар болон принтерт асуудал үүсгэх эрсдэлтэй.",
  },
  {
    title:
      "Яагаад мэргэжлийн байгууллагаар хор солих, цэнэглүүлэх хэрэгтэй вэ?",
    mainImage:
      "https://www.inkstation.com.au/blog/wp-content/uploads/2025/01/pexels-photo-23534042.webp",
    advantages: [
      "Чанарын баталгаа – Хорны тоос, дүүргэлт, битүүмжлэл зэрэг стандартын дагуу хийгддэг.",
      "Принтерт эвдрэл учруулахгүй – Туршлагатай мэргэжилтнүүд зөв багаж, техник ашиглан ажилладаг.",
      "Үйлчилгээний дараах зөвлөгөө, баталгаа өгдөг – Хэрвээ асуудал гарвал хариуцлага хүлээх чадвартай.",
    ],
    recommendation:
      "Найдвартай газар сонгохын тулд хугацаа, дүүргэлтийн хэмжээ, хэрэглэж буй хорны төрөл-ийн талаар тодорхой асууж байх хэрэгтэй.",
  },
  {
    title: "Принтерээ урт хугацаанд сайн ажиллуулахын тулд юуг анхаарах вэ?",
    advantages: [
      "Зөв хор, зөв үйлчилгээ = урт настай принтер",
      "Тогтмол цэвэрлэгээ, засвар – Принтерийн дотоод хэсэг бохирдох нь саатлын гол шалтгаан болдог.",
      "Хуучин хорны хайрцгийг хаялгүйгээр дахин ашиглах боломжтой эсэхийг шалгах",
    ],
    mainImage:
      "https://www.inkstation.com.au/blog/wp-content/uploads/2025/01/pexels-photo-23534042.webp",
    recommendation:
      "Принтерийнхээ төрлөөс шалтгаалан тусгай хор, тусгай хэрэглээ шаардлагатай байж болно. Тиймээс мэргэжлийн зөвлөгөө аваарай. “Хямдхан хор” богино хугацаанд их зардал авчирч мэднэ.",
  },
];
