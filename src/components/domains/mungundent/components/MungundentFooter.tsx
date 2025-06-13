import Link from "next/link";

export default function MungundentFooter() {
    return (
        <footer className="bg-[#001f1f] text-white font-[Arial] text-sm">
            <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#004040]">

                {/* Column 1 — Logo & Description */}
                <div>
                    <img
                        src="https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/645cbd46-7ec6-4b9d-bc89-f1975f973328.png?t=1749804998197"
                        alt="Mungundent logo"
                        className="h-12 mb-6"
                    />
                    <p className="text-gray-400 leading-6 font-normal">
                        Мөнгөндент бол Япон стандарт, өндөр технологийг шингээсэн шүдний эмчилгээний цогц төв юм.
                    </p>
                </div>

                {/* Column 2 — Navigation */}
                <div>
                    <h4 className="text-base font-bold mb-4">Холбоосууд</h4>
                    <ul className="space-y-2 text-gray-400 font-normal">
                        <li><Link href="/" className="hover:text-white transition">Нүүр хуудас</Link></li>
                        <li><Link href="/services" className="hover:text-white transition">Үйлчилгээ</Link></li>
                        <li><Link href="/about" className="hover:text-white transition">Бидний тухай</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition">Холбоо барих</Link></li>
                    </ul>
                </div>

                {/* Column 3 — Contact Info */}
                <div>
                    <h4 className="text-base font-bold mb-4">Холбоо барих</h4>
                    <p className="text-gray-400 mb-2 font-normal">📍 Улаанбаатар хот, ХУД, Маршал хотхон, King Tower-125</p>
                    <p className="text-gray-400 mb-2 font-normal">📞 <a href="tel:99119911" className="hover:text-white">7720- 0888</a></p>
                    <p className="text-gray-400 font-normal">🕘 Даваа–Бямба: 10:00–19:00</p>
                </div>

                {/* Column 4 — Newsletter / Follow us */}
                <div>
                    <h4 className="text-base font-bold mb-4">Шинэ мэдээ</h4>
                    <p className="text-gray-400 mb-3 font-normal">Биднээс хамгийн сүүлийн үеийн эмчилгээ, хямдралын мэдээллийг аваарай.</p>
                    <input
                        type="email"
                        placeholder="И-мэйл хаяг"
                        className="w-full bg-[#003333] text-white px-4 py-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-teal-400 font-normal"
                    />
                    <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded text-sm font-bold transition">
                        Бүртгүүлэх
                    </button>
                </div>
            </div>

            <div className="text-center text-gray-500 py-6 text-xs font-normal">
                © {new Date().getFullYear()} Mungundent Clinic — Бүх эрх хуулиар хамгаалагдсан.
            </div>
        </footer>
    );
}
