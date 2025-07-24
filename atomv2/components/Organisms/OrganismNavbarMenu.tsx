"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import { ObjectLight } from "atomv2/types/objectTypes";
import _, { map } from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import BlockFlexRow from "../Blocks/BlockFlexRow";
import OrganismUserAvatar from "./OrganismUserAvatar";

export default function OrganismNavbarMenu({
  item,
  Outer,
  variant = "white", // default white
}: {
  item: any;
  Outer?: ObjectLight;
  variant?: "white" | "dark" | "transparent";
}) {
  const { y: scrollY } = useWindowScroll();

  const scrolled = scrollY > 30;

  const variantClass = {
    white: scrolled
      ? "bg-gradient-to-r from-white/50 via-pink-50/70 to-pink-100/80 backdrop-blur-md shadow-md"
      : "bg-white shadow-none",
    dark: scrolled
      ? "bg-black/70 backdrop-blur-md shadow-md text-white"
      : "bg-black text-white",
    transparent: scrolled
      ? "bg-white/20 backdrop-blur-md shadow-md"
      : "bg-transparent",
  }[variant];

  return (
    <BlockDiv
      type="nav"
      data-block="OrganismNavbarMenu"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      } ${variantClass} ${Outer?.className || ""}`}>
      <PanelMain className="py-0">
        <BlockDiv className="w-full flex justify-between items-center">
          <RenderAtom
            value={item?.logo}
            type="image"
            className={`${
              scrolled ? "w-[30px]" : "w-[50px]"
            } h-auto object-contain rounded-none`}
            alt="Main Logo"
            url={{ href: "/" }}
          />
          <BlockFlexRow className="">
            <RightMenu item={item} />
            <OrganismUserAvatar />
          </BlockFlexRow>
        </BlockDiv>
      </PanelMain>
    </BlockDiv>
  );
}

const RightMenu = ({ item }: { item: any }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
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
    </>
  );
};

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
