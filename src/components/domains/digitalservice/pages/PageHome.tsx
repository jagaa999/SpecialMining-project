"use client";

import PanelMain from "atomv2/components/Panel/PanelMain";

import { generalTheme } from "../Widget/DigitalServiceGeneralConfig";
import DigitalServiceHomeHero from "../Widget/DigitalServiceHomeHero";
import RenderAtom from "atomv2/components/system/RenderAtom";

export default function DigitalServicePageHome({
  item = item_local,
}: {
  item: any;
}) {
  return (
    <>
      <DigitalServiceHomeHero item={item_local?.hero} />

      <PanelMain>
        <RenderAtom
          type="text"
          value={item?.title}
          theme={generalTheme?.titleMain}
        />
        <RenderAtom
          type="text"
          value={item?.description}
          theme={generalTheme?.textMain}
        />

        <video
          controls
          className="w-full h-auto rounded-lg shadow-xl bg-gray-500 pt-16"
          poster={item?.video.poster}
          autoPlay
          loop
          muted>
          <source src={item?.video.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
    title: "Дижитал Сервис",
    subtitle:
      "Принтер, принтерийн хортой холбоотой худалдаа, засвар үйлчилгээ бүгд нэг дор",
    buttons: [
      {
        label: "Манай хорнууд",
        href: "/shop",
        style: "primary",
      },
      {
        label: "About Us",
        href: "/about",
        style: "light",
      },
    ],
  },
};
