"use client";

import React from "react";

export default function Hero() {
    return (
        <section
            className="h-[100vh] bg-cover bg-center flex items-center justify-center text-white relative"
            style={{
                backgroundImage:
                    "url('https://cdn.moto.mn/moto/landing/09_specialmining/9d81f6cd-365e-497a-94ec-e4e4b755cb48.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <div className="w-40 h-[3px] bg-[#c8102e] mx-auto mb-8" />
                <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8">
                    Blasting and<br />
                    Drilling Services
                </h1>
                <p className="text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                    Expert in mining service. Contact us to start a project today.
                </p>
                <div className="flex justify-center gap-6">
                    <a
                        href="/services"
                        className="bg-white text-black font-semibold px-8 py-4 text-lg border hover:bg-gray-100 transition-all flex items-center gap-2"
                    >
                        Our Services
                        <span className="text-xl">→</span>
                    </a>
                    <a
                        href="/about"
                        className="bg-[#c8102e] text-white font-semibold px-8 py-4 text-lg hover:bg-red-700 transition-all"
                    >
                        About Us
                    </a>
                </div>
            </div>
        </section>
    );
}
