"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../layout/Layout";
import useUnsplash from "../../../../config/hooks/useUnsplash";

const PageHome = () => {
  const { imageUrl } = useUnsplash("tools workshop industrial");
  const bgImage =
    imageUrl ||
    "https://cdn.moto.mn/moto/landing/14_sata/8e7226f3-3a26-4bcc-bceb-c0395aa35317.jpg?t=1751340548285";

  return (
    <Layout>
      <main className="w-full">
        {/* ✅ Hero Banner */}
        <section
          className="relative text-white py-28 text-center px-4 bg-cover bg-center transition-all duration-300"
          style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide leading-tight text-white/90">
              Мэргэжлийн багаж хэрэгслийн төгс шийдэл
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Ажлыг хөнгөвчлөх хүчирхэг сонголт — SATA Tools Mongolia танд
              дэлхийн түвшний хэрэгслийг санал болгож байна.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Link href="/shop">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-lg transition">
                  Дэлгүүр орох
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-white hover:bg-white hover:text-green-700 px-6 py-3 text-lg rounded-lg transition">
                  Бидэнтэй холбогдох
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 px-6 lg:px-20">
          <div className="max-w-screen-xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                SATA бол сонголт биш — Шийдвэр юм
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Бидний үнэт зүйлс мэргэжлийн хэрэглэгчдийн амжилтыг
                тодорхойлдог.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
                  title: "Инноваци ба Нарийвчлал",
                  desc: "Шинэ санаа, шинэ материалуудтай хөл нийлүүлэн алхдаг.",
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/2991/2991108.png",
                  title: "Дэлхийн итгэлцэл",
                  desc: "130+ оронд танигдсан чанар, найдвартай байдал.",
                },
                {
                  icon: "https://cdn-icons-png.flaticon.com/512/545/545678.png",
                  title: "Бат бөх байдал",
                  desc: "Cr-V болон S2 ган, олон жилийн хэрэглээнд зориулагдсан.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-6">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-contain grayscale hover:grayscale-0 transition"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Featured Products */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-screen-xl mx-auto px-6 lg:px-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Онцлох бүтээгдэхүүнүүд
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Түлхүүр ком",
                  image:
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1751341917/autozar6/mainimages/2025/sata/jinhen_tulhuurcom_kmejgn.jpg",
                  desc: "Хамгийн их борлуулалттай гар багажны багц.",
                  price: "₮129,000",
                },
                {
                  name: "Socket Set 40PCS",
                  image:
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1751341917/autozar6/mainimages/2025/sata/tulhuurcom_ewjso3.jpg",
                  desc: "Мэргэжлийн хэрэглээнд тохирсон олон төрлийн socket.",
                  price: "₮98,000",
                },
                {
                  name: "Отверка сет",
                  image:
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1751341917/autozar6/mainimages/2025/sata/awtirk_c4rj19.webp",
                  desc: "Соронзон хошуутай отверканы иж бүрдэл.",
                  price: "₮38,500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 group">
                  <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{item.desc}</p>
                  <p className="text-green-600 font-bold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ Why SATA */}
        <section className="py-20 px-6 text-center bg-white">
          <div className="max-w-screen-md mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Яагаад SATA-г сонгох вэ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-left">
              <div>✅ ISO болон DIN стандартын баталгаатай</div>
              <div>✅ Хатуулаг өндөр Cr-V ган материал</div>
              <div>✅ Олон улсын баталгаат үйлчилгээ</div>
              <div>✅ Мэргэжлийн засварчдад зориулсан загвар</div>
            </div>
          </div>
        </section>

        {/* ✅ CTA */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 px-6">
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Ажлыг мэргэжлийн түвшинд — SATA TOOLS
              </h2>
              <p className="text-lg text-white/90">
                Засвар, угсралт, авто болон үйлдвэрлэлийн салбарт хамгийн чухал
                зүйл бол зөв багаж. SATA нь таны ажлын итгэлтэй түнш байх болно.
                Өндөр чанар, бат бөх байдал, мэргэжлийн хэрэглээнд зориулагдсан
                шийдэл — энэ бол SATA.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dg2qmka48/image/upload/v1751341800/autozar6/mainimages/2025/sata/actino_lhr0jd.jpg"
                  alt="SATA action"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default PageHome;
