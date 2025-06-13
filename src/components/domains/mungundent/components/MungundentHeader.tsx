"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MungundentHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const menu = [
        { label: "Нүүр", href: "/" },
        { label: "Үйлчилгээ", href: "/services" },
        { label: "Бидний тухай", href: "/about" },
        { label: "Холбоо барих", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 font-[Arial]">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3">
                    <img
                        src="https://cdn.moto.mn/moto/landing/04_mungundent/web_pics/645cbd46-7ec6-4b9d-bc89-f1975f973328.png?t=1749802197627"
                        alt="МӨНГӨНДЕНТ ШҮДНИЙ ЭМНЭЛЭГ"
                        className="h-10 w-auto drop-shadow-md"
                    />
                    <span className="text-xl font-bold text-[#1d3557] tracking-wide hidden md:inline">МӨНГӨНДЕНТ ШҮДНИЙ ЭМНЭЛЭГ</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                    <nav className="flex space-x-6 text-sm font-normal">
                        {menu.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative group py-1 transition-all duration-300 ${pathname === item.href ? "text-[#1d3557] font-bold" : "text-gray-700"} hover:text-[#1d3557]`}
                            >
                                {item.label}
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#1d3557] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Book Button */}
                    <Link
                        href="/contact"
                        className="ml-4 px-5 py-2 rounded-full text-sm font-bold bg-[#1d3557] text-white shadow hover:bg-[#16324f] transition duration-300"
                    >
                        Цаг захиалах
                    </Link>
                </div>

                {/* Mobile menu toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                    aria-label="Toggle Navigation"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4 pt-2 space-y-2 text-base font-normal">
                    {menu.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block py-2 ${pathname === item.href ? "text-[#1d3557] font-bold" : "text-gray-700"} hover:text-[#1d3557]`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="inline-block w-full text-center mt-3 px-4 py-2 rounded-full bg-[#1d3557] text-white font-bold hover:bg-[#16324f] transition duration-300"
                    >
                        Цаг захиалах
                    </Link>
                </div>
            )}
        </header>
    );
}
