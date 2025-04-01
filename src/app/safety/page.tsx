import React from "react";
import Footer from "../../components/Footer";

export default function SafetyPage() {
    return (
        <main className="text-gray-800">
            {/* Header Banner */}
            <section>
                <div
                    className="h-[60vh] bg-cover bg-center relative flex items-center justify-center text-white"
                    style={{
                        backgroundImage:
                            "url('https://cdn.moto.mn/moto/landing/09_specialmining/05a78513-5ff8-4fc4-9e62-d9cf801f8b3b.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">Safety</h1>
                        <p className="mt-2 text-sm font-light">Special Mining LLC &gt; Safety</p>
                    </div>
                </div>
            </section>

            {/* Policy Text */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-screen-xl mx-auto space-y-6 text-base leading-relaxed">
                    <p className="font-semibold text-lg">
                        We work to achieve our HSE goal through our “Zero harm Zero incident” policy. Our management
                        process from supply chain to delivery of final products and services is ISO 45001:2018(HSE)
                        certified, and regularly assessed and audited.
                    </p>

                    <div>
                        <h2 className="text-[#c8102e] text-2xl font-bold mb-2">Community and Environment</h2>
                        <p className="text-gray-600">
                            Anywhere SMS operates, we are very committed to protecting environment and take steps to ensure
                            to minimize the environmental impact of our operations, to implement reuse and recycling, to
                            review regularly our environmental footprint.
                        </p>
                    </div>
                </div>
            </section>

            {/* Big Landscape Image */}
            <section className="bg-white px-4">
                <img
                    src="https://cdn.moto.mn/moto/landing/09_specialmining/safety-landscape.jpg"
                    alt="Community and Environment"
                    className="w-full object-cover"
                />
            </section>

            {/* People Section */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-[#c8102e] text-2xl font-bold mb-4">People</h2>
                    <p className="text-gray-700">
                        At SMS, we care and ensure to have a diverse and inclusive workforce. To do so, we create designated
                        workplace training programs to strengthen our current and prospective employees’ skills.
                    </p>
                </div>
            </section>

            {/* Safe operation */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-screen-xl mx-auto space-y-6">
                    <h2 className="text-[#c8102e] text-2xl font-bold mb-2">Safe operation</h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        “We are diligently enforcing regulations such as the ‘Safety Regulations for Explosive Work,’
                        ‘Unified Regulations for Blasting Work,’ and ‘Safety Regulations for Mining Operations,’ among
                        others, to ensure compliance with safety standards. In addition to these established regulations,
                        we are actively working on implementing our own daily work practices to prevent unforeseen
                        incidents and maintain a safe working environment. As of today, we have been successful in our
                        daily operations, with no accidents or incidents that have caused harm, damage, or disruptions. We
                        are committed to upholding these safety measures and adhering to our ‘Safety at Work’ policies. Our
                        commitment to safety extends beyond regulatory compliance; it is embedded in our daily work
                        practices and is a fundamental part of our operations.”
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {["safety1", "safety2", "safety3"].map((img, idx) => (
                            <img
                                key={idx}
                                src={`https://cdn.moto.mn/moto/landing/09_specialmining/gallery/${img}.jpg`}
                                alt={img}
                                className="rounded shadow"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal regulations - fixed width */}
            <section className="bg-[#f5f6f8] py-16 px-4">
                <div className="max-w-screen-xl mx-auto">
                    <div className="bg-[#c8102e] text-white grid md:grid-cols-2 gap-8 p-10 rounded-lg">
                        <div>
                            <h3 className="text-2xl font-bold uppercase mb-4">Internal Regulations</h3>
                            <ul className="list-disc list-inside text-lg">
                                <li>Occupational Safety and Health Internal Regulations</li>
                                <li>Environmental Protection Plan</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold uppercase mb-4">Legal Document</h3>
                            <ul className="list-disc list-inside text-lg">
                                <li>Environmental impact assessment</li>
                                <li>Feasibility study</li>
                                <li>Environmental Conservation Law</li>
                                <li>Disaster Mitigation Plan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ✅ Footer here */}
            <Footer />
        </main>
    );
}
