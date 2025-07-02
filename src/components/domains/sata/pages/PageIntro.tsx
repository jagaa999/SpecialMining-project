import React from "react";
import Image from "next/image";
import Layout from "../layout/Layout";

const PageIntro = () => {
    return (
        <Layout>
            <main className="w-full">
                {/* ✅ Hero */}
                <section className="relative py-32 text-center px-4 bg-cover bg-center transition-all duration-300 text-white" style={{ backgroundImage: `url(https://res.cloudinary.com/dg2qmka48/image/upload/v1751343171/autozar6/mainimages/2025/sata/intro_mjs3oy.jpg)` }}>
                    <div className="absolute inset-0 bg-black/70 z-0" />
                    <div className="relative z-10 max-w-5xl mx-auto space-y-6">
                        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-md text-white">
                            SATA Tools – Танилцуулга
                        </h1>
                        <p className="text-2xl text-white/90 max-w-3xl mx-auto">
                            Мэргэжлийн багаж хэрэгслийн дэлхийн брэнд — Хүч чадал, нарийвчлал, итгэлцэл.
                        </p>
                    </div>
                </section>

                {/* ✅ About SATA */}
                <section className="max-w-screen-xl mx-auto py-24 px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center bg-[#fffdf9]">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">SATA-ийн тухай</h2>
                        <p className="text-gray-700 mb-4">
                            1997 онд байгуулагдсан SATA Tools нь гар багажны салбартаа тэргүүлэгч брэнд болж чадсан.
                            Эхэндээ хязгаарлагдмал үйлдвэрлэлтэй байсан ч өнөөдөр дэлхийн 130 гаруй оронд ISO, DIN стандартын шаардлагыг хангасан бүтээгдэхүүнээ нийлүүлдэг.
                        </p>
                        <p className="text-gray-700 mb-4">
                            SATA нь мэргэжлийн механик, авто засвар, үйлдвэрийн хэрэглээнд зориулагдсан өндөр чанартай багаж хэрэгслүүдийг тасралтгүй хөгжүүлж, шинэлэг шийдлүүдийг санал болгодог.
                        </p>
                        <p className="text-gray-700">
                            Монгол дахь албан ёсны борлуулагчаар бид танд баталгаат, найдвартай сонголтыг санал болгож байна.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative w-full max-w-md h-80 rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="https://res.cloudinary.com/dg2qmka48/image/upload/v1751341800/autozar6/mainimages/2025/sata/actino_lhr0jd.jpg"
                                alt="SATA Factory"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* ✅ Brand History */}
                <section className="bg-white py-24 px-6">
                    <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-md h-80 rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://res.cloudinary.com/dg2qmka48/image/upload/v1751344687/autozar6/mainimages/2025/sata/history_j0xmux.jpg"
                                    alt="SATA History"
                                    fill
                                    className="object-contain bg-white"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Брендийн түүхэн хөгжил</h2>
                            <p className="text-gray-700 mb-4">
                                SATA нь Apex Tool Group-ийн бүрэлдэхүүнд багтдаг бөгөөд инноваци, технологи, чанарыг хослуулсан бүтээгдэхүүн үйлдвэрлэдэг.
                                2000-аад оноос олон улсын үзэсгэлэнгүүдэд амжилттай оролцож, мэргэжлийн зах зээлд тэргүүлэгчийн байр сууриа тогтоосон.
                            </p>
                            <p className="text-gray-700">
                                Cr-V ган материал, хэрэглэгчийн эрэлтэд нийцсэн дизайн нь SATA-г онцгой болгодог.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ✅ Why SATA - Improved Design */}
                <section className="relative bg-gradient-to-r from-[#101010] to-[#1e1e1e] text-white py-24 px-6">
                    <div className="absolute inset-0">
                        <div className="w-full h-full bg-[url('https://res.cloudinary.com/dg2qmka48/image/upload/v1751348327/autozar6/mainimages/2025/sata/tools_bg_p7nizk.jpg')] bg-cover bg-center opacity-10" />
                    </div>
                    <div className="relative max-w-screen-xl mx-auto text-center space-y-12">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight">Яагаад <span className="text-green-500">SATA</span>-г сонгох вэ?</h2>
                            <p className="text-white/80 mt-4 max-w-2xl mx-auto text-lg">
                                Бид хэрэглэгч бүртээ найдвартай, чанартай, баталгаат бүтээгдэхүүнээр үйлчилдэг.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                            {[
                                {
                                    title: "Стандартад нийцсэн",
                                    desc: "ISO, DIN стандартын шаардлага хангасан үйлдвэрлэл.",
                                },
                                {
                                    title: "Бат бөх материал",
                                    desc: "Cr-V болон S2 гангаар хийгдсэн тул удаан эдэлгээтэй.",
                                },
                                {
                                    title: "Мэргэжлийн шийдэл",
                                    desc: "Засвар, үйлдвэрлэл, угсралтын хэрэглээнд тохирсон.",
                                },
                                {
                                    title: "Глобал итгэлцэл",
                                    desc: "130+ орны хэрэглэгчдийн итгэлийг хүлээсэн брэнд.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-[#2a2a2a] hover:bg-[#333] transition rounded-xl p-6 shadow-md border border-white/5">
                                    <h3 className="text-xl font-semibold mb-2 text-green-400">{item.title}</h3>
                                    <p className="text-white/80">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* ✅ Global Reach */}
                <section className="bg-[#fefefe] py-24 px-6">
                    <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">SATA дэлхийн зах зээлд</h2>
                            <p className="text-gray-700 mb-4">
                                SATA бүтээгдэхүүнүүд одоогоор Ази, Европ, Хойд Америк зэрэг тивийн 130 гаруй оронд албан ёсоор нийлүүлэгдэж байна.
                                Бид дэлхийн хэрэглэгчдийн хэрэгцээ, шаардлагад нийцсэн шийдлийг санал болгож, хэрэглэгчдийн итгэлийг хүлээсээр байна.
                            </p>
                            <p className="text-gray-700">
                                Чанартай үйлдвэрлэл, хурдан логистик, хэрэглэгчийн найдвартай үйлчилгээний систем нь SATA-г бусдаас ялгаруулдаг.
                            </p>
                        </div>
                        <div className="relative w-full max-w-md h-72 rounded-xl overflow-hidden shadow-md">
                            <Image
                                src="https://res.cloudinary.com/dg2qmka48/image/upload/v1751355296/autozar6/mainimages/2025/sata/delhiin_tl7rng.jpg"
                                alt="SATA World Map"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* ✅ Customer Trust */}
                <section className="bg-gradient-to-br from-green-50 to-white py-20 px-6 text-center">
                    <div className="max-w-screen-md mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Хэрэглэгчдийн итгэл дээр тулгуурласан хөгжүүлэлт</h2>
                        <p className="text-gray-700 text-lg">
                            Бидний хамгийн том үнэлэмж бол таны сэтгэл ханамж. SATA-ийн мэргэжлийн хэрэглээнд зориулсан шийдлүүд нь зөвхөн чанар бус, хэрэглэгчийн хэрэгцээ, туршлагад үндэслэсэн байдаг.
                        </p>
                    </div>
                </section>

                {/* ✅ Eco Commitment */}
                <section className="bg-[#f3f4f6] py-24 px-6">
                    <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-md h-72 rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src="https://res.cloudinary.com/dg2qmka48/image/upload/v1751356001/autozar6/mainimages/2025/sata/sata_eco_ru9tsv.jpg"
                                    alt="SATA Eco Friendly"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Тогтвортой, байгальд ээлтэй үйлдвэрлэл</h2>
                            <p className="text-gray-700 mb-4">
                                SATA нь байгаль орчны нөлөөг багасгахын төлөө байнгын хүчин чармайлт гаргаж, ногоон үйлдвэрлэлийн стандартыг мөрдөж ажилладаг.
                            </p>
                            <p className="text-gray-700">
                                Эко сав баглаа боодол, хог хаягдлын менежмент, эрчим хүчний хэмнэлт зэрэг чиглэлээр дэлхийд жишиг байхаар зорьж байна.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default PageIntro;
