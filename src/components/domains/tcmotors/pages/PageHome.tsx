"use client";

import { Icon } from "@iconify/react";
import BlockHalf from "atomv2/components/Blocks/BlockHalf";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TcmotorsHomeHero from "../widget/TcmotorsHomeHero";

export default function PageHomeUsedParts() {
    return (
        <>
            <TcmotorsHomeHero
                item={{
                    backgroundImage: "/images/tcmotors-hero.jpg",
                    title: "Авто машины хуучин сэлбэг",
                    subtitle: "Баталгаатай, шалгагдсан хуучин сэлбэгүүд",
                    buttons: [
                        {
                            label: "Захиалга өгөх",
                            href: "/order",
                            style: "primary",
                        },
                        {
                            label: "Манай тухай",
                            href: "/about",
                            style: "light",
                        },
                    ],
                }}
            />

            <div className="w-full bg-white text-gray-900">
                {/* Танилцуулга */}
                <section className="min-h-screen bg-gradient-to-br from-white via-red-200 to-pink-100 py-24 space-y-24">
                    <h2 className="text-4xl font-bold text-red-700 text-center">
                        Манай тухай
                    </h2>
                    <PanelMain className="flex flex-col items-center space-y-24">
                        <BlockHalf stretch={true}>
                            <img
                                src="https://cdn.moto.mn/moto/landing/12_tcmotors/d410f576-014b-4718-8ea1-2d88743a30da.jpg?t=1749627958907"
                                alt="intro"
                                className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                            />
                            <div className="space-y-4 w-full h-full">
                                <h2 className="text-3xl font-bold text-red-600">
                                    Сэлбэгийн баталгаат эх сурвалж
                                </h2>
                                <p className="text-lg text-gray-700">
                                    Бид Япон болон Солонгосоос импортлосон, үзлэг хийгдсэн хуучин сэлбэгийг танд санал болгодог. Хамгийн сайн үнээр, хурдан шуурхай хүргэлттэй.
                                </p>
                            </div>
                        </BlockHalf>
                    </PanelMain>
                </section>

                {/* Сэлбэгүүдийн жишээ */}
                <section className="min-h-screen bg-white flex items-center px-10 py-20">
                    <div className="max-w-6xl mx-auto w-full text-center space-y-12">
                        <h2 className="text-4xl font-bold text-red-700">Бэлэн байгаа сэлбэгүүд</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
                            {[
                                {
                                    name: "Toyota Prius 30 — Хойд амортизатор",
                                    price: "₮120,000",
                                    image: "https://cdn.moto.mn/moto/landing/12_tcmotors/8dbf43b4-0934-44de-a84c-b9c5314e362f.jpg?t=1749628057449",
                                },
                                {
                                    name: "Honda Fit — Хөдөлгүүрийн ECM",
                                    price: "₮280,000",
                                    image: "https://cdn.moto.mn/moto/landing/12_tcmotors/c480542f-db86-477c-82c9-6655c3921ca7.png?t=1749628102087",
                                },
                                {
                                    name: "Crown Athlete — Радиатор",
                                    price: "₮200,000",
                                    image: "https://cdn.moto.mn/moto/landing/12_tcmotors/22ce3392-5cd2-4d45-adb1-e63058d54969.jpg?t=1749628148949",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-red-50 p-6 rounded-xl shadow-md ring-1 ring-red-200 hover:ring-red-400 transition space-y-4"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-40 w-full object-cover rounded-lg"
                                    />
                                    <h3 className="text-xl font-bold text-red-700">{item.name}</h3>
                                    <p className="text-gray-800 font-semibold">Үнэ: {item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Давуу талууд */}
                <section className="min-h-screen bg-red-50 flex items-center px-10 py-20">
                    <div className="max-w-5xl mx-auto w-full text-center space-y-12">
                        <h2 className="text-4xl font-bold text-red-700">Бидний давуу тал</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
                            {[
                                {
                                    icon: "mdi:certificate-outline",
                                    title: "Шалгагдсан баталгаат сэлбэг",
                                },
                                {
                                    icon: "mdi:warehouse",
                                    title: "Үйлдвэрлэлийн шууд агуулах нийлүүлэлт",
                                },
                                {
                                    icon: "mdi:truck-fast-outline",
                                    title: "24 цагийн дотор хүргэлт",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white px-8 py-24 rounded-xl shadow-md ring-1 ring-red-200 hover:shadow-2xl hover:ring-red-400 transition-all duration-700 ease-in-out text-gray-700 flex flex-col items-center space-y-4"
                                >
                                    <Icon
                                        icon={item.icon}
                                        className="text-red-600"
                                        width={78}
                                        height={78}
                                    />
                                    <p className="font-semibold text-center">{item.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="min-h-[80vh] bg-red-600 text-white flex flex-col items-center justify-center px-10 text-center space-y-12">
                    <h2 className="text-4xl font-bold">Хүссэн сэлбэгээ захиалаарай</h2>
                    <p className="text-xl max-w-xl">
                        Та яг одоо доорх товчийг дарж сэлбэгийн захиалга илгээж болно. Бид таныг 15-30 минутын дотор холбогдож баталгаажуулна.
                    </p>
                    <button className="bg-white text-red-600 px-12 py-6 text-xl rounded-full font-bold hover:bg-gray-100 transition">
                        Захиалга өгөх
                    </button>
                </section>
            </div>
        </>
    );
}
