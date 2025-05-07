"use client";

import _ from "lodash";
import PanelMain from "atom/Panel/PanelMain";
import { generalTheme } from "../generalConfig";
import Banner from "../Widget/Banner";
import { useDomain } from "src/config/context/DomainContext";

export default function PageTest({ item = item_local }: { item: any }) {
  console.log("dfsdfdsf", item);
  const domain = useDomain();
  console.log("MyContext Value:", domain);

  return (
    <main>
      <Banner item={item?.banner} />
      <PanelMain>
        {/* Company Overview */}
        <section className="space-y-6 my-24">
          <p>{item?.companyOverview?.description}</p>

          <div>
            <p className={generalTheme?.title2}>Our expertise:</p>
            <ul className="list-disc list-outside pl-5">
              {_.map(
                item?.companyOverview?.expertise,
                (item: any, index: number) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
          <div>
            <p className={generalTheme?.title2}>Value proposition:</p>
            <ul className="list-disc list-outside pl-5">
              {_.map(
                item?.companyOverview?.valueProposition,
                (item: any, index: number) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
          <div>
            <p className={generalTheme?.title2}>
              Collaboration and industry participation:
            </p>
            <ul className="list-disc list-outside pl-5">
              {_.map(
                item?.companyOverview?.collaboration,
                (item: any, index: number) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* Expertise Grid Images */}

        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 my-24">
          {_.map(item?.expertiseImages, (item: any, index: number) => (
            <img
              key={item?.id || index}
              src={item}
              alt={`expertise${index + 1}`}
              className="rounded-md shadow-lg transition-transform transform hover:scale-105 duration-300"
            />
          ))}
        </section>

        {/* Relationship Section */}
        <section className="my-24">
          <p className={generalTheme?.title2}>{item?.relationships?.title}</p>
          <p>{item?.relationships?.description}</p>
        </section>

        {/* Clients & Logos */}
        <section className="my-24">
          <p className={generalTheme?.title2}>
            {item?.relationships?.networks}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-12">
            {_.map(item?.clientsLogos, (item: any, index: number) => (
              <img
                key={item?.id || index}
                src={item}
                alt={`client-${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
        </section>

        {/* Final Image Row */}
        <section className="my-24">
          <p className={generalTheme?.title2}>Зураг</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {_.map(item?.finalImages, (item: any, index: number) => (
              <img
                key={item?.id || index}
                src={item}
                alt={`expertise${index + 1}`}
                className="rounded-md shadow-lg transition-transform transform hover:scale-105 duration-300"
              />
            ))}
          </div>
        </section>
      </PanelMain>
    </main>
  );
}

const item_local = {
  banner: {
    title: "About Us",
    subtitle: "Special Mining LLC > About Us",
    mainimage:
      "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
  },
  companyOverview: {
    description:
      "Special Mining Services LLC (SMS) is a mining technology company that established in 2012 and is specialized in Drill & Blast and industrial chemicals. We are truly committed to safety, responsible operation and our clients’ interest.",
    expertise: [
      "Explosives Manufacturing",
      "Drill and Blast design and solutions",
      "High Explosives and initiating systems",
      "Industrial Chemicals",
    ],
    valueProposition: ["Technical services", "Consulting"],
    collaboration: [
      "Mongolian explosives service providers’ association",
      "Mongolian National Chamber of Commerce and Industry, “Diamond” member",
      "International Society of Explosives Engineers",
      "The Mongolia-Australia Chamber of Commerce",
      "The Australian Institute of Mining and Metallurgy",
      "The European Federation of Explosives Engineer",
      "Mining IQ Division of IQPC",
    ],
  },
  expertiseImages: [
    "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-8.png",
    "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-9.png",
    "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-10.png",
  ],
  relationships: {
    title: "Relationships",
    description:
      "We listen and act with honesty and integrity, look after our people and communities and build maintain relationships with customers and other stakeholders.",
    networks: "List of national and international networks and organizations:",
  },
  clientsLogos: [
    "https://specialmining.bloomlink.mn/moavolen/2020/05/tsairt.jpg",
    "https://specialmining.bloomlink.mn/moavolen/2020/05/southgobi-160054-1178811298.jpeg",
    "https://specialmining.bloomlink.mn/moavolen/2020/05/Erdenes-TavanTolgoi.jpg",
    "https://specialmining.bloomlink.mn/moavolen/2020/05/DMP.jpg",
    "https://specialmining.bloomlink.mn/moavolen/2020/05/Terra.jpg",
  ],
  finalImages: [
    "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-11.png",
    "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-12.png",
    "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-13.png",
  ],
};
