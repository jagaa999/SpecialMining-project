"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import PanelMain from "atomv2/components/Panel/PanelMain";
import Link from "next/link";

export default function ZenartNavbar() {
  return (
    <header className="z-50 w-full bg-white fixed shadow-md">
      <PanelMain className="px-6 py-4">
        <BlockFlexRow className="justify-between">
          {/* <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://cdn.moto.mn/moto/landing/13_zenart/home/836ea1dc-7e57-4c99-bbcd-763824fede9c.png"
            alt="Zenart Logo"
            className="w-24 h-auto"
          />
        </Link> */}

          {/* Desktop Nav */}
          <BlockFlexRow className="gap-4">
            {[
              { href: "/", label: "Home" },
              { href: "/team", label: "Team" },
              { href: "/about", label: "About" },
              { href: "/decor", label: "Decor" },
              { href: "/interior", label: "Interior" },
              { href: "/partners", label: "Partners" },
              { href: "/sanitary", label: "Sanitary" },
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
              <span className="font-semibold">(+480) 123 678 900</span>
            </a>
          </BlockDiv>
        </BlockFlexRow>
      </PanelMain>
    </header>
  );
}
