"use client";

import OrganismNavbarMenu from "atomv2/components/Organisms/OrganismNavbarMenu";
import OrganismNavbarTopPanel from "atomv2/components/Organisms/OrganismNavbarTopPanel";

export default function DigitalServiceNavbar() {
  return (
    <>
      <OrganismNavbarTopPanel item={staticItem} />
      <OrganismNavbarMenu item={staticItem} />
    </>
  );
}

const staticItem = {
  socials: [
    {
      icon: "fa6-brands:facebook-f",
      href: "https://www.facebook.com/digitalservicemng",
    },
    {
      icon: "fa6-brands:instagram",
      href: "https://www.instagram.com/digitalservicemongolia/",
    },
  ],
  contacts: [
    {
      icon: "mdi:target-variant", // Уриа эсвэл mission statement
      title: "Технологийн шийдлийг хэрэглэгчийн гарт",
    },
    {
      icon: "mdi:email-outline", // Имэйл
      title: "info@digitalservice.mn",
    },
    {
      icon: "mdi:phone-outline", // Утас
      title: "+976 9601-2038",
    },
  ],
  logo: "https://cdn.moto.mn/moto/landing/10_digitalservice/ddf6d2bf-6066-45f9-b365-031bc3a15ccc.png",
  menu: [
    { title: "HOME", href: "/" },
    { title: "SHOP", href: "/shop" },
    {
      title: "SERVICE",
      href: "/service",
    },
    { title: "ABOUT US", href: "/about" },
    { title: "CONTACT", href: "/contact" },
  ],
};
