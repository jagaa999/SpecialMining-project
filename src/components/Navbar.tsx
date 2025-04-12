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
  return (
    <>
      {/* Top Bar */}

      <PanelContainer>
        <div className="hidden md:flex justify-between items-center py-3 border-b border-gray-100">
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
      <MainNavbar />
    </>
  );
}

const MainNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-white/50 via-pink-50/70 to-pink-100/80 backdrop-blur-md shadow-md py-2"
          : "bg-white shadow-none py-4"
      }`}>
      <PanelContainer>
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <img
              src={staticItem?.logo}
              className={`${
                scrolled ? "w-[80px]" : "w-[130px]"
              } h-auto object-contain`}
              alt="Special Mining Logo"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-wrap gap-x-8 gap-y-1 items-center h-full">
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
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-[1000px]" : "max-h-0"
          }`}>
          <ul className="flex flex-col gap-2">
            {_.map(staticItem?.menu, (item: any, index: number) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 font-semibold text-[14px] ${
                    pathname === item.href
                      ? "text-[#c8102e]"
                      : "text-gray-800 hover:text-[#c8102e]"
                  }`}>
                  {item.title}
                </Link>

                {/* Dropdown for mobile */}
                {item.dropdown && (
                  <ul className="pl-6">
                    {item.dropdown.map((sub: any, i: number) => (
                      <li key={i} className="py-1">
                        <Link
                          href={sub.href}
                          className="block text-sm text-gray-600 hover:text-[#c8102e]">
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </PanelContainer>
    </nav>
  );
};

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
    { title: "SUSTAINABILITY", href: "/sustainability" },
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
