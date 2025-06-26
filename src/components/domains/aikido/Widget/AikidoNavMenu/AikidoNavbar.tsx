"use client";

import OrganismNavbarMenu from "atomv2/components/Organisms/OrganismNavbarMenu";
import OrganismNavbarTopPanel from "atomv2/components/Organisms/OrganismNavbarTopPanel";

export default function AikidoNavbar() {
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
      href: "https://www.facebook.com/aikidoinmongolia",
    },
    {
      icon: "fa6-brands:instagram",
      href: "https://www.instagram.com/aikidoinmongolia/",
    },
  ],
  contacts: [
    {
      icon: "",
      title: "Хүн бүр айкидо хийж чадна",
    },
    {
      icon: "✉",
      title: "info@aikido.mn",
    },
    {
      icon: "📞",
      title: "+976 8070-0888",
    },
  ],
  logo: "https://cdn.moto.mn/moto/landing/11_aikido/4fbf4f4f-d6a2-4901-8a44-f3a5b5fd32fb.png",
  menu: [
    { title: "HOME", href: "/" },
    { title: "AIKIDO", href: "/aikido" },
    {
      title: "СУРГАЛТ",
      href: "/class",
    },
    {
      title: "ШАВЬ",
      href: "/student",
    },
    { title: "ABOUT US", href: "/about" },
  ],
};
