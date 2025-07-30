import Banner from "../Widget/Banner";
import PanelMain from "atomv2/components/Panel/PanelMain";
import { generalTheme } from "../generalConfig";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";

export default function CareerPage({ item = item_local }: { item: any }) {
  return (
    <BlockDiv type="main">
      <Banner item={item?.banner} />

      <PanelMain>
        {/* Policy Text */}
        <BlockSection className="my-24">
          <p>{item?.policy?.text}</p>
          <p className={generalTheme?.title2}>{item?.community?.title}</p>
          <p>{item?.community?.text}</p>
        </BlockSection>

        <section className="min-h-screen flex justify-center items-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc_DrifDJYpvBS-LONvuVMLzXkiyaL3ILafoidlqSoUowpczg/viewform?usp=dialog"
            width="100%"
            height="1600"
            className="w-full max-w-4xl">
            Form-ыг харахын тулд таны browser iframe дэмжих хэрэгтэй.
          </iframe>
        </section>
      </PanelMain>
    </BlockDiv>
  );
}

const item_local = {
  banner: {
    title: "Career",
    subtitle: "Make Your Career with Us",
    mainimage:
      "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
  },
  policy: {
    text: "We are committed to providing a safe and healthy work environment for our employees. We believe that a strong safety culture is essential to the success of our business.",
  },

  landscapeImage:
    "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-4-1536x362.png",

  community: {
    title: "Community",
    text: "We are committed to the development of our employees and the communities in which we operate. We believe that a strong community is essential to a successful business.",
  },
};
