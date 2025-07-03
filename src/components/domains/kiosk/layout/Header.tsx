// Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
            <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-xl md:text-2xl font-black tracking-wide text-[#ff6f3c] drop-shadow-sm">
                        KIOSK<span className="text-black">.MN</span>
                    </h1>
                </Link>
                <nav className="space-x-6 text-sm md:text-base font-medium text-gray-800">
                    <Link href="/Home" className="hover:text-[#ff6f3c] transition">
                        Portfolio
                    </Link>
                    <Link href="/about" className="hover:text-[#ff6f3c] transition">
                        Бидний тухай
                    </Link>
                    <Link href="/contact" className="hover:text-[#ff6f3c] transition">
                        Холбоо барих
                    </Link>
                </nav>
            </div>
        </header>
    );
}