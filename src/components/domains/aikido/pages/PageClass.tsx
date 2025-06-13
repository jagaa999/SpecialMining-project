"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import PanelMain from "atomv2/components/Panel/PanelMain";
import AikidoHomeHero from "../Widget/AikidoHomeHero";

export default function PageClass() {
  return (
    <BlockDiv type="main" className="w-full bg-bg">
      {/* Banner */}
      <AikidoHomeHero
        item={{
          backgroundImage: "https://wallpapercave.com/wp/wp2848821.jpg",
          title: "Aikido Training in Mongolia",
          subtitle:
            "Өөртөө итгэх итгэл, сахилга бат, хамгаалалтын урлагийг нэг дороос",
          buttons: [
            {
              label: "Хичээллэх",
              href: "/register",
              style: "primary",
            },
            {
              label: "Нүүр хуудас",
              href: "/",
              style: "light",
            },
          ],
        }}
      />

      {/* Сургалтын төрлүүд */}
      <PanelMain className="text-center space-y-12 py-40">
        <RenderAtom
          value="Сургалтын төрлүүд"
          type="text"
          as="h2"
          className="block"
        />
        <RenderAtom
          value="Айкидогийн хичээлүүд дараах ангилалтайгаар явагдана:"
          type="text"
        />
        <BlockDiv className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Хүүхдийн хичээл",
              desc: "6–12 насныханд зориулсан тусгайлсан арга барил, бие хамгаалах чадвар суулгах хөтөлбөр.",
            },
            {
              title: "Залуучуудын хичээл",
              desc: "Өсвөр үеийнхэнд зориулсан уян хатан, хөдөлгөөнтэй хичээлүүд.",
            },
            {
              title: "Насанд хүрэгсэд",
              desc: "Ажил, амьдралын хажуугаар стресс тайлах, хамгаалалтын ур чадвар эзэмших боломж.",
            },
          ].map((item, i) => (
            <BlockDiv
              key={i}
              className="p-8 bg-white rounded-brand shadow-brand ring-1 ring-slate-500 transition space-y-10">
              <RenderAtom
                value={item.title}
                type="text"
                as="h4"
                className="text-brand"
              />
              <RenderAtom value={item.desc} type="text" />
            </BlockDiv>
          ))}
        </BlockDiv>
      </PanelMain>

      {/* Цагийн хуваарь */}
      <BlockDiv type="section" className="bg-white py-40">
        <PanelMain className="flex flex-col items-center gap-24">
          <RenderAtom value="Цагийн хуваарь" type="text" as="h2" />
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-brand text-bg">
                <th className="p-4 border">Өдөр</th>
                <th className="p-4 border">Цаг</th>
                <th className="p-4 border">Түвшин</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="p-4 border">Даваа, Лхагва</td>
                <td className="p-4 border">18:00 - 19:30</td>
                <td className="p-4 border">Анхан шат</td>
              </tr>
              <tr>
                <td className="p-4 border">Мягмар, Пүрэв</td>
                <td className="p-4 border">19:30 - 21:00</td>
                <td className="p-4 border">Ахисан түвшин</td>
              </tr>
              <tr>
                <td className="p-4 border">Бямба</td>
                <td className="p-4 border">12:00 - 13:30</td>
                <td className="p-4 border">Бүх нас</td>
              </tr>
            </tbody>
          </table>
        </PanelMain>
      </BlockDiv>

      {/* Багш нар */}
      <BlockDiv type="section" className="bg-white py-40">
        <PanelMain className="flex flex-col items-center gap-24">
          <BlockFlexCol className="text-center">
            <RenderAtom value="Манай багш нар" type="text" as="h1" />
            <RenderAtom
              value="Олон жилийн туршлагатай, олон улсын зэрэглэлтэй багш нар танд заана"
              type="text"
            />
          </BlockFlexCol>
          <BlockFlexRow>
            {[
              {
                title: "Сэнсэй Баяр",
                image:
                  "https://cdn.moto.mn/moto/landing/11_aikido/dcb9e1e0-a177-4f46-9c20-6ed456968454.png?t=1749545071271",
                rank: "2-р дан хар бүс",
                desc: "Японд 5 жил суралцсан, олон улсын тэмцээний оролцогч",
              },
              {
                title: "Сэнсэй Энхээ",
                image:
                  "https://cdn.moto.mn/moto/landing/11_aikido/8c69e6df-4851-4164-8680-77199a72992d.png?t=1749545291104",
                rank: "1-р дан хар бүс",
                desc: "10+ жилийн багшлах туршлагатай",
              },
            ].map((item: any, index: number) => (
              <BlockFlexCol
                key={item?.id || index}
                className="w-64 text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-40 h-40 object-cover mx-auto ring-4 ring-brand/20 shadow-brand"
                />
                <RenderAtom value={item.title} type="text" as="h3" />
                <RenderAtom
                  value={item.rank}
                  type="text"
                  className="text-sm text-gray-500 italic"
                />
                <RenderAtom value={item.desc} type="text" />
              </BlockFlexCol>
            ))}
          </BlockFlexRow>
        </PanelMain>
      </BlockDiv>
    </BlockDiv>
  );
}
