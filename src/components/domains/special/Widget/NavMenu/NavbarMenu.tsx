"use client";

import _ from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PanelContainer from "atomv2/components/Panel/PanelContainer";

export default function NavbarMenu({ item }: { item: any }) {
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
              src={item?.logo}
              className={`${
                scrolled ? "w-[80px]" : "w-[130px]"
              } h-auto object-contain`}
              alt="Special Mining Logo"
            />
          </Link>

          {/* Desktop Menu */}
          {/* <ul className="hidden md:flex flex-wrap gap-x-8 gap-y-1 items-center h-full"> */}

          <DesktopMenu item={item} />

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
            {_.map(item?.menu, (item: any, index: number) => (
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
}

const DesktopMenu = ({ item }: { item: any }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <ul className="hidden md:flex flex-nowrap gap-x-8 gap-y-1 items-center h-full">
        {_.map(item?.menu, (item: any, index: number) =>
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
                  dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}>
                {item.dropdown.map((sub: any, index: number) => (
                  <li
                    key={index}
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
    </>
  );
};
