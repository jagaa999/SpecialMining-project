import OrganismFooter01 from "atomv2/components/Organisms/OrganismFooter01";
import OrganismScrollToTopButton from "atomv2/components/Organisms/OrganismScrollToTopButton";

export default function DigitalServiceFooter() {
  return (
    <>
      <OrganismFooter01 item={staticItem} />
      <OrganismScrollToTopButton />
    </>
  );
}

const staticItem = {
  contact: {
    logo: "https://cdn.moto.mn/moto/landing/10_digitalservice/ddf6d2bf-6066-45f9-b365-031bc3a15ccc.png",
    description: " Технологийн шийдлийг хэрэглэгчийн гарт",
    phone1: "976-701220388",
    phone2: "976-96012038",
  },
  socialLinks: [
    {
      icon: "fa6-brands:facebook-f",
      href: "https://www.facebook.com/digitalservicemng/",
    },
    {
      icon: "fa6-brands:instagram",
      href: "https://www.instagram.com/digitalservicemongolia/",
    },
  ],
  copyright: "All Rights Reserved.",
};
