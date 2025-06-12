"use client";

import { Icon } from "@iconify/react";
import PanelContainer from "atomv2/components/Panel/PanelContainer";
import _ from "lodash";
import NavbarMenu from "../TcmotorsNavMenu/TcmotorsNavbarMenu";

export default function TcmotorsNavbar() {
    return (
        <>
            {/* Top Bar */}
            <PanelContainer>
                <div className="hidden md:flex justify-between items-center py-3 border-b border-gray-100">
                    {/* Social Icons */}
                    <div className="flex flex-row gap-4">
                        {_.map(staticItem?.socials, (item: any, index: number) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-red-600 transition-all duration-300"
                            >
                                <Icon icon={item.icon} />
                            </a>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-row gap-6 items-center">
                        {_.map(staticItem?.contacts, (item: any, index: number) => (
                            <span
                                key={index}
                                className="flex items-center gap-1 text-gray-800 text-xs"
                            >
                                <span className="text-red-500">{item.icon}</span> {item.text}
                            </span>
                        ))}
                    </div>
                </div>
            </PanelContainer>

            {/* Main Navbar */}
            <NavbarMenu item={staticItem} />
        </>
    );
}

// STATIC DATA
const staticItem: any = {
    socials: [
        {
            icon: "fa6-brands:facebook-f",
            href: "https://www.facebook.com/TCMotorsLV",
        },
        {
            icon: "fa6-brands:instagram",
            href: "https://www.instagram.com/tcmotors.mn",
        },
    ],
    contacts: [
        {
            icon: "📍",
            text: "Сүхбаатар дүүрэг, 1-р хороо, Тээврийн товчооны зам",
        },
        {
            icon: "✉",
            text: "info@tcmotors.mn",
        },
        {
            icon: "📞",
            text: "+976 8800-1234",
        },
    ],
    logo: "/logo/tcmotors-logo.png",
    menu: [
        { title: "НҮҮР", href: "/" },
        { title: "ҮЙЛЧИЛГЭЭ", href: "/services" },
        { title: "БҮТЭЭГДЭХҮҮН", href: "/products" },
        { title: "СЭЛБЭГ", href: "/parts" },
        { title: "ХОЛБОО БАРИХ", href: "/contact" },
    ],
    inquiryButton: {
        title: "ЗАХИАЛГА →",
        href: "/contact",
    },
};