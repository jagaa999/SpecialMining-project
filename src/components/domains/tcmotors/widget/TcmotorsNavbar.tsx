"use client";

import OrganismNavbarMenu from "atomv2/components/Organisms/OrganismNavbarMenu";
import OrganismNavbarTopPanel from "atomv2/components/Organisms/OrganismNavbarTopPanel";

export default function TcmotorsNavbar() {
  return (
    <>
      <OrganismNavbarTopPanel item={staticItem} />
      <OrganismNavbarMenu item={staticItem} />
    </>
  );
}

// STATIC DATA
const staticItem: any = {
  socials: [
    {
      icon: "fa6-brands:facebook-f",
      href: "https://www.facebook.com/tcmotors.mn",
    },
    {
      icon: "fa6-brands:instagram",
      href: "#",
    },
  ],
  contacts: [
    {
      icon: "mdi:target-variant", // Уриа эсвэл mission statement
      title: "Орж ирсэн япон сэлбэг",
    },
    {
      icon: "mdi:email-outline", // Имэйл
      title: "info@tcmotors.mn",
    },
    {
      icon: "mdi:phone-outline", // Утас
      title: "+976 7000-6787",
    },
  ],
  logo: "https://cdn.moto.mn/moto/landing/12_tcmotors/06f9c32c-3c7a-4d72-bf00-ebf8d7411ced.jpg",
  menu: [
    { title: "НҮҮР", href: "/" },
    { title: "ҮЙЛЧИЛГЭЭ", href: "/services" },
    { title: "АВТОМАШИН", href: "/car" },
    { title: "СЭЛБЭГ", href: "/parts" },
    { title: "ХОЛБОО БАРИХ", href: "/contact" },
  ],
  inquiryButton: {
    title: "ЗАХИАЛГА →",
    href: "/contact",
  },
};
