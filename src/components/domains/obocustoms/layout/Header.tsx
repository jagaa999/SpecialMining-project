"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Main Top Navigation */}
            <header
                className={`fixed top-0 left-0 w-full z-50 px-6 lg:px-16 py-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo-detailx.png"
                        alt="DetailX Logo"
                        width={120}
                        height={40}
                        className="h-auto w-auto"
                    />
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm uppercase font-semibold tracking-wide text-white">
                    {["Home", "Pages", "Cars", "Portfolio", "Shop"].map((label, i) => (
                        <Link
                            key={i}
                            href="#"
                            className="hover:text-[#e1251b] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.4)] transition-all duration-200"
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Icons */}
                    <div className="flex items-center gap-4 ml-4">
                        <button className="hover:scale-110 transition">
                            <Image
                                src="/icons/cart.svg"
                                alt="Cart"
                                width={20}
                                height={20}
                                className="opacity-90"
                            />
                        </button>
                        <button className="hover:scale-110 transition">
                            <Image
                                src="/icons/search.svg"
                                alt="Search"
                                width={20}
                                height={20}
                                className="opacity-90"
                            />
                        </button>
                    </div>

                    {/* CTA */}
                    <Link href="/contact">
                        <button className="bg-[#e1251b] hover:bg-red-600 text-white font-bold px-6 py-2 uppercase text-xs tracking-wider rounded shadow-md hover:shadow-lg transition-all duration-200">
                            Get a Quote
                        </button>
                    </Link>
                </nav>
            </header>

            {/* Floating Sidebar */}
            <div className="fixed right-4 top-1/3 z-40 hidden md:flex flex-col gap-3">
                {[
                    { icon: "/icons/nav1.svg", alt: "Menu" },
                    { icon: "/icons/nav2.svg", alt: "Gallery" },
                    { icon: "/icons/nav3.svg", alt: "Booking" },
                ].map((item, i) => (
                    <button
                        key={i}
                        className="bg-[#e1251b] hover:bg-red-600 p-3 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
                    >
                        <Image
                            src={item.icon}
                            alt={item.alt}
                            width={20}
                            height={20}
                            className="invert"
                        />
                    </button>
                ))}
            </div>
        </>
    );
}
