"use client";

import _ from "lodash";
import Banner from "../../components/Banner";
import PanelMain from "../../config/PanelMain";
import { generalTheme } from "../../config/generalConfig";

export default function ServicesPage() {
  const { sections } = staticItem;

  return (
    <main>
      <Banner item={staticItem?.banner} />

      <PanelMain>
        {/* ✅ Blasting */}
        <section className="my-24" id="blasting">
          <p className={generalTheme?.titleMain}>{sections.blasting.title1}</p>

          <ul className="list-disc list-inside space-y-2">
            {sections.blasting.fields.map((field, i) => (
              <li key={i}>{field}</li>
            ))}
          </ul>
          <p className={generalTheme?.titleMain}>{sections.blasting.title2}</p>
          <p>{sections.blasting.description}</p>
          <p className={generalTheme?.titleMain}>{sections.blasting.title3}</p>
          <ul className="list-disc list-inside space-y-2">
            {_.map(sections.blasting.works, (item: any, index: number) => (
              <li key={item?.id || index}>{item}</li>
            ))}
          </ul>
          <p>{sections.blasting.commitment}</p>
        </section>

        <section className="my-24">
          <img
            src={sections.blasting.image}
            alt="Blasting"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>

        {/* ✅ Production */}
        <section className="my-24" id="production">
          <p className={generalTheme?.titleMain}>{sections.production.title}</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {_.map(
                sections.production.paragraphs,
                (item: any, index: number) => (
                  <p key={item?.id || index}>{item}</p>
                )
              )}
            </div>
            <img
              src={sections.production.image}
              alt="Production"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="my-24">
          <img
            src={sections.production.banner}
            alt="Production Banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </section>

        {/* ✅ Technical Services */}
        <section className="my-24" id="technical">
          <p className={generalTheme?.titleMain}>{sections.technical.title}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {_.map(
              [sections.technical.safe, sections.technical.efficient],
              (item: any, index: number) => (
                <div key={item?.id || index}>
                  <p className={generalTheme?.title2}>{item.title}</p>
                  <ul className="list-disc">
                    {item.items.map((text: any, jindex: number) => (
                      <li key={jindex}>{text}</li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>

          <img
            src={sections.technical.image}
            alt="Tech"
            className="w-full h-auto rounded-lg shadow-lg mt-8"
          />
        </section>

        {/* ✅ Monitoring */}
        <section className="my-24" id="monitoring">
          <p className={generalTheme?.titleMain}>{sections.monitoring.title}</p>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <p className="col-span-1">{sections.monitoring.description}</p>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {_.map(
                [sections.monitoring.list1, sections.monitoring.list2],
                (item: any, index: number) => (
                  <ul
                    key={item?.id || index}
                    className={`p-6 rounded-lg list-disc list-inside space-y-2 text-white ${
                      index === 0 ? "bg-[#3f60b7]" : "bg-[#252891]"
                    }`}>
                    {item.map((item: any, j: number) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </div>
        </section>

        {/* ✅ Quality Management */}
        <section className="my-24" id="quality">
          <p className={generalTheme?.titleMain}>{sections.quality.title}</p>

          <div className="grid grid-cols-2 gap-6 items-start">
            <div>
              <p>{sections.quality.description}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-8">
                {sections.quality.tests.map((test, i) => (
                  <li key={i}>{test}</li>
                ))}
              </ul>
            </div>

            <div className="col-span-1 flex flex-col gap-4">
              {sections.quality.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`quality-${i}`}
                  className="rounded-lg shadow-lg transition-transform transform duration-300"
                />
              ))}
            </div>
          </div>
        </section>
      </PanelMain>
    </main>
  );
}

const staticItem = {
  banner: {
    title: "Services",
    subtitle: "Special Mining LLC > Services",
    mainimage:
      "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
  },
  sections: {
    blasting: {
      title1: "Our specialized fields are:",
      fields: [
        "Down-the-hole solutions (Point Load Tie and Shoot)",
        "Drill & Blast design",
        "Blast hole drilling",
        "Consulting & Technical services",
        "Explosives Supply",
      ],
      title2: "Our projects",
      description:
        "Our mission is to deliver sustainable and innovative solutions to even most challenging projects and value to our customers, while decreasing carbon footprint.",
      title3: "Blasting Work",
      works: [
        "Open pit mining coal and metal",
        "Quarrying",
        "Underground mining",
        "Rock slope stabilization",
        "Geophysical Exploration, Logging and Seismic blasts",
        "Perforating blasts for natural oil and gas",
      ],
      commitment:
        "We are committed to meeting the needs and expectations of our clients by providing a package of services that includes project management and client satisfaction. We aim to deliver quality work at the highest level, tailored to the client’s requirements.",
      image:
        "https://specialmining.bloomlink.mn/moavolen/2023/09/DSC_7464-1536x1025.jpg",
    },
    production: {
      title: "Production",
      paragraphs: [
        "Our company operates a cutting-edge emulsion explosive manufacturing plant, bringing modern technology and services to Mongolia through a partnership with global leaders in explosives technology. Our production facility is located in the Tavan Tolgoi region, within a 7 km distance to the east of Tsogtsetsii Sum in the Omnogovi Province. Established in 2013, and since then, it has been successfully contributing to the mining industry.",
        "The production capacity of this facility is 115,000 tons of Emulsion Explosive products per annum. The plant is equipped with the latest automated production technology, ensuring high efficiency and quality. Additionally, it utilizes membrane and carbon filtration systems for water treatment, ensuring the highest quality for emulsion explosive production.",
      ],
      image:
        "https://specialmining.bloomlink.mn/moavolen/2023/09/DSC_7513-1536x1025.jpg",
      banner: "https://specialmining.bloomlink.mn/moavolen/2020/01/img-02.jpg",
    },
    technical: {
      title: "Technical Services",
      safe: {
        title: "Safe",
        items: ["Risk assessment", "Safety Management"],
      },
      efficient: {
        title: "Efficient",
        items: [
          "Blast designs and support",
          "Drill and blast audits",
          "High speed video analysis",
          "Fragmentation assessment",
          "VOD Tests",
          "Explosives quality control",
        ],
      },
      image:
        "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-zurg.png",
    },
    monitoring: {
      title: "Monitoring",
      description:
        "From the simplest to the most demanding applications, our instruments offer innovative features and a variety of recording formats that increase their functionality and allow for flexibility across a wide variety of applications. Trusted in over 110 countries, our seismographs monitor ground vibration and air overpressure changes created by blasting, demolition, mining, quarrying, and construction activities. Our monitors are the instruments of choice for",
      list1: [
        "Blast monitoring for compliance",
        "Near-field blast monitoring",
        "Far-field blast monitoring",
        "Demolition activity monitoring",
        "Construction activity monitoring",
        "Heavy transportation monitoring",
      ],
      list2: [
        "Pile driving monitoring",
        "Dynamic compaction monitoring",
        "Tunneling and subway monitoring",
        "Structural monitoring and analysis",
        "Remote access monitoring",
        "Environmental monitoring",
      ],
    },
    quality: {
      title: "Quality Management",
      description:
        "To ensure product quality and performance the bulk emulsion plant has in house advanced modern laboratory enables us to evaluate our products to reassure our quality:",
      tests: [
        "Stability (repump, thermal shock, storage)",
        "Crystallization (polarized microscopy)",
        "Droplet dispersion (microscopy)",
        "VOD (explosives and boosters)",
        "Water resistance",
        "Viscosity, density, gasification rate, detonation transition, brisance etc.",
      ],
      images: [
        "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-1.png",
        "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-2.png",
        "https://specialmining.bloomlink.mn/moavolen/2023/09/special-iin-3.png",
      ],
    },
  },
};
