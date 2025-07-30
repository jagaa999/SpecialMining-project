import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import MoleculeCard02 from "atomv2/components/Molecules/MoleculeCard02";
import MoleculeCTA01 from "atomv2/components/Molecules/MoleculeCTA01";
import OrganismHeroPanel from "atomv2/components/Organisms/OrganismHeroPanel";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextH2 from "atomv2/components/Text/TextH2";
import TextHtml from "atomv2/components/Text/TextHtml";
import { map } from "lodash";

export default function DigitalServicePageContact() {
  return (
    <>
      <OrganismHeroPanel keyword="beatiful wallpaper" item={item_local?.hero} />

      <BlockDiv className="w-full bg-white text-gray-900">
        {/* Hero */}
        <MoleculeCTA01
          item={{
            title: { value: "Бидэнтэй холбогдоно уу?", as: "h1" },

            description: "Таны дуртай суваг — доор таныг хүлээж байна!",
            button: {
              value: "Холбогдох",
            },
          }}
        />
        {/* Contact Grid */}
        <BlockDiv type="section" className="min-h-screen h-auto bg-brand/7">
          <PanelMain className="text-center space-y-12">
            <TextH2 value="Холбогдох суваг" />
            <TextHtml value="Та өөрт тохиромжтой сувгаа сонгоно уу" />
            <BlockDiv className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {map(
                [
                  {
                    icon: "ic:baseline-phone",
                    title: "Утас",
                    value: "+976 - 70122038<br /> +976 - 96012038",
                    baseUrl: "tel:96012038",
                  },
                  {
                    icon: "mdi:facebook",
                    title: "Facebook хуудас",
                    value: "/DigitalService",
                    baseUrl: "https://facebook.com/DigitalService",
                  },
                  {
                    icon: "ic:baseline-facebook",
                    title: "FB Messenger",
                    value: "Шууд чатлах",
                    baseUrl: "https://m.me/DigitalService",
                  },
                  {
                    icon: "ic:baseline-email",
                    title: "Имэйл",
                    value: "info@digitalservice.mn",
                    baseUrl: "mailto:info@digitalservice.mn",
                  },
                  {
                    icon: "mdi:map-marker",
                    title: "Байршил",
                    value:
                      "Улаанбаатар, ЧД, 9-р хороо, Их тойруу 54, Компьютер Молл төв, 5007 тоот",
                    baseUrl: "https://goo.gl/maps/abc123",
                  },
                ],
                (item: any, index: number) => (
                  <MoleculeCard02
                    outerBlock={{
                      className:
                        "flex flex-col items-center space-y-3 text-center",
                      url: {
                        baseUrl: item.baseUrl,
                        target: "_blank",
                        className:
                          "w-full h-full bg-bg p-6 rounded-brand shadow-brand hover:shadow-2xl transition-all block",
                      },
                    }}
                    item={item}
                    key={item?.id || index}
                  />
                )
              )}
            </BlockDiv>
          </PanelMain>
        </BlockDiv>
      </BlockDiv>
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
