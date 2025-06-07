"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import { useEffect, useState } from "react";
import PanelContainer from "atomv2/components/Panel/PanelContainer";

export default function AikidoFooter() {
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
    logo: "https://cdn.moto.mn/moto/landing/11_aikido/4fbf4f4f-d6a2-4901-8a44-f3a5b5fd32fb.png",
    description: "Хүн бүр хичээллэж болох гайхамшигт бие хамгаалах урлаг",
    phone1: "976-8070-0888",
    phone2: "976-77073377",
  },
  socialLinks: [
    {
      icon: "fa6-brands:facebook-f",
      href: "https://www.facebook.com/aikidoinmongolia/",
    },
    {
      icon: "fa6-brands:instagram",
      href: "https://www.instagram.com/aikidoinmongolia/",
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
            className="w-16 md:w-24 h-auto"
          />
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2 justify-center items-center md:items-start pt-3">
          <p className="text-gray-500 text-sm">Contact us</p>
          <div className="flex items-center gap-2 text-base">
            <Icon icon="fa:phone" className="text-[#c8102e] text-base" />
            <span className="text-gray-300 text-base">
              {staticItem?.contact.phone1}
            </span>
          </div>
          <div className="flex items-center gap-2 text-base">
            <Icon icon="fa:phone" className="text-[#c8102e] text-base" />
            <span className="text-gray-300 text-base">
              {staticItem?.contact.phone2}
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
          {_.map(staticItem?.socialLinks, (item: any, index: number) => (
            <a
              key={item?.id || index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-700 text-gray-400 rounded flex items-center justify-center hover:bg-gray-600 transition">
              <Icon icon={item.icon} />
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
