import React from "react";
import Footer from "../../components/Footer";

export default function AboutPage() {
    return (
        <main className="text-gray-800">
            {/* Header Banner */}
            <section>
                <div
                    className="h-[60vh] bg-cover bg-center relative flex items-center justify-center text-white"
                    style={{
                        backgroundImage:
                            "url('https://cdn.moto.mn/moto/landing/09_specialmining/2dd8cfde-3731-45f0-b946-12cde2cd5e82.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
                        <p className="mt-2 text-sm font-light">Special Mining LLC &gt; About Us</p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="bg-[#f5f6f8] py-12 px-4">
                <div className="max-w-screen-xl mx-auto space-y-6 text-base leading-relaxed">
                    <p>
                        Special Mining Services LLC (SMS) is a mining technology company that established in 2012 and is
                        specialized in Drill &amp; Blast and industrial chemicals. We are truly committed to safety,
                        responsible operation and our clients’ interest.
                    </p>
                    <div>
                        <h3 className="font-semibold">Our expertise:</h3>
                        <ul className="list-disc list-inside">
                            <li>Explosives Manufacturing</li>
                            <li>Drill and Blast design and solutions</li>
                            <li>High Explosives and initiating systems</li>
                            <li>Industrial Chemicals</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold">Value proposition:</h3>
                        <ul className="list-disc list-inside">
                            <li>Technical services</li>
                            <li>Consulting</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold">Collaboration and industry participation:</h3>
                        <ul className="list-disc list-inside">
                            <li>Mongolian explosives service providers’ association</li>
                            <li>Mongolian National Chamber of Commerce and Industry, “Diamond” member</li>
                            <li>International Society of Explosives Engineers</li>
                            <li>The Mongolia-Australia Chamber of Commerce</li>
                            <li>The Australian Institute of Mining and Metallurgy</li>
                            <li>The European Federation of Explosives Engineer</li>
                            <li>Mining IQ Division of IQPC</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Expertise Grid Images */}
            <section className="bg-white py-16 px-4">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <img
                        src="https://cdn.moto.mn/moto/landing/09_specialmining/7d3888b2-2fc0-4c16-8489-c3d8222a89db.jpg"
                        alt="expertise1"
                        className="rounded shadow"
                    />
                    <img
                        src="https://cdn.moto.mn/moto/landing/09_specialmining/5091666b-f5e6-4c71-9f5a-93ed98f83df3.jpg"
                        alt="expertise2"
                        className="rounded shadow"
                    />
                    <img
                        src="https://cdn.moto.mn/moto/landing/09_specialmining/88e8b2b2-0645-40b4-8808-d432aa9a265f.jpg"
                        alt="expertise3"
                        className="rounded shadow"
                    />
                </div>
            </section>

            {/* Relationship Section */}
            <section className="bg-[#f5f6f8] py-16 px-4">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-[#c8102e] text-2xl font-bold uppercase mb-4">Relationships</h2>
                    <p className="text-base leading-relaxed">
                        We listen and act with honesty and integrity, look after our people and communities and build
                        maintain relationships with customers and other stakeholders.
                    </p>
                </div>
            </section>

            {/* Clients & Logos */}
            <section className="bg-[#121c2b] py-12 px-4">
                <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between gap-4">
                    {[
                        "Tsairt",
                        "SouthGobi Sands",
                        "Erdenes Tavan Tolgoi",
                        "DMP",
                        "TERRA ENERGY",
                    ].map((name, i) => (
                        <div key={i} className="w-[18%]">
                            <img
                                src={`https://cdn.moto.mn/moto/landing/09_specialmining/logos/logo-${i + 1}.png`}
                                alt={name}
                                className="w-full object-contain h-20 mx-auto"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Final Image Row */}
            <section className="bg-[#f5f6f8] py-12 px-4">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {["expertise4", "expertise5", "expertise6"].map((img, idx) => (
                        <img
                            key={idx}
                            src={`https://cdn.moto.mn/moto/landing/09_specialmining/gallery/${img}.jpg`}
                            alt={img}
                            className="rounded shadow"
                        />
                    ))}
                </div>
            </section>

            {/* ✅ Footer here */}
            <Footer />
        </main>
    );
}
