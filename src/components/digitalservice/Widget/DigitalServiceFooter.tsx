"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import PanelContainer from "../../../../atom/Panel/PanelContainer";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: any = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
};

export default function DigitalServiceFooter() {
  return (
    <footer className="w-full bg-neutral-800 text-white relative">
      {/* ✅ Top Section */}
      <TopSection />

      {/* ✅ Back to Top */}
      <ScrollToTopButton />

      {/* ✅ Bottom Section */}
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
      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-7 lg:gap-24 items-center md:items-start py-10 text-center md:text-left">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <img
            src={staticItem?.contact.logo}
            alt="Logo"
            className="w-32 md:w-40 h-auto"
          />
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2 justify-center items-center md:items-start pt-3">
          <p className="text-gray-500 text-sm">Contact us</p>
          <div className="flex items-center gap-2 text-lg">
            <FaPhoneAlt className="text-[#c8102e] text-xl" />
            <span className="text-gray-300 text-xl">
              {staticItem?.contact.phone}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2 justify-center items-center md:items-start pt-3">
          <p className="text-gray-500 text-sm">
            {staticItem?.contact.description}
          </p>
          <p className="text-gray-500 text-sm">{staticItem?.copyright}</p>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start items-center pt-3">
          {staticItem?.socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-700 text-gray-400 rounded flex items-center justify-center hover:bg-gray-600 transition">
              {iconMap[social.icon]}
            </a>
          ))}
        </div>
      </div>
    </PanelContainer>
  );
};

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            key="scrollToTop"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="bg-[#c8102e] text-white w-12 h-12 flex items-center justify-center rounded shadow-lg cursor-pointer hover:brightness-90 transition duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
