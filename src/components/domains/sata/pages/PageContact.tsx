import React from "react";
import Layout from "../layout/Layout";
import { Icon } from "@iconify/react";

const PageContact = () => {
    return (
        <Layout>
            <main className="w-full">
                {/* ✅ Hero */}
                <section
                    className="relative py-32 text-center px-4 bg-cover bg-center transition-all duration-300 text-white"
                    style={{
                        backgroundImage: `url(https://res.cloudinary.com/dg2qmka48/image/upload/v1751357555/autozar6/mainimages/2025/sata/contact_y4or23.jpg)`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/70 z-0" />
                    <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-md text-white">
                            Холбоо барих
                        </h1>
                        <p className="text-2xl text-white/90 max-w-3xl mx-auto">
                            Бид танд туслахад үргэлж бэлэн
                        </p>
                    </div>
                </section>

                {/* ✅ Contact Info Cards */}
                <section className="max-w-screen-lg mx-auto py-24 px-6 grid md:grid-cols-2 gap-10">
                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4">
                        <Icon icon="mdi:map-marker" className="text-green-600 w-8 h-8 mt-1" />
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-1">Хаяг</h2>
                            <p className="text-gray-700">
                                Улаанбаатар хот, Баянгол дүүрэг, SATA Tools дэлгүүр
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4">
                        <Icon icon="ic:baseline-phone" className="text-green-600 w-7 h-7 mt-1" />
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-1">Утас</h2>
                            <p className="text-gray-700">
                                <a href="tel:70112233" className="hover:underline text-green-700 font-medium">
                                    7011-2233
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4">
                        <Icon icon="mdi:email-outline" className="text-green-600 w-7 h-7 mt-1" />
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-1">Имэйл</h2>
                            <p className="text-gray-700">
                                <a href="mailto:info@satatools.mn" className="hover:underline text-green-700 font-medium">
                                    info@satatools.mn
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4">
                        <Icon icon="mdi:clock-outline" className="text-green-600 w-7 h-7 mt-1" />
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-1">Цагийн хуваарь</h2>
                            <p className="text-gray-700">Даваа - Баасан: 09:00 - 18:00</p>
                            <p className="text-gray-700">Бямба: 10:00 - 16:00</p>
                            <p className="text-gray-700">Ням: Амарна</p>
                        </div>
                    </div>
                </section>

                {/* ✅ Google Map */}
                <section className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.010972062162!2d106.88822581202262!3d47.9113457689017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692f194b1ed0f%3A0x1f2a13db8cc9f1aa!2zU0FUQSBUb29scyBNb25nb2xpYQ!5e0!3m2!1sen!2smn!4v1719478620767!5m2!1sen!2smn"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                    ></iframe>
                </section>
            </main>
        </Layout>
    );
};

export default PageContact;
