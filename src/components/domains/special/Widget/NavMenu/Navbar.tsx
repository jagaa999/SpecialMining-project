"use client";

import { Icon } from "@iconify/react";
import PanelContainer from "atomv2/components/Panel/PanelContainer";
import _ from "lodash";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <PanelContainer className="py-1">
        <div className="hidden md:flex justify-between items-center py-3 border-b border-gray-100">
          {/* Social Icons */}
          <div className="flex flex-row gap-4">
            {_.map(staticItem?.socials, (item: any, index: number) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f2e6d] hover:text-[#c8102e] transition-all duration-300">
                <Icon icon={item.icon} />
              </a>
            ))}
          </div>
          <span className="icon-[mdi-light--home]" />

          {/* Contact Info */}
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
      <NavbarMenu item={staticItem} />
    </>
  );
}

// STATIC DATA
const staticItem: any = {
  socials: [
    {
      icon: "fa6-brands:facebook-f",
      href: "https://www.facebook.com/miningthemoon",
    },
    {
      icon: "fa6-brands:instagram",
      href: "https://www.instagram.com/specialminingservices/",
    },
    {
      icon: "fa6-brands:linkedin-in",
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
