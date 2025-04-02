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
                            "url('https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png')",
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
                        src="https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-8.png"
                        alt="expertise1"
                        className="rounded shadow"
                    />
                    <img
                        src="https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-9.png"
                        alt="expertise2"
                        className="rounded shadow"
                    />
                    <img
                        src="https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-10.png"
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
                    <p>&nbsp;</p>
                    <p className="text-base leading-relaxed">
                        List of national and international networks and organizations:
                    </p>
                </div>
            </section>

            {/* Clients & Logos */}
            <section className="bg-[#121c2b] py-12 px-4">
                <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between gap-4">

                    <div className="w-[18%]">
                        <img
                            src="https://specialmining.bloomlink.mn/moavolen/2020/05/tsairt.jpg"
                            alt="Tsairt"
                            className="w-full object-contain h-20 mx-auto"
                        />
                    </div>

                    <div className="w-[18%]">
                        <img
                            src="https://specialmining.bloomlink.mn/moavolen/2020/05/southgobi-160054-1178811298.jpeg"
                            alt="SouthGobi Sands"
                            className="w-full object-contain h-20 mx-auto"
                        />
                    </div>

                    <div className="w-[18%]">
                        <img
                            src="https://specialmining.bloomlink.mn/moavolen/2020/05/Erdenes-TavanTolgoi.jpg"
                            alt="Erdenes Tavan Tolgoi"
                            className="w-full object-contain h-20 mx-auto"
                        />
                    </div>

                    <div className="w-[18%]">
                        <img
                            src="https://specialmining.bloomlink.mn/moavolen/2020/05/DMP.jpg"
                            alt="DMP"
                            className="w-full object-contain h-20 mx-auto"
                        />
                    </div>

                    <div className="w-[18%]">
                        <img
                            src="https://specialmining.bloomlink.mn/moavolen/2020/05/Terra.jpg"
                            alt="TERRA ENERGY"
                            className="w-full object-contain h-20 mx-auto"
                        />
                    </div>

                </div>
            </section>


            {/* Final Image Row */}
            <section className="bg-[#f5f6f8] py-12 px-4">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                    <img
                        src="https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-11.png"
                        alt="expertise4"
                        className="rounded shadow"
                    />

                    <img
                        src="https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-12.png"
                        alt="expertise5"
                        className="rounded shadow"
                    />

                    <img
                        src="https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-13.png"
                        alt="expertise6"
                        className="rounded shadow"
                    />

                </div>
            </section>


            {/* ✅ Footer here */}
            <Footer />
        </main>
    );
}
