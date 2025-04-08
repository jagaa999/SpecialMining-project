"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import PanelContainer from "../config/PanelContainer";

const iconMap = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
};

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-800 text-white relative">
      {/* ✅ Top Section */}
      <TopSection />

      {/* ✅ Back to Top */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#c8102e] text-white w-12 h-12 flex items-center justify-center rounded shadow-lg cursor-pointer hover:brightness-90 transition duration-300 ease-in-out">
          ↑
        </button>
      </div>
    </footer>
  );
}

const staticItem = {
  contact: {
    logo: "https://cdn.moto.mn/moto/landing/09_specialmining/21f27520-6430-43b5-95d0-535ea2f7bcb4.png?t=1742973021250",
    description: "Expert in mining services",
    phone: "976-7000-0369",
  },
  industry: {
    title: "Industry company",
    items: ["FAQ", "Awards", "Services", "Contact Us", "Out Team"],
  },
  services: {
    title: "Services",
    items: [
      "Blasting work",
      "Production",
      "Technical services",
      "Monitoring",
      "Quality management",
    ],
  },
  products: {
    title: "Products",
    items: [
      "Hypersonic E series – Bulk emulsion",
      "Hypersonic EX series – Packaged emulsion",
      "Hypersonic Power series – Bulk ANFO",
      "Electronic and non-electronic initiating systems for Open cut and underground",
    ],
  },
  socialLinks: [
    {
      icon: "facebook",
      url: "https://www.facebook.com/miningthemoon",
    },
    {
      icon: "instagram",
      url: "https://www.instagram.com/specialminingservices/",
    },
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/company/specialminingservices",
    },
  ],
  copyright: "All Rights Reserved.",
};

const TopSection = () => {
  return (
    <PanelContainer>
      <div className="w-full flex flex-row gap-7 lg:gap-24 items-start py-10">
        <div className="flex flex-col gap-2">
          <img
            src={staticItem?.contact.logo}
            alt="Logo"
            className="w-40 h-auto"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center items-center pt-3">
          <p className="text-gray-500 text-sm">Contact us</p>
          <div className="flex items-center gap-2 text-lg">
            <FaPhoneAlt className="text-[#c8102e] text-xl" />
            <span className="text-gray-300 text-xl">
              {staticItem?.contact.phone}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center pt-3">
          <p className="text-gray-500 text-sm">
            {staticItem?.contact.description}
          </p>
          <p className="text-gray-500 text-sm">{staticItem?.copyright}</p>
        </div>

        <div className="flex flex-row gap-3 justify-center items-center pt-3">
          {staticItem?.socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-700 text-gray-400 rounded flex items-center justify-center">
              {iconMap[social.icon]}
            </a>
          ))}
        </div>
      </div>
    </PanelContainer>
  );
};
