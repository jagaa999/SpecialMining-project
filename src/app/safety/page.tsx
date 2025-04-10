import _ from "lodash";
import Banner from "../../components/Banner";
import { generalTheme } from "../../config/generalConfig";
import PanelMain from "../../config/PanelMain";
import { twMerge } from "tailwind-merge";

export default function SafetyPage() {
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

        <img
          src={staticItem?.landscapeImage}
          alt="Community and Environment"
          className="w-full h-auto rounded-lg shadow-lg"
        />

        {/* People Section */}
        <section className="my-24">
          <p className={generalTheme?.titleMain}>{staticItem?.people.title}</p>
          <p>{staticItem?.people.text}</p>
        </section>

        {/* Safe operation */}
        <section className="my-24">
          <p className={generalTheme?.titleMain}>
            {staticItem?.safeOperation.title}
          </p>
          <p>{staticItem?.safeOperation.text}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {staticItem?.safeOperation.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`safety${idx + 1}`}
                className="rounded-md shadow-lg transition-transform transform hover:scale-105 duration-300"
              />
            ))}
          </div>
        </section>

        {/* Internal regulations */}
        <section className="my-24">
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className="w-full bg-[#a81c1b] px-5 py-3 rounded-l-lg">
              <p className={twMerge(generalTheme?.titleMain, "text-white")}>
                Internal Regulations
              </p>
              <ul className="list-disc list-inside">
                {_.map(
                  staticItem?.internalRegulations.internal,
                  (item: any, index: number) => (
                    <li key={item?.id || index} className="text-white">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="w-full bg-[#d71724] px-5 py-3  rounded-r-lg">
              <p className={twMerge(generalTheme?.titleMain, "text-white")}>
                Legal Document
              </p>
              <ul className="list-disc list-inside">
                {_.map(
                  staticItem?.internalRegulations.legal,
                  (item: any, index: number) => (
                    <li key={item?.id || index} className="text-white">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>
      </PanelMain>
    </main>
  );
}

const staticItem = {
  banner: {
    title: "Safety",
    subtitle: "Special Mining LLC > Safety",
    mainimage:
      "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
  },
  policy: {
    text: "We work to achieve our HSE goal through our “Zero harm Zero incident” policy. Our management process from supply chain to delivery of final products and services is ISO 45001:2018(HSE) certified, and regularly assessed and audited.",
  },
  community: {
    title: "Community and Environment",
    text: "Anywhere SMS operates, we are very committed to protecting environment and take steps to ensure to minimize the environmental impact of our operations, to implement reuse and recycling, to review regularly our environmental footprint.",
  },
  landscapeImage:
    "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-4-1536x362.png",
  people: {
    title: "People",
    text: "At SMS, we care and ensure to have a diverse and inclusive workforce. To do so, we create designated workplace training programs to strengthen our current and prospective employees’ skills.",
  },
  safeOperation: {
    title: "Safe operation",
    text: "We are diligently enforcing regulations such as the ‘Safety Regulations for Explosive Work,’ ...",
    images: [
      "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-5-1536x1017.png",
      "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-6-1536x1021.png",
      "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-13-768x511.png",
    ],
  },
  internalRegulations: {
    internal: [
      "Occupational Safety and Health Internal Regulations",
      "Environmental Protection Plan",
    ],
    legal: [
      "Environmental impact assessment",
      "Feasibility study",
      "Environmental Conservation Law",
      "Disaster Mitigation Plan",
    ],
  },
};
