import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextH1 from "atomv2/components/Text/TextH1";
import TextH4 from "atomv2/components/Text/TextH4";

export default function PageContact() {
  return (
    <>
      {/* ✅ Hero */}
      <BlockSection
        className="relative py-32 text-center bg-cover bg-center transition-all duration-300 text-white"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dg2qmka48/image/upload/v1751357555/autozar6/mainimages/2025/sata/contact_y4or23.jpg)`,
        }}>
        <BlockDiv type="div" className="absolute inset-0 bg-black/70 z-0" />
        <PanelMain className="relative z-10 space-y-6">
          <TextH1 value="Холбоо барих" className="text-white" />
          <TextH4
            value="Бид танд туслахад үргэлж бэлэн"
            className="text-white/90"
          />
        </PanelMain>
      </BlockSection>

      {/* ✅ Contact Info Cards */}
      <BlockSection className="py-24">
        <PanelMain>
          <BlockFlexRow className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: "mdi:map-marker",
                title: "Хаяг",
                desc: "БГД дүүрэг, 30-р хороо, 10-р хороолол, Доктор салбар (3-р эмнэлгийн зүүн талд)",
              },
              {
                icon: "ic:baseline-phone",
                title: "Утас",
                desc: (
                  <a
                    href="tel:70173060"
                    className="hover:underline text-green-700 font-medium">
                    7017-3060
                    <br />
                    9111-7349
                  </a>
                ),
              },
              {
                icon: "mdi:email-outline",
                title: "Имэйл",
                desc: (
                  <a
                    href="mailto:info@sata.mn"
                    className="hover:underline text-green-700 font-medium">
                    info@sata.mn
                  </a>
                ),
              },
              {
                icon: "mdi:clock-outline",
                title: "Цагийн хуваарь",
                desc: (
                  <BlockFlexCol className="gap-1">
                    <p>Бүх өдрүүдэд: 10:00 - 20:00</p>
                  </BlockFlexCol>
                ),
              },
            ].map((item, index) => (
              <BlockDiv
                key={index}
                type="div"
                className="bg-white shadow-brand rounded-brand p-6 flex items-start gap-4 w-full h-full">
                <RenderAtom
                  type="icon"
                  value={item.icon}
                  className="text-green-600 w-7 h-7 mt-1"
                />
                <BlockFlexCol className="gap-2">
                  <TextH1
                    value={item.title}
                    className="text-xl font-bold text-gray-800 mb-1"
                  />
                  {item?.desc}
                </BlockFlexCol>
              </BlockDiv>
            ))}
          </BlockFlexRow>
        </PanelMain>
      </BlockSection>

      {/* ✅ Google Map */}
      <BlockSection className="w-full p-0 m-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.5033895925053!2d106.86010645559307!3d47.91677511330949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96939524c33483%3A0xfb750bd28740192c!2sDoctor%20Auto%20chain!5e0!3m2!1sen!2smn!4v1753702500652!5m2!1sen!2smn"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </BlockSection>
    </>
  );
}
