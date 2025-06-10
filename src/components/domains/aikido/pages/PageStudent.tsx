"use client";

import AikidoHomeHero from "../Widget/AikidoHomeHero";

export default function PageStudent() {
  return (
    <div className="w-full bg-white text-gray-900">
      {/* Banner */}
      <AikidoHomeHero
        item={{
          backgroundImage: "https://wallpapercave.com/wp/wp10826264.jpg",
          title: "Айкидо шавь нарт зориулав",
          subtitle:
            "Биеэ хянах ухаан, сахилга бат, хамт олонч чанар энд эхэлнэ",
          buttons: [
            {
              label: "Сургалт руу буцах",
              href: "/class",
              style: "primary",
            },
            {
              label: "Нүүр хуудас",
              href: "/",
              style: "light",
            },
          ],
        }}
      />

      {/* Шавь нарт зориулсан контент */}
      <section className="bg-white px-10 py-20 text-center space-y-12">
        <h2 className="text-4xl font-bold text-red-700">Шавь нарт зориулав</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Айкидо бол зөвхөн бие хамгаалах урлаг биш — харин хүн чанар, хүндлэл,
          тууштай байдал, багийн харилцаа зэргийг хамтад нь хөгжүүлдэг
          гайхамшигт сургууль юм.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Сахилга бат",
              desc: "Хичээл бүрт оролцохдоо дүрэмт хувцас, хүндлэл, дэг журмыг баримтлана.",
            },
            {
              title: "Тасралтгүй хөгжил",
              desc: "Шинэ техник бүрийг тууштай давтан сурч, өөрийгөө сорьж байгаарай.",
            },
            {
              title: "Багийн хамт олон",
              desc: "Айкидогийн орчинд хамт олноороо суралцах нь зүгээр нэг дасгал биш — харин хамтын хүндлэл юм.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-red-50 rounded-xl shadow-md ring-1 ring-red-200 hover:ring-red-400 transition space-y-4">
              <h3 className="text-xl font-semibold text-red-700">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Дэвжээний дурсамжууд */}
      <section className="bg-red-50 px-10 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-700 mb-6">
          Шавь нарын дурсамж
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            {
              name: "Анужин (15 настай)",
              quote:
                "Айкидо намайг өөртөө итгэлтэй болгосон. Анх айж эхэлж байсан ч одоо бол би юуг ч туулж чадна гэдэгтээ итгэдэг болсон.",
            },
            {
              name: "Билгүүн (23 настай)",
              quote:
                "Хамгийн гоё нь бол багш нарынхаа заах арга, тэвчээр, дэмжлэг. Би олон найзтай болсон.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-lg border border-red-200 text-left">
              <p className="text-gray-700 italic mb-4">"{item.quote}"</p>
              <p className="text-sm font-semibold text-red-600">
                — {item.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Амжилтын Тайз */}
      <section className="bg-white px-10 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-700 mb-6">Амжилтын Тайз</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Бат-Оргил",
              image: "/achievements/bat-orgil.jpg",
              level: "1-р дан хар бүс",
              result: "2024 оны Улсын Айкидо тэмцээний хүрэл медаль",
              date: "2024.03.22",
            },
            {
              name: "Номин-Эрдэнэ",
              image: "/achievements/nominerdene.jpg",
              level: "2-р кю",
              result: "Айкидо шалгалт амжилттай өгч дэвшив",
              date: "2025.01.10",
            },
          ].map((student, i) => (
            <div
              key={i}
              className="bg-red-50 p-6 rounded-xl shadow-md space-y-4">
              <img
                src={student.image}
                alt={student.name}
                className="rounded-lg w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold text-red-700">{student.name}</h3>
              <p className="text-sm italic text-gray-600">{student.level}</p>
              <p className="text-gray-700">{student.result}</p>
              <p className="text-xs text-gray-500">{student.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 text-white text-center px-10 py-20">
        <h2 className="text-4xl font-bold mb-4">
          Та ч бас бидэнтэй нэгдэх үү?
        </h2>
        <p className="text-lg mb-8">
          Айкидо бол амьдралын ур чадварыг заадаг. Өнөөдөр л эхэл!
        </p>
        <a
          href="/register"
          className="inline-block bg-white text-red-600 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition">
          Хичээлд бүртгүүлэх
        </a>
      </section>
    </div>
  );
}
