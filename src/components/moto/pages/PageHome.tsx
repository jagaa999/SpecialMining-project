"use client";

import PanelMain from "atom/Panel/PanelMain";
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
        sdfd sfdsf sdf sdf sdf sd
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
