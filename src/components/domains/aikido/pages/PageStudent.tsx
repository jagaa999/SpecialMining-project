"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import OrganismHeroPanel from "atomv2/components/Organisms/OrganismHeroPanel";
import PanelMain from "atomv2/components/Panel/PanelMain";
import { map } from "lodash";

export default function PageStudent() {
  return (
    <BlockDiv type="main" className="w-full bg-bg">
      {/* Banner */}
      <OrganismHeroPanel
        keyword="samurai"
        item={{
          backgroundImage: "https://wallpapercave.com/wp/wp10826264.jpg",
          title: "Айкидо шавь нарт зориулав",
          subtitle:
            "Биеэ хянах ухаан, сахилга бат, хамт олонч чанар энд эхэлнэ",
          buttons: [
            {
              label: "Сургалт руу буцах",
              href: "/class",
              style: "primary",
            },
            {
              label: "Нүүр хуудас  →",
              href: "/",
              style: "light",
            },
          ],
        }}
      />

      {/* Шавь нарт зориулсан контент */}
      <BlockDiv
        type="section"
        className="bg-white px-10 py-20 text-center space-y-12">
        <RenderAtom
          value={"Шавь нарт зориулав"}
          type="text"
          className=""
          as="h2"
        />

        <RenderAtom
          value={
            "Айкидо бол зөвхөн бие хамгаалах урлаг биш — харин хүн чанар, хүндлэл, тууштай байдал, багийн харилцаа зэргийг хамтад нь хөгжүүлдэг гайхамшигт сургууль юм."
          }
          type="text"
          className="max-w-brand mx-auto"
        />

        <PanelMain className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          {map(
            [
              {
                title: "Сахилга бат",
                desc: "Хичээл бүрт оролцохдоо дүрэмт хувцас, хүндлэл, дэг журмыг баримтлана.",
              },
              {
                title: "Тасралтгүй хөгжил",
                desc: "Шинэ техник бүрийг тууштай давтан сурч, өөрийгөө сорьж байгаарай.",
              },
              {
                title: "Багийн хамт олон",
                desc: "Айкидогийн орчинд хамт олноороо суралцах нь зүгээр нэг дасгал биш — харин хамтын хүндлэл юм.",
              },
            ],
            (item: any, index: number) => (
              <BlockDiv
                key={item?.id || index}
                className="px-brand-x py-brand-y bg-brand/5 rounded-brand shadow-brand ring-1 ring-brand transition space-y-4">
                <RenderAtom value={item.title} type="text" as="h3" />
                <RenderAtom
                  value={item.desc}
                  type="text"
                  className="text-secondary"
                />
              </BlockDiv>
            )
          )}
        </PanelMain>
      </BlockDiv>

      {/* Дэвжээний дурсамжууд */}
      <BlockDiv
        type="section"
        className="bg-brand/5 px-10 py-20 text-center flex flex-col gap-12">
        <RenderAtom value="Шавь нарын дурсамж" type="text" as="h2" />

        <PanelMain className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              name: "Анужин (15 настай)",
              quote:
                "Айкидо намайг өөртөө итгэлтэй болгосон. Анх айж эхэлж байсан ч одоо бол би юуг ч туулж чадна гэдэгтээ итгэдэг болсон.",
            },
            {
              name: "Билгүүн (23 настай)",
              quote:
                "Хамгийн гоё нь бол багш нарынхаа заах арга, тэвчээр, дэмжлэг. Би олон найзтай болсон.",
            },
          ].map((item: any, index: number) => (
            <BlockDiv
              key={item?.id || index}
              className="bg-bg p-6 rounded-brand hover:shadow-brand border border-brand/50 text-left flex flex-col gap-12">
              <RenderAtom
                value={item.quote}
                type="text"
                className="text-gray-700 italic block"
              />
              <RenderAtom
                value={`— ${item.name}`}
                type="text"
                className="text-sm font-semibold text-brand block"
              />
            </BlockDiv>
          ))}
        </PanelMain>
      </BlockDiv>

      {/* Амжилтын Тайз */}
      <BlockDiv className="bg-bg px-10 py-20 text-center flex flex-col gap-12">
        <RenderAtom
          value="Амжилтын Тайз"
          type="text"
          as="h2"
          // className="text-bg"
        />

        <PanelMain className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Бат-Оргил",
              image:
                "https://aikidojournal.com/wp-content/uploads/2018/04/DSCF2738.jpg",
              level: "1-р дан хар бүс",
              result: "2024 оны Улсын Айкидо тэмцээний хүрэл медаль",
              date: "2024.03.22",
            },
            {
              name: "Номин-Эрдэнэ",
              image:
                "https://aikidojournal.com/wp-content/uploads/2018/09/DSCF6941-1.jpg",
              level: "2-р кю",
              result: "Айкидо шалгалт амжилттай өгч дэвшив",
              date: "2025.01.10",
            },
            {
              name: "Номин-Эрдэнэ",
              image:
                "https://aikidomississauga.ca/wp-content/uploads/2024/05/0W1A2522-737x1024-1-737x675.jpg",
              level: "2-р кю",
              result: "Айкидо шалгалт амжилттай өгч дэвшив",
              date: "2025.01.10",
            },
          ].map((item: any, index: number) => (
            <div
              key={item?.id || index}
              className="bg-brand/70 px-brand-x py-brand-y rounded-brand shadow-brand space-y-4">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-full w-full aspect-square object-cover object-center"
              />
              <RenderAtom
                value={item.name}
                type="text"
                as="h3"
                className="text-bg"
              />
              <RenderAtom
                value={item.level}
                type="text"
                className="text-sm italic text-bg"
              />
              <RenderAtom value={item.result} type="text" className="text-bg" />
              <RenderAtom
                value={item.date}
                type="text"
                className="text-sm text-bg"
              />
            </div>
          ))}
        </PanelMain>
      </BlockDiv>
    </BlockDiv>
  );
}
