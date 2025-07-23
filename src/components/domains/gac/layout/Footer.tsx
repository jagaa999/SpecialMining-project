"use client";

import Image from "next/image";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">

                {/* Моделиуд */}
                <div className="space-y-2 text-sm">
                    <h4 className="text-white font-semibold mb-3">МОДЕЛИУД</h4>
                    <p className="hover:text-gray-300 cursor-pointer">E9</p>
                    <p className="hover:text-gray-300 cursor-pointer">NEW EMPOW</p>
                    <p className="hover:text-gray-300 cursor-pointer">GS4 MAX</p>
                    <p className="hover:text-gray-300 cursor-pointer">M6 PRO</p>
                    <p className="hover:text-gray-300 cursor-pointer">ALL New GS8</p>
                    <p className="hover:text-gray-300 cursor-pointer">AION ES</p>
                    <p className="hover:text-gray-300 cursor-pointer">AION V</p>
                    <p className="hover:text-gray-300 cursor-pointer">HYPTEC HT</p>
                    <p className="hover:text-gray-300 cursor-pointer">More Models</p>
                </div>

                {/* Технологи */}
                <div className="space-y-2 text-sm">
                    <h4 className="text-white font-semibold mb-3">ТЕХНОЛОГИ</h4>
                    <p className="hover:text-gray-300 cursor-pointer">Intelligent System</p>
                    <p className="hover:text-gray-300 cursor-pointer">Engine & Battery</p>
                    <p className="hover:text-gray-300 cursor-pointer">Intelligent Factory</p>
                    <p className="hover:text-gray-300 cursor-pointer">Safety</p>
                    <p className="hover:text-gray-300 cursor-pointer">Cutting-edge Technology</p>
                </div>

                {/* ХОЛБОГДОХ */}
                <div className="space-y-2 text-sm">
                    <h4 className="text-white font-semibold mb-3">ХОЛБОГДОХ</h4>
                    <p className="hover:text-gray-300 cursor-pointer">Become a Partner</p>
                    <p className="hover:text-gray-300 cursor-pointer">Jobs</p>
                </div>

                {/* ҮЙЛЧИЛГЭЭ */}
                <div className="space-y-2 text-sm">
                    <h4 className="text-white font-semibold mb-3">ҮЙЛЧИЛГЭЭ</h4>
                    <p className="hover:text-gray-300 cursor-pointer">Our Service</p>
                </div>

                {/* Лого, и-мэйл, сошиал */}
                <div className="col-span-2 space-y-4">
                    <Image
                        src="https://res.cloudinary.com/dg2qmka48/image/upload/v1753169877/autozar6/mainimages/2025/gac/6070626e-eb29-4424-a6c2-ebb94ee9aa57_lm1hx9.webp"
                        alt="GAC Logo"
                        width={100}
                        height={60}
                        className="object-contain"
                    />
                    <p className="text-sm text-white">GACI_CMD_CDS_OF@gac-international.com</p>
                    <div className="flex space-x-4 text-lg">
                        <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
                        <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
                        <FaInstagram className="hover:text-gray-300 cursor-pointer" />
                        <FaYoutube className="hover:text-gray-300 cursor-pointer" />
                    </div>
                </div>
            </div>

            <hr className="my-8 border-gray-700" />

            <div className="max-w-7xl mx-auto text-xs text-center text-gray-500 space-y-2">
                <p>© {new Date().getFullYear()} GAC GROUP</p>
                <div className="space-x-4">
                    <a href="#" className="hover:text-white">Cookies Policy</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white">Term of Use</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}
