import React from "react";
import Image from "next/image";
import Layout from "../layout/Layout";

const products = [
    {
        title: "Түлхүүр ком",
        desc: "19 ширхэгтэй, Cr-V материалтай, халаасны хайрцагтай",
        price: "₮129,000",
        image: "/products/wrench.jpg",
    },
    {
        title: "Socket Set 40PCS",
        desc: "Олон зориулалттай 1/4” socket set",
        price: "₮98,000",
        image: "/products/socket-set.jpg",
    },
    {
        title: "Отверка сет",
        desc: "6 төрлийн отверка, соронзон хошуутай",
        price: "₮38,500",
        image: "/products/screwdriver-set.jpg",
    },
    {
        title: "Торцов ком 94PCS",
        desc: "1/2” ба 1/4” толгойтой иж бүрдэл, Cr-V",
        price: "₮215,000",
        image: "/products/socket-94.jpg",
    },
    {
        title: "Хийн шруп драйвер",
        desc: "Мэргэжлийн хэрэглээнд тохиромжтой, өндөр эргэлттэй",
        price: "₮165,000",
        image: "/products/air-driver.jpg",
    },
    {
        title: "Сараалжин багажны хайрцаг",
        desc: "Олон тасалгаатай, төмөр бариултай",
        price: "₮89,000",
        image: "/products/toolbox.jpg",
    },
    {
        title: "Механикын ком",
        desc: "108PCS иж бүрдэл, авто засварт зориулсан",
        price: "₮280,000",
        image: "/products/mechanic-kit.jpg",
    },
    {
        title: "Цахилгааны багц",
        desc: "Хэрэгцээт хэмжүүр, хос отверка, хусуур багтсан",
        price: "₮62,000",
        image: "/products/electric-kit.jpg",
    },
    {
        title: "Метр – 5M",
        desc: "Резин бүрээстэй, цохилт тэсвэртэй корпус",
        price: "₮12,500",
        image: "/products/tape.jpg",
    },
    {
        title: "Гар хөрөө",
        desc: "Төмөр ба модон материалд зориулагдсан",
        price: "₮18,500",
        image: "/products/saw.jpg",
    },
    {
        title: "Нуман гагнуурын багц",
        desc: "220V, 250А, оосортой, нэмэлт утас дагалдана",
        price: "₮335,000",
        image: "/products/welder.jpg",
    },
    {
        title: "Уян торцовын багц",
        desc: "Өнцөг тохируулгатай, нарийн толгойнуудтай",
        price: "₮69,000",
        image: "/products/flex-head.jpg",
    },
];

const PageShop = () => {
    return (
        <Layout>
            <main className="w-full">
                {/* ✅ Hero */}
                <section
                    className="relative py-32 text-center px-4 bg-cover bg-center transition-all duration-300 text-white"
                    style={{
                        backgroundImage: `url(https://res.cloudinary.com/dg2qmka48/image/upload/v1751356805/autozar6/mainimages/2025/sata/delghuur_ccmifp.jpg)`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/70 z-0" />
                    <div className="relative z-10 max-w-5xl mx-auto space-y-6">
                        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-md text-white">
                            Дэлгүүр
                        </h1>
                        <p className="text-2xl text-white/90 max-w-3xl mx-auto">
                            SATA бүтээгдэхүүний албан ёсны борлуулалт — Баталгаат чанар, мэргэжлийн хэрэглээ.
                        </p>
                    </div>
                </section>


                {/* ✅ Product Grid */}
                <section className="max-w-screen-xl mx-auto py-20 px-6 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {products.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-[1.02] transition duration-300 overflow-hidden"
                            >
                                <div className="relative w-full h-56">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                                    <p className="text-green-600 font-semibold text-lg">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default PageShop;
