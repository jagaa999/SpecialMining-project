"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import OrganismHalfImageTextList from "atomv2/components/Organisms/OrganismHalfImageTextList";
import OrganismHeroPanel from "atomv2/components/Organisms/OrganismHeroPanel";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextBody from "atomv2/components/Text/TextBody";
import TextH2 from "atomv2/components/Text/TextH2";
import TextH4 from "atomv2/components/Text/TextH4";
import TextH5 from "atomv2/components/Text/TextH5";
import TextHtml from "atomv2/components/Text/TextHtml";

export default function TcmotorsPageHome() {
  return (
    <BlockDiv className="w-full bg-bg">
      <OrganismHeroPanel
        keyword="toyota prius"
        fade={{ className: "bg-black/70" }}
        item={{
          backgroundImage: "https://wallpapercave.com/wp/wp2848821.jpg",
          title: "TC Motors",
          subtitle: "Япон авто сэлбэг, суурилуулалт, засвар үйлчилгээ",
          buttons: [
            {
              label: "Автосэлбэг үзэх",
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

      {/* Танилцуулга */}
      <BlockDiv
        type="section"
        className="min-h-screen bg-gradient-to-br from-white via-slate-200 to-slate-100 space-y-24">
        <PanelMain className="flex flex-col items-center space-y-24">
          <TextH2 value="Бидний тухай" className="text-center" />

          <OrganismHalfImageTextList
            items={[
              {
                image:
                  "https://cdn.moto.mn/moto/landing/12_tcmotors/d410f576-014b-4718-8ea1-2d88743a30da.jpg?t=1749627958907",
                title: "Сэлбэгийн баталгаат эх сурвалж",
                description:
                  "Бид Япон болон Солонгосоос импортлосон, үзлэг хийгдсэн хуучин сэлбэгийг танд санал болгодог. Хамгийн сайн үнээр, хурдан шуурхай хүргэлттэй.",
              },
              {
                image:
                  "https://cdn.moto.mn/moto/landing/12_tcmotors/d410f576-014b-4718-8ea1-2d88743a30da.jpg?t=1749627958907",
                title: "Японоос шууд оруулж ирдэг",
                description:
                  "Бид Японоос бүтээгдэхүүнээ баталгаатай сувгаар оруулж ирдэг тул таны итгэлийг даахуйц шийдэл санал болгож чадна.",
              },
            ]}
          />
        </PanelMain>
      </BlockDiv>

      {/* Сэлбэгүүдийн жишээ */}
      <BlockDiv type="section" className="bg-white">
        <PanelMain className="space-y-12 h-full min-h-screen flex flex-col items-center justify-center">
          <TextH2 value="Эрэлттэй байгаа сэлбэгүүд" />

          <BlockDiv className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
            {[
              {
                name: "Toyota Prius 30 — Хойд амортизатор",
                price: "₮120,000",
                image:
                  "https://cdn.moto.mn/moto/landing/12_tcmotors/8dbf43b4-0934-44de-a84c-b9c5314e362f.jpg?t=1749628057449",
              },
              {
                name: "Honda Fit — Хөдөлгүүрийн ECM",
                price: "₮280,000",
                image:
                  "https://cdn.moto.mn/moto/landing/12_tcmotors/c480542f-db86-477c-82c9-6655c3921ca7.png?t=1749628102087",
              },
              {
                name: "Crown Athlete — Радиатор",
                price: "₮200,000",
                image:
                  "https://cdn.moto.mn/moto/landing/12_tcmotors/22ce3392-5cd2-4d45-adb1-e63058d54969.jpg?t=1749628148949",
              },
            ].map((item, index) => (
              <BlockDiv
                key={index}
                className="bg-brand/20 p-6 rounded-brand shadow-brand ring-1 ring-brand/50 hover:brightness-95 transition space-y-4">
                <RenderAtom
                  value={item.image}
                  type="image"
                  className="w-full h-40 object-cover"
                />
                <TextH5 value={item.name} />
                <TextHtml value={`Үнэ: ${item.price}`} />
              </BlockDiv>
            ))}
          </BlockDiv>
        </PanelMain>
      </BlockDiv>

      {/* Давуу талууд */}
      <BlockDiv type="section" className="bg-brand/20">
        <PanelMain className="min-h-screen w-full space-y-12 flex flex-col items-center justify-center">
          <TextH2 value="Бидний давуу тал" />

          <BlockDiv className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "mdi:certificate-outline",
                title: "Шалгагдсан баталгаат сэлбэг",
              },
              {
                icon: "mdi:warehouse",
                title: "Үйлдвэрлэлийн шууд агуулах нийлүүлэлт",
              },
              {
                icon: "mdi:truck-fast-outline",
                title: "24 цагийн дотор хүргэлт",
              },
            ].map((item, index) => (
              <BlockDiv
                key={index}
                className="bg-bg px-brand-x py-24 rounded-brand shadow-brand ring-1 ring-brand/50 hover:brightness-95  hover:ring-brand/70 transition-all duration-700 ease-in-out flex flex-col items-center space-y-4">
                <RenderAtom
                  value={item.icon}
                  type="icon"
                  className="text-brand"
                  width={78}
                  height={78}
                />
                <TextH4 value={item.title} className="text-center" />
              </BlockDiv>
            ))}
          </BlockDiv>
        </PanelMain>
      </BlockDiv>

      {/* CTA */}
      <BlockDiv
        type="section"
        className="min-h-[80vh] bg-brand flex flex-col items-center justify-center space-y-12">
        <TextH2
          value="Хүссэн сэлбэгээ захиалаарай"
          className="text-bg text-center"
        />

        <TextBody
          value="Та яг одоо доорх товчийг дарж сэлбэгийн захиалга илгээж болно. Бид тантай 15-30 минутын дотор холбогдож баталгаажуулна."
          className="max-w-xl text-bg text-center"
        />

        <RenderAtom
          type="button"
          value="Захиалга өгөх"
          className="bg-white text-brand"
        />
      </BlockDiv>
    </BlockDiv>
  );
}
