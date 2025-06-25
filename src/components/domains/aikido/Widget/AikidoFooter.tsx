"use client";

import OrganismFooter01 from "atomv2/components/Organisms/OrganismFooter01";
import OrganismScrollToTopButton from "atomv2/components/Organisms/OrganismScrollToTopButton";

export default function AikidoFooter() {
  return (
    <>
      <OrganismFooter01 item={staticItem} />
      <OrganismScrollToTopButton />
    </>
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
