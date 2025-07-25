"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import PanelMain from "atomv2/components/Panel/PanelMain";
import { map } from "lodash";
import Banner from "../Widget/Banner";

export default function ProductsPage({ item = item_local }: { item: any }) {
  return (
    <BlockDiv type="main">
      <Banner item={item?.banner} />

      {/* ✅ Logo Grid with Hover Text */}
      <PanelMain>
        <BlockSection className="my-24">
          <BlockDiv className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {map(item?.productList, (item: any, index: number) => (
              <div
                key={item?.id || index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center text-center group cursor-pointer border border-gray-50">
                {/* Жижиг зураг */}
                <img
                  src={item?.mainimage}
                  alt={`product-${index}`}
                  className="w-auto h-20 object-contain mb-7 group-hover:scale-105 transition-transform duration-300"
                />

                {/* Том гарчиг */}
                <h3 className="font-semibold text-gray-800 group-hover:text-[#c8102e] transition-colors duration-300 mb-3">
                  {item?.title}
                </h3>

                {/* Тайлбар */}
                <p className="text-gray-500 text-sm">{item?.description}</p>
              </div>
            ))}
          </BlockDiv>
        </BlockSection>
      </PanelMain>
    </BlockDiv>
  );
}

const item_local = {
  banner: {
    title: "Products",
    subtitle: "Special Mining LLC > Products",
    mainimage:
      "https://specialmining.bloomlink.mn/moavolen/2023/09/DSC_7513-1536x1025.jpg",
  },
  productList: [
    {
      mainimage: "/images/products.png",
      title: "Cut elemets",
      description:
        "Electronic and non-electronic initiating systems for Open cut and underground",
    },
    {
      mainimage: "/images/products.png",
      title: "Bulk Emulsion",
      description: "Bulk Emulsion Plant Operation and Services",
    },
    {
      mainimage: "/images/products.png",
      title: "Explosives",
      description: "Explosives Storage and Transport",
    },
    {
      mainimage: "/images/products.png",
      title: "Projects",
      description: "Technical Support for Blasting Projects",
    },
    {
      mainimage: "/images/products.png",
      title: "Services",
      description: "On-site Consultation Services",
    },
    {
      mainimage: "/images/products.png",
      title: "Packaged Emulsion",
      description: "Hypersonic EX series – Packaged emulsion",
    },
  ],
};
