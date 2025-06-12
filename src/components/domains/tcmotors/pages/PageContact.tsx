"use client";

import TcmotorsHomeHero from "../widget/TcmotorsHomeHero";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import PanelTitle from "atomv2/components/Panel/PanelTitleMain";
import PanelTextMain from "atomv2/components/Panel/PanelTextMain";

export default function PageContacts() {
    return (
        <>
            <TcmotorsHomeHero
                item={{
                    backgroundImage: "https://source.unsplash.com/random/1920x1080?car",
                    title: "Холбоо барих",
                    subtitle: "Бидэнтэй холбоо барьж сэлбэгийн талаар дэлгэрэнгүй мэдээлэл аваарай",
                    buttons: [
                        {
                            label: "Захиалга өгөх",
                            href: "/contact",
                            style: "primary",
                        },
                    ],
                }}
            />

            <PanelMain className="grid grid-cols-1 md:grid-cols-2 gap-10 py-16">
                {/* Contact Information */}
                <BlockDiv className="space-y-6">
                    <PanelTitle value="Манай хаяг, холбоо барих" />
                    <PanelTextMain value="📍 Улаанбаатар, Сүхбаатар дүүрэг, 1-р хороо, Тээврийн товчооны зам" />
                    <PanelTextMain value="📞 +976 8800-1234" />
                    <PanelTextMain value="✉ info@tcmotors.mn" />
                    <PanelTextMain value="🕘 Ажлын цаг: Даваа–Бямба 09:00–18:00" />
                    <div className="flex gap-4 pt-4">
                        <a href="https://facebook.com/tcmotors.mn" target="_blank">
                            <img src="/social/facebook.svg" className="h-6" alt="Facebook" />
                        </a>
                        <a href="https://instagram.com/tcmotors.mn" target="_blank">
                            <img src="/social/instagram.svg" className="h-6" alt="Instagram" />
                        </a>
                    </div>
                </BlockDiv>

                {/* Contact Form */}
                <BlockDiv className="bg-white rounded-xl shadow-lg p-8 space-y-6 ring-1 ring-gray-200">
                    <PanelTitle value="Санал хүсэлт илгээх" />
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Таны нэр"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="email"
                            placeholder="И-мэйл хаяг"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <textarea
                            placeholder="Таны мессеж..."
                            rows={5}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition"
                        >
                            Илгээх
                        </button>
                    </form>
                </BlockDiv>
            </PanelMain>

            {/* Map */}
            <div className="w-full h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.0145406222293!2d106.89641301512262!3d47.92254977920701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96925d438bf227%3A0x53662d151fc4e3f9!2z0JzQvtC70YzRiNC-0L3QsNGPINGD0LsuLCAxLCDQotC10YDQvdC10L3RgtGA0LDRgNGMIDIwMDAw!5e0!3m2!1sen!2smn!4v1707048609203!5m2!1sen!2smn"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    className="border-0"
                ></iframe>
            </div>
        </>
    );
}