"use client";

import OrganismFooter01 from "atomv2/components/Organisms/OrganismFooter01";
import OrganismScrollToTopButton from "atomv2/components/Organisms/OrganismScrollToTopButton";

export default function FooterUsedParts() {
  return (
    <>
      <OrganismFooter01 item={staticItem} />
      <OrganismScrollToTopButton />
    </>
  );
}

const staticItem = {
  contact: {
    logo: "/logo/usedparts-logo.png",
    description: "Орж ирсэн сэлбэгийн нийлүүлэлт",
    phone1: "+976-99086787",
    phone2: "+976-98108811",
  },
  socialLinks: [
    {
      icon: "fa6-brands:facebook",
      href: "https://www.facebook.com/TC.motorsp",
    },
    {
      icon: "fa6-brands:instagram",
      href: "#",
    },
  ],
  copyright: "© 2025 ТС Моторс - All rights reserved.",
};
