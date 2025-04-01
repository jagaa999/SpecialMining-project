'use client';
import React from "react";
import Footer from "../../components/Footer";

export default function ProductsPage() {
    return (
        <main className="text-gray-800">
            {/* ✅ Banner */}
            <section>
                <div
                    className="h-[60vh] bg-cover bg-center relative flex items-center justify-center text-white"
                    style={{
                        backgroundImage:
                            "url('https://specialmining.bloomlink.mn/moavolen/2023/09/DSC_7513-1536x1025.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">Products</h1>
                        <p className="mt-2 text-sm font-light">
                            Special Mining LLC &gt; Products
                        </p>
                    </div>
                </div>
            </section>

            {/* ✅ Logo Grid with Hover Text */}
            <section className="bg-[#f5f6f8] py-16 px-4">
                <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                        "Electronic and non-electronic initiating systems for Open cut and underground",
                        "Bulk Emulsion Plant Operation and Services",
                        "Explosives Storage and Transport",
                        "Technical Support for Blasting Projects",
                        "On-site Consultation Services",
                        "Hypersonic EX series – Packaged emulsion",
                    ].map((text, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded shadow group"
                        >
                            <img
                                src="https://cdn.moto.mn/moto/landing/09_specialmining/21f27520-6430-43b5-95d0-535ea2f7bcb4.png?t=1742973021250"
                                alt={`product-${i}`}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <p className="text-white text-sm font-medium leading-snug mb-2">
                                    {text}
                                </p>
                                <div className="bg-[#c8102e] text-white w-8 h-8 flex items-center justify-center rounded-full">
                                    +
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ✅ Product Images */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        "https://specialmining.bloomlink.mn/moavolen/2023/09/excavator-1.jpg",
                        "https://specialmining.bloomlink.mn/moavolen/2023/09/excavator-2.jpg",
                        "https://specialmining.bloomlink.mn/moavolen/2023/09/explosives.jpg",
                    ].map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`product-${i}`}
                            className="w-full rounded shadow object-cover hover:scale-105 transition-transform duration-300"
                        />
                    ))}
                </div>
            </section>

            {/* ✅ Pagination */}
            <section className="py-10 bg-[#f5f6f8] flex justify-center">
                <div className="flex gap-2">
                    <button className="px-3 py-1 bg-white border rounded hover:bg-gray-100">←</button>
                    <button className="px-3 py-1 bg-white border rounded hover:bg-gray-100">1</button>
                    <button className="px-3 py-1 bg-[#c8102e] text-white border rounded">2</button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
