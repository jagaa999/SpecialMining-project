"use client";

import DigitalServiceHomeHero from "../Widget/DigitalServiceHomeHero";

export default function DigitalServicePageAbout() {
  //   {
  //   item = item_local,
  // }: {
  //   item: any;
  // }
  return (
    <>
      <DigitalServiceHomeHero item={item_local?.hero} />

      {/* <PanelMain> */}
      <div className="w-full bg-white text-gray-900">
        {/* Hero */}
        <section className="min-h-screen bg-gradient-to-r from-red-600 to-red-400 text-white flex items-center justify-center px-10">
          <div className="max-w-2xl text-center space-y-6">
            <h1 className="text-5xl font-bold">Бид хэн бэ?</h1>
            <p className="text-xl">
              Принтерийн хор, засвар үйлчилгээ, дахин цэнэглэлтээр мэргэшсэн
              компани юм.
            </p>
            <p className="text-xl">
              15+ жилийн туршлага, мянга мянган сэтгэл ханамжтай хэрэглэгчидтэй.
            </p>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 flex items-center justify-center px-10">
          <div className="max-w-2xl text-center space-y-6">
            <h1 className="text-5xl font-bold">Товч түүх</h1>

            <p className="text-xl">
              2007 онд байгуулагдан, 2010 онд програм хангамжийн үйлчилгээ,
              компьютерийн засвар үйлчилгээ, гадаад, дотоод худалдаа чиглэлээр
              байгуулагдан өнөөг хүртэл тасралтгүй үйл ажиллагаа явуулж байгаа
              болно. Бид мэдээллийн технологийн бүтээгдэхүүнүүд, компьютер
              тэдгээрийн дагалдах хэрэгслийг БНХАУ, Малайз улсаас импортоор
              оруулан ирж борлуулдаг.
            </p>
            <p className="text-xl">
              Хүний биед сөрөг нөлөөгүй чанар стандартын шаардлага хангасан
              хэвлэгч, хувилагч ийн “ACO” брэндийн хорыг Монгол улсад албан ёсны
              эрхтэйгээр борлуулж байна.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="min-h-screen bg-white flex items-center px-10 py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://c1.wallpaperflare.com/preview/474/958/384/cmyk-printer-colors-print.jpg"
              alt="Philosophy"
              className="rounded-xl shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-red-700 mb-4">
                Манай философи
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
                <li>Үр ашигтай, хэмнэлттэй шийдэл санал болгох</li>
                <li>Тогтвортой байгальд ээлтэй хэрэглээг дэмжих</li>
                <li>Хэрэглэгчийн сэтгэл ханамжийг тэргүүнд тавих</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Buy */}
        <section className="min-h-screen bg-gray-100 flex items-center px-10 py-20">
          <div className="max-w-4xl mx-auto w-full space-y-12 text-gray-800">
            <h2 className="text-4xl font-bold text-red-700 text-left">
              Бараа бүтээгдэхүүнийг хэрхэн худалдан авах вэ?
            </h2>
            <ol className="divide-y divide-red-200 text-lg">
              {[
                {
                  title: "• Каталогоос сонголт хийнэ",
                  text: "Хэвлэгч, хувилагч төхөөрөмжид тохирох хорыг каталогоос сонгоно.",
                },
                {
                  title: "• Захиалга өгөх",
                  text: "“Монгол шуудан”-гийн салбарт очих эсвэл 7012-2038 дугаарт захиалга өгч дэлгэрэнгүй мэдээлэл авна.",
                },
                {
                  title: "• Нэхэмжлэл авах",
                  text: "Захиалгын дагуу байгууллагын нэхэмжлэлийг бичүүлж авна.",
                },
                {
                  title: "• Төлбөр төлөх",
                  text: "Төлбөр шилжүүлэхдээ байгууллагын нэр, регистр, хаяг, утсыг тодорхой бичнэ.",
                },
                {
                  title: "• Бараа хүргэлт",
                  text: "Төлбөр баталгаажмагц шуудангаар барааг хүргэнэ.",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="py-4 border-b border-red-200 last:border-none">
                  <p className="font-semibold text-red-700">{item.title}</p>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

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
        <section className="min-h-[60vh] bg-red-600 text-white flex flex-col items-center justify-center px-10 text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Та бидэнтэй холбогдоход бэлэн үү?
          </h2>
          <p className="text-xl max-w-xl">
            Бид танд хэрэгтэй бүхий л мэдээлэл, тусламжийг өгөхөд бэлэн байна.
            Өнөөдөр холбогдож захиалгаа өгөөрэй!
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition">
            Холбогдох
          </button>
        </section>
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
