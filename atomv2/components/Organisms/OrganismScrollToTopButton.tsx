"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import { cn } from "atomv2/util/atomHelperV2";
import { useWindowScroll } from "react-use";
import RenderAtom from "../Atoms/RenderAtom";

export default function OrganismScrollToTopButton({
  className,
}: {
  className?: string;
}) {
  const { y: scrollY } = useWindowScroll();
  const isVisible = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BlockDiv className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <RenderAtom
          value="material-symbols-light:keyboard-arrow-up"
          type="icon"
          className={cn(
            "bg-brand text-bg w-12 h-12 flex items-center justify-center rounded shadow-lg cursor-pointer hover:brightness-90 transition duration-300 ease-in-out text-lg",
            className
          )}
          animation={{ type: "slideUp" }}
          onClick={scrollToTop}
        />
      )}
    </BlockDiv>
  );
}
