"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function PageContact() {
    return (
        <BlockDiv className="w-full bg-gradient-to-br from-[#fefaf6] to-[#fffefc] py-24 px-6 md:px-20 text-[#1a1a1a]">
            {/* Title */}
            <TextHtml
                value={`<h2 class='text-4xl md:text-5xl font-bold text-center leading-snug mb-8'>
          <span class='text-[#ff6f3c]'>Холбоо</span> барих
        </h2>`}
            />

            {/* Subtitle */}
            <p className="text-center max-w-xl mx-auto text-gray-600 mb-12">
                Та санал, хүсэлт, эсвэл хамтран ажиллах хүсэлтэй бол бидэнтэй холбогдоорой. Бид үргэлж нээлттэй, шуурхай хариу өгдөг.
            </p>

            {/* Contact Grid */}
            <BlockDiv className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <BlockDiv className="space-y-6">
                    <div>
                        <h3 className="text-lg font-bold text-[#ff6f3c]">📍 Хаяг</h3>
                        <p className="text-sm text-gray-700">Улаанбаатар хот, СБД, 1-р хороо, Innovation төв, 5-р давхар</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#ff6f3c]">📞 Утас</h3>
                        <p className="text-sm text-gray-700">+976 9911-2233</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[#ff6f3c]">📧 Имэйл</h3>
                        <p className="text-sm text-gray-700">hello@kiosk.mn</p>
                    </div>
                </BlockDiv>

                {/* Contact Form */}
                <form className="space-y-6">
                    <div>
                        <label className="block mb-1 font-medium text-sm">Нэр</label>
                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6f3c]" placeholder="Таны нэр" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-sm">Имэйл</label>
                        <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6f3c]" placeholder="email@example.com" />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-sm">Зурвас</label>
                        <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff6f3c]" rows={5} placeholder="Таны мессеж"></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#ff6f3c] hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition"
                    >
                        Илгээх
                    </button>
                </form>
            </BlockDiv>
        </BlockDiv>
    );
}
