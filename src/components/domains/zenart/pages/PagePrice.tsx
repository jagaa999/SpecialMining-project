"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import BlockScrollSnapScreenBlock from "atomv2/components/Blocks/BlockScrollSnapScreenBlock";
import OrganismBannerUnsplash from "atomv2/components/Organisms/banner/OrganismBannerUnsplash";
import { map } from "lodash";
import ZenartSectionWrapper from "../Widget/ZenartSectionWrapper";

export default function ZenartPagePrice() {
  return (
    <>
      <BlockScrollSnapScreenBlock>
        <OrganismBannerUnsplash
          keyWord="interior"
          item={{
            title: "Price is cheap...",
            description: "Бид чанартай үйлчилгээндээ сайн үнэ санал болгодог",
          }}
        />
        <PricingSection />

        <MyTestimonial />
        <SectionFooter />
      </BlockScrollSnapScreenBlock>
    </>
  );
}

const SectionFooter = () => {
  return (
    <ZenartSectionWrapper>
      <BlockFlexCol className="max-w-lg">
        {map(
          [
            {
              icon: "mdi:map-marker",
              text: "Улаанбаатар хот, Хан-уул дүүрэг 3-р хороо<br />Чингисийн өргөн чөлөө-44 Алтартана хотхон, 1-давхарт",
            },
            {
              icon: "mdi:web",
              text: "www.zenart.mn",
            },
            {
              icon: "mdi:instagram",
              text: "zenartistic",
            },
            {
              icon: "mdi:facebook",
              text: "Zen Art",
            },
            {
              icon: "mdi:phone",
              text: "7707-5088  |  8860-5088",
            },
          ],
          (item, index) => (
            <BlockFlexRow key={item.icon + index} className={``}>
              <RenderAtom
                value={item.icon}
                type="icon"
                className={`text-[#e3c3a2] text-2xl flex-none`}
              />
              <RenderAtom
                value={item.text}
                type="text"
                className="text-gray-300"
              />
            </BlockFlexRow>
          )
        )}
      </BlockFlexCol>
    </ZenartSectionWrapper>
  );
};
function PricingSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Visual Quote */}
        <div className="rounded-3xl overflow-hidden relative h-full">
          <img
            src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/pricing-banner-1.jpg"
            alt="Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6">
            <h3 className="text-white text-2xl md:text-3xl font-semibold leading-snug text-center">
              Your Dreams, <span className="text-yellow-400">Our Mission</span>,
              Lets Make It Happen.
            </h3>
          </div>
        </div>

        {/* Basic Plan */}
        <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col justify-between">
          <div>
            <h4 className="text-2xl font-semibold mb-4">Basic Plan</h4>
            <p className="text-gray-500 mb-6">
              Our foundation plan offers essential features at an affordable
              price, without breaking the bank.
            </p>
            <h2 className="text-4xl font-bold text-yellow-600 mb-2">$99.0</h2>
            <p className="text-gray-500 text-sm mb-6">/ Per Month</p>
            <ul className="space-y-2 text-sm text-gray-800">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✔</span> Individuals & Small
                Projects
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✔</span> Access To Design
                Features
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✔</span> Limited Library Of
                Decorative Items
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✔</span> Email Support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✔</span> Monthly Updates
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <button className="px-6 py-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold transition">
              Get Started Now
            </button>
          </div>
        </div>

        {/* Blueprint Plan */}
        <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col justify-between">
          <div>
            <h4 className="text-2xl font-semibold mb-4">Blueprint Plan</h4>
            <p className="text-gray-500 mb-6">
              Our blueprint plan unlocks tools and broader, ideal for growing
              teams ready to take their projects to the next level.
            </p>
            <h2 className="text-4xl font-bold text-yellow-600 mb-2">$169.0</h2>
            <p className="text-gray-500 text-sm mb-6">/ Per Month</p>
            <ul className="space-y-2 text-sm text-gray-800">
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✔</span> Small Teams & Growing
                Businesses
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✔</span> Full Access To Design
                Features
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✔</span> Extended Library Of
                Decorative Items
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✔</span> Priority Email
                Support
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-500">✔</span> Bi-Weekly Updates
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <button className="px-6 py-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold transition">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const MyTestimonial = () => {
  return (
    <div className="h-screen bg-white py-16 px-4 md:px-20 text-center relative">
      {/* Logo */}
      <div className="mx-auto mb-6 w-12 h-12">
        {/* Та энд өөрийн SVG логог байрлуулж болно */}
        <img
          src="https://cdn.moto.mn/moto/landing/13_zenart/9fe1219c-4f15-45a8-84f5-6ebfd92f71ed.jpg"
          alt="Logo"
          className="mx-auto"
        />
      </div>

      {/* Testimonial Text */}
      <p className="text-xl md:text-2xl font-medium text-gray-800 max-w-4xl mx-auto">
        I absolutely love my the new modern living room! The clean lines, a
        neutral tones, and minimalist interior create such a calming & stylish
        atmosphere. Highly recommend their modern interior design services!
      </p>

      {/* Profile */}
      <div className="mt-10 flex flex-col items-center">
        <img
          src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/testimonials-1.jpg"
          alt="Morgan Dufresne"
          className="w-14 h-14 rounded-full object-cover mb-2"
        />
        <p className="font-semibold text-gray-900">Morgan Dufresne</p>
        <p className="text-sm text-gray-500">Company owner</p>
      </div>

      {/* Background lines (optional for style) */}
      <div className="absolute inset-0 opacity-5 bg-[url('/bg-lines.png')] bg-cover bg-center pointer-events-none"></div>
    </div>
  );
};
