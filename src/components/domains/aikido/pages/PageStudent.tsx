"use client";

import Link from "next/link";
import AikidoHomeHero from "../Widget/AikidoHomeHero";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";

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
        <h1>h1 Шавь нарт зориулав</h1>
        <h2>h2 Шавь нарт зориулав</h2>
        <h3>h3 Шавь нарт зориулав</h3>
        <h4>h4 Шавь нарт зориулав</h4>
        <h5>h5 Шавь нарт зориулав</h5>
        <h6 className="max-w-brand mx-auto">
          h6 Шавь нарт зориулавШавь нарт зориулавШавь нарт зориулавШавь нарт
          зориулавШавь нарт зориулавШавь нарт зориулавШавь нарт зориулавШавь
          нарт зориулавШавь нарт зориулавШавь нарт зориулавШавь нарт
          зориулавШавь нарт зориулавШавь нарт зориулавШавь нарт зориулавШавь
          нарт зориулавШавь нарт зориулавШавь нарт зориулавШавь нарт
          зориулавШавь нарт зориулавШавь нарт зориулавШавь нарт зориулавШавь
          нарт зориулавШавь нарт зориулавШавь нарт зориулавШавь нарт
          зориулавШавь нарт зориулавШавь нарт зориулавШавь нарт зориулавШавь
          нарт зориулавШавь нарт зориулав{" "}
        </h6>
        <p className="text-fg max-w-2xl mx-auto">
          Айкидо бол зөвхөн бие хамгаалах урлаг биш — харин хүн чанар, хүндлэл,
          тууштай байдал, багийн харилцаа зэргийг хамтад нь хөгжүүлдэг
          гайхамшигт сургууль юм.
        </p>

        <RenderAtom value={"Энэ бол theme"} type="button" className="" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
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
              className="p-8 bg-bg rounded-xl shadow-brand ring-1 ring-brand hover:ring-brand/70 transition space-y-4">
              <h3 className="text-xl font-semibold text-fg">{item.title}</h3>
              <p className="text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Дэвжээний дурсамжууд */}
      <section className="bg-brand/5 px-10 py-20 text-center">
        <h2 className="text-4xl font-bold text-brand mb-6">
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
              className="bg-brand/2 p-6 rounded-xl shadow-lg border border-brand/70 text-left">
              <p className="text-gray-700 italic mb-4">{item.quote}</p>
              <p className="text-sm font-semibold text-brand">— {item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Амжилтын Тайз */}
      <section className="bg-primary px-10 py-20 text-center">
        <div className="text-4xl font-bold text-primary bg-pink-200 mb-6">
          Амжилтын Тайз ddd
        </div>
        <div className="text-4xl text-primary bg-secondary p-4 rounded">
          Hello from theme!
        </div>
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
        <Link
          href="/register"
          className="inline-block bg-white text-red-600 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition">
          Хичээлд бүртгүүлэх
        </Link>
      </section>
    </div>
  );
}
