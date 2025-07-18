"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import _, { map } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrganismNavbarMenu({ item }: { item: any }) {
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
    <BlockDiv
      type="nav"
      data-block="OrganismNavbarMenu"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-white/50 via-pink-50/70 to-pink-100/80 backdrop-blur-md shadow-md py-2"
          : "bg-white shadow-none py-4"
      }`}>
      <PanelMain className="py-0">
        <BlockDiv className="w-full flex justify-between items-center">
          {/* Logo */}
          <RenderAtom
            value={item?.logo}
            type="image"
            className={`${
              scrolled ? "w-[30px]" : "w-[50px]"
            } h-auto object-contain rounded-none`}
            alt="Main Logo"
            url={{ href: "/" }}
          />

          {/* Desktop Menu */}
          <DesktopMenu item={item} />
          {/* Mobile menu button */}
          <button
            className="md:hidden"
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
        </BlockDiv>

        {/* Mobile Menu */}
        <BlockDiv
          className={`md:hidden mt-4 transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-[1000px]" : "max-h-0"
          }`}>
          <ul className="flex flex-col gap-2">
            {_.map(item?.menu, (item: any, index: number) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 font-semibold text-[14px] ${
                    pathname === item.href ? "text-brand" : "hover:text-brand"
                  }`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </BlockDiv>
      </PanelMain>
    </BlockDiv>
  );
}

const DesktopMenu = ({ item }: { item: any }) => {
  const pathname = usePathname();

  return (
    <ul className="hidden md:flex flex-nowrap gap-x-6 gap-y-1 items-center h-full">
      {map(item?.menu, (item: any, index: number) => (
        <li key={item?.id || index}>
          <RenderAtom
            value={item?.title}
            type="text"
            className={`flex items-center text-sm font-bold tracking-wide transition-all ${
              pathname === item.href ? "text-brand" : "hover:text-brand"
            }`}
            url={{ href: item.href }}
          />
        </li>
      ))}
      {item?.inquiryButton && (
        <li>
          <RenderAtom
            value={item.inquiryButton.title}
            type="text"
            variant="action2"
            className={
              "px-3 py-[5px] rounded-full bg-brand text-white text-sm font-semibold"
            }
            url={{ href: item.inquiryButton.href }}
          />
        </li>
      )}
    </ul>
  );
};
