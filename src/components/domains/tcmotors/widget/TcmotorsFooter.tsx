"use client";

import OrganismFooter01 from "atomv2/components/Organisms/OrganismFooter01";
import OrganismScrollToTopButton from "atomv2/components/Organisms/OrganismScrollToTopButton";
import dayjs from "atomv2/util/dayjslocale";

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
    logo: "https://cdn.moto.mn/moto/landing/12_tcmotors/06f9c32c-3c7a-4d72-bf00-ebf8d7411ced.jpg",
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
  copyright: `©${dayjs().year()} ТС Моторс - All rights reserved.`,
};
