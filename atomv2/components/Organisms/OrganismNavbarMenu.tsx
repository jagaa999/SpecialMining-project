"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import PanelMain from "atomv2/components/Panel/PanelMain";
import { ObjectLight } from "atomv2/types/objectTypes";
import { map } from "lodash";
import { usePathname } from "next/navigation";
import { useWindowScroll } from "react-use";
import BlockFlexRow from "../Blocks/BlockFlexRow";
import OrganismUserAvatar from "./OrganismUserAvatar";

export default function OrganismNavbarMenu({
  item,
  Outer,
  variant = "white", // default white
}: {
  item: any;
  Outer?: ObjectLight;
  variant?: "white" | "dark" | "transparent";
}) {
  const { y: scrollY } = useWindowScroll();

  const scrolled = scrollY > 30;

  const variantClass = {
    white: scrolled
      ? "bg-gradient-to-r from-white/50 via-pink-50/70 to-pink-100/80 backdrop-blur-md shadow-md"
      : "bg-white shadow-none",
    dark: scrolled
      ? "bg-black/70 backdrop-blur-md shadow-md text-white"
      : "bg-black text-white",
    transparent: scrolled
      ? "bg-white/20 backdrop-blur-md shadow-md"
      : "bg-transparent",
  }[variant];

  return (
    <BlockDiv
      type="nav"
      data-block="OrganismNavbarMenu"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      } ${variantClass} ${Outer?.className || ""}`}>
      <PanelMain className="py-0">
        <BlockFlexRow className="w-full justify-between">
          <LeftPanel item={item} scrolled={scrolled} />
          <RightPanel item={item} scrolled={scrolled} />
        </BlockFlexRow>
      </PanelMain>
    </BlockDiv>
  );
}

const LeftPanel = ({ item, scrolled }: { item: any; scrolled: boolean }) => {
  return (
    <RenderAtom
      value={item?.logo}
      type="image"
      className={`${
        scrolled ? "w-[30px]" : "w-[50px]"
      } h-auto object-contain rounded-none`}
      alt="Main Logo"
      url={{ href: "/" }}
    />
  );
};

const RightPanel = ({ item, scrolled }: { item: any; scrolled: boolean }) => {
  return (
    <BlockFlexRow>
      <MainMenu item={item} scrolled={scrolled} />
      <OrganismUserAvatar />
    </BlockFlexRow>
  );
};

const MainMenu = ({ item, scrolled }: { item: any; scrolled: boolean }) => {
  const pathname = usePathname();
  return (
    <BlockFlexRow className="gap-x-6 gap-y-1 items-center h-full">
      {map(item?.menu, (item: any, index: number) => (
        <RenderAtom
          key={item?.id || index}
          value={item?.title}
          type="text"
          className={`flex items-center text-sm font-bold tracking-wide transition-all ${
            pathname === item.href ? "text-brand" : "hover:text-brand"
          }`}
          url={{ href: item.href }}
        />
      ))}

      {item?.inquiryButton && !scrolled && (
        <RenderAtom
          value={item.inquiryButton.title}
          type="text"
          variant="action2"
          className={
            "px-3 py-[5px] rounded-full bg-brand text-white text-sm font-semibold"
          }
          url={{ href: item.inquiryButton.href }}
          animation={{
            type: "fadeIn",
            duration: 1.5,
          }}
        />
      )}
    </BlockFlexRow>
  );
};
