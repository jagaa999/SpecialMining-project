"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function KioskPageWeb() {
  return (
    <BlockDiv
      id="portfolio"
      className="w-full min-h-screen bg-gradient-to-br from-white to-[#f9f5f1] py-16 px-4 md:px-12 text-[#1a1a1a]">
      {/* Title */}
      <TextHtml
        value={`<h2 class="text-4xl md:text-5xl font-extrabold text-center leading-tight tracking-tight drop-shadow-sm">
          Бидний <span class="text-brand">Portfolio</span>
        </h2>`}
        className="mb-12"
      />

      {/* Grid */}
      <PortfolioGrid />
    </BlockDiv>
  );
}

const PortfolioGrid = () => {
  const works = [
    {
      title: "TC Motors Website",
      image:
        "https://res.cloudinary.com/dg2qmka48/image/upload/v1751443619/autozar6/mainimages/2025/portfolio/tcmotors_lwjd0y.png",
      desc: "Hyundai автомашины албан ёсны борлуулагчийн вэб хуудас.",
      href: "https://tcmotors.mn",
    },
    {
      title: "Digital Service LLC",
      image:
        "https://res.cloudinary.com/dg2qmka48/image/upload/v1751443614/autozar6/mainimages/2025/portfolio/digitalservice_dacteq.png",
      desc: "Цахим шийдэл, систем хөгжүүлэлтийн үйлчилгээний сайт.",
      href: "https://digitalservice.mn",
    },
    {
      title: "Special Mining",
      image:
        "https://res.cloudinary.com/dg2qmka48/image/upload/v1751443614/autozar6/mainimages/2025/portfolio/special_uocvev.png",
      desc: "Уул уурхайн тусгай зөвшөөрөлтэй байгууллагын танилцуулга сайт.",
      href: "https://special.mn",
    },
    {
      title: "Aikido Mongolia",
      image:
        "https://res.cloudinary.com/dg2qmka48/image/upload/v1751443613/autozar6/mainimages/2025/portfolio/Aikido_drokjq.png",
      desc: "Айкидо тулааны урлагийн Монголын холбооны албан ёсны сайт.",
      href: "https://aikido.mn",
    },
  ];

  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {works.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] cursor-zoom-in">
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-60 object-cover transform group-hover:scale-110 group-hover:brightness-75 transition duration-700 ease-in-out"
          />

          {/* Overlay fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 group-hover:opacity-70 opacity-30 transition duration-500" />

          {/* Text glass layer */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-white/10 backdrop-blur-md border-t border-white/10">
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight drop-shadow-sm group-hover:translate-y-0 translate-y-3 transition duration-500">
              {item.title}
            </h3>
            <p className="text-sm mt-1 text-gray-200 drop-shadow group-hover:opacity-100 transition duration-700">
              {item.desc}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};
