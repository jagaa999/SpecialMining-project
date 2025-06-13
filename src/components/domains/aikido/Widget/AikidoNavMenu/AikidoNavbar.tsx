"use client";

import { map } from "lodash";

import PanelContainer from "atomv2/components/Panel/PanelContainer";
import { Icon } from "@iconify/react";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import AikidoNavbarMenu from "./AikidoNavbarMenu";

export default function AikidoNavbar() {
  return (
    <BlockDiv className="w-full">
      <PanelContainer>
        <BlockDiv className="hidden md:flex flex-row justify-between items-center py-3">
          <BlockDiv className="flex flex-row gap-4">
            {map(staticItem?.socials, (item: any, index: number) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand text-xl block">
                <Icon icon={item.icon} />
              </a>
            ))}
          </BlockDiv>
          <BlockDiv className="flex flex-row gap-6 items-center">
            {map(staticItem?.contacts, (item: any, index: number) => (
              <span key={item?.id || index} className="flex items-center gap-1">
                <span className="text-brand">{item.icon}</span> {item.text}
              </span>
            ))}
          </BlockDiv>
        </BlockDiv>
      </PanelContainer>
      {/* Main Navbar */}
      <AikidoNavbarMenu item={staticItem} />
    </BlockDiv>
  );
}

const staticItem = {
  socials: [
    {
      icon: "fa6-brands:facebook-f",
      href: "https://www.facebook.com/aikidoinmongolia",
    },
    {
      icon: "fa6-brands:instagram",
      href: "https://www.instagram.com/aikidoinmongolia/",
    },
  ],
  contacts: [
    {
      icon: "",
      text: "Хүн бүр айкидо хийж чадна",
    },
    {
      icon: "✉",
      text: "info@aikido.mn",
    },
    {
      icon: "📞",
      text: "+976 8070-0888",
    },
  ],
  logo: "https://cdn.moto.mn/moto/landing/11_aikido/4fbf4f4f-d6a2-4901-8a44-f3a5b5fd32fb.png",
  menu: [
    { title: "HOME", href: "/" },
    { title: "AIKIDO", href: "/aikido" },
    {
      title: "СУРГАЛТ",
      href: "/class",
    },
    {
      title: "ШАВЬ",
      href: "/student",
    },
    { title: "ABOUT US", href: "/about" },
  ],
};
