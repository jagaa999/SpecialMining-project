import _ from "lodash";
import Banner from "../../components/Banner";
import { generalTheme } from "../../config/generalConfig";
import PanelMain from "../../config/PanelMain";

export default function CareerPage() {
  return (
    <main>
      <Banner item={staticItem?.banner} />

      <PanelMain>
        {/* Policy Text */}
        <section className="my-24">
          <p>{staticItem?.policy.text}</p>
          <p className={generalTheme?.title2}>{staticItem?.community.title}</p>
          <p>{staticItem?.community.text}</p>
        </section>

        <section className="min-h-screen flex justify-center items-center p-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSc_DrifDJYpvBS-LONvuVMLzXkiyaL3ILafoidlqSoUowpczg/viewform?usp=dialog"
            width="100%"
            height="1600"
            className="w-full max-w-4xl">
            Form-ыг харахын тулд таны browser iframe дэмжих хэрэгтэй.
          </iframe>
        </section>
      </PanelMain>
    </main>
  );
}

const staticItem = {
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
