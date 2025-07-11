"use client";

import Image from "next/image";
import Link from "next/link";
import LayoutWrapper from "../pages/LayoutWrapper";

export default function PageHome() {
  return (
    <LayoutWrapper>
      <main className="font-sans text-white bg-black">
        {/* Hero Section */}
        <section id="hero" className="relative h-screen w-full overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dg2qmka48/image/upload/v1751940063/autozar6/mainimages/2025/obocustoms/car1_t1tub8.jpg"
            alt="Hero Car Detailing"
            fill
            priority
            className="object-cover brightness-[.65]"
          />
          <div className="absolute left-8 bottom-20 md:left-20 md:bottom-28 z-10">
            <p className="text-sm sm:text-base text-white tracking-widest uppercase mb-2">
              Full Service and Excellent Quality
            </p>
            <h1 className="text-white font-black uppercase leading-none tracking-tight text-[12vw] md:text-[10vw] lg:text-[8vw]">
              Car Detailing
            </h1>
          </div>
          <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 text-sm text-white uppercase tracking-wider">
            <span>Scroll Down</span>
            <span className="w-3 h-3 border-b-2 border-r-2 border-white rotate-45" />
          </div>
        </section>
        {/* Services Grid Gallery */}
        <section className="w-full bg-black py-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Protection Film",
                subtitle: "Lorem ipsum dolor sit",
                image:
                  "https://res.cloudinary.com/dg2qmka48/image/upload/v1751941861/autozar6/mainimages/2025/obocustoms/carclean4_muk5xe.jpg",
              },
              {
                title: "Steam Cleaning",
                subtitle: "Lorem ipsum dolor sit",
                image:
                  "https://res.cloudinary.com/dg2qmka48/image/upload/v1751941868/autozar6/mainimages/2025/obocustoms/carclean3_km6gxn.jpg",
              },
              {
                title: "Rims & Tires Washing",
                subtitle: "Lorem ipsum dolor sit",
                image:
                  "https://res.cloudinary.com/dg2qmka48/image/upload/v1751941868/autozar6/mainimages/2025/obocustoms/carclear2_h7fbjx.jpg",
              },
              {
                title: "Ceramic Coating",
                subtitle: "Lorem ipsum dolor sit",
                image:
                  "https://res.cloudinary.com/dg2qmka48/image/upload/v1751941862/autozar6/mainimages/2025/obocustoms/carcelan_fuac0o.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative h-80 group overflow-hidden rounded-md shadow-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  unoptimized
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-60 transition duration-300" />

                {/* Text Overlay */}
                <div className="absolute bottom-6 left-6 z-10 transition-all duration-300 group-hover:-translate-y-2">
                  <h3 className="text-white text-lg sm:text-xl font-extrabold uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Portfolio Tiles */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
            {[
              "/portfolio/brakes.jpg",
              "/portfolio/wheels.jpg",
              "/portfolio/tires.jpg",
              "/portfolio/wrapping.jpg",
            ].map((src, idx) => (
              <div
                key={idx}
                className="relative h-60 overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`Work ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition"
                />
              </div>
            ))}
          </div>
        </section>
        {/* Services Cards */}
        <section id="services" className="py-24 bg-[#111] text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-12">
            Our Services
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Paint Correction",
                desc: "Eliminate scratches, swirls & oxidation.",
                icon: "/icons/paint.svg",
              },
              {
                title: "Ceramic Coating",
                desc: "Glossy, hydrophobic protection.",
                icon: "/icons/ceramic.svg",
              },
              {
                title: "Interior Detailing",
                desc: "Deep clean seats, dashboard, carpets.",
                icon: "/icons/interior.svg",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-[#222] p-6 rounded-lg hover:bg-[#2b2b2b] transition">
                <Image
                  src={s.icon}
                  width={60}
                  height={60}
                  alt={s.title}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* CTA */}
        <section className="py-20 bg-[#e7973d] text-black text-center px-6">
          <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-4">
            Ready to elevate your ride?
          </h2>
          <Link href="/contact">
            <button className="bg-black hover:bg-gray-800 text-white uppercase font-bold px-8 py-3 rounded transition">
              Get a Quote
            </button>
          </Link>
        </section>
        {/* Footer */}
        <footer className="py-8 bg-black text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} DetailX. All rights reserved.</p>
        </footer>
      </main>
    </LayoutWrapper>
  );
}
