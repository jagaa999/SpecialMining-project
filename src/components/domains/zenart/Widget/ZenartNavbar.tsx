"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import PanelMain from "atomv2/components/Panel/PanelMain";
import Link from "next/link";
// import { useWindowScroll } from "react-use";

export default function ZenartNavbar() {
  // const { y: scrollY } = useWindowScroll();

  // console.log("dfdsfs", { scrollY });

  return (
    <BlockDiv
      type="header"
      // className="fixed w-full bg-[#f6c99e] z-20 border-b border-[#f7d7ba]  bg-gradient-to-r from-white/50 via-pink-50/70 to-pink-100/80 backdrop-blur-md shadow-md"
      className={`fixed w-full z-20 border-b border-slate-300  bg-gradient-to-r from-white/50 via-pink-50/70 to-slate-100/80 backdrop-blur-md shadow-md`}
      style={{ height: "52px" }}>
      <PanelMain className="px-0 py-0 flex items-center h-full w-full">
        <BlockFlexRow className="justify-between w-full">
          {/* Desktop Nav */}
          <BlockFlexRow className="gap-4">
            <RenderAtom
              value={
                "https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
              }
              type="image"
              alt="Zen Art Logo"
              className="w-24 h-fit rounded-none   brightness-[2000%] saturate-0 contrast-200 invert mr-7"
              url={{ href: "/" }}
            />

            {[
              { href: "/zenart", label: "Зэнарт" },
              { href: "/decor", label: "Чимэглэл" },
              { href: "/partners", label: "Partners" },
              { href: "/price", label: "Үнэ" },
            ].map(({ href, label }) => (
              <Link
                href={href}
                key={href}
                className="hover:text-brand font-medium">
                {label}
              </Link>
            ))}
          </BlockFlexRow>

          {/* Call & CTA */}
          <BlockDiv className="flex items-center space-x-4">
            <a
              href="tel:(+480)123678900"
              className="flex flex-col items-start text-sm">
              <span className="text-xs text-gray-500">Call Us</span>
              <span className="font-semibold">(+976) 8860-5088</span>
            </a>
          </BlockDiv>
        </BlockFlexRow>
      </PanelMain>
    </BlockDiv>
  );
}
