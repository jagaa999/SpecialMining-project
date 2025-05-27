"use client";

import _ from "lodash";

import NavbarMenu from "./DigitalServiceNavbarMenu";
import PanelContainer from "atomv2/components/Panel/PanelContainer";
import { Icon } from "@iconify/react";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";

export default function DigitalServiceNavbar() {
  return (
    <>
      <PanelContainer>
        <BlockDiv className="hidden md:flex justify-between items-center py-3 border-b border-gray-100">
          <BlockDiv className="flex flex-row gap-4">
            {_.map(staticItem?.socials, (item: any, index: number) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f2e6d] text-xl hover:text-[#c8102e] transition-all duration-300">
                {/* {iconMap[item.icon as keyof typeof iconMap]} */}
                <Icon icon={item.icon} />
              </a>
            ))}
          </BlockDiv>
          <BlockDiv className="flex flex-row gap-6 items-center">
            {_.map(staticItem?.contacts, (item: any, index: number) => (
              <span
                key={item?.id || index}
                className="flex items-center gap-1 text-gray-800 text-xs">
                <span className="text-pink-600">{item.icon}</span> {item.text}
              </span>
            ))}
          </BlockDiv>
        </BlockDiv>
      </PanelContainer>
      {/* Main Navbar */}
      <NavbarMenu item={staticItem} />
    </>
  );
}

const staticItem = {
  socials: [
    {
      icon: "fa6-brands:facebook-f",
      href: "https://www.facebook.com/digitalservicemng",
    },
    {
      icon: "fa6-brands:instagram",
      href: "https://www.instagram.com/digitalservicemongolia/",
    },
  ],
  contacts: [
    {
      icon: "📍",
      text: "Бүх зүйлийг дижиталаар шийдье",
    },
    {
      icon: "✉",
      text: "mgl.digitalservice@gmail.com",
    },
    {
      icon: "📞",
      text: "+976 9192-2038",
    },
  ],
  logo: "https://cdn.moto.mn/moto/landing/10_digitalservice/ddf6d2bf-6066-45f9-b365-031bc3a15ccc.png",
  menu: [
    { title: "HOME", href: "/" },
    { title: "SHOP", href: "/shop" },
    {
      title: "SERVICE",
      href: "/service",
    },
    { title: "ABOUT US", href: "/about" },
    { title: "CONTACT", href: "/contact" },
  ],
};
