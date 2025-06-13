// mungundent/components/MungundentHeroSection.tsx
import React from "react";
import Link from "next/link";

export default function MungundentHeroSection() {
    return (
        <section
            className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: "url('/images/hero.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Танай гэр бүлийн шүдний эмч
                </h1>
                <p className="mt-4 text-lg md:text-xl">
                    Найдвартай, өвдөлтгүй, сэтгэл ханамжтай эмчилгээ
                </p>
                <div className="mt-6">
                    <Link href="/contact">
                        <button className="bg-[#00A8A8] hover:bg-[#008f8f] text-white px-6 py-3 rounded-full shadow-lg transition">
                            Цаг захиалах
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
