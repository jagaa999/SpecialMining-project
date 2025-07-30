'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';


const NavbarModel = dynamic(() => import('../layout/NavbarModel'), { ssr: false });
const NavbarTechnology = dynamic(() => import('../layout/NavbarTechnology'), { ssr: false });
const NavbarContact = dynamic(() => import('../layout/NavbarContact'), { ssr: false });
const NavbarService = dynamic(() => import('../layout/NavbarService'), { ssr: false });


const navLinks = ['МОДЕЛИУД', 'ТЕХНОЛОГИ', 'БИДЭНТЭЙ ХОЛБОГДОХ', 'ҮЙЛЧИЛГЭЭ'];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const [isMouseOverHeader, setIsMouseOverHeader] = useState(false);
    const [isMouseOverDropdown, setIsMouseOverDropdown] = useState(false);
    const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 👉 Энэ effect нь зөвхөн header ба dropdown-оос аль альнаас нь mouse гарсан үед хаана
    useEffect(() => {
        if (!isMouseOverHeader && !isMouseOverDropdown && hoveredTab !== null) {
            dropdownTimeout.current = setTimeout(() => {
                setHoveredTab(null);
            }, 200);
        } else {
            if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
        }
    }, [isMouseOverHeader, isMouseOverDropdown, hoveredTab]);

    const isActive = hoveredTab !== null || isMouseOverHeader || isMouseOverDropdown;

    const backgroundClass = isActive
        ? 'bg-white/90'
        : isScrolled
            ? 'bg-black/70'
            : 'bg-transparent';

    const navTextClass = isActive
        ? 'text-black hover:text-orange-500'
        : 'text-white hover:text-orange-300';

    const logoSrc = isActive
        ? 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753170238/autozar6/mainimages/2025/gac/gac_logo_red_png_xaldaz.png'
        : 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753169877/autozar6/mainimages/2025/gac/6070626e-eb29-4424-a6c2-ebb94ee9aa57_lm1hx9.webp';

    return (
        <>
            <header
                onMouseEnter={() => setIsMouseOverHeader(true)}
                onMouseLeave={() => setIsMouseOverHeader(false)}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${backgroundClass}`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                    <div className="flex-shrink-0 transition-all duration-300">
                        <Image
                            src={logoSrc}
                            alt="GAC Logo"
                            width={120}
                            height={30}
                            className="object-contain"
                        />
                    </div>

                    <nav className="hidden md:flex flex-1 justify-center space-x-10 text-lg font-extrabold uppercase tracking-widest transition-all duration-300 relative">
                        {navLinks.map((link) => (
                            <div
                                key={link}
                                className="relative"
                                onMouseEnter={() => setHoveredTab(link)}
                                onMouseLeave={() => { }}
                            >
                                <span className={`cursor-pointer ${navTextClass}`}>{link}</span>
                            </div>
                        ))}
                    </nav>

                    <div className="flex md:hidden">
                        <button className="text-white" onClick={() => setOpen(!open)}>
                            {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

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

            <AnimatePresence>
                {hoveredTab === 'МОДЕЛИУД' && (
                    <motion.div
                        key="dropdown-model"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setIsMouseOverDropdown(true)}
                        onMouseLeave={() => setIsMouseOverDropdown(false)}
                        className="fixed top-[64px] left-0 w-full z-40"
                    >
                        <NavbarModel />
                    </motion.div>
                )}
                {hoveredTab === 'ТЕХНОЛОГИ' && (
                    <motion.div
                        key="dropdown-tech"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setIsMouseOverDropdown(true)}
                        onMouseLeave={() => setIsMouseOverDropdown(false)}
                        className="fixed top-[64px] left-0 w-full z-40"
                    >
                        <NavbarTechnology />
                    </motion.div>
                )}
                {hoveredTab === 'БИДЭНТЭЙ ХОЛБОГДОХ' && (
                    <motion.div
                        key="dropdown-contact"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setIsMouseOverDropdown(true)}
                        onMouseLeave={() => setIsMouseOverDropdown(false)}
                        className="fixed top-[64px] left-0 w-full z-40"
                    >
                        <NavbarContact />
                    </motion.div>
                )}
                {hoveredTab === 'ҮЙЛЧИЛГЭЭ' && (
                    <motion.div
                        key="dropdown-service"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setIsMouseOverDropdown(true)}
                        onMouseLeave={() => setIsMouseOverDropdown(false)}
                        className="fixed top-[64px] left-0 w-full z-40"
                    >
                        <NavbarService />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
