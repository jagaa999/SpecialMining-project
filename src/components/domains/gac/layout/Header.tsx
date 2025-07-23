'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = ['МОДЕЛИУД', 'ТЕХНОЛОГИ', 'БИДЭНТЭЙ ХОЛБОГДОХ', 'ҮЙЛЧИЛГЭЭ'];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hover үед цагаан фон, scroll үед хар фон
    const backgroundClass = isScrolled
        ? 'bg-black/60'               // scroll хийсэн үед 60% opacity-тай хар
        : isHovered
            ? 'bg-white/90'             // hover үед цагаан
            : 'bg-transparent';         // энгийн үед бүрэн тунгалаг


    const navTextClass = isScrolled
        ? 'text-white hover:text-orange-400'
        : isHovered
            ? 'text-black hover:text-orange-500'
            : 'text-white hover:text-orange-300';

    const logoSrc = isScrolled
        ? 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753169877/autozar6/mainimages/2025/gac/6070626e-eb29-4424-a6c2-ebb94ee9aa57_lm1hx9.webp' // Цагаан logo
        : isHovered
            ? 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753170238/autozar6/mainimages/2025/gac/gac_logo_red_png_xaldaz.png' // Улаан logo
            : 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753169877/autozar6/mainimages/2025/gac/6070626e-eb29-4424-a6c2-ebb94ee9aa57_lm1hx9.webp'; // Цагаан logo

    return (
        <header
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${backgroundClass}`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <div className="flex-shrink-0 transition-all duration-300">
                    <Image
                        src={logoSrc}
                        alt="GAC Logo"
                        width={120}
                        height={30}
                        className="object-contain"
                    />
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex flex-1 justify-center space-x-10 text-lg font-extrabold uppercase tracking-widest transition-all duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className={`transition-colors duration-300 ${navTextClass}`}
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Mobile menu icon */}
                <div className="flex md:hidden">
                    <button
                        className={isScrolled ? 'text-white' : isHovered ? 'text-black' : 'text-white'}
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile nav */}
            {open && (
                <div className="md:hidden bg-black bg-opacity-90 px-6 pb-4 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="block text-white text-sm font-bold uppercase hover:text-orange-400"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}
