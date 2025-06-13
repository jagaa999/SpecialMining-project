"use client";

import { Icon } from "@iconify/react";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import AikidoHomeHero from "../Widget/AikidoHomeHero";
import PanelMain from "atomv2/components/Panel/PanelMain";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";

export default function AikidoPageHome() {
  return (
    <>
      <AikidoHomeHero
        item={{
          backgroundImage: "https://wallpapercave.com/wp/wp2848821.jpg",
          title: "Aikido in Mongolia",
          subtitle: "Бүгд суралцах болох гайхамшигт бие хамгаалах урлаг",
          buttons: [
            {
              label: "Хичээллэх",
              href: "/class",
              style: "primary",
            },
            {
              label: "About Us",
              href: "/about",
              style: "light",
            },
          ],
        }}
      />

      {/* <PanelMain> */}
      <BlockDiv type="main" className="w-full">
        {/* Hero Banner */}
        <BlockDiv type="section" className="h-screen">
          <PanelMain className="h-full">
            <BlockFlexCol className="h-full items-center gap-12">
              <RenderAtom
                value="Айкидо хичээллэхийг урьж байна."
                type="text"
                as="h1"
                className="text-center"
              />
              <RenderAtom
                value="Хар бүс, дантай, туршлагатай, найрсаг багш нар<br />танд хичээнгүйлэн заах болно."
                type="text"
                as="p"
                isHtml={true}
                className="text-xl text-center"
              />
              <RenderAtom
                value="Хичээллэхээр бүртгүүлэх"
                type="button"
                className=""
              />
            </BlockFlexCol>
          </PanelMain>
        </BlockDiv>

        {/* Давуу талууд */}
        <BlockDiv type="section" className="bg-white">
          <PanelMain className="h-full min-h-screen flex flex-col items-center justify-center text-center space-y-12">
            <RenderAtom
              value="Бидний давуу тал"
              type="text"
              as="h2"
              className="text-center"
            />
            <BlockDiv className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: "mdi:school", // сургалтын тогтолцоо
                  title: "Тогтмол сургалт, мэргэжлийн багш нарын удирдлага",
                },
                {
                  icon: "mdi:earth", // олон улсын холбоо
                  title: "Олон улсын Айкидогийн холбоодод бүрэн эрхтэй гишүүн",
                },
                {
                  icon: "mdi:account-group", // олон нийтэд нээлттэй
                  title: "Нас, хүйс хамаарахгүй хүн бүрт тохирсон хичээл",
                },
              ].map((item: any, index: number) => (
                <BlockDiv
                  key={item?.id || index}
                  className="bg-brand/30 px-brand-x py-brand-y rounded-brand shadow-brand ring-brand hover:shadow-2xl transition-all duration-700 ease-in-out flex flex-col items-center space-y-4">
                  <Icon
                    icon={item.icon}
                    className="text-brand"
                    width={78}
                    height={78}
                  />
                  <RenderAtom value={item.title} type="text" />
                </BlockDiv>
              ))}
            </BlockDiv>
          </PanelMain>
        </BlockDiv>

        {/* Хорны төрөл */}
        <BlockDiv type="section" className="min-h-screen bg-brand/5 py-24">
          <PanelMain className="text-center space-y-10">
            <RenderAtom
              value="Янз бүрийн довтолгооноос хамгаалж сурна"
              type="text"
              as="h2"
            />
            <RenderAtom
              value="Хүүхэд, залуус, насанд хүрэгчдэд зориулсан ангилалтай хичээлүүдтэй.<br />Анхан шатнаас ахисан түвшин хүртэлх сургалтуудыг мэргэжлийн багш нар удирдан явуулдаг."
              type="text"
              isHtml={true}
            />

            <BlockDiv className="flex flex-wrap justify-center gap-6">
              {[
                {
                  name: "Бугуйнаас атгах (Katate-dori)",
                  logo: "https://thumbs.dreamstime.com/b/hand-sketch-fighters-aikido-vector-illustration-69144110.jpg",
                },
                {
                  name: "Хоёр гараар бугуй атгах (Ryote-dori)",
                  logo: "https://thumbs.dreamstime.com/b/hand-sketch-fighters-aikido-vector-illustration-69144110.jpg",
                },
                {
                  name: "Толгой руу цохих (Shomen-uchi)",
                  logo: "https://thumbs.dreamstime.com/b/hand-sketch-fighters-aikido-vector-illustration-69144110.jpg",
                },
                {
                  name: "Хажуунаас цохих (Yokomen-uchi)",
                  logo: "https://thumbs.dreamstime.com/b/hand-sketch-fighters-aikido-vector-illustration-69144110.jpg",
                },
                {
                  name: "Цээж рүү түлхэх (Mune-tsuki)",
                  logo: "https://thumbs.dreamstime.com/b/hand-sketch-fighters-aikido-vector-illustration-69144110.jpg",
                },
                {
                  name: "Хутгатай дайрах (Tanto-tori)",
                  logo: "https://thumbs.dreamstime.com/b/hand-sketch-fighters-aikido-vector-illustration-69144110.jpg",
                },
              ].map((item: any, index: number) => (
                <BlockDiv
                  key={item?.id || index}
                  className="flex flex-col items-center bg-white px-brand-x py-brand-y rounded-brand shadow-brand ring-1 ring-slate-300 transition-all duration-500 ease-in-out w-56">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="h-24 object-contain mb-5"
                  />
                  <RenderAtom value={item.name} type="text" />
                </BlockDiv>
              ))}
            </BlockDiv>
          </PanelMain>
        </BlockDiv>
      </BlockDiv>
      {/* </PanelMain> */}
    </>
  );
}
