"use client";

import { Icon } from "@iconify/react";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import OrganismHeroPanel from "atomv2/components/Organisms/OrganismHeroPanel";
import PanelMain from "atomv2/components/Panel/PanelMain";

export default function CaffemPageHome() {
  return (
    <>
      <OrganismHeroPanel
        keyword="coffee"
        item={{
          backgroundImage: "https://wallpapercave.com/wp/wp2848821.jpg",
          title: "Caffe M Mongolia",
          subtitle: "Caffe M Mongolia",
          buttons: [
            {
              label: "Амтлах",
              href: "/shop",
              style: "primary",
            },
            {
              label: "Бидний тухай",
              href: "/about",
              style: "light",
            },
          ],
        }}
      />

      <BlockDiv type="main" className="w-full">
        {/* Hero Banner */}
        <BlockDiv
          type="section"
          className="h-screen bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/caffem-hero.jpg")' }}>
          <PanelMain className="h-full flex flex-col justify-center items-center">
            <BlockFlexCol className="h-full items-center gap-12 text-fg px-8">
              <RenderAtom
                value="Caffe M: Технологид дурлагсдын цуглуулга"
                type="text"
                as="h1"
                className="text-center text-4xl md:text-5xl font-bold"
              />
              <RenderAtom
                value="100% Арабика кофе, шинэхэн shake, жимсний juice 📍 Улаанбаатар хот дахь олон салбарууд."
                type="text"
                as="p"
                isHtml={false}
                className="text-xl text-center max-w-2xl"
              />
              <RenderAtom
                value="Салбаруудыг харах"
                type="button"
                className="bg-white text-brand px-8 py-3 rounded-full shadow-lg hover:brightness-95 transition"
              />
            </BlockFlexCol>
          </PanelMain>
        </BlockDiv>

        {/* Давуу талууд */}
        <BlockDiv type="section" className="bg-white py-20">
          <PanelMain className="flex flex-col items-center justify-center space-y-12">
            <RenderAtom
              value="Биднийг сонгох 3 шалтгаан"
              type="text"
              as="h2"
              className="text-center text-3xl font-semibold"
            />
            <BlockDiv className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: "mdi:coffee-maker",
                  title: "Шинэхэн Rostering & Мажистер кофены сүрэг",
                },
                {
                  icon: "mdi:shaker-outline",
                  title: "Сор болсон shake & smoothie",
                },
                {
                  icon: "mdi:fruit-cherries",
                  title: "100% байгалийн жимсний juice",
                },
              ].map((item, index) => (
                <BlockDiv
                  key={index}
                  className="bg-brand/30 px-8 py-16 rounded-lg shadow-md flex flex-col items-center space-y-4 hover:shadow-xl transition">
                  <Icon
                    icon={item.icon}
                    className="text-brand"
                    width={80}
                    height={80}
                  />
                  <RenderAtom
                    value={item.title}
                    type="text"
                    as="p"
                    className="text-center text-lg"
                  />
                </BlockDiv>
              ))}
            </BlockDiv>
          </PanelMain>
        </BlockDiv>

        {/* Меню төрөл */}
        <BlockDiv type="section" className="min-h-screen bg-brand/5 py-24">
          <PanelMain className="text-center space-y-10">
            <RenderAtom
              value="Манай Хоол, Ундаа"
              type="text"
              as="h2"
              className="text-3xl font-semibold"
            />
            <RenderAtom
              value="Шинэхэн кофе, shake, juice болон талх, сэндвич... Угтвар хоол хүртэл бүх төрлийг нэг дороос авна."
              type="text"
              isHtml={false}
              className="text-lg max-w-3xl mx-auto"
            />

            <BlockDiv className="flex flex-wrap justify-center gap-6">
              {[
                {
                  name: "Espresso • Americano • Cappuccino",
                  logo: "https://caffemmongolia.mn/images/coffee.jpg",
                },
                {
                  name: "Berry Smoothie Shake",
                  logo: "https://caffemmongolia.mn/images/shake.jpg",
                },
                {
                  name: "Fresh Orange Juice",
                  logo: "https://caffemmongolia.mn/images/juice.jpg",
                },
                {
                  name: "Croissant Sandwich",
                  logo: "https://caffemmongolia.mn/images/sandwich.jpg",
                },
              ].map((item, idx) => (
                <BlockDiv
                  key={idx}
                  className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-56 hover:shadow-lg transition">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-24 object-contain mb-4"
                  />
                  <RenderAtom
                    value={item.name}
                    type="text"
                    as="p"
                    className="font-medium text-gray-800 text-center"
                  />
                </BlockDiv>
              ))}
            </BlockDiv>
          </PanelMain>
        </BlockDiv>
      </BlockDiv>
    </>
  );
}
