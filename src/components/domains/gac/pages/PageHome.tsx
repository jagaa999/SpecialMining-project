'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '../layout/Header';

type Slide = {
    image: string;
    titleImg?: string;
    subtitle: string;
};

const slides: Slide[] = [
    {
        image:
            'https://res.cloudinary.com/dg2qmka48/image/upload/v1753168381/autozar6/mainimages/2025/gac/a8df62c4-39c5-4ea4-baee-1bf310ae6b5b_n1qjnt.webp',
        titleImg:
            'https://res.cloudinary.com/dg2qmka48/image/upload/v1753168381/autozar6/mainimages/2025/gac/AION_UT_z5xap5.png',
        subtitle: 'A stylish and intelligent next-gen urban EV crossover',
    },
    {
        image:
            'https://res.cloudinary.com/dg2qmka48/image/upload/v1753170598/autozar6/mainimages/2025/gac/hd_s9_llh0a8.jpg',
        titleImg:
            'https://res.cloudinary.com/dg2qmka48/image/upload/v1753168381/autozar6/mainimages/2025/gac/S7_gscyx5.png',
        subtitle: 'Big on Space, Big on Smarts',
    },
    {
        image:
            'https://res.cloudinary.com/dg2qmka48/image/upload/v1753168603/autozar6/mainimages/2025/gac/aionV_dsoyx9.jpg',
        titleImg:
            'https://res.cloudinary.com/dg2qmka48/image/upload/v1753168380/autozar6/mainimages/2025/gac/AION_V_nl2lib.png',
        subtitle: 'Rugged and Smart SUV',
    },
];

export default function PageHome() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setFade(true);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const current = slides[currentSlide];

    return (
        <main className="w-full">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <Header />

                {/* Background image with fade */}
                {current.image && (
                    <div
                        className={`absolute inset-0 transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={current.image}
                            alt="Background"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Overlay content */}
                <div
                    className={`relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 transition-all duration-700 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                >
                    {current.titleImg ? (
                        <div className="mb-4 w-64 h-16 relative">
                            <Image
                                src={current.titleImg}
                                alt="Car title"
                                fill
                                className="object-contain"
                            />
                        </div>
                    ) : null}

                    <p className="text-xl mb-6">{current.subtitle}</p>
                    <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
                        Learn More
                    </button>
                </div>

                {/* Dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-white scale-110' : 'bg-gray-400'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Section 2: GS8 */}
            <section className="relative h-screen w-full">
                {/* Background */}
                <Image
                    src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753170826/autozar6/mainimages/2025/gac/821ca7f3-8438-4280-bdfe-325e5ee62c74_psbmea.webp"
                    alt="GS8 Background"
                    fill
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4 bg-black/40">
                    <div className="mb-4 w-64 h-16 relative">
                        <Image
                            src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753170825/autozar6/mainimages/2025/gac/GS8_f02nhy.png"
                            alt="GS8 Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="text-xl mb-6">Mid-to-large intelligent SUV</p>
                    <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
                        Learn More
                    </button>
                </div>
            </section>
        </main>
    );
}
