"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SataNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0e1013]/80 backdrop-blur-md shadow-lg py-2"
          : "bg-[#0e1013] py-4"
      }`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 transition-all duration-300">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://cdn.moto.mn/moto/landing/14_sata/b0e5948f-9516-4005-b5b5-5409650f486e.jpg?t=1751014784029"
            alt="SATA Logo"
            width={scrolled ? 30 : 36}
            height={scrolled ? 30 : 36}
            className="transition-all duration-300 rounded-full"
          />
          <span
            className={`transition-all duration-300 font-semibold tracking-wide ${
              scrolled ? "text-base" : "text-lg"
            } text-green-400`}>
            SATA Mongolia
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:flex items-center">
          {[
            { label: "Нүүр", href: "/" },
            { label: "Танилцуулга", href: "/intro" },
            { label: "Дэлгүүр", href: "/shop" },
            { label: "Холбоо барих", href: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative text-white/90 font-medium transition-colors duration-200 hover:text-green-400">
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
