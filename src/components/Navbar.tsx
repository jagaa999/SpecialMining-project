"use client";

import _ from "lodash";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import PanelContainer from "../config/PanelContainer";
import { usePathname } from "next/navigation";

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaLinkedinIn: <FaLinkedinIn />,
};

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}

      <PanelContainer>
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          <div className="flex flex-row gap-4">
            {_.map(staticItem?.socials, (item: any, index: number) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f2e6d] text-xl hover:text-[#c8102e] transition-all duration-300">
                {iconMap[item.icon as keyof typeof iconMap]}
              </a>
            ))}
          </div>
          <div className="flex flex-row gap-6 items-center">
            {_.map(staticItem?.contacts, (item: any, index: number) => (
              <span
                key={item?.id || index}
                className="flex items-center gap-1 text-gray-800 text-xs">
                <span className="text-pink-600">{item.icon}</span> {item.text}
              </span>
            ))}
          </div>
        </div>
      </PanelContainer>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-white/50 via-pink-50/70 to-pink-100/80 backdrop-blur-md shadow-md py-2"
            : "bg-white shadow-none py-4"
        }`}>
        <PanelContainer>
          <div className="w-full flex justify-between items-center">
            {/* Logo + Nav */}
            <div className="flex items-center gap-12">
              <Link href="/">
                <img
                  src={staticItem?.logo}
                  className={`${
                    scrolled ? "w-[80px]" : "w-[130px]"
                  } h-auto object-contain`}
                  alt="Special Mining Logo"
                />
              </Link>

              <ul className="flex flex-wrap gap-x-8 gap-y-1 items-center h-full">
                {_.map(staticItem?.menu, (item: any, index: number) =>
                  item.dropdown ? (
                    <li
                      key={index}
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}>
                      <Link
                        href={item.href}
                        className={`flex items-center text-[14px] font-bold tracking-wide transition-all ${
                          pathname === item.href
                            ? "text-[#c8102e]"
                            : "text-[#111] hover:text-[#c8102e]"
                        }`}>
                        {item.title}
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                        </svg>
                      </Link>
                      <ul
                        className={`absolute top-full left-0 mt-2 w-56 bg-white border shadow-lg text-sm z-50 transition-all duration-300 ${
                          dropdownOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        }`}>
                        {item.dropdown.map((sub, i) => (
                          <li
                            key={i}
                            className="px-4 py-3 hover:bg-gray-100 border-t first:border-none">
                            <Link href={sub.href}>{sub.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={index}>
                      <Link
                        href={item.href}
                        // className="flex items-center text-[#111] text-[14px] font-bold tracking-wide hover:text-[#c8102e]">
                        className={`flex items-center text-[14px] font-bold tracking-wide transition-all ${
                          pathname === item.href
                            ? "text-[#c8102e]"
                            : "text-[#111] hover:text-[#c8102e]"
                        }`}>
                        {item.title}
                      </Link>
                    </li>
                  )
                )}
                {/* <li>
                <Link href="#" className="hover:text-[#c8102e]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2.5a7.5 7.5 0 010 14.15z"
                    />
                  </svg>
                </Link>
              </li> */}
              </ul>
            </div>

            {/* Inquiry Button */}
            {/* <div className="flex">
            <Link
              href={staticItem?.inquiryButton.href}
              className="ml-auto bg-[#c8102e] text-white text-[14px] font-bold px-10 py-[14px] rounded-md transition-all hover:bg-[#a80e26] whitespace-nowrap">
              {staticItem?.inquiryButton.title}
            </Link>
          </div> */}
          </div>
        </PanelContainer>
      </nav>
    </>
  );
}

const staticItem = {
  socials: [
    {
      icon: "FaFacebookF",
      href: "https://www.facebook.com/miningthemoon",
    },
    {
      icon: "FaInstagram",
      href: "https://www.instagram.com/specialminingservices/",
    },
    {
      icon: "FaLinkedinIn",
      href: "https://www.linkedin.com/company/specialminingservices/",
    },
  ],
  contacts: [
    {
      icon: "📍",
      text: "Regis Place, Suite 1702, 15th khoroo, Khan-Uul district",
    },
    {
      icon: "✉",
      text: "info@special.mn",
    },
    {
      icon: "📞",
      text: "+976 7000-0369",
    },
  ],
  logo: "https://cdn.moto.mn/moto/landing/09_specialmining/21f27520-6430-43b5-95d0-535ea2f7bcb4.png?t=1742973021250",
  menu: [
    { title: "HOME", href: "/" },
    { title: "ABOUT US", href: "/about" },
    { title: "SAFETY", href: "/safety" },
    {
      title: "SERVICES",
      href: "/services",
      dropdown: [
        { title: "Blasting work", href: "/services#blasting" },
        { title: "Production", href: "/services#production" },
        { title: "Technical services", href: "/services#technical" },
        { title: "Monitoring", href: "/services#monitoring" },
        { title: "Quality management", href: "/services#quality" },
      ],
    },
    { title: "PRODUCTS", href: "/products" },
    { title: "CAREER", href: "/career" },
    { title: "CONTACT", href: "/contact" },
  ],
  inquiryButton: {
    title: "INQUIRY →",
    href: "/contact",
  },
};
