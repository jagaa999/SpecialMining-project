import React from "react";
import Footer from "../../components/Footer";

export default function ContactPage() {
    return (
        <main className="text-gray-800">
            {/* ✅ Banner */}
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
                        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
                        <p className="mt-2 text-sm font-light">Special Mining LLC &gt; Contact Us</p>
                    </div>
                </div>
            </section>

            {/* ✅ Career Section */}
            <section className="bg-[#f5f6f8] py-16 px-4">
                <div className="max-w-screen-xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold text-[#c8102e]">Career</h2>

                    <div>
                        <h3 className="font-semibold text-lg">HR Policy</h3>
                        <p className="text-gray-700">
                            Ensuring the safety of our employees and providing them with the opportunity to thrive is our primary goal.
                            Furthermore, we aim to have a diverse and inclusive workforce.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg">Open positions</h3>
                        <p className="text-gray-700">
                            We are always looking for new talent to share our success with.
                        </p>
                    </div>
                </div>
            </section>

            {/* ✅ Get in touch + Form */}
            <section className="bg-white py-16 px-5">
                <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
                    {/* Left Info */}
                    <div className="space-y-6">
                        <p className="text-sm uppercase text-[#c8102e] font-semibold">Contact us</p>
                        <h2 className="text-3xl font-bold">Get in touch</h2>

                        <div>
                            <h4 className="font-bold text-lg flex items-center gap-2">🏢 Our Office</h4>
                            <p className="text-gray-700">
                                Regis Place, Suite 1702, 15th khoroo, Khan-Uul district
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg flex items-center gap-2">📞 Phone Number</h4>
                            <p className="text-gray-700">+976 70003639</p>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg flex items-center gap-2">✉️ Email Address</h4>
                            <p className="text-gray-700">info@special.mn</p>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <a href="#" className="text-xl hover:text-[#c8102e]">📘</a>
                            <a href="#" className="text-xl hover:text-[#c8102e]">📸</a>
                            <a href="#" className="text-xl hover:text-[#c8102e]">💼</a>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-[#f5f6f8] p-8 rounded shadow space-y-4">
                        <h3 className="text-xl font-bold mb-4">Make Your Request</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Your name" className="p-2 border rounded w-full" />
                            <input type="email" placeholder="Email address" className="p-2 border rounded w-full" />
                            <input type="text" placeholder="Your number" className="p-2 border rounded w-full" />
                            <select className="p-2 border rounded w-full">
                                <option>Blasting work</option>
                                <option>Production</option>
                                <option>Technical services</option>
                            </select>
                            <textarea placeholder="Message" className="col-span-2 p-2 border rounded w-full h-32" />
                        </div>
                        <button className="bg-[#c8102e] text-white px-6 py-2 rounded hover:bg-red-700 transition-all">
                            Send a Message →
                        </button>
                    </div>
                </div>
            </section>

            {/* ✅ Google Map Section */}
            <section className="w-full h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.985429525627!2d106.854799!3d47.9047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDU0JzE2LjkiTiAxMDbCsDUxJzI1LjciRQ!5e0!3m2!1sen!2smn!4v1711546500000"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            {/* ✅ Footer */}
            <Footer />
        </main>
    );
}
