"use client";

import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* ✅ Top Bar */}
      <div className="bg-white border-b border-gray-200 text-sm text-gray-700 py-2 px-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 text-[#0f2e6d] text-lg">
            <a href="https://www.facebook.com/miningthemoon" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/specialminingservices/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/specialminingservices/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>

          <div className="text-xs flex flex-wrap items-center gap-6 text-gray-800">
            <span className="flex items-center gap-1"><span className="text-red-600">📍</span> Regis Place, Suite 1702, 15th khoroo, Khan-Uul district</span>
            <span className="flex items-center gap-1"><span className="text-red-600">✉</span> info@special.mn</span>
            <span className="flex items-center gap-1"><span className="text-red-600">📞</span> +976 7000 0369</span>
          </div>
        </div>
      </div>

      {/* ✅ Separator Line */}
      <div className="h-[1px] bg-gray-300 w-full" />

      {/* ✅ Main Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* ✅ Left: Logo + Nav */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="w-[130px]">
              <Link href="/">
                <img
                  src="https://cdn.moto.mn/moto/landing/09_specialmining/21f27520-6430-43b5-95d0-535ea2f7bcb4.png?t=1742973021250"
                  alt="Special Mining Logo"
                  className="w-full object-contain"
                />
              </Link>
            </div>

            {/* Nav items */}
            <ul className="hidden lg:flex gap-8 text-[#111] text-[14px] font-bold tracking-wide">
              <li><Link href="/" className="hover:text-[#c8102e]">HOME</Link></li>
              <li><Link href="/about" className="hover:text-[#c8102e]">ABOUT US</Link></li>
              <li><Link href="/safety" className="hover:text-[#c8102e]">SAFETY AND SUSTAINABILITY</Link></li>
              <li
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link href="/services" className="flex items-center gap-1 hover:text-[#c8102e]">
                  SERVICES
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                  </svg>
                </Link>
                <ul className={`absolute top-full left-0 mt-2 w-56 bg-white border shadow-lg text-sm z-50 transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  {[
                    { name: "Blasting work", href: "/services#blasting" },
                    { name: "Production", href: "/services#production" },
                    { name: "Technical services", href: "/services#technical" },
                    { name: "Monitoring", href: "/services#monitoring" },
                    { name: "Quality management", href: "/services#quality" },
                  ].map((item, index) => (
                    <li key={index} className="px-4 py-3 hover:bg-gray-100 border-t first:border-none">
                      <Link href={item.href}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li><Link href="/products" className="hover:text-[#c8102e]">PRODUCTS</Link></li>
              <li><Link href="/contact" className="hover:text-[#c8102e]">CONTACT US AND CAREER</Link></li>
              <li>
                <Link href="#" className="hover:text-[#c8102e]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.5a7.5 7.5 0 010 14.15z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* ✅ INQUIRY Button */}
          <div className="flex">
            <Link
              href="/contact"
              className="ml-auto bg-[#c8102e] text-white text-[14px] font-bold px-10 py-[14px] rounded-md transition-all hover:bg-[#a80e26] whitespace-nowrap"
            >
              INQUIRY →
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
