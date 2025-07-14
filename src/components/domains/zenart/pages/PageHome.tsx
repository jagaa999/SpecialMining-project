"use client";

import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockAnimateWrapper from "atomv2/components/Blocks/BlockAnimateWrapper";
import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import BlockHalf from "atomv2/components/Blocks/BlockHalf";
import BlockScrollSnapScreenBlock from "atomv2/components/Blocks/BlockScrollSnapScreenBlock";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import MoleculeIconText from "atomv2/components/Molecules/MoleculeIconText";
import OrganismBannerUnsplash from "atomv2/components/Organisms/banner/OrganismBannerUnsplash";
import PanelMain from "atomv2/components/Panel/PanelMain";
import TextBody from "atomv2/components/Text/TextBody";
import TextH1 from "atomv2/components/Text/TextH1";
import TextH3 from "atomv2/components/Text/TextH3";
import TextH4 from "atomv2/components/Text/TextH4";
import TextH5 from "atomv2/components/Text/TextH5";
import { motion } from "framer-motion";
import { map } from "lodash";
import ZenartSectionWrapper from "../Widget/ZenartSectionWrapper";

export default function DefaultHomePage() {
  return (
    <BlockScrollSnapScreenBlock>
      <HomeMainLogo />

      <WhoWeAreSection />

      <OrganismBannerUnsplash
        keyWord="interior"
        item={{
          title: "Articstic Living...",
          description: "We are know about it",
        }}
      />

      <HeroSection />

      <ServicesSection />

      <StatsWithImageSection />

      <ArchitectureProcessSection />

      <OurProjectsSection />

      <BigThinHouse />

      <TeamSection />
    </BlockScrollSnapScreenBlock>
  );
}

const HomeMainLogo = () => {
  return (
    <BlockSection className="h-screen w-full bg-white flex items-center justify-center">
      <BlockFlexCol className="items-center">
        <BlockAnimateWrapper type="landing">
          <RenderAtom
            value={
              "https://cdn.moto.mn/moto/landing/13_zenart/9fe1219c-4f15-45a8-84f5-6ebfd92f71ed.jpg"
            }
            type="image"
            alt="Zen Art Logo"
            className="h-52 w-auto"
          />

          <TextBody
            value="A new artistic experience is on the horizon.<br />Please stay connected."
            className="text-base md:text-lg text-gray-500 tracking-wide text-center"
          />
        </BlockAnimateWrapper>
      </BlockFlexCol>
    </BlockSection>
  );
};

function WhoWeAreSection() {
  return (
    <ZenartSectionWrapper>
      <BlockFlexCol className="w-full">
        <TextH3
          value="<span class='text-brand mr-3'>●</span> Бид хэн бэ?"
          className="text-sm text-gray-500"
        />

        <TextH1
          value="Experience <span class='text-brand'>the art of Interior </span>
          Design"
          className="text-gray-200"
        />
        <TextBody
          value="We specialize in transforming visions into reality.
          <br />Explore our portfolio of innovative architectural and interior design projects crafted with precision."
          className="text-gray-300 max-w-2xl text-left"
        />
      </BlockFlexCol>

      <BlockDiv className="grid grid-cols-2 gap-10">
        {map(
          [
            {
              title: "Architectural Design",
              icon: "mdi-light:flash",
              text: "Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!",
            },
            {
              title: "Interior Design & Planning",
              icon: "mdi-light:home",
              text: "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be.",
            },
            {
              title: "Consulting Services",
              icon: "mdi-light:trophy",
              text: "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions.",
            },
            {
              title: "Project Management",
              icon: "mdi-light:table",
              text: "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free – so you can sit back and watch the magic happen.",
            },
          ],
          (item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4">
              <BlockFlexRow className="gap-2">
                <RenderAtom
                  value={item?.icon}
                  type="icon"
                  className="text-gray-500 text-3xl "
                />
                <TextH5 value={item.title} className="text-gray-400" />
              </BlockFlexRow>
              <BlockDiv className="w-12 h-[2px] bg-gray-700" />
              <TextBody value={item?.text} className="text-gray-400 text-sm" />
            </motion.div>
          )
        )}
      </BlockDiv>
    </ZenartSectionWrapper>
  );
}

function HeroSection() {
  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "text-gray-400" }}>
      <BlockDiv className="grid grid-cols-3 gap-12 items-center h-[80vh]">
        {/* Left content */}
        <BlockFlexCol className="relative z-10 gap-7 col-span-2 h-full">
          <BlockDiv className="px-4 py-2 text-sm font-semibold rounded-full bg-white/10 text-[#f6c99e] border border-[#f6c99e] w-fit">
            ● STARTED IN 2015
          </BlockDiv>

          <TextH1
            value={
              "Where Spaces <br />Inspire, And <span class='text-[#f6c99e]'>Design Comes Alive</span>"
            }
          />

          <BlockFlexRow className="">
            <BlockFlexCol className="gap-2">
              <MoleculeIconText
                icon={{
                  value: "mdi-light:table",
                  className: "text-[#f6c99e] text-2xl",
                }}
                title={{ value: "Latest Technologies" }}
              />
              <MoleculeIconText
                icon={{
                  value: "mdi-light:star",
                  className: "text-[#f6c99e] text-2xl",
                }}
                title={{ value: "5 Years Warranty" }}
              />
            </BlockFlexCol>
            <BlockFlexCol className="gap-2">
              <MoleculeIconText
                icon={{
                  value: "mdi-light:diamond-stone",
                  className: "text-[#f6c99e] text-2xl",
                }}
                title={{ value: "High-Quality Designs" }}
              />
              <MoleculeIconText
                icon={{
                  value: "mdi-light:heart",
                  className: "text-[#f6c99e] text-2xl",
                }}
                title={{ value: "Residential Design" }}
              />
            </BlockFlexCol>
          </BlockFlexRow>

          <TextBody
            value={
              "Whether it’s your home, office, or a commercial project, we are always dedicated to bringing your vision to life. Our numbers speak better than words:"
            }
          />

          <RenderAtom
            type="button"
            className="bg-[#f6c99e] text-gray-800 !px-6 !py-3 rounded-full flex items-center gap-2 w-fit"
            url={{ href: "/zenart" }}>
            More About Us
            <RenderAtom
              value={"mdi-light:arrow-right"}
              type="icon"
              className="text-2xl"
            />
          </RenderAtom>
        </BlockFlexCol>

        {/* Right image */}
        <BlockDiv className="w-full h-full col-span-1">
          <RenderAtom
            value={
              "https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg"
            }
            type="image"
            className="w-full h-full object-cover rounded-3xl block"
          />
        </BlockDiv>
      </BlockDiv>
    </ZenartSectionWrapper>
  );
}

function ServicesSection() {
  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-yellow-50" }}>
      <BlockFlexCol className="">
        <TextBody
          className="w-fit uppercase px-4 py-1 text-sm font-semibold rounded-full text-[#f6c99e] border border-[#f6c99e]"
          value="● Бидний үйлчилгээ"
        />

        <TextH1
          value={
            "Explore Our <span class='text-[#f6c99e]'>Comprehensive</span><br />Interior Design <span class='text-[#f6c99e]'>Services</span>"
          }
        />
        <TextBody
          value={
            "We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision."
          }
        />
      </BlockFlexCol>
      <BlockHalf stretch={true}>
        {/* Image with overlay */}
        <BlockDiv className="relative overflow-hidden rounded-lg shadow-lg w-full h-full">
          <RenderAtom
            value={
              "https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg"
            }
            type="image"
            alt="Interior Design"
            className="object-cover object-center w-full h-full"
          />

          <TextBody
            value={
              "Tailored design services for private homes, including room makeovers and complete home transformations."
            }
            className="absolute bottom-4 left-4 right-4 bg-black/30 text-white text-sm p-4 rounded-md backdrop-blur-sm"
          />
        </BlockDiv>

        {/* Right - List */}
        <BlockFlexCol className="gap-3">
          {[
            "Residential Interior Design",
            "Outdoor & Landscape Design",
            "Interior Design Consultation",
            "Commercial Interior Design",
            "Renovation and Remodeling",
          ].map((title, idx) => (
            <BlockFlexRow
              key={idx}
              className={`py-4 border-b border-slate-400`}>
              <TextBody
                value={`0${idx + 1}`}
                className="text-gray-400"
                animation={{
                  type: "slideDown",
                  triggerOnce: false,
                }}
              />
              <TextBody
                value={title}
                className=""
                animation={{
                  type: "slideUp",
                  triggerOnce: false,
                }}
              />
            </BlockFlexRow>
          ))}
        </BlockFlexCol>
      </BlockHalf>
    </ZenartSectionWrapper>
  );
}

function StatsWithImageSection() {
  const stats = [
    {
      number: "2013",
      title: "Years Experience",
      desc: "Improving homes with expert craftsmanship for years",
    },
    {
      number: "190+",
      title: "Projects Completed",
      desc: "Over 250 successful projects delivered with quality and care",
    },
    {
      number: "260+",
      title: "Skilled Tradespeople",
      desc: "Our team of 30 experts ensures top-quality results",
    },
    {
      number: "328+",
      title: "Client Satisfaction",
      desc: "All of our clients are satisfied with our work and service",
    },
  ];

  return (
    <BlockSection className={`w-full h-screen overflow-hidden bg-[#171c21]`}>
      <PanelMain className={`h-full relative`}>
        {/* Grid of Stats */}
        <BlockDiv className="grid grid-cols-4 gap-8 z-20 pt-24 pb-12">
          {stats.map((stat, idx) => (
            <BlockFlexCol key={idx} className="items-start justify-start">
              <TextH1 value={stat.number} className="" />
              <TextH4 value={stat.title} className="text-slate-400" />
              <TextBody value={stat.desc} className="text-slate-300" />
            </BlockFlexCol>
          ))}
        </BlockDiv>
        <RenderAtom value={" "} type="line" className="bg-gray-700 z-20" />
        <RenderAtom
          value={
            "https://res.cloudinary.com/dcww202aa/image/upload/v1752465199/landing/02_zenart/h1-banner02_y3p6zu.png"
          }
          type="image"
          className="absolute -bottom-12 -right-[250px] z-10 block"
        />
        {/* Optional background watermark text */}
        <TextH1
          value={"Zenart"}
          className="absolute bottom-0 -left-44 text-[200px] font-bold text-black/20 z-0 select-none"
        />
      </PanelMain>
    </BlockSection>
  );
}

function ArchitectureProcessSection() {
  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-gray-100" }}>
      {/* Section Header */}
      <BlockFlexRow className="justify-between gap-8">
        <BlockFlexCol className="gap-2 w-8/12">
          <TextBody
            value={"• How We Work"}
            className="text-sm text-[#f6c99e] uppercase font-bold"
          />

          <TextH1
            value={
              "Description <span class='text-[#f6c99e]'>Architecture Process</span> For Exceptional Results."
            }
          />
        </BlockFlexCol>
        <TextBody
          value={
            "Our process is alive – adapting, refining, and growing with your vision. Always. Like artists with a blank canvas, we transform rooms into living works of art."
          }
          className="w-4/12 block"
        />
      </BlockFlexRow>

      {/* Cards */}
      <BlockDiv className="grid grid-cols-4 gap-6 h-full">
        {processSteps.map((step, index) => (
          <BlockDiv
            key={index}
            className="bg-white rounded-xl shadow-xl overflow-hidden transition hover:shadow-lg hover:-translate-y-1 duration-300 relative">
            <RenderAtom
              value={step.img}
              type="image"
              className="w-full h-32 object-cover"
            />

            <BlockFlexCol className="px-5 py-3 gap-2 z-10">
              <TextH4
                value={`0${index + 1}.`}
                className="text-sm font-semibold text-[#f6c99e] z-10"
              />
              <TextH5 value={step.title} className="z-10" />
              <TextBody value={step.desc} className="z-10" />
            </BlockFlexCol>

            <TextH5
              value={step.step}
              className="text-5xl font-extrabold text-gray-200 absolute bottom-0 right-0 z-0 block"
            />
          </BlockDiv>
        ))}
      </BlockDiv>
    </ZenartSectionWrapper>
  );
}

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "We begin by understanding your vision, goals, and needs, followed Antra.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner04.jpg",
  },
  {
    step: "02",
    title: "Design & Planning",
    desc: "Our team creates detailed designs that reflect your requirements.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner04.jpg",
  },
  {
    step: "03",
    title: "Implementation",
    desc: "With carefully selected contractors, we manage every phase.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner04.jpg",
  },
  {
    step: "04",
    title: "Project Handover",
    desc: "Upon completion, we conduct a thorough review, making sure all details.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner04.jpg",
  },
];

const projects = [
  {
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg",
    tags: ["SINGLE HOME"],
    title: "Golden Ratio Residence",
    location: "Tokyo, Japan",
  },
  {
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg",
    tags: ["RESIDENTIAL", "SINGLE HOME"],
    title: "Nordic Minimalist Loft",
    location: "Berlin, Germany",
  },
  {
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg",
    tags: ["RESIDENTIAL"],
    title: "Industrial Elegance Condo",
    location: "Paris, France",
  },
  {
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg",
    tags: ["RESIDENTIAL"],
    title: "Serene Villa",
    location: "Germany",
  },
];

function OurProjectsSection() {
  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-white" }}>
      <BlockFlexCol className="gap-3">
        <TextBody
          value={"• Our Projects"}
          className="text-sm text-[#f6c99e] uppercase font-bold"
        />

        <TextH1
          value={
            "Creative <span class='text-[#f6c99e]'>Projects That Define</span> Our Style"
          }
        />
        <TextBody
          value={
            "Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces to functional and stylish commercial interiors."
          }
        />
      </BlockFlexCol>

      {/* Project Cards */}
      <BlockDiv className="grid grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <BlockDiv
            key={index}
            className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">
            <BlockDiv className="relative">
              <RenderAtom
                value={project.image}
                type="image"
                alt={project.title}
                className="w-full h-64 object-cover rounded-none"
              />

              <BlockDiv className="absolute top-3 left-3 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <TextBody
                    key={i}
                    value={tag}
                    className="bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full"
                  />
                ))}
              </BlockDiv>
            </BlockDiv>
            <BlockFlexCol className="gap-1 px-4 py-3">
              <TextH5 value={project.title} />
              <TextBody value={project.location} className="" />
            </BlockFlexCol>
          </BlockDiv>
        ))}
      </BlockDiv>
    </ZenartSectionWrapper>
  );
}

function BigThinHouse() {
  return (
    <ZenartSectionWrapper>
      <img
        src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner03.png"
        className="w-full h-auto object-contain"
      />
    </ZenartSectionWrapper>
  );
}

function TeamSection() {
  const team = [
    {
      name: "Mark Jackson",
      role: "CO-FOUNDER & CEO",
      active: false,
    },
    {
      name: "Valeria Novikova",
      role: "LIGHTING SPECIALIST",
      active: true,
    },
    {
      name: "Alex Podzemsky",
      role: "GRAPHICS DESIGNER",
      active: false,
    },
    {
      name: "Helen Reeves",
      role: "MATERIAL CONSULTANT",
      active: false,
    },
    {
      name: "Jake Nicholson",
      role: "3D VISUALIZATION",
      active: false,
    },
  ];

  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-white" }}>
      <BlockHalf className="gap-12 w-full" stretch={true}>
        {/* Image */}

        <img
          src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/team-4.jpg"
          alt="Valeria Novikova"
          className="w-full h-full object-cover object-center rounded-lg"
        />

        {/* Text Content */}
        <BlockFlexCol>
          <TextBody
            value={"● Amazing Design Team"}
            className="text-sm text-[#f6c99e] uppercase font-bold"
          />

          <TextH1
            value={
              "Meet The <span class='text-[#f6c99e]'>Experts</span> Our <br /><span class='text-[#f6c99e]'>Interior</span> Designers"
            }
          />

          <BlockDiv className="divide-y divide-gray-200">
            {team.map((member, idx) => (
              <BlockDiv
                key={idx}
                className="flex items-center justify-between py-4 group">
                <BlockFlexRow className="items-center gap-3">
                  <TextBody
                    value={String(idx + 1).padStart(2, "0")}
                    className="text-sm font-medium text-gray-500 w-6"
                  />
                  <TextH5
                    value={member.name}
                    className={` ${
                      member.active ? "text-[#f6c99e]" : "text-gray-900"
                    }`}
                  />
                </BlockFlexRow>
                <BlockFlexRow className="gap-3">
                  <TextBody
                    value={member.role}
                    className="text-xs text-gray-500 uppercase"
                  />
                  <span>
                    {member.active ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#f6c99e]">
                        <path
                          d="M5 12H19M12 5L19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400 group-hover:text-gray-800">
                        <path
                          d="M5 12H19M12 5L19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </BlockFlexRow>
              </BlockDiv>
            ))}
          </BlockDiv>
        </BlockFlexCol>
      </BlockHalf>
    </ZenartSectionWrapper>
  );
}
