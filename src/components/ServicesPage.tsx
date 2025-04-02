'use client';

import React, { useRef, useEffect } from "react";
import Footer from "../components/Footer";

export default function ServicesPage() {
    const blastingRef = useRef(null);
    const productionRef = useRef(null);
    const technicalRef = useRef(null);
    const monitoringRef = useRef(null);
    const qualityRef = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.sectionRefs = {
                blasting: blastingRef,
                production: productionRef,
                technical: technicalRef,
                monitoring: monitoringRef,
                quality: qualityRef,
            };
        }
    }, []);

    return (
        <main className="text-gray-800">
            {/* ✅ Banner Section */}
            <section>
                <div
                    className="h-[60vh] bg-cover bg-center relative flex items-center justify-center text-white"
                    style={{
                        backgroundImage:
                            "url('https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">Services</h1>
                        <p className="mt-2 text-sm font-light">Special Mining LLC &gt; Services</p>
                    </div>
                </div>
            </section>

            {/* ✅ Specialized Fields */}
            <section className="bg-[#f5f6f8] py-16 px-4" ref={blastingRef}>
                <div className="max-w-screen-xl mx-auto space-y-8">
                    <h2 className="text-2xl md:text-3xl text-[#c8102e] font-bold">Our specialized fields are:</h2>
                    <ul className="space-y-2 text-gray-700 pl-4 list-disc">
                        <li>Down-the-hole solutions (Point Load Tie and Shoot)</li>
                        <li>Drill & Blast design</li>
                        <li>Blast hole drilling</li>
                        <li>Consulting & Technical services</li>
                        <li>Explosives Supply</li>
                    </ul>
                    <h2 className="text-2xl md:text-3xl text-[#c8102e] font-bold">Our projects</h2>
                    <p className="text-gray-700">
                        Our mission is to deliver sustainable and innovative solutions to even most challenging projects and value to our customers, while decreasing carbon footprint.
                    </p>
                    <h2 className="text-2xl md:text-3xl text-[#c8102e] font-bold">Blasting Work</h2>
                    <ul className="space-y-2 text-gray-700 pl-4 list-disc">
                        <li>Open pit mining coal and metal</li>
                        <li>Quarrying</li>
                        <li>Underground mining</li>
                        <li>Rock slope stabilization</li>
                        <li>Geophysical Exploration, Logging and Seismic blasts</li>
                        <li>Perforating blasts for natural oil and gas</li>
                    </ul>
                    <p className="text-gray-600">
                        We are committed to meeting the needs and expectations of our clients by providing a package of services that includes project management and client satisfaction. We aim to deliver quality work at the highest level, tailored to the client’s requirements.
                    </p>
                </div>
            </section>

            <section className="bg-white">
                <img
                    src="https://specialmining.bloomlink.mn/moavolen/2023/09/DSC_7464-1536x1025.jpg"
                    alt="Explosion"
                    className="w-full object-cover"
                />
            </section>

            {/* ✅ Production */}
            <section className="bg-white py-16 px-4" ref={productionRef}>
                <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl text-[#c8102e] font-bold">Production</h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            Our company operates a cutting-edge emulsion explosive manufacturing plant, bringing modern technology and services to Mongolia through a partnership with global leaders in explosives technology. Our production facility is located in the Tavan Tolgoi region, within a 7 km distance to the east of Tsogtsetsii Sum in the Omnogovi Province. Established in 2013, and since then, it has been successfully contributing to the mining industry.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The production capacity of this facility is 115,000 tons of Emulsion Explosive products per annum. The plant is equipped with the latest automated production technology, ensuring high efficiency and quality. Additionally, it utilizes membrane and carbon filtration systems for water treatment, ensuring the highest quality for emulsion explosive production.
                        </p>
                    </div>
                    <img
                        src="https://specialmining.bloomlink.mn/moavolen/2023/09/DSC_7513-1536x1025.jpg"
                        alt="Production"
                        className="w-full rounded shadow"
                    />
                </div>
            </section>

            <section className="bg-white">
                <img
                    src="https://specialmining.bloomlink.mn/moavolen/2020/01/img-02.jpg"
                    alt="Cranes"
                    className="w-full object-cover"
                />
            </section>

            {/* ✅ Technical Services */}
            <section className="bg-[#f5f6f8] py-16 px-4" ref={technicalRef}>
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-2xl md:text-3xl text-[#c8102e] font-bold mb-10">Technical Services</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-[#252891] mb-2">Safe</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Risk assessment</li>
                                <li>Safety Management</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[#252891] mb-2">Efficient</h3>
                            <ul className="list-disc pl-4 text-gray-600">
                                <li>Blast designs and support</li>
                                <li>Drill and blast audits</li>
                                <li>High speed video analysis</li>
                                <li>Fragmentation assessment</li>
                                <li>VOD Tests</li>
                                <li>Explosives quality control</li>
                            </ul>
                        </div>
                        <div>
                            <img
                                src="https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-zurg.png"
                                alt="Tech"
                                className="rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ Monitoring Section */}
            <section ref={monitoringRef} className="bg-[#f5f6f8] py-16 px-4">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-2xl md:text-3xl text-[#c8102e] font-bold mb-6">Monitoring</h2>
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        <p className="text-gray-700 leading-relaxed col-span-1 md:col-span-1 text-justify">
                            From the simplest to the most demanding applications, our instruments offer innovative features
                            and a variety of recording formats that increase their functionality and allow for flexibility
                            across a wide variety of applications. Trusted in over 110 countries, our seismographs monitor
                            ground vibration and air overpressure changes created by blasting, demolition, mining,
                            quarrying, and construction activities. Our monitors are the instruments of choice for
                        </p>
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ul className="bg-[#3f60b7] text-white p-6 rounded-lg list-disc list-inside space-y-2">
                                <li>Blast monitoring for compliance</li>
                                <li>Near-field blast monitoring</li>
                                <li>Far-field blast monitoring</li>
                                <li>Demolition activity monitoring</li>
                                <li>Construction activity monitoring</li>
                                <li>Heavy transportation monitoring</li>
                            </ul>
                            <ul className="bg-[#252891] text-white p-6 rounded-lg list-disc list-inside space-y-2">
                                <li>Pile driving monitoring</li>
                                <li>Dynamic compaction monitoring</li>
                                <li>Tunneling and subway monitoring</li>
                                <li>Structural monitoring and analysis</li>
                                <li>Remote access monitoring</li>
                                <li>Environmental monitoring</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ Quality Management Section */}
            <section ref={qualityRef} className="bg-[#f5f6f8] py-16 px-4">
                <div className="max-w-screen-xl mx-auto space-y-8">
                    <h2 className="text-2xl md:text-3xl text-[#c8102e] font-bold">Quality Management</h2>
                    <div className="bg-[#c8102e] text-white p-4 rounded-md">
                        To ensure product quality and performance the bulk emulsion plant has in house advanced modern laboratory enables us to evaluate our products to reassure our quality:
                    </div>
                    <div className="grid md:grid-cols-4 gap-6 items-start">
                        <ul className="col-span-2 list-disc list-inside text-gray-700 space-y-2">
                            <li>Stability (repump, thermal shock, storage)</li>
                            <li>Crystallization (polarized microscopy)</li>
                            <li>Droplet dispersion (microscopy)</li>
                            <li>VOD (explosives and boosters)</li>
                            <li>Water resistance</li>
                            <li>Viscosity, density, gasification rate, detonation transition, brisance etc.</li>
                        </ul>
                        <div className="col-span-2 grid grid-cols-3 gap-4">
                            {[
                                "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
                                "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-2.png",
                                "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-3.png"
                            ].map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt={`quality-${idx}`}
                                    className="rounded shadow"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}