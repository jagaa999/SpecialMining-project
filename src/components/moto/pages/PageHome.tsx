"use client";

import PanelMain from "atom/Panel/PanelMain";
import { Icon } from "@iconify/react";
// import Hero from "./HomeHero";
// import { generalTheme } from "../generalConfig";

export default function HomePage({ item = item_local }: { item: any }) {
  console.log("sddfsdf item", item);
  return (
    <>
      {/* <Hero item={item?.hero} /> */}

      <PanelMain>
        {/* <p className={generalTheme?.titleMain}>{item?.title}</p>
        <p className={generalTheme?.textMain}>{item?.description}</p> */}
        haha
        <i className="icon-[mdi-light--home]"></i>
        <button className="icon-[mdi--refresh] text-xl animate-spin"></button>
        <i className="icon-mdi:home text-xl text-red-500" />
        <span className="icon-fa6-solid:car text-2xl text-blue-600" />
        ddd-
        <span className="mdi-light--alert-circle text-yellow-500"></span>
        <span className="fa6-regular--face-grin-hearts text-yellow-500"></span>
        <span className="i-mdi-light:home" />
        <button className="i-mdi:refresh animate-spin text-xl" />
        <span className="i-mdi--home text-xl text-red-500" />
        <span className="i-fa6-solid:car text-2xl text-blue-600" />
        <span className="i-mdi-light:alert-circle text-yellow-500" />
        <i className="i-fa6-regular:face-grin-hearts text-yellow-500 w-6 h-6 bg-gray-400" />
        <img
          src="https://api.iconify.design/mdi:home.svg"
          alt="Home icon"
          width={24}
          height={24}
        />
        <img
          src="https://api.iconify.design/fa6-regular:face-grin-hearts.svg"
          alt="Home icon"
          width={24}
          height={24}
        />
        <Icon
          icon={"mdi-light:alert-circle"}
          className="text-2xl text-blue-500"
        />
        <Icon
          icon="fa6-regular:hand-back-fist"
          className="text-yellow-500 bg-gray-400 text-5xl"
        />
        <Icon icon="fa6-regular:sun" className="text-6xl" />
        <Icon icon="fa6-regular:sun" className="text-6xl iconify--spin" />
        +fdgfdgfd
      </PanelMain>
    </>
  );
}

const item_local = {
  title: "Overview",
  description:
    "Special Mining Services LLC (SMS) is a mining technology company that established in 2012 and is specialized in Drill & Blast and industrial chemicals. We are truly committed to safety, responsible operation and our clients’ interest.",
  video: {
    poster: "https://cdn.moto.mn/moto/landing/09_specialmining/thumb.jpg",
    src: "https://specialmining.bloomlink.mn/moavolen/2023/10/Teselgee.mp4",
  },
  hero: {
    backgroundImage:
      "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
    title: "A Mining Technology Company",
    subtitle: "Expert in a drill & blast technology, industrial chemicals.",
    buttons: [
      {
        label: "Our Services",
        href: "/services",
        style: "light",
      },
      {
        label: "About Us",
        href: "/about",
        style: "primary",
      },
    ],
  },
};
