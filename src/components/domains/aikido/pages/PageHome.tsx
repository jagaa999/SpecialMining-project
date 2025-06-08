"use client";

import { Icon } from "@iconify/react";
import AikidoHomeHero from "../Widget/AikidoHomeHero";
// import DigitalServiceHomeHero from "../Widget/DigitalServiceHomeHero";

export default function DigitalServicePageHome() {
  //   {
  //   item = item_local,
  // }: {
  //   item: any;
  // }
  return (
    <>
      <AikidoHomeHero
        item={{
          backgroundImage: "https://wallpapercave.com/wp/wp2848821.jpg",
          title: "Aikido in Mongolia",
          subtitle: "Бүгд суралцах болох гайхамшигт бие хамгаалах урлаг",
          buttons: [
            {
              label: "Хичээллэх",
              href: "/class",
              style: "primary",
            },
            {
              label: "About Us",
              href: "/about",
              style: "light",
            },
          ],
        }}
      />

      {/* <PanelMain> */}
      <div className="w-full bg-white text-gray-900">
        {/* Hero Banner */}
        <section className="h-screen bg-white text-gray-700 flex items-center justify-center px-10">
          <div className="max-w-4xl text-center space-y-12">
            <h1 className="text-5xl font-light uppercase leading-snug text-red-600">
              Айкидо хичээллэхийг урьж байна.
            </h1>
            <p className="text-xl">
              Хар бүс, дантай туршлагатай, найрсаг багш нар
              <br />
              танд хичээнгүйлэн заах болно.
            </p>
            <button className="bg-slate-200 text-red-600 px-12 py-6 text-xl rounded-full font-bold hover:bg-gray-100 transition">
              Хичээллэх
            </button>
          </div>
        </section>

        {/* Хорны ач холбогдол */}
        {/* <section className="min-h-screen bg-gradient-to-br from-white via-red-200 to-pink-100 py-24 space-y-24">
          <h2 className="text-4xl font-bold text-red-700 text-center">
            Чухал ойлголт
          </h2>

          <PanelMain className="flex flex-col items-center space-y-24">
            {_.map(tonerTips, (item: any, index: number) => (
              <BlockHalf
                key={item?.id || index}
                reverse={index % 2 === 1}
                stretch={true}>
                <img
                  src={item?.mainimage}
                  alt="Хорны ач тус"
                  className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                />
                <div className="space-y-4 w-full h-full">
                  <h2 className="text-3xl font-bold text-red-600">
                    {item?.title}
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-lg">
                    {_.map(
                      item?.advantages,
                      (advantage: string, index: number) => (
                        <li key={index} className="text-gray-700">
                          {advantage}
                        </li>
                      )
                    )}
                  </ul>
                  <div className="text-sm italic text-gray-700">
                    📝 Зөвлөмж: {item?.recommendation}
                  </div>
                </div>
              </BlockHalf>
            ))}
          </PanelMain>
        </section> */}

        {/* Давуу талууд */}
        <section className="min-h-screen bg-white flex items-center px-10 py-20">
          <div className="max-w-5xl mx-auto w-full text-center space-y-12">
            <h2 className="text-4xl font-bold text-red-700">
              Бидний давуу тал
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
              {[
                {
                  icon: "mdi:school", // сургалтын тогтолцоо
                  title: "Тогтмол сургалт, мэргэжлийн багш нарын удирдлага",
                },
                {
                  icon: "mdi:earth", // олон улсын холбоо
                  title: "Олон улсын Айкидогийн холбоодод бүрэн эрхтэй гишүүн",
                },
                {
                  icon: "mdi:account-group", // олон нийтэд нээлттэй
                  title: "Нас, хүйс хамаарахгүй хүн бүрт тохирсон хичээл",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-red-50 px-8 py-24 rounded-xl shadow-md ring-1 ring-red-200 hover:shadow-2xl hover:ring-red-400 transition-all duration-700 ease-in-out text-gray-700 flex flex-col items-center space-y-4">
                  <Icon
                    icon={item.icon}
                    className="text-red-600"
                    width={78}
                    height={78}
                  />
                  <p className="font-semibold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Хорны төрөл */}
        <section className="min-h-screen bg-red-50 flex items-center px-10 py-12">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-red-700">
              Янз бүрийн довтолгооноос хамгаалж сурна
            </h2>
            <p className="text-lg">
              Хүүхэд, залуус, насанд хүрэгчдэд зориулсан ангилалтай
              хичээлүүдтэй.
            </p>
            <p>
              Анхан шатнаас ахисан түвшин хүртэлх сургалтуудыг мэргэжлийн багш
              нар удирдан явуулдаг.
            </p>

            <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
              {[
                {
                  name: "Бугуйнаас атгах (Katate-dori)",
                  logo: "https://thumbs.dreamstime.com/b/hand-sketch-fighters-aikido-vector-illustration-69144110.jpg",
                },
                {
                  name: "Хоёр гараар бугуй атгах (Ryote-dori)",
                  logo: "https://thumbs.dreamstime.com/b/hand-sketch-fighters-aikido-vector-illustration-69144110.jpg",
                },
                {
                  name: "Толгой руу цохих (Shomen-uchi)",
                  logo: "https://thumbs.dreamstime.com/b/hand-sketch-fighters-aikido-vector-illustration-69144110.jpg",
                },
                {
                  name: "Хажуунаас цохих (Yokomen-uchi)",
                  logo: "https://thumbs.dreamstime.com/b/hand-sketch-fighters-aikido-vector-illustration-69144110.jpg",
                },
                {
                  name: "Цээж рүү түлхэх (Mune-tsuki)",
                  logo: "https://thumbs.dreamstime.com/b/hand-sketch-fighters-aikido-vector-illustration-69144110.jpg",
                },
                {
                  name: "Хутгатай дайрах (Tanto-tori)",
                  logo: "https://thumbs.dreamstime.com/b/hand-sketch-fighters-aikido-vector-illustration-69144110.jpg",
                },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className="flex flex-col items-center bg-white px-6 py-12 rounded-xl shadow-md ring-1 ring-red-200 hover:shadow-2xl hover:ring-red-400 transition-all duration-500 ease-in-out w-56">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-24 object-contain mb-5"
                  />
                  <span className="text-gray-500 font-light text-sm">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Захиалга CTA */}
        {/* <section className="h-screen bg-red-600 text-white flex flex-col items-center justify-center px-10 text-center space-y-12">
          <h2 className="text-4xl font-bold">Онлайнаар захиалаарай</h2>
          <p className="text-xl max-w-xl">
            Та бидэнтэй холбогдож хүссэн хороо яг одоо захиалаарай. Бид 1-3
            цагийн дотор юмуу маргааш өдөр хүргэж өгнө!
          </p>
          <button className="bg-white text-red-600 px-12 py-6 text-xl rounded-full font-bold hover:bg-gray-100 transition">
            Захиалга өгөх
          </button>
        </section> */}
      </div>
      {/* </PanelMain> */}
    </>
  );
}

// const tonerTips = [
//   {
//     title: "Яагаад оригиналь (OEM) хор хэрэглэх нь илүү ухаалаг сонголт вэ?",
//     mainimage:
//       "https://www.inkstation.com.au/blog/wp-content/uploads/2025/01/pexels-photo-23534042.webp",
//     advantages: [
//       "Хэвлэлийн чанар өндөр – Үйлдвэрлэгчийн өөрийн хор учраас өнгөний ялгарал, хурц дүрслэл бүрэн хадгалагдана.",
//       "Принтерт тохирсон найдвартай байдал – Хор, принтер хоёр хоорондоо бүрэн нийцтэй тул саатал, эвдрэл үүсэх эрсдэл багатай.",
//       "Баталгаат хугацаа алдагддаггүй – Оригиналь хор хэрэглэснээр үйлдвэрлэгчийн баталгааг хадгалж үлдэнэ.",
//     ],
//     recommendation:
//       "Хэрвээ та албан бичиг, гэрээ, тайлан эсвэл нарийн зураг хэвлэдэг бол OEM хор бол танай хамгийн найдвартай хөрөнгө оруулалт.",
//   },
//   {
//     title: "“A Copy” сайн чанарын хор хэрэглэх нь яагаад үр дүнтэй вэ?",
//     mainimage:
//       "https://www.inkstation.com.au/blog/wp-content/uploads/2025/01/pexels-photo-23534042.webp",
//     advantages: [
//       "Өртөг багатай мөртлөө чанартай – Зарим сайн брендийн хуулбар хор нь OEM-тэй дүйцэхүйц хэвлэх чанартай.",
//       "Өндөр хуудасны тоо – Зарим “compatible” хорнууд илүү их хуудас хэвлэх чадалтай байдаг.",
//       "Байгаль орчинд ээлтэй хувилбарууд ч бий – Зарим брэндүүд дахин боловсруулсан савлагаатай, хаягдал багатайгаар үйлдвэрлэдэг.",
//     ],
//     recommendation:
//       "Хэрвээ та өртөгөө бууруулах шаардлагатай бол, чанар сайтай A copy хор үйлдвэрлэгч (Ex: G&G, JetWorld, Static Control гэх мэт) сонгохыг зөвлөж байна.",
//   },
//   {
//     title: "Хор цэнэглүүлэх нь ямар үед хамгийн оновчтой шийдэл вэ?",
//     mainimage:
//       "https://www.inkstation.com.au/blog/wp-content/uploads/2025/01/pexels-photo-23534042.webp",
//     advantages: [
//       "Хамгийн хямд өртөгтэй хувилбар – Шинэ хор худалдаж авахтай харьцуулахад 2–3 дахин хямд.",
//       "Олон удаа ашиглах боломжтой – Зарим хорны хайрцаг 3–5 удаа цэнэглэгдэх боломжтой.",
//       "Хог хаягдал буурна – Нэг хайрцгийг дахин дахин ашигласнаар байгальд ээлтэй.",
//     ],
//     recommendation:
//       "Хор цэнэглүүлдэг бол мэргэжлийн үйлчилгээтэй газар сонгох нь хамгийн чухал. Муу цэнэглэлт нь хэвлэх чанар болон принтерт асуудал үүсгэх эрсдэлтэй.",
//   },
//   {
//     title:
//       "Яагаад мэргэжлийн байгууллагаар хор солих, цэнэглүүлэх хэрэгтэй вэ?",
//     mainimage:
//       "https://www.inkstation.com.au/blog/wp-content/uploads/2025/01/pexels-photo-23534042.webp",
//     advantages: [
//       "Чанарын баталгаа – Хорны тоос, дүүргэлт, битүүмжлэл зэрэг стандартын дагуу хийгддэг.",
//       "Принтерт эвдрэл учруулахгүй – Туршлагатай мэргэжилтнүүд зөв багаж, техник ашиглан ажилладаг.",
//       "Үйлчилгээний дараах зөвлөгөө, баталгаа өгдөг – Хэрвээ асуудал гарвал хариуцлага хүлээх чадвартай.",
//     ],
//     recommendation:
//       "Найдвартай газар сонгохын тулд хугацаа, дүүргэлтийн хэмжээ, хэрэглэж буй хорны төрөл-ийн талаар тодорхой асууж байх хэрэгтэй.",
//   },
//   {
//     title: "Принтерээ урт хугацаанд сайн ажиллуулахын тулд юуг анхаарах вэ?",
//     advantages: [
//       "Зөв хор, зөв үйлчилгээ = урт настай принтер",
//       "Тогтмол цэвэрлэгээ, засвар – Принтерийн дотоод хэсэг бохирдох нь саатлын гол шалтгаан болдог.",
//       "Хуучин хорны хайрцгийг хаялгүйгээр дахин ашиглах боломжтой эсэхийг шалгах",
//     ],
//     mainimage:
//       "https://www.inkstation.com.au/blog/wp-content/uploads/2025/01/pexels-photo-23534042.webp",
//     recommendation:
//       "Принтерийнхээ төрлөөс шалтгаалан тусгай хор, тусгай хэрэглээ шаардлагатай байж болно. Тиймээс мэргэжлийн зөвлөгөө аваарай. “Хямдхан хор” богино хугацаанд их зардал авчирч мэднэ.",
//   },
// ];
