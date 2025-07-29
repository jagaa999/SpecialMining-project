"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextH1 from "atomv2/components/Text/TextH1";
import TextH2 from "atomv2/components/Text/TextH2";
import TextH4 from "atomv2/components/Text/TextH4";
import TextH5 from "atomv2/components/Text/TextH5";
import TextHtml from "atomv2/components/Text/TextHtml";
import Link from "next/link";
import useUnsplash from "../../../../config/hooks/useUnsplash";

export default function SataPageHome() {
  const { imageUrl } = useUnsplash("tools workshop industrial");
  const bgImage =
    imageUrl ||
    "https://cdn.moto.mn/moto/landing/14_sata/8e7226f3-3a26-4bcc-bceb-c0395aa35317.jpg?t=1751340548285";

  return (
    <>
      {/* ✅ Hero Banner */}

      <BlockSection
        className="relative py-28 px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}>
        <BlockDiv type="div" className="absolute inset-0 bg-black/60 z-0" />
        <PanelMain className="relative z-10">
          <BlockFlexCol className="items-center gap-18">
            <TextH1
              value="Мэргэжлийн багаж хэрэгслийн төгс шийдэл"
              className="text-white/90 text-center"
            />
            <TextH4
              value="Ажлыг хөнгөвчлөх хүчирхэг сонголт — SATA Tools Mongolia танд дэлхийн түвшний хэрэгслийг санал болгож байна."
              className="text-white/90 text-center"
            />
            <BlockFlexRow>
              <Link href="/shop">
                <RenderAtom
                  value="Дэлгүүр орох"
                  type="button"
                  varient="primary"
                />
              </Link>
              <Link href="/contact">
                <RenderAtom
                  value="Бидэнтэй холбогдох"
                  type="button"
                  varient="primary"
                />
              </Link>
            </BlockFlexRow>
          </BlockFlexCol>
        </PanelMain>
      </BlockSection>

      <BlockSection className="bg-white py-24 px-6 lg:px-20">
        <PanelMain>
          <BlockFlexCol className="items-center gap-18">
            <TextH1 value="SATA бол сонголт биш — Шийдвэр юм" className="" />
            <TextH4 value="Бидний үнэт зүйлс мэргэжлийн хэрэглэгчдийн амжилтыг тодорхойлдог." />

            <BlockFlexRow className="gap-12">
              {[
                {
                  icon: "mdi:lightbulb-on-outline",
                  title: "Инноваци ба Нарийвчлал",
                  desc: "Шинэ санаа, шинэ материалуудтай хөл нийлүүлэн алхдаг.",
                },
                {
                  icon: "mdi:earth",
                  title: "Дэлхийн итгэлцэл",
                  desc: "130+ оронд танигдсан чанар, найдвартай байдал.",
                },
                {
                  icon: "mdi:shield-check",
                  title: "Бат бөх байдал",
                  desc: "Cr-V болон S2 ган, олон жилийн хэрэглээнд зориулагдсан.",
                },
              ].map((item, i) => (
                <BlockFlexCol key={i} className="items-center text-center">
                  <RenderAtom
                    type="icon"
                    value={item.icon}
                    className="w-20 h-20"
                  />
                  <TextH4 value={item.title} />
                  <TextHtml value={item.desc} />
                </BlockFlexCol>
              ))}
            </BlockFlexRow>
          </BlockFlexCol>
        </PanelMain>
      </BlockSection>

      {/* ✅ Featured Products */}
      <BlockSection className="bg-gray-100 py-24">
        <PanelMain>
          <BlockFlexCol className="gap-24 items-center">
            <TextH2 value="Онцлох бүтээгдэхүүнүүд" />

            <BlockDiv className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Түлхүүр ком",
                  image:
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1751341917/autozar6/mainimages/2025/sata/jinhen_tulhuurcom_kmejgn.jpg",
                  desc: "Хамгийн их борлуулалттай гар багажны багц.",
                  price: "₮129,000",
                },
                {
                  name: "Socket Set 40PCS",
                  image:
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1751341917/autozar6/mainimages/2025/sata/tulhuurcom_ewjso3.jpg",
                  desc: "Мэргэжлийн хэрэглээнд тохирсон олон төрлийн socket.",
                  price: "₮98,000",
                },
                {
                  name: "Отверка сет",
                  image:
                    "https://res.cloudinary.com/dg2qmka48/image/upload/v1751341917/autozar6/mainimages/2025/sata/awtirk_c4rj19.webp",
                  desc: "Соронзон хошуутай отверканы иж бүрдэл.",
                  price: "₮38,500",
                },
              ].map((item, index) => (
                <BlockFlexCol
                  key={index}
                  className="bg-white rounded-brand shadow-brand hover:shadow-2xl transition-shadow duration-300 px-brand-x py-brand-y group">
                  <RenderAtom
                    type="image"
                    value={item.image}
                    alt={item.name}
                    className="object-contain w-full aspect-square 0 group-hover:scale-105"
                  />

                  <TextH5 value={item.name} />
                  <TextHtml value={item.desc} />
                  <TextHtml
                    value={item.price}
                    className="text-brand font-bold"
                  />
                </BlockFlexCol>
              ))}
            </BlockDiv>
          </BlockFlexCol>
        </PanelMain>
      </BlockSection>

      {/* ✅ Why SATA */}

      <BlockSection className="text-center bg-white py-24">
        <PanelMain>
          <BlockFlexCol className="gap-24">
            <TextH1 value="Яагаад SATA-г сонгох вэ?" />

            <BlockDiv className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {[
                "✅ ISO болон DIN стандартын баталгаатай",
                "✅ Хатуулаг өндөр Cr-V ган материал",
                "✅ Олон улсын баталгаат үйлчилгээ",
                "✅ Мэргэжлийн засварчдад зориулсан загвар",
              ].map((item, index) => (
                <TextHtml key={index} value={item} />
              ))}
            </BlockDiv>
          </BlockFlexCol>
        </PanelMain>
      </BlockSection>

      {/* ✅ CTA */}

      <BlockSection className="bg-gradient-to-r from-brand to-green-900 text-white py-24">
        <PanelMain className="grid md:grid-cols-2 gap-12 items-center">
          <BlockFlexCol>
            <TextH2
              value="Ажлыг мэргэжлийн түвшинд — SATA TOOLS"
              className="text-white/90"
            />
            <TextHtml value="Засвар, угсралт, авто болон үйлдвэрлэлийн салбарт хамгийн чухал зүйл бол зөв багаж. SATA нь таны ажлын итгэлтэй түнш байх болно. Өндөр чанар, бат бөх байдал, мэргэжлийн хэрэглээнд зориулагдсан шийдэл — энэ бол SATA." />
          </BlockFlexCol>

          <RenderAtom
            type="image"
            value="https://res.cloudinary.com/dg2qmka48/image/upload/v1751341800/autozar6/mainimages/2025/sata/actino_lhr0jd.jpg"
            alt="SATA action"
            className="object-cover w-full h-96"
          />
        </PanelMain>
      </BlockSection>
    </>
  );
}
