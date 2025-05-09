"use client";

import _ from "lodash";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import NavbarMenu from "./DigitalServiceNavbarMenu";
import PanelContainer from "atom/Panel/PanelContainer";

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaLinkedinIn: <FaLinkedinIn />,
};

export default function DigitalServiceNavbar() {
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
      <NavbarMenu item={staticItem} />
    </>
  );
}

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
    { title: "SHOP", href: "/shop" },
    {
      title: "SERVICES",
      href: "/services",
    },
    { title: "ABOUT US", href: "/about" },
    { title: "CONTACT", href: "/contact" },
  ],
};
