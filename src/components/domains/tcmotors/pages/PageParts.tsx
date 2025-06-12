"use client";

import { Icon } from "@iconify/react";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import PanelTitle from "atomv2/components/Panel/PanelTitleMain";
import PanelTitle2 from "atomv2/components/Panel/PanelTitle2";

const parts = [
    {
        id: 1,
        image: "/parts/prius-engine.jpg",
        name: "Prius 30 — Хөдөлгүүр",
        desc: "2009–2013 оны Prius-д таарна",
        price: "₮980,000",
        badge: "Баталгаат",
    },
    {
        id: 2,
        image: "/parts/axle.jpg",
        name: "Toyota Crown — Арын тэнхлэг",
        desc: "Crown Athlete 200–210 цуврал",
        price: "₮430,000",
        badge: "Шинэчлэгдсэн",
    },
    {
        id: 3,
        image: "/parts/battery.jpg",
        name: "Hybrid Battery",
        desc: "NiMH 6.5Ah — шинжилгээ хийгдсэн",
        price: "₮750,000",
        badge: "Тестлэгдсэн",
    },
    {
        id: 4,
        image: "/parts/front-lamp.jpg",
        name: "Honda Fit — Гэрлийн ком",
        desc: "2014–2019 GK5 загвар",
        price: "₮130,000",
        badge: "Хосоороо",
    },
    {
        id: 5,
        image: "/parts/sensor.jpg",
        name: "ABS мэдрэгч",
        desc: "Урд/арын тэнхлэгт зориулагдсан",
        price: "₮65,000",
        badge: "Шалгагдсан",
    },
    {
        id: 6,
        image: "/parts/alternator.jpg",
        name: "Генератор",
        desc: "Toyota Estima — 2AZ хөдөлгүүрт",
        price: "₮220,000",
        badge: "Солих шаардлагагүй",
    },
    {
        id: 7,
        image: "/parts/starter.jpg",
        name: "Стартер мотор",
        desc: "Honda CR-V RE4 — 2007-2010",
        price: "₮170,000",
        badge: "Солигдсон",
    },
    {
        id: 8,
        image: "/parts/brake.jpg",
        name: "Тоормосны диск",
        desc: "Mazda Axela — урд талын диск",
        price: "₮110,000",
        badge: "Хосоороо",
    },
    {
        id: 9,
        image: "/parts/shock.jpg",
        name: "Амортизатор",
        desc: "Hyundai Tucson — Арын талын",
        price: "₮145,000",
        badge: "Японоос",
    },
    {
        id: 10,
        image: "/parts/radiator.jpg",
        name: "Радиатор",
        desc: "Crown Majesta 3UZ-FE хөдөлгүүртэй",
        price: "₮250,000",
        badge: "Шинэ ирсэн",
    },
    {
        id: 11,
        image: "/parts/ecu.jpg",
        name: "ECU — Хөдөлгүүрийн удирдлага",
        desc: "Prius 20–30 дэмждэг загвар",
        price: "₮320,000",
        badge: "Тестлэгдсэн",
    },
    {
        id: 12,
        image: "/parts/door.jpg",
        name: "Зүүн урд хаалга",
        desc: "Toyota Prius 30 — G touring",
        price: "₮480,000",
        badge: "Зураасгүй",
    },
    {
        id: 13,
        image: "/parts/steering.jpg",
        name: "Жолооны аппарат",
        desc: "Nissan X-Trail T31-д таарна",
        price: "₮330,000",
        badge: "Шинэчлэгдсэн",
    },
    {
        id: 14,
        image: "/parts/exhaust.jpg",
        name: "Хаягдал хий ялгаруулагч (Muffler)",
        desc: "Subaru Legacy — EJ25 хөдөлгүүрт",
        price: "₮190,000",
        badge: "Японоос орж ирсэн",
    },
    {
        id: 15,
        image: "/parts/ac-compressor.jpg",
        name: "A/C Compressor",
        desc: "Toyota Alphard — 2AZ хөдөлгүүртэй",
        price: "₮360,000",
        badge: "Шалгагдсан",
    },
];


export default function PageParts() {
    return (
        <div className="w-full bg-white text-gray-900">
            <PanelMain className="space-y-20">
                <div className="text-center">
                    <PanelTitle value="Сэлбэгүүдийн жагсаалт" />
                    <p className="text-gray-500 text-lg mt-4">
                        Бүх сэлбэгүүд маань мэргэжлийн оношилгоонд орсон бөгөөд бүрэн бүтэн байдал
                        болон таарлын мэдээллийг дагалдуулан өгдөг.
                    </p>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {parts.map((item) => (
                        <BlockDiv
                            key={item.id}
                            className="bg-red-50 p-6 rounded-xl shadow hover:shadow-xl transition border border-red-100 hover:border-red-300 flex flex-col gap-4"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="rounded-lg w-full h-48 object-cover"
                            />
                            <div className="space-y-1">
                                <h3 className="text-xl font-bold text-red-700">{item.name}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-lg font-bold text-gray-800">{item.price}</span>
                                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                                    {item.badge}
                                </span>
                            </div>
                            <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded-full hover:bg-red-700 transition text-sm font-semibold">
                                Захиалах
                            </button>
                        </BlockDiv>
                    ))}
                </section>
            </PanelMain>
        </div>
    );
}
