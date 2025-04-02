"use client";

import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="text-white text-sm relative">
            {/* ✅ Top Section */}
            <div className="flex flex-col md:flex-row w-full relative min-h-[450px]">
                {/* ✅ Background */}
                <div className="absolute inset-0">
                    <img
                        src="https://cdn.moto.mn/moto/landing/09_specialmining/21f27520-6430-43b5-95d0-535ea2f7bcb4.png"
                        alt="bg"
                        className="w-full h-full object-cover brightness-[.2] blur-sm"
                    />
                </div>

                {/* ✅ Left side */}
                <div className="relative z-10 md:w-3/4 w-full px-6 pt-16 pb-10 h-full flex items-stretch">
                    <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Contact */}
                        <div className="space-y-5 h-full">
                            <img
                                src="https://cdn.moto.mn/moto/landing/09_specialmining/21f27520-6430-43b5-95d0-535ea2f7bcb4.png?t=1742973021250"
                                alt="Logo"
                                className="w-40 mb-2"
                            />
                            <p className="text-gray-300">Expert in mining services</p>
                            <p className="text-xs font-semibold uppercase mt-4">Contact us</p>
                            <div className="flex items-center gap-2 text-lg">
                                <FaPhoneAlt className="text-[#c8102e] text-xl" />
                                <span className="font-bold text-white text-xl">976-7000 0369</span>
                            </div>
                        </div>

                        {/* Industry */}
                        <div className="h-full">
                            <h3 className="font-bold text-white text-lg mb-4">Industry company</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li>FAQ</li>
                                <li>Awards</li>
                                <li>Services</li>
                                <li>Contact Us</li>
                                <li>Out Team</li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="h-full">
                            <h3 className="font-bold text-white text-lg mb-4">Services</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li>Blasting work</li>
                                <li>Production</li>
                                <li>Technical services</li>
                                <li>Monitoring</li>
                                <li>Quality management</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ✅ Right side - Products */}
                <div className="relative z-10 md:w-1/4 w-full bg-[#31346e] px-10 py-16 flex items-center">
                    <div className="max-w-screen-xl mx-auto">
                        <h3 className="font-bold text-white text-lg mb-4">Products</h3>
                        <ul className="space-y-4 text-gray-200 text-sm">
                            <li>Hypersonic E series – Bulk emulsion</li>
                            <li>Hypersonic EX series – Packaged emulsion</li>
                            <li>Hypersonic Power series – Bulk ANFO</li>
                            <li>
                                Electronic and non-electronic initiating systems <br />
                                for Open cut and underground
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ✅ Bottom Bar */}
            <div className="flex w-full relative z-10">
                {/* Left */}
                <div className="w-full md:w-3/4 bg-[#10121e] py-6 px-4 border-t border-[#15152e]">
                    <div className="max-w-screen-xl mx-auto text-center md:text-left">
                        <p className="text-xs text-white">
                            Copyright © 2023 All Rights Reserved. Developed by BloomLink LLC
                        </p>
                    </div>
                </div>

                {/* Right - Social */}
                <div className="w-1/4 hidden md:flex items-center justify-center bg-[#2f2f7e] border-t border-[#15152e] gap-4">
                    <a
                        href="https://www.facebook.com/miningthemoon"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white text-[#2f2f7e] rounded flex items-center justify-center"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com/specialminingservices/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white text-[#2f2f7e] rounded flex items-center justify-center"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/specialminingservices"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white text-[#2f2f7e] rounded flex items-center justify-center"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>

            {/* ✅ Back to Top */}
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="bg-[#c8102e] text-white w-12 h-12 flex items-center justify-center rounded shadow-lg"
                >
                    ↑
                </button>
            </div>
        </footer>
    );
}