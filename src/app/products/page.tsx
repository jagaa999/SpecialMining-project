"use client";

import Banner from "../../components/Banner";

const staticItem = {
  banner: {
    title: "Products",
    subtitle: "Special Mining LLC > Products",
    mainimage:
      "https://specialmining.bloomlink.mn/moavolen/2023/09/DSC_7513-1536x1025.jpg",
  },
  productList: [
    {
      image:
        "https://cdn.moto.mn/moto/landing/09_specialmining/21f27520-6430-43b5-95d0-535ea2f7bcb4.png?t=1742973021250",
      description:
        "Electronic and non-electronic initiating systems for Open cut and underground",
    },
    {
      image:
        "https://cdn.moto.mn/moto/landing/09_specialmining/21f27520-6430-43b5-95d0-535ea2f7bcb4.png?t=1742973021250",
      description: "Bulk Emulsion Plant Operation and Services",
    },
    {
      image:
        "https://cdn.moto.mn/moto/landing/09_specialmining/21f27520-6430-43b5-95d0-535ea2f7bcb4.png?t=1742973021250",
      description: "Explosives Storage and Transport",
    },
    {
      image:
        "https://cdn.moto.mn/moto/landing/09_specialmining/21f27520-6430-43b5-95d0-535ea2f7bcb4.png?t=1742973021250",
      description: "Technical Support for Blasting Projects",
    },
    {
      image:
        "https://cdn.moto.mn/moto/landing/09_specialmining/21f27520-6430-43b5-95d0-535ea2f7bcb4.png?t=1742973021250",
      description: "On-site Consultation Services",
    },
    {
      image:
        "https://cdn.moto.mn/moto/landing/09_specialmining/21f27520-6430-43b5-95d0-535ea2f7bcb4.png?t=1742973021250",
      description: "Hypersonic EX series – Packaged emulsion",
    },
  ],
  productImages: [
    "https://specialmining.bloomlink.mn/moavolen/2023/09/excavator-1.jpg",
    "https://specialmining.bloomlink.mn/moavolen/2023/09/excavator-2.jpg",
    "https://specialmining.bloomlink.mn/moavolen/2023/09/explosives.jpg",
  ],
  pagination: {
    currentPage: 2,
    pages: [1, 2],
  },
};

export default function ProductsPage() {
  return (
    <main>
      <Banner item={staticItem?.banner} />

      {/* ✅ Logo Grid with Hover Text */}
      <section className="bg-[#f5f6f8] py-16 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {staticItem.productList.map((product, i) => (
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
      </section>

      {/* ✅ Product Images */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {staticItem?.productImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`product-image-${i}`}
              className="w-full rounded shadow object-cover hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </section>

      {/* ✅ Pagination */}
      <section className="py-10 bg-[#f5f6f8] flex justify-center">
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-white border rounded hover:bg-gray-100">
            ←
          </button>
          {staticItem?.pagination.pages.map((page) => (
            <button
              key={page}
              className={`px-3 py-1 border rounded hover:bg-gray-100 ${
                page === staticItem?.pagination.currentPage
                  ? "bg-[#c8102e] text-white"
                  : "bg-white"
              }`}>
              {page}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
