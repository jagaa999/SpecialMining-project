"use client";

import { Icon } from "@iconify/react";
import AtomAnimationV2 from "atomv2/components/Atoms/AtomAnimationV2";
import AtomIconV2 from "atomv2/components/Atoms/AtomIconV2";
import AtomTextV2 from "atomv2/components/Atoms/AtomTextV2";
import BlockAffix from "atomv2/components/Blocks/BlockAffix";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockSlider from "atomv2/components/Blocks/BlockSlider";
import PanelMain from "atomv2/components/Panel/PanelMain";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import useScrollTop from "atomv2/hooks/useScrollTop";

// import Hero from "./HomeHero";
// import { generalTheme } from "../generalConfig";

export default function HomePage() {
  const { goToTop } = useScrollTop();

  // console.log("sddfsdf item", item);
  return (
    <>
      <PanelMain>
        {/* <p className={generalTheme?.titleMain}>{item?.title}</p>
        <p className={generalTheme?.textMain}>{item?.description}</p> */}
        <BlockSlider>
          <BlockDiv type="span" className="bg-yellow-200 p-5 rounded-lg h-48">
            hahaыбөб ыө
          </BlockDiv>
          <BlockDiv type="span" className="bg-yellow-200 p-5 w-32 rounded-lg">
            haha быө быөбыөб ыөөаөба быөаб ыөбы ө
          </BlockDiv>
          <AtomIconV2
            icon="mdi-light:alert-circle"
            className="text-2xl text-blue-500"
          />
        </BlockSlider>
        hahaha
        <BlockAffix offsetTop={150}>dsfdsf dsfdsfdsf dsfsdfdsfdsf</BlockAffix>
        killer
        <AtomIconV2 icon="fa6-regular:sun" className="text-6xl animate-spin" />
        <RenderAtom
          type={"icon"}
          value="fa6-regular:sun"
          className="text-pink-600 block text-6xl animate-pulse w-64 h-64 bg-amber-200"
          tooltip={{ title: "Энэ бол tooltip" }}
          animation={{
            type: "fadeIn",
            duration: 1.0,
            triggerOnce: false,
            threshold: 0.3,
            // loop: 3,
          }}
          // loading={true}
          // spinning={{ spinning: true }}
          // url={{ href: "/newsss" }}
        />
        <RenderAtom
          type={"text"}
          value="Энэ бол текст"
          className="text-red-600 block"
          tooltip={{ title: "Энэ бол tooltip" }}
          // spinning={{ spinning: true }}
          // url={{ href: "/newsss" }}
        />
        <RenderAtom
          type={"button"}
          value="товч товч"
          className="text-red-200 rounded-lg bg-gray-800 w-64 h-32 mt-10"
          tooltip={{ title: "Энэ бол tooltip", placement: "rightBottom" }}
          // loading={true}
          // spinning={{ spinning: true }}
          // url={{ href: "/cooool" }}
        />
        <RenderAtom
          type={"image"}
          value="https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2025/civic-type-r/Hero/hero-mobile-2x-A.jpg%202x"
          className=" rounded-lg w-[500px] h-64 mt-10 object-cover object-center"
          tooltip={{ title: "Энэ бол tooltip" }}
          animation={{
            type: "slideUp",
            delay: 0.3,
            duration: 1.6,
            triggerOnce: false,
            threshold: 0.3,
            loop: 3,
          }}
          // spinning={{ spinning: true }}
          // loading={true}
          width={500}
          height={200}
          alt="Banner"
          // className="rounded-lg"
          // url={{ href: "/dfdfdf" }}
        />
        <AtomAnimationV2
          type="fadeIn"
          delay={0.1}
          duration={0.6}
          triggerOnce={false}
          threshold={0.3}>
          <div className="bg-white shadow-md rounded-xl p-4">
            Scroll to Animate
          </div>
        </AtomAnimationV2>
        <AtomTextV2 className="text-pink-600">sdfdsf dsfdsf</AtomTextV2>
        ddd-
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
        <button onClick={goToTop} className="bg-green-600">
          Back to Top
        </button>
      </PanelMain>
    </>
  );
}

// const item_local = {
//   title: "Overview",
//   description:
//     "Special Mining Services LLC (SMS) is a mining technology company that established in 2012 and is specialized in Drill & Blast and industrial chemicals. We are truly committed to safety, responsible operation and our clients’ interest.",
//   video: {
//     poster: "https://cdn.moto.mn/moto/landing/09_specialmining/thumb.jpg",
//     src: "https://specialmining.bloomlink.mn/moavolen/2023/10/Teselgee.mp4",
//   },
//   hero: {
//     backgroundImage:
//       "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
//     title: "A Mining Technology Company",
//     subtitle: "Expert in a drill & blast technology, industrial chemicals.",
//     buttons: [
//       {
//         label: "Our Services",
//         href: "/services",
//         style: "light",
//       },
//       {
//         label: "About Us",
//         href: "/about",
//         style: "primary",
//       },
//     ],
//   },
// };
