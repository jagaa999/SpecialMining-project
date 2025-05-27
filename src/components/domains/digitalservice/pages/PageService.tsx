"use client";

import DigitalServiceHomeHero from "../Widget/DigitalServiceHomeHero";

export default function DigitalServicePageService() {
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
          <div className="max-w-3xl text-center space-y-6">
            <h1 className="text-5xl font-bold">Мэргэжлийн үйлчилгээ</h1>
            <p className="text-xl">
              Принтер, хор, засвар — бүгдийг нэг дор. Чанартай, шуурхай,
              мэргэжлийн түвшинд үйлчилнэ.
            </p>
          </div>
        </section>

        {/* Service Overview */}
        <section className="min-h-screen bg-red-50 flex flex-col items-center justify-center px-10 py-20 space-y-24">
          <h2 className="text-4xl font-bold text-red-700 text-center">
            Манай үйлчилгээ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl text-center text-lg">
            <div className="bg-white px-6 py-24 rounded-xl shadow-md">
              <p className="font-semibold text-red-700 mb-2">
                Принтерийн засвар
              </p>
              <p>
                Бүх төрлийн принтерт оношилгоо, сэлбэг солих, засвар үйлчилгээ.
              </p>
            </div>
            <div className="bg-white px-6 py-24 rounded-xl shadow-md">
              <p className="font-semibold text-red-700 mb-2">Хорны цэнэглэлт</p>
              <p>Өндөр чанартай, албан ёсны хороор дахин цэнэглэх үйлчилгээ.</p>
            </div>
            <div className="bg-white px-6 py-24 rounded-xl shadow-md">
              <p className="font-semibold text-red-700 mb-2">
                Баталгаат тохируулга
              </p>
              <p>
                Принтерийн драйвер суулгалт, хэвлэх тохиргоо, хэрэглээний
                зөвлөгөө.
              </p>
            </div>
          </div>
        </section>

        {/* Why Service Matters */}
        <section className="min-h-screen bg-white flex items-center px-10 py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <img
              src="https://t3.ftcdn.net/jpg/01/83/17/52/360_F_183175251_i7StCgYFIAPnFBJ8DM2Qtw4dUzrzfDlD.jpg"
              alt="Why Service Matters"
              className="rounded-xl shadow-lg"
            />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-red-700">
                Яагаад мэргэжлийн сервис чухал вэ?
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Хорны зөв хэрэглээ - принтерийг хамгаална</li>
                <li>Хар цагаан болон өнгөтөөр хэвлэхэд зөв тохируулна</li>
                <li>Сэлбэг, эд анги бүрийг зөв оношилж, зөв засна</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="min-h-screen bg-red-100 flex flex-col justify-center items-center px-10 py-20 text-center space-y-6">
          <h2 className="text-4xl font-bold text-red-700">
            15+ жилийн туршлага
          </h2>
          <p className="text-lg max-w-2xl text-gray-700">
            Бид 2008 оноос хойш Монголын зах зээлд принтер, хорны үйлчилгээний
            чиглэлээр тогтмол ажиллаж ирсэн. Найдвартай, туршлагатай хамт олон,
            олон зуун байгууллага биднийг сонгосоор байна.
          </p>
        </section>

        {/* CTA */}
        <section className="min-h-[60vh] bg-red-600 text-white flex flex-col items-center justify-center px-10 text-center space-y-12">
          <h2 className="text-4xl font-bold">Үйлчилгээний тухай лавлах уу?</h2>
          <p className="text-xl max-w-xl">
            7012-2038 дугаар руу залгах эсвэл манай фэйсбүүк хуудсаар
            холбогдоорой.
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition cursor-pointer">
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
