"use client";

import { get, map } from "lodash";
import useUnsplash from "src/config/hooks/useUnsplash";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import { ObjectLight } from "atomv2/types/objectTypes";

export default function OrganismHeroPanel({
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
      <section className="h-[100vh] bg-gray-200 flex items-center justify-center text-gray-500">
        Loading...
      </section>
    );
  }

  return (
    <BlockDiv
      type="section"
      className={`h-screen bg-cover bg-center flex items-center justify-center text-white relative ${
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
          className={`absolute inset-0 bg-black/40 ${get(
            fade,
            "className",
            ""
          )}`}
        />
      )}

      {/* Content */}
      <BlockDiv className="relative z-10 text-center px-4">
        <RenderAtom
          value=" "
          type="line"
          className="w-40 bg-brand mx-auto mb-8"
          height="4px"
        />

        <RenderAtom
          value={item?.title}
          type="text"
          className="text-6xl md:text-8xl font-extrabold leading-tight mb-8 whitespace-pre-line text-bg"
        />
        <RenderAtom
          value={item?.subtitle}
          type="text"
          className="text-xl md:text-3xl max-w-3xl mx-auto mb-10 text-bg"
        />

        <BlockDiv className="flex flex-col md:flex-row justify-center gap-6">
          {map(item?.buttons, (item: any, index: number) => (
            <RenderAtom
              key={item?.id || index}
              value={item?.label}
              type="button"
              className=""
              url={{ href: item.href }}
            />
          ))}
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
}
