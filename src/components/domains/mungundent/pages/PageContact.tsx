// mungundent/pages/PageContact.tsx
import MungundentHeader from "../components/MungundentHeader";
import MungundentFooter from "../components/MungundentFooter";

export default function PageContact() {
    return (
        <main className="bg-white text-gray-800 font-[Arial]">
            <MungundentHeader />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#00A8A8] to-[#006F6F] text-white py-24 text-center px-4">
                <h1 className="text-5xl font-bold mb-4 drop-shadow">Холбоо Барих</h1>
                <p className="text-xl max-w-3xl mx-auto">Бид танд түргэн шуурхай, найдвартай холбоо тогтоох боломжийг олгож байна</p>
            </section>

            {/* Contact Info & Form */}
            <section className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Contact Details */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-[#1d3557]">Манай хаяг</h2>
                    <p className="mb-3 text-gray-700">📍 Улаанбаатар хот, ХУД, Маршал хотхон, King Tower-125</p>
                    <p className="mb-3 text-gray-700">📞 Утас: <a href="tel:99119911" className="text-[#00A8A8] hover:underline">7720- 0888</a></p>
                    <p className="mb-6 text-gray-700">⏰ Цагийн хуваарь: Даваа–Бямба 10:00–19:00</p>

                    <iframe
                        src="https://maps.google.com/maps?q=Ulaanbaatar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-64 rounded-xl border border-gray-300 shadow-lg"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Contact Form */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-[#1d3557]">Санал хүсэлт илгээх</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-1">Нэр</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A8A8]"
                                placeholder="Таны нэр"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Имэйл</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A8A8]"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Зурвас</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-[#00A8A8]"
                                placeholder="Таны асуулт эсвэл зурвас"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#00A8A8] hover:bg-[#008f8f] text-white font-semibold px-6 py-2 rounded-full transition-all shadow-md"
                        >
                            Илгээх
                        </button>
                    </form>
                </div>
            </section>

            <MungundentFooter />
        </main>
    );
}
