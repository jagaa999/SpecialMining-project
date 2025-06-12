"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import PanelContainer from "atomv2/components/Panel/PanelContainer";

export default function FooterUsedParts() {
    return (
        <footer className="w-full bg-gray-900 text-white relative">
            <TopSection />
            <ScrollToTopButton />
        </footer>
    );
}

const staticItem = {
    contact: {
        logo: "/logo/usedparts-logo.png",
        description: "Хамгийн найдвартай хуучин сэлбэгийн эх сурвалж — Япон, Солонгос сэлбэг нийлүүлэлт",
        phone1: "976-9911-2233",
        phone2: "976-9900-5566",
    },
    socialLinks: [
        {
            icon: "fa6-brands:facebook",
            href: "https://www.facebook.com/usedparts.mn",
        },
        {
            icon: "fa6-brands:instagram",
            href: "https://www.instagram.com/usedparts.mn",
        },
    ],
    copyright: "© 2025 UsedParts.mn - All rights reserved.",
};

const TopSection = () => {
    return (
        <PanelContainer>
            <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-24 items-center md:items-start py-10 text-center md:text-left">
                {/* Logo */}
                <div className="flex flex-col items-center md:items-start gap-3">
                    <img
                        src="https://cdn.moto.mn/moto/landing/12_tcmotors/69be486e-4774-4d63-afd8-09cb0ad09adb.jpg?t=1749626963911"
                        alt="Logo"
                        className="w-20 md:w-28 h-auto"
                    />
                </div>

                {/* Contact */}
                <div className="flex flex-col gap-2 justify-center items-center md:items-start pt-3">
                    <p className="text-gray-400 text-sm">Холбоо барих</p>
                    <div className="flex items-center gap-2 text-base">
                        <Icon icon="fa:phone" className="text-red-500 text-base" />
                        <span className="text-gray-200">{staticItem.contact.phone1}</span>
                    </div>
                    <div className="flex items-center gap-2 text-base">
                        <Icon icon="fa:phone" className="text-red-500 text-base" />
                        <span className="text-gray-200">{staticItem.contact.phone2}</span>
                    </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2 justify-center items-center md:items-start pt-3">
                    <p className="text-gray-400 text-sm max-w-sm">
                        {staticItem.contact.description}
                    </p>
                    <p className="text-gray-500 text-xs">{staticItem.copyright}</p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center pt-3">
                    {staticItem.socialLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-gray-700 text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
                        >
                            <Icon icon={item.icon} className="text-xl" />
                        </a>
                    ))}
                </div>
            </div>
        </PanelContainer>
    );
};

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        key="scrollToTop"
                        onClick={scrollToTop}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                        className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:brightness-90 transition duration-300"
                    >
                        <Icon icon="mdi:chevron-up" className="text-2xl" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};