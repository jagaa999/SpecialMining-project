"use client";

import React from "react";
import MungundentHeader from "../components/MungundentHeader";
import MungundentFooter from "../components/MungundentFooter";
import useUnsplash from "src/config/hooks/useUnsplash";

export default function PageHome() {
    const { imageUrl, loading, error } = useUnsplash("dental clinic japanese");
    const defaultImage = "https://images.unsplash.com/photo-1588776814546-ec7e8bb3c9f5";

    return (
        <main className="bg-white text-gray-800 font-[Arial]">
            <MungundentHeader />

            {/* Hero Banner */}
            <section
                className="h-[100vh] bg-cover bg-center flex items-center justify-center relative"
                style={{
                    backgroundImage: `url(${error ? defaultImage : imageUrl?.regular || defaultImage})`,
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center px-4 font-[Arial]">
                    <h1
                        className="text-6xl font-bold mb-6 tracking-wide drop-shadow-xl"
                        style={{ color: "#ffffff" }}
                    >
                        Итгэлтэй инээмсэглэлээр амьдралаа гэрэлтүүл
                    </h1>
                    <p
                        className="text-2xl"
                        style={{ color: "#ffffff" }}
                    >
                        Мөнгөндент – Орчин үеийн шүдний эмчилгээний төв
                    </p>
                </div>
            </section>

            {/* Widget 1 - Intro */}
            <section className="max-w-screen-xl mx-auto py-24 px-6 text-center border-b">
                <h2 className="text-4xl font-bold mb-6 text-[#1d3557]">Бидний эрхэм зорилго</h2>
                <p className="text-xl leading-9 text-gray-700 max-w-4xl mx-auto">
                    Японы стандарт, аргачлалаар өвдөлт багатай, хурдан шуурхай эмчилгээг үзүүлж, та бүхэнд итгэл, аюулгүй байдлыг мэдрүүлнэ.
                </p>
            </section>

            {/* Widget 2 - All-on-4 */}
            <section className="py-24 px-6 bg-[#f7f8fa] border-b">
                <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/09f32b5d-3153-4796-b50b-f96105ec1694.jpg?t=1749804114965l" className="rounded-lg shadow-xl" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">All-on-4 технологи</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Зөвхөн 4 суулгац ашиглан бүхэл шүдийг нөхөн сэргээх боломжтой. Богино хугацаанд, байгалийн мэт шүдтэй болно.
                        </p>
                        <ul className="list-disc list-inside text-left text-gray-600 space-y-1">
                            <li>Нэг өдрийн дотор түр зуурын шүдтэй болох</li>
                            <li>Суулгацын тоог хамгийн бага байлгана</li>
                            <li>Удаан эдэлгээтэй, бат бөх шийдэл</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Widget 3 - Services */}
            <section className="py-24 px-6 bg-white border-b font-[Arial]">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12 text-[#1d3557] tracking-wide">Бидний үйлчилгээ</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            {
                                title: "Имплант",
                                desc: "Япон технологиор байгалийн мэт бат бөх шүд нөхнө.",
                                icon: "🦷"
                            },
                            {
                                title: "Шүд цайруулах",
                                desc: "Япон аюулгүй бодисоор хурдан, үр дүнтэй цайруулалт.",
                                icon: "✨"
                            },
                            {
                                title: "Хүүхдийн эмчилгээ",
                                desc: "Хүүхдэд ээлтэй, тайван орчинд хийгддэг эмчилгээ.",
                                icon: "👶"
                            },
                            {
                                title: "Эстетик шүд засал",
                                desc: "Инээмсэглэлээ бүрэн өөрчлөх боломжтой гоо заслын шийдлүүд.",
                                icon: "😄"
                            },
                            {
                                title: "Яаралтай тусламж",
                                desc: "24/7 шүдний яаралтай тусламжийн үйлчилгээ.",
                                icon: "🚑"
                            },
                            {
                                title: "Гүн цэвэрлэгээ",
                                desc: "Гүн давхаргын цэвэрлэгээ ба урьдчилан сэргийлэх үйлчилгээ.",
                                icon: "🧼"
                            }
                        ].map((service, idx) => (
                            <div
                                key={idx}
                                className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-[#1d3557] mb-2 group-hover:underline transition">{service.title}</h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Widget 4 - Equipment */}
            <section className="py-24 px-6 bg-[#f7f8fa] border-b">
                <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold mb-4">Дэвшилтэт япон тоног төхөөрөмж</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            CAD/CAM, 3D рентген зэрэг Япон улсаас шууд оруулсан өндөр нарийвчлалтай багаж хэрэгсэл ашигладаг.
                        </p>
                        <ul className="list-disc list-inside text-left text-gray-600 space-y-1">
                            <li>Нарийн оношилгоо</li>
                            <li>Хурдан үйлчилгээ</li>
                            <li>Цэвэр, аюулгүй орчин</li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2">
                        <img src="https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/bc0f6f78-1953-4e51-9a46-65d902b667c8.jpg?t=1749804181553" className="rounded-lg shadow-xl" />
                    </div>
                </div>
            </section>

            {/* Widget 5 - Doctors */}
            <section className="py-24 px-6 bg-white text-center border-b">
                <h2 className="text-3xl font-bold mb-6 text-[#1d3557]">Мэргэжлийн эмчийн зөвлөгөө</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                    Танд хамгийн тохирсон эмчилгээг сонгоход туршлагатай эмч нар маань туслах болно.
                </p>
                <img src="https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/c055dd13-8186-4cc0-982e-56654d06b710.jpg?t=1749804311899" className="mx-auto w-full max-w-2xl rounded-lg shadow-lg" />
            </section>


            <section className="py-24 px-6 bg-white border-b text-center">
                <div className="max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-[#1d3557] tracking-wide">Үйлчлүүлэгчдийн сэтгэгдэл</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-[#f7f8fa] p-6 rounded-xl shadow hover:shadow-md transition duration-300">
                            <p className="text-gray-700 italic">Мөнгөндент-т ирсэн цагаас л сэтгэл амар байлаа. Эмч нар маш чадварлаг, орчин нь ч тухтай.”</p>
                            <span className="mt-4 block font-bold text-[#1d3557]">— Батцэцэг</span>
                        </div>
                        <div className="bg-[#f7f8fa] p-6 rounded-xl shadow hover:shadow-md transition duration-300">
                            <p className="text-gray-700 italic">“Япон хэв маягтай цэвэрхэн орчинд, маш тайвнаар эмчлүүлсэндээ баяртай байна.”</p>
                            <span className="mt-4 block font-bold text-[#1d3557]">— Тэмүүлэн</span>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-24 px-6 bg-[#f7f8fa] border-b font-[Arial]">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-12 text-[#1d3557] tracking-wide">Эмнэлгийн орчны зургууд</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/19978983-c074-40d8-a6d9-1ee54eb937e3.jpg?t=1749804601937",
                            "https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/2ec1b5cd-3920-4980-aee0-c0e3ec31b555.png?t=1749804601928",
                            "https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/c87dd73a-5cfd-4df8-ae28-111d4362c32c.jpg?t=1749804602083",
                            "https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/b609afa4-fe35-45f0-aa6e-6913fbe1ae6b.jpg?t=1749804602059"
                        ].map((url, idx) => (
                            <div key={idx} className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition duration-300">
                                <img src={url} alt={`clinic-${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <MungundentFooter />
        </main>
    );
}
