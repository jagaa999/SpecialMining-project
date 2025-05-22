"use client";

import PanelMain from "atomv2/components/Panel/PanelMain";
import Banner from "../Widget/DigitalServiceBanner";

export default function PageShop({ item = item_local }: { item: any }) {
  return (
    <main>
      <Banner item={item?.banner} />

      {/* ✅ Logo Grid with Hover Text */}
      <PanelMain>
        <section className="my-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {item.productList.map((item: any, index: number) => (
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
          </div>
        </section>

        {/* <section className="my-24">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {item.productList.map((product, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded shadow group">
                <img
                  src={product.image}
                  alt={`product-${i}`}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white text-sm font-medium leading-snug mb-2">
                    {product.description}
                  </p>
                  <div className="bg-[#c8102e] text-white w-8 h-8 flex items-center justify-center rounded-full">
                    +
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* ✅ Product Images */}
        {/* <section className="bg-white py-16 px-4">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {item?.productImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`product-image-${i}`}
              className="w-full rounded shadow object-cover hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </section> */}

        {/* ✅ Pagination */}
        {/* <section className="py-10 bg-[#f5f6f8] flex justify-center">
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-white border rounded hover:bg-gray-100">
            ←
          </button>
          {item?.pagination.pages.map((page) => (
            <button
              key={page}
              className={`px-3 py-1 border rounded hover:bg-gray-100 ${
                page === item?.pagination.currentPage
                  ? "bg-[#c8102e] text-white"
                  : "bg-white"
              }`}>
              {page}
            </button>
          ))}
        </div>
      </section> */}
      </PanelMain>
    </main>
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
