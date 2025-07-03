"use client";

export default function Footer() {
    return (
        <footer className="w-full bg-[#1a1a1a] text-white mt-32 pt-16 pb-8 px-6 md:px-12">
            {/* Grid Content */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
                {/* Brand & Description */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-extrabold tracking-tight text-[#ff6f3c]">
                        Kiosk.mn
                    </h2>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                        Бид киоск болон веб интерфэйсийн UI/UX-д төвлөрсөн бүтээлч баг. Энгийн биш, хэрэглэгч төвтэй,
                        технологийн шийдлүүдийг бүтээдэг.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="space-y-4">
                    <h3 className="text-base font-semibold text-white">Цэс</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li><a href="/" className="hover:text-[#ff6f3c] transition">Нүүр</a></li>
                        <li><a href="/about" className="hover:text-[#ff6f3c] transition">Бидний тухай</a></li>
                        <li><a href="/contact" className="hover:text-[#ff6f3c] transition">Холбоо барих</a></li>
                        <li><a href="/#portfolio" className="hover:text-[#ff6f3c] transition">Portfolio</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-base font-semibold text-white">Холбоо барих</h3>
                    <ul className="text-sm text-gray-300 space-y-2">
                        <li>📍 УБ хот, СБД, Innovation төв</li>
                        <li>📞 +976 99112233</li>
                        <li>📧 hello@kiosk.mn</li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} <span className="text-white font-semibold">Kiosk.mn</span>. Бүх эрх хуулиар хамгаалагдсан.
            </div>
        </footer>
    );
}
