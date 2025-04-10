"use client";

import React from "react";
import Hero from "./Hero";
import PanelMain from "../../config/PanelMain";
import { generalTheme } from "../../config/generalConfig";

export default function HomePage() {
  return (
    <>
      <Hero />

      <PanelMain>
        <p className={generalTheme?.titleMain}>{staticItem?.title}</p>
        <p className={generalTheme?.textMain}>{staticItem?.description}</p>

        <video
          controls
          className="w-full h-auto rounded-lg shadow-xl bg-gray-500 pt-16"
          poster={staticItem?.video.poster}
          autoPlay
          loop
          muted>
          <source src={staticItem?.video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </PanelMain>
    </>
  );
}

const staticItem = {
  title: "Overview",
  description:
    "Special Mining Services LLC (SMS) is a mining technology company that established in 2012 and is specialized in Drill & Blast and industrial chemicals. We are truly committed to safety, responsible operation and our clients’ interest.",
  video: {
    poster: "https://cdn.moto.mn/moto/landing/09_specialmining/thumb.jpg",
    src: "https://specialmining.bloomlink.mn/moavolen/2023/10/Teselgee.mp4",
  },
};
