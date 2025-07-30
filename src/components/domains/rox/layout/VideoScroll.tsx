'use client';

import Image from 'next/image';
import Header from '../layout/Header';
import { useEffect, useRef, useState } from 'react';

export default function PageHome() {
    const videoUrls = [
        'https://res.cloudinary.com/dg2qmka48/video/upload/v1753670156/autozar6/mainimages/2025/rox/roxVideo02_uk8jum.mp4',
        'https://res.cloudinary.com/dg2qmka48/video/upload/v1753670153/autozar6/mainimages/2025/rox/roxVideo05_muygi5.mp4',
        'https://res.cloudinary.com/dg2qmka48/video/upload/v1753670153/autozar6/mainimages/2025/rox/roxVideo03_wb1drh.mp4',
        'https://res.cloudinary.com/dg2qmka48/video/upload/v1753670151/autozar6/mainimages/2025/rox/roxVideo04_l5vu5h.mp4',
        'https://res.cloudinary.com/dg2qmka48/video/upload/v1753670150/autozar6/mainimages/2025/rox/roxVideo01_c7ve9o.mp4',
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    useEffect(() => {
        const container = scrollRef.current;
        if (container && container.children.length >= 3) {
            const centerIndex = Math.floor(container.children.length / 2);
            const centerVideo = container.children[centerIndex] as HTMLElement;
            container.scrollTo({
                left: centerVideo.offsetLeft - container.offsetWidth / 2 + centerVideo.offsetWidth / 2,
                behavior: 'auto',
            });
        }
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        const container = scrollRef.current;
        if (!container) return;
        setIsDragging(true);
        startX.current = e.pageX - container.offsetLeft;
        scrollLeft.current = container.scrollLeft;
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const container = scrollRef.current;
        if (!container) return;
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        container.scrollLeft = scrollLeft.current - walk;
    };

    return (
        <>
            {/* Hero Section */}
            <main className="relative w-full h-screen overflow-hidden">
                <Header />
                <Image
                    src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753665125/autozar6/mainimages/2025/rox/rox_01_car_fduqbw.webp"
                    alt="ROX 01 SUV"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 z-10" />
            </main>

            {/* Video Scroll Section */}
            <section className="w-full py-16 overflow-hidden bg-white">
                <div
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className="flex gap-8 px-6 md:px-24 cursor-grab active:cursor-grabbing select-none hide-scrollbar"
                    style={{
                        scrollSnapType: 'x mandatory',
                        overflowX: 'scroll',
                        overflowY: 'hidden',
                        scrollbarWidth: 'none',
                    }}
                >
                    {videoUrls.map((url, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 snap-center w-[1920px] h-[1080px] transition-transform duration-300 hover:scale-105"
                        >
                            <video
                                src={url}
                                className="w-full h-full object-cover rounded-xl"
                                autoPlay
                                muted
                                loop
                                playsInline
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
