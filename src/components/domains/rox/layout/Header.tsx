'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const navItems = ['ROX 01', 'Compare ROX01', 'About ROX', 'Contact Us'];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (item: string) => {
        if (item === 'ROX 01') {
            if (pathname === '/') {
                router.refresh();
            } else {
                router.push('/');
            }
        }
        // Хэрвээ цаашид бусад tab-ууд page рүү шилжих бол энд path нэмэхэд болно
        // else if (item === 'Compare ROX01') router.push('/compare');
    };

    const handleLogoClick = () => {
        if (pathname === '/') {
            router.refresh();
        } else {
            router.push('/');
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                {/* Left nav */}
                <nav className="hidden md:flex gap-6 text-base font-medium w-1/3 justify-start">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => handleNavClick(item)}
                            className={`transition-all duration-200 whitespace-nowrap ${isScrolled ? 'text-black' : 'text-white'
                                } hover:font-semibold`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                {/* Logo */}
                <div
                    className="cursor-pointer w-1/3 flex justify-center"
                    onClick={handleLogoClick}
                >
                    <Image
                        src={
                            isScrolled
                                ? 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753692021/autozar6/mainimages/2025/rox/roxBlack_mmc3yz.png'
                                : 'https://res.cloudinary.com/dg2qmka48/image/upload/v1753692216/autozar6/mainimages/2025/rox/logoWhite_apgr3p.png'
                        }
                        alt="ROX Logo"
                        width={60}
                        height={24}
                        className="transition-opacity duration-200 hover:opacity-80"
                        priority
                    />
                </div>

                {/* Right nav */}
                <nav className="hidden md:flex w-1/3 justify-end text-base font-medium items-center">
                    <Link
                        href="#"
                        className={`transition-all duration-200 whitespace-nowrap ${isScrolled ? 'text-black' : 'text-white'
                            } hover:font-semibold`}
                    >
                        Become a ROX Partner
                    </Link>
                </nav>
            </div>
        </header>
    );
}
