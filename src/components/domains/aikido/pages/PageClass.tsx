"use client";

import Link from "next/link";
import AikidoHomeHero from "../Widget/AikidoHomeHero";

export default function PageClass() {
  return (
    <div className="w-full bg-white text-gray-900">
      {/* Banner */}
      <AikidoHomeHero
        item={{
          backgroundImage: "https://wallpapercave.com/wp/wp2848821.jpg",
          title: "Aikido Training in Mongolia",
          subtitle:
            "Өөртөө итгэх итгэл, сахилга бат, хамгаалалтын урлагийг нэг дороос",
          buttons: [
            {
              label: "Хичээллэх",
              href: "/register",
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

      {/* Сургалтын төрлүүд */}
      <section className="bg-white px-10 py-20 text-center space-y-12">
        <h2 className="text-4xl font-bold text-red-700">Сургалтын төрлүүд</h2>
        <p className="text-lg text-gray-600">
          Айкидогийн хичээлүүд дараах ангилалтайгаар явагдана:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
          {[
            {
              title: "Хүүхдийн хичээл",
              desc: "6–12 насныханд зориулсан тусгайлсан арга барил, бие хамгаалах чадвар суулгах хөтөлбөр.",
            },
            {
              title: "Залуучуудын хичээл",
              desc: "Өсвөр үеийнхэнд зориулсан уян хатан, хөдөлгөөнтэй хичээлүүд.",
            },
            {
              title: "Насанд хүрэгчдийн хичээл",
              desc: "Ажил, амьдралын хажуугаар стресс тайлах, хамгаалалтын ур чадвар эзэмших боломж.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-red-50 rounded-xl shadow-md ring-1 ring-red-200 hover:ring-red-400 transition">
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Цагийн хуваарь */}
      <section className="bg-red-50 px-10 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-red-700">Цагийн хуваарь</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-red-100">
                <th className="p-4 border">Өдөр</th>
                <th className="p-4 border">Цаг</th>
                <th className="p-4 border">Түвшин</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="p-4 border">Даваа, Лхагва</td>
                <td className="p-4 border">18:00 - 19:30</td>
                <td className="p-4 border">Анхан шат</td>
              </tr>
              <tr>
                <td className="p-4 border">Мягмар, Пүрэв</td>
                <td className="p-4 border">19:30 - 21:00</td>
                <td className="p-4 border">Ахисан түвшин</td>
              </tr>
              <tr>
                <td className="p-4 border">Бямба</td>
                <td className="p-4 border">12:00 - 13:30</td>
                <td className="p-4 border">Бүх нас</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Багш нар */}
      <section className="bg-white px-10 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-700">Манай багш нар</h2>
          <p className="text-gray-600">
            Туршлагатай, олон улсын эрхтэй багш нар танд заана
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            {
              name: "Сэнсэй Баяр",
              image:
                "https://cdn.moto.mn/moto/landing/11_aikido/dcb9e1e0-a177-4f46-9c20-6ed456968454.png?t=1749545071271",
              rank: "2-р дан хар бүс",
              desc: "Японд 5 жил суралцсан, олон улсын тэмцээний оролцогч",
            },
            {
              name: "Сэнсэй Энхээ",
              image:
                "https://cdn.moto.mn/moto/landing/11_aikido/8c69e6df-4851-4164-8680-77199a72992d.png?t=1749545291104",
              rank: "1-р дан хар бүс",
              desc: "10+ жилийн багшлах туршлагатай",
            },
          ].map((t, i) => (
            <div key={i} className="w-64 text-center space-y-4">
              <img
                src={t.image}
                alt={t.name}
                className="rounded-full w-40 h-40 object-cover mx-auto ring-4 ring-red-200"
              />
              <h3 className="text-xl font-semibold text-red-700">{t.name}</h3>
              <p className="text-sm text-gray-500 italic">{t.rank}</p>
              <p className="text-gray-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Бүртгэл CTA */}
      <section className="bg-red-600 text-white text-center px-10 py-20">
        <h2 className="text-4xl font-bold mb-4">
          Та хичээллэхийг хүсэж байна уу?
        </h2>
        <p className="text-lg mb-8">
          Доорх товч дээр дарж бүртгэл илгээгээрэй. Бид таньтай холбогдох болно.
        </p>
        <Link
          href="/register/"
          className="inline-block bg-white text-red-600 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition">
          Хичээлд бүртгүүлэх
        </Link>
      </section>
    </div>
  );
}
