// components/Organisms/OrganismCart.tsx

import { ObjectLight } from "atomv2/types/objectTypes";
import { get } from "lodash";
import useUnsplash from "src/config/hooks/useUnsplash";
import BlockDiv from "../Blocks/BlockDiv";
import BlockFlexCol from "../Blocks/BlockFlexCol";
import TextH3 from "../Text/TextH3";
import TextH5 from "../Text/TextH5";

export default function OrganismHeroPanel2({
  keyword = "wallpaper",
  item,
  fade = true,
  Outer,
}: {
  keyword?: string;
  item: any;
  fade?: boolean | ObjectLight;
  Outer?: ObjectLight;
}) {
  const { imageUrl, loading, error } = useUnsplash(keyword);
  const defaultImage =
    "https://www.pixelstalk.net/wp-content/uploads/image10/Nature-4K-wallpaper-with-bamboo-forest-with-sunlight-filtering-through-serene-and-peaceful-atmosphere.jpg";

  if (loading) {
    return (
      <section className="h-[30vh] bg-gray-200 flex items-center justify-center text-gray-500">
        Loading...
      </section>
    );
  }

  return (
    <BlockDiv
      type="section"
      className={`h-[33vh] bg-cover bg-center flex items-center justify-center text-white relative ${
        Outer?.className || ""
      }`}
      style={{
        backgroundImage: `url(${
          error ? defaultImage : imageUrl?.regular || defaultImage
        })`,
      }}
      data-block="OrganismHeroPanelOuter">
      {/* Overlay */}
      {fade && (
        <BlockDiv
          className={`absolute inset-0 bg-black/60 ${get(
            fade,
            "className",
            ""
          )}`}
        />
      )}

      {/* Content */}
      <BlockFlexCol className="relative z-10 text-center">
        <TextH3
          value={item?.title}
          className="text-gray-100"
          animation={{ type: "slideUp" }}
        />
        <TextH5
          value={item?.subtitle}
          className="text-gray-200 font-light text-sm"
          animation={{ type: "slideDown" }}
        />
      </BlockFlexCol>
    </BlockDiv>
  );
}
