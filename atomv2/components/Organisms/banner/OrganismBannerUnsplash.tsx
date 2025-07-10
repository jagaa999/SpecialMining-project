"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import PosDesc from "atomv2/components/Position/PosDesc";
import TextH1 from "atomv2/components/Text/TextH1";
import { ObjectFull } from "atomv2/types/objectTypes";
import useUnsplash from "src/config/hooks/useUnsplash";
import OrganismMotionBackground from "./OrganismMotionBackground";
import useResponsiveBreakpoint from "atomv2/hooks/useResponsiveBreakpoint";

export default function OrganismBannerUnsplash({
  keyWord = "background",
  item,
  fadeLayer = true,
}: {
  keyWord?: string;
  item: ObjectFull;
  fadeLayer?: boolean;
}) {
  const { imageUrl, error } = useUnsplash(keyWord);
  const defaultImage = "/images/wallpaper02.jpg";
  const { breakpoint } = useResponsiveBreakpoint();

  const imageReady =
    breakpoint === "2xl"
      ? imageUrl?.raw
      : breakpoint === "xl"
      ? imageUrl?.full
      : breakpoint === "lg" || breakpoint === "md"
      ? imageUrl?.regular
      : imageUrl?.small || null;

  // console.log("SSSSSSSSSSSSS", { imageUrl });

  return (
    <BlockSection className="relative h-screen overflow-hidden flex items-center justify-center">
      <OrganismMotionBackground
        imageUrl={imageReady}
        defaultImage={defaultImage}
        error={Boolean(error)}
      />

      {fadeLayer && (
        <BlockDiv className="absolute inset-0 bg-gradient-to-br from-black/60 via-pink-500/10 to-black/60 z-10" />
      )}

      {/* Text layer */}
      <BlockFlexCol className="relative z-10 text-center gap-2">
        <TextH1
          item={item}
          className="text-white drop-shadow-lg drop-shadow-gray-900"
          animation={{
            type: "slideDown",
          }}
        />
        <PosDesc
          item={item}
          className="text-lg font-light text-white drop-shadow"
          animation={{
            type: "slideUp",
          }}
        />
      </BlockFlexCol>
    </BlockSection>
  );
}
