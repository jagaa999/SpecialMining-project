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
          title: "Интерьер дизайны урлаг...",
          description: "Интерьер дизайны урлаг, ухаалаг төлөвлөлтөөр таны орон зайг онцгой болгож, амьдралын урам зоригийг мэдрүүлнэ.",
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
            value="Шинэ уран бүтээлийн аялал эхлэхэд ойрхон байна.<br />Бидэнтэй үргэлжлүүлэн хамт байгаарай."
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
          value="Интерьер <span class='text-brand'>дизайны урлагийг </span>
          мэдэр"
          className="text-gray-200"
        />
        <TextBody
          value="Бид таны төсөөллийг бодит байдал болгоход мэргэшсэн.
          <br />Уран сэтгэмж, нарийн нягт хийцтэй архитектур болон интерьер дизайн төслүүдийнхээ багцыг танд танилцуулж байна."
          className="text-gray-300 max-w-2xl text-left"
        />
      </BlockFlexCol>

      <BlockDiv className="grid grid-cols-2 gap-10">
        {map(
          [
            {
              title: "Архитектур дизайн",
              icon: "mdi-light:flash",
              text: "Зүүдэл, бид бүтээгээд өгье! Томоохон төлөвлөлтөөс эхлээд хамгийн жижиг деталь хүртэл — бидний архитектурын шидэт шийдлүүд таны санааг амилуулна. Бүтээлч байдал ба нарийвчлалын гайхамшиг энд бий!",
            },
            {
              title: "Интерьер дизайн ба төлөвлөлт",
              icon: "mdi-light:home",
              text: "Өрөөгөө амилуул! Манай баг таны хэв маягийг тусгасан, дулаан уур амьсгалтай, гоёмсог интерьерүүдийг урлан, таны дуртай орон зайг бий болгоно.",
            },
            {
              title: "Зөвлөх үйлчилгээ",
              icon: "mdi-light:trophy",
              text: "Бид таны дизайн шивнэгч! Төсөл тань бүтээлч, үр дүнтэй, оновчтой байдлаар гялалзахын тулд бид мэргэжлийн зөвлөгөөг өгч, хамгийн зохистой шийдлийг санал болгодог.",
            },
            {
              title: "Төслийн менежмент",
              icon: "mdi-light:table",
              text: "Ажил мундсан ч санаа бүү зов! Эхлэлээс нь эцсийн цэг хүртэл бид таны төслийг хянаж, төсөвт нь багтааж, сэтгэл амар гүйцэтгэхэд тусална — та тайван сууж, шидэт үр дүнг харахад л хангалттай.",
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
              "Урам зориг <br />төрүүлсэн орчин <span class='text-[#f6c99e]'>гайхамшигтай дизайнаар амилна.</span>"
            }
          />

          <BlockFlexRow className="">
            <BlockFlexCol className="gap-2">
              <MoleculeIconText
                icon={{
                  value: "mdi-light:table",
                  className: "text-[#f6c99e] text-2xl",
                }}
                title={{ value: "Хамгийн сүүлийн үеийн технологи" }}
              />
              <MoleculeIconText
                icon={{
                  value: "mdi-light:star",
                  className: "text-[#f6c99e] text-2xl",
                }}
                title={{ value: "5 жилийн баталгаа" }}
              />
            </BlockFlexCol>
            <BlockFlexCol className="gap-2">
              <MoleculeIconText
                icon={{
                  value: "mdi-light:diamond-stone",
                  className: "text-[#f6c99e] text-2xl",
                }}
                title={{ value: "Өндөр чанартай дизайн" }}
              />
              <MoleculeIconText
                icon={{
                  value: "mdi-light:heart",
                  className: "text-[#f6c99e] text-2xl",
                }}
                title={{ value: "Орон сууцны интерьер дизайн" }}
              />
            </BlockFlexCol>
          </BlockFlexRow>

          <TextBody
            value={
              "Таны гэр, оффис эсвэл худалдааны төсөл ямар ч байсан — бид таны төсөөллийг амьдралд хэрэгжүүлэхэд өөрсдийгөө бүрэн зориулдаг. Тоон үзүүлэлтүүд маань үгнээс илүү тодорхой."
            }
          />

          <RenderAtom
            type="button"
            className="bg-[#f6c99e] text-gray-800 !px-6 !py-3 rounded-full flex items-center gap-2 w-fit"
            url={{ href: "/zenart" }}>
            Бидний тухай илүү ихийг үзэх
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
            "Бид иж бүрэн <span class='text-[#f6c99e]'>интерьер дизайны</span><br />үйлчилгээг <span class='text-[#f6c99e]'>танилцуулж байна</span>"
          }
        />
        <TextBody
          value={
            "Бид таны төсөөллийг бодит байдал болгоход чиглэсэн уран бүтээлч шийдлүүдийг санал болгодог. Архитектур ба интерьер дизайны шинэлэг, нарийн хийцтэй төслүүдээс бүрдсэн багцтай танилцана уу."
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
              "Гэрийн өрөө бүрийг шинэчилж, бүрэн өөрчлөх зориулалттай уялдаа холбоотой дизайн үйлчилгээ."
            }
            className="absolute bottom-4 left-4 right-4 bg-black/30 text-white text-sm p-4 rounded-md backdrop-blur-sm"
          />
        </BlockDiv>

        {/* Right - List */}
        <BlockFlexCol className="gap-3">
          {[
            "Орон сууцны интерьер дизайн",
            "Гадна орчин ба ландшафт дизайн",
            "Интерьер зөвлөгөө ба төсөл",
            "Худалдааны зориулалттай интерьер дизайн",
            "Шинэчлэл ба засварын шийдлүүд",
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
      title: "Туршлагатай жилийн тоо",
      desc: "Бид олон жилийн турш нарийн хийцтэй, чанартай ажлуудаар гэр орчныг сайжруулж ирсэн.",
    },
    {
      number: "190+",
      title: "Амжилттай дууссан төслүүд",
      desc: "250 гаруй амжилттай хэрэгжсэн төсөл — чанар, анхаарал шингэсэн ажлууд.",
    },
    {
      number: "260+",
      title: "Мэргэшсэн ажилчид",
      desc: "30 гаруй мэргэжлийн мэргэшсэн хамт олон — хамгийн өндөр үр дүнг баталгаажуулдаг.",
    },
    {
      number: "328+",
      title: "Захиалагчийн сэтгэл ханамж",
      desc: "Манай бүх харилцагч үйлчилгээ болон ажлын чанарт бүрэн сэтгэл хангалуун байдаг.",
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
            value={"• Бид хэрхэн ажилладаг вэ"}
            className="text-sm text-[#f6c99e] uppercase font-bold"
          />

          <TextH1
            value={
              "Онцгой үр дүнгийн төлөөх <span class='text-[#f6c99e]'>архитектурын ажлын шат</span> дамжлага."
            }
          />
        </BlockFlexCol>
        <TextBody
          value={
            "Манай ажил үргэлж “амьтай” — Таны алсын хараатай уялдан, шинэчлэгдэн, сайжирч, өсөж хөгждөг."
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
    title: "Анхны зөвлөлдөх уулзалт",
    desc: "Бид таны хүсэл, зорилго, хэрэгцээг ойлгож, дараагийн алхмуудыг нарийвчлан тодорхойлохоос ажлаа эхэлдэг.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner04.jpg",
  },
  {
    step: "02",
    title: "Дизайн ба төлөвлөлт",
    desc: "Манай баг таны шаардлагад бүрэн нийцсэн, нарийн нягт төлөвлөгдсөн загваруудыг боловсруулдаг.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner04.jpg",
  },
  {
    step: "03",
    title: "Хэрэгжилт",
    desc: "Нарийн шалгаруулсан гүйцэтгэгч нартай хамтран төслийн бүхий л үе шат бүрийг хариуцан удирддаг.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner04.jpg",
  },
  {
    step: "04",
    title: "Төсөл хүлээлгэн өгөх",
    desc: "Төсөл дуусмагц бид нягт нямбай шалгалт хийж, бүх деталь бүрийг баталгаажуулан танд бүрэн хүлээлгэн өгдөг.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner04.jpg",
  },
];

const projects = [
  {
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg",
    tags: ["Ганц гэр бүлийн орон сууц"],
    title: "Golden Ratio Residence",
    location: "Токио, Япон",
  },
  {
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg",
    tags: ["Орон сууц + Ганц гэр бүлийн хэв маягтай"],
    title: "Nordic Minimalist Loft",
    location: "Берлин, Герман",
  },
  {
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg",
    tags: ["Орчин үеийн гоёмсог орон сууц"],
    title: "Industrial Elegance Condo",
    location: "Парис, Франц",
  },
  {
    image:
      "https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg",
    tags: ["Тайван, тухтай амьдрах орон зай"],
    title: "Serene Villa",
    location: "Герман",
  },
];

function OurProjectsSection() {
  return (
    <ZenartSectionWrapper BlockSectionObject={{ className: "bg-white" }}>
      <BlockFlexCol className="gap-3">
        <TextBody
          value={"• БИДНИЙ ТӨСЛҮҮД"}
          className="text-sm text-[#f6c99e] uppercase font-bold"
        />

        <TextH1
          value={
            "Бүтээлч <span class='text-[#f6c99e]'>төслүүд бидний хэв маягийг</span> илэрхийлдэг"
          }
        />
        <TextBody
          value={
            "Манай бүтээлийн сан нь тансаг хийц бүхий орон сууцаас эхлээд ухаалаг төлөвлөлттэй, загварлаг худалдааны орчин хүртэл олон төрлийн төслүүдийг хамардаг."
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
      role: "Хамтран үүсгэн байгуулагч, Гүйцэтгэх захирал",
      active: false,
    },
    {
      name: "Valeria Novikova",
      role: "Гэрэлтүүлгийн дизайн мэргэжилтэн",
      active: true,
    },
    {
      name: "Alex Podzemsky",
      role: "График дизайны мэргэжилтэн",
      active: false,
    },
    {
      name: "Helen Reeves",
      role: "Материалын сонголтын зөвлөх",
      active: false,
    },
    {
      name: "Jake Nicholson",
      role: "3D дүрслэлийн загвар зохион бүтээгч",
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
            value={"● БИДНИЙ ГАЙХАЛТАЙ ДИЗАЙНЫ БАГ"}
            className="text-sm text-[#f6c99e] uppercase font-bold"
          />

          <TextH1
            value={
              "Бидний <span class='text-[#f6c99e]'>интерьер дизайны</span> <span class='text-[#f6c99e]'>мэргэжилтнүүдтэй </span> танилцана уу"
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
                    className={` ${member.active ? "text-[#f6c99e]" : "text-gray-900"
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
