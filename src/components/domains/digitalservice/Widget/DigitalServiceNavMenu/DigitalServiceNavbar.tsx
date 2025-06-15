"use client";

import _ from "lodash";

import { Icon } from "@iconify/react";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import NavbarMenu from "./DigitalServiceNavbarMenu";

export default function DigitalServiceNavbar() {
  return (
    <>
      <PanelMain className="py-0 w-full">
        <BlockDiv className="hidden md:flex justify-between items-center py-3 border-b border-gray-100">
          <BlockDiv className="flex flex-row gap-4">
            {_.map(staticItem?.socials, (item: any, index: number) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-brand transition-all duration-300">
                <Icon icon={item.icon} />
              </a>
            ))}
          </BlockDiv>
          <BlockDiv className="flex flex-row gap-6 items-center">
            {_.map(staticItem?.contacts, (item: any, index: number) => (
              <span
                key={item?.id || index}
                className="flex items-center gap-1 text-xs">
                <span className="text-info">{item.icon}</span> {item.text}
              </span>
            ))}
          </BlockDiv>
        </BlockDiv>
      </PanelMain>
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
      icon: "",
      text: "Технологийн шийдлийг хэрэглэгчийн гарт",
    },
    {
      icon: "✉",
      text: "info@digitalservice.mn",
    },
    {
      icon: "📞",
      text: "+976 9601-2038",
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
