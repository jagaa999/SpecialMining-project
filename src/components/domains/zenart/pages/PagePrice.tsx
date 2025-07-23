"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import BlockScrollSnapScreenBlock from "atomv2/components/Blocks/BlockScrollSnapScreenBlock";
import OrganismBannerUnsplash from "atomv2/components/Organisms/banner/OrganismBannerUnsplash";
import TextBody from "atomv2/components/Text/TextBody";
import TextH2 from "atomv2/components/Text/TextH2";
import TextH4 from "atomv2/components/Text/TextH4";
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
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-gray-100" }}>
      <BlockDiv className="grid grid-cols-3 gap-10">
        {/* Left Visual Quote */}
        <BlockDiv className="rounded-lg overflow-hidden relative h-full">
          <RenderAtom
            value="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/pricing-banner-1.jpg"
            type="image"
            className="w-full h-full object-cover"
            alt="Interior Design"
          />
          <BlockDiv className="absolute inset-0 bg-black/60 flex items-center justify-center p-6">
            <TextH2
              value={
                "Таны мөрөөдөл,<span class='text-yellow-400'>Бидний эрхэм зорилго.</span> Бид хамтдаа бодит болгоно."
              }
              className="text-white font-semibold text-center"
            />
          </BlockDiv>
        </BlockDiv>

        {/* Basic Plan */}
        <BlockFlexCol className="bg-white rounded-lg shadow-md p-10 justify-between">
          {(() => {
            const basicPlan = {
              title: "Үндсэн Багц",
              description:
                "Манай суурь багц нь хэрэгцээтэй бүх үндсэн боломжуудыг хамгийн боломжийн үнээр санал болгодог.",
              price: "$99.0",
              period: "/ Нэг удаад",
              features: [
                "Жижиг баг & хувь хүмүүс",
                "Дизайны үндсэн боломжууд",
                "Хязгаарлагдмал чимэглэлийн сан",
                "Имэйл дэмжлэг",
                "Сарын шинэчлэлт",
              ],
            };
            return (
              <>
                <BlockDiv>
                  <TextBody
                    value={basicPlan.title}
                    className="text-2xl font-semibold mb-4"
                  />
                  <TextBody
                    value={basicPlan.description}
                    className="text-gray-500 mb-6"
                  />
                  <TextBody
                    value={basicPlan.price}
                    className="text-4xl font-bold text-yellow-600 mb-2"
                  />
                  <TextBody
                    value={basicPlan.period}
                    className="text-gray-500 text-sm mb-6"
                  />
                  <BlockDiv className="space-y-2 text-sm text-gray-800">
                    {basicPlan.features.map((feature, idx) => (
                      <BlockDiv key={idx} className="flex items-center gap-2">
                        <span className="text-yellow-500">✔</span>
                        <TextBody value={feature} />
                      </BlockDiv>
                    ))}
                  </BlockDiv>
                </BlockDiv>
                <BlockDiv className="mt-6">
                  <button className="px-6 py-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold transition">
                    Одоо залгах
                  </button>
                </BlockDiv>
              </>
            );
          })()}
        </BlockFlexCol>

        {/* Blueprint Plan */}
        <BlockFlexCol className="bg-white rounded-lg shadow-md p-10 justify-between">
          {(() => {
            const blueprintPlan = {
              title: "Өргөтгөсөн Багц",
              description:
                "Манай өргөтгөсөн багц нь илүү өргөн хүрээний хэрэгсэл, шийдлүүдийг нээж, дараагийн түвшинд хүрэхийг хүссэн багуудад зориулсан.",
              price: "$169.0",
              period: "/ Нэг удаад",
              features: [
                "Томроход бэлэн багууд",
                "Дизайны бүх боломжид нэвтрэх",
                "Тэлсэн чимэглэлийн сан",
                "Тэргүүлэх имэйл дэмжлэг",
                "2 долоо хоног тутмын шинэчлэлт",
              ],
            };
            return (
              <>
                <BlockDiv>
                  <TextBody
                    value={blueprintPlan.title}
                    className="text-2xl font-semibold mb-4"
                  />
                  <TextBody
                    value={blueprintPlan.description}
                    className="text-gray-500 mb-6"
                  />
                  <TextBody
                    value={blueprintPlan.price}
                    className="text-4xl font-bold text-yellow-600 mb-2"
                  />
                  <TextBody
                    value={blueprintPlan.period}
                    className="text-gray-500 text-sm mb-6"
                  />
                  <BlockDiv className="space-y-2 text-sm text-gray-800">
                    {blueprintPlan.features.map((feature, idx) => (
                      <BlockDiv key={idx} className="flex items-center gap-2">
                        <span className="text-yellow-500">✔</span>
                        <TextBody value={feature} />
                      </BlockDiv>
                    ))}
                  </BlockDiv>
                </BlockDiv>
                <BlockDiv className="mt-6">
                  <button className="px-6 py-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold transition">
                    Одоо эхлэх
                  </button>
                </BlockDiv>
              </>
            );
          })()}
        </BlockFlexCol>
      </BlockDiv>
    </ZenartSectionWrapper>
  );
}

const MyTestimonial = () => {
  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-white" }}>
      <RenderAtom
        value="https://cdn.moto.mn/moto/landing/13_zenart/home/cf0fa9a4-4a6f-4a8c-81ad-f7c21f5a9344.png?t=1752510790695"
        type="image"
        className="w-96 h-auto object-contain mx-auto"
        alt="Logo"
      />

      {/* Testimonial Text */}
      <TextBody
        value="Би өөрийн шинэ, орчин үеийн зочны өрөөндөө үнэхээр дуртай! Тэгш шулуун хийц, зөөлөн өнгөний хослол, минималист интерьерийн шийдэл нь тайвшралтай бөгөөд чамин уур амьсгалыг бүрдүүлж өгсөн. Тэдний интерьер дизайны үйлчилгээг өндөр хэмжээнд санал болгож байна!"
        className="text-xl font-medium text-gray-800 text-justify"
      />

      {/* Profile */}
      <BlockFlexCol className="items-center gap-3">
        <RenderAtom
          value="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/testimonials-1.jpg"
          type="image"
          className="w-28 h-28 rounded-full object-cover mb-2"
          alt="Morgan Dufresne"
        />
        <TextH4 value="Morgan Dufresne" className="" />
        <TextBody value="Компанийг үүсгэн байгуулагч" className="text-sm text-gray-500" />
      </BlockFlexCol>
    </ZenartSectionWrapper>
  );
};
