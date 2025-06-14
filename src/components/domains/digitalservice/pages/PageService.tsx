"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import MoleculeCard02 from "atomv2/components/Molecules/MoleculeCard02";
import MoleculeCTA01 from "atomv2/components/Molecules/MoleculeCTA01";
import MoleculeTextPanel01 from "atomv2/components/Molecules/MoleculeTextPanel01";
import MoleculeTextPanel02 from "atomv2/components/Molecules/MoleculeTextPanel02";
import OrganismHeroPanel from "atomv2/components/Organisms/OrganismHeroPanel";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextH2 from "atomv2/components/Text/TextH2";
import TextH4 from "atomv2/components/Text/TextH4";
import { map } from "lodash";

export default function DigitalServicePageService() {
  //   {
  //   item = item_local,
  // }: {
  //   item: any;
  // }
  return (
    <>
      <OrganismHeroPanel keyword="beatiful wallpaper" item={item_local?.hero} />

      {/* <PanelMain> */}
      <BlockDiv type="main" className="w-full bg-bg">
        {/* Hero */}
        <MoleculeTextPanel01
          item={{
            title: "Мэргэжлийн үйлчилгээ",
            description:
              "Принтер, хор, засвар — бүгдийг нэг дор. Чанартай, шуурхай, мэргэжлийн түвшинд үйлчилнэ.",
          }}
        />

        {/* Service Overview */}
        <BlockDiv type="section" className="h-full bg-brand/7 ">
          <PanelMain className="h-full min-h-screen flex flex-col items-center justify-center space-y-24">
            <TextH2 value="Манай үйлчилгээ" className="text-brand" />
            <BlockDiv className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
              {map(
                [
                  {
                    title: "Принтерийн засвар",
                    value:
                      "Бүх төрлийн принтерт оношилгоо, сэлбэг солих, засвар үйлчилгээ.",
                  },
                  {
                    title: "Хорны цэнэглэлт",
                    value:
                      "Өндөр чанартай, албан ёсны хороор дахин цэнэглэх үйлчилгээ.",
                  },
                  {
                    title: "Баталгаат тохируулга",
                    value:
                      "Принтерийн драйвер суулгалт, хэвлэх тохиргоо, хэрэглээний зөвлөгөө.",
                  },
                ],
                (item: any, index: number) => (
                  <MoleculeCard02
                    key={item?.id || index}
                    item={item}
                    outerBlock={{
                      className:
                        "bg-bg px-brand-x py-brand-y rounded-brand shadow-brand text-center space-y-8",
                    }}
                  />
                )
              )}
            </BlockDiv>
          </PanelMain>
        </BlockDiv>

        {/* Why Service Matters */}
        <BlockDiv type="section" className="bg-bg py-24">
          <PanelMain className="grid md:grid-cols-2 gap-10">
            <RenderAtom
              value={
                "https://t3.ftcdn.net/jpg/01/83/17/52/360_F_183175251_i7StCgYFIAPnFBJ8DM2Qtw4dUzrzfDlD.jpg"
              }
              type="image"
              className="rounded-brand shadow-brand"
            />

            <BlockDiv className="space-y-4">
              <TextH4
                value="Яагаад мэргэжлийн сервис чухал вэ?"
                className="text-brand"
              />

              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Хорны зөв хэрэглээ - принтерийг хамгаална</li>
                <li>Хар цагаан болон өнгөтөөр хэвлэхэд зөв тохируулна</li>
                <li>Сэлбэг, эд анги бүрийг зөв оношилж, зөв засна</li>
              </ul>
            </BlockDiv>
          </PanelMain>
        </BlockDiv>

        {/* Experience */}
        <MoleculeTextPanel02
          item={{
            title: "15+ жилийн туршлага",
            description:
              "Бид 2008 оноос хойш Монголын зах зээлд принтер, хорны үйлчилгээний чиглэлээр тогтмол ажиллаж ирсэн. Найдвартай, туршлагатай хамт олон, олон зуун байгууллага биднийг сонгосоор байна.",
          }}
          outerBlock={{ className: "bg-brand/7" }}
        />

        <MoleculeCTA01
          item={{
            title: "Үйлчилгээний тухай лавлах уу?",
            description:
              "7012-2038 дугаар руу залгах эсвэл манай фэйсбүүк хуудсаар холбогдоорой.",
            button: {
              value: "Холбогдох",
              onClick: () => {
                console.log("Холбогдох товч дарав");
              },
            },
          }}
        />
      </BlockDiv>
      {/* </PanelMain> */}
    </>
  );
}

const item_local = {
  title: "Overview",
  description:
    "Special Mining Services LLC (SMS) is a mining technology company that established in 2012 and is specialized in Drill & Blast and industrial chemicals. We are truly committed to safety, responsible operation and our clients’ interest.",
  video: {
    poster: "https://cdn.moto.mn/moto/landing/09_specialmining/thumb.jpg",
    src: "https://specialmining.bloomlink.mn/moavolen/2023/10/Teselgee.mp4",
  },
  hero: {
    backgroundImage:
      "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
    title: "Дижитал Сервис",
    subtitle:
      "Принтер, принтерийн хортой холбоотой худалдаа, засвар үйлчилгээ бүгд нэг дор",
    buttons: [
      {
        label: "Манай хорнууд",
        href: "/shop",
        style: "primary",
      },
      {
        label: "About Us",
        href: "/about",
        style: "light",
      },
    ],
  },
};
