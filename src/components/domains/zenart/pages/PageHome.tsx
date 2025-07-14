"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import BlockSection from "atomv2/components/Blocks/BlockSection";
import TextBody from "atomv2/components/Text/TextBody";
import { motion } from "framer-motion";
import ZenartSectionWrapper from "../Widget/ZenartSectionWrapper";

export default function DefaultHomePage() {
  return (
    <>
      <BlockDiv className="bg-white h-screen w-full flex items-center justify-center text-gray-800">
        <BlockDiv className="text-center px-4 max-w-xl">
          <BlockDiv className="mb-5 animate-fade-in">
            <img
              src="https://cdn.moto.mn/moto/landing/13_zenart/9fe1219c-4f15-45a8-84f5-6ebfd92f71ed.jpg"
              alt="Zen Art Logo"
              className="mx-auto h-52 w-auto"
            />
          </BlockDiv>
          <TextBody className="text-base md:text-lg text-gray-500 tracking-wide">
            A new artistic experience is on the horizon.
            <br />
            Please stay connected.
          </TextBody>
        </BlockDiv>
      </BlockDiv>

      <WhoWeAreSection />

      <HeroSection />

      <ServicesSection />

      <StatsWithImageSection />

      <ArchitectureProcessSection />

      <OurProjectsSection />

      <BigThinHouse />

      <TeamSection />
    </>
  );
}

function WhoWeAreSection() {
  return (
    <ZenartSectionWrapper>
      <BlockFlexCol className="">
        <p className="text-sm font-medium text-gray-500 flex gap-2">
          <span className="text-brand">●</span> Who we are
        </p>
        <h2 className="text-4xl font-bold text-gray-200">
          Experience <span className="text-brand">the art of Interior </span>
          Design
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl">
          We specialize in transforming visions into reality.
          <br />
          Explore our portfolio of innovative architectural and interior design
          projects crafted with precision.
        </p>
      </BlockFlexCol>

      <BlockDiv className="grid grid-cols-2 gap-10">
        {[
          {
            title: "Architectural Design",
            icon: "antra-icon-architectural",
            text: "Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!",
          },
          {
            title: "Interior Design & Planning",
            icon: "antra-icon-interior",
            text: "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be.",
          },
          {
            title: "Consulting Services",
            icon: "antra-icon-consulting",
            text: "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions.",
          },
          {
            title: "Project Management",
            icon: "antra-icon-management",
            text: "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free – so you can sit back and watch the magic happen.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4">
            <i
              className={`text-3xl text-gray-400 ${item.icon}`}
              aria-hidden="true"></i>
            <h5 className="text-lg font-semibold text-gray-300">
              {item.title}
            </h5>
            <div className="w-12 h-[2px] bg-gray-700" />
            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </BlockDiv>
    </ZenartSectionWrapper>
  );
}

function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center bg-black text-white">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6 relative z-10">
          <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-white/10 text-yellow-400 border border-yellow-400">
            ● STARTED IN 1991
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Where Spaces <br />
            Inspire, And{" "}
            <span className="text-yellow-400">Design Comes Alive</span>
          </h1>

          <div className="grid grid-cols-2 gap-4 text-sm font-medium pt-4">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                ✅ Latest Technologies
              </li>
              <li className="flex items-center gap-2">✅ 5 Years Warranty</li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                ✅ High-Quality Designs
              </li>
              <li className="flex items-center gap-2">✅ Residential Design</li>
            </ul>
          </div>

          <p className="text-gray-300 max-w-xl pt-4">
            Whether it’s your home, office, or a commercial project, we are
            always dedicated to bringing your vision to life. Our numbers speak
            better than words:
          </p>

          <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition">
            More About Us
            {/* <ArrowUpRight size={18} /> */}
          </button>
        </div>

        {/* Right image */}
        <div className="relative z-0">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg" // Replace with actual path
              alt="Interior Design"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left - Title and Image */}
        <div className="space-y-6">
          {/* Label */}
          <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-white text-yellow-500 border border-yellow-500">
            ● OUR SERVICES
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Explore Our <span className="text-yellow-500">Comprehensive</span>{" "}
            <br />
            Interior Design <span className="text-yellow-500">Services</span>
          </h2>

          <p className="text-gray-500 text-base max-w-xl">
            We specialize in transforming visions into reality. Explore our
            portfolio of innovative architectural and interior design projects
            crafted with precision.
          </p>

          {/* Image with overlay */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-lg">
            <img
              src="https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg"
              alt="Interior Design"
              className="w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 text-white text-sm p-4 rounded-xl backdrop-blur-sm">
              Tailored design services for private homes, including room
              makeovers and complete home transformations.
            </div>
          </div>
        </div>

        {/* Right - List */}
        <div className="space-y-4 pt-4">
          {[
            "Residential Interior Design",
            "Outdoor & Landscape Design",
            "Interior Design Consultation",
            "Commercial Interior Design",
            "Renovation and Remodeling",
          ].map((title, idx) => (
            <div
              key={idx}
              className={`flex justify-between items-center py-4 border-b ${
                idx === 0
                  ? "border-yellow-400 font-bold text-yellow-600"
                  : "text-black"
              }`}>
              <span className="text-lg flex items-center gap-2">
                <span className="text-gray-400 text-sm w-6">{`0${
                  idx + 1
                }`}</span>{" "}
                {title}
              </span>
              {/* {idx === 0 ? (
                <ArrowRight className="text-yellow-600" size={20} />
              ) : (
                <ExternalLink className="text-gray-400" size={18} />
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
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
    <section className="h-screen w-full bg-red-200 py-20 px-6 md:px-20 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto">
        {/* Grid of Stats */}
        <BlockDiv className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-200 pb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-3 text-center md:text-left">
              <div className="text-4xl font-bold text-gray-900">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-800">
                {stat.title}
              </div>
              <p className="text-sm text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </BlockDiv>

        {/* Bottom Image */}
        <div className="mt-10 relative z-10">
          <img
            src="https://res.cloudinary.com/dcww202aa/image/upload/v1752465199/landing/02_zenart/h1-banner02_y3p6zu.png"
            alt="Interior 3D"
            className="w-fit max-w-4xl mx-auto rounded-xl drop-shadow-xl"
          />
        </div>
      </div>

      {/* Optional background watermark text */}
      <div className="absolute bottom-0 left-0 text-[200px] font-bold text-black/20 z-0 select-none hidden md:block">
        antre
      </div>
    </section>
  );
}

function ArchitectureProcessSection() {
  return (
    <section className="py-24 px-6 md:px-20 relative overflow-hidden bg-white">
      {/* Background image */}
      {/* <div className="absolute inset-0 bg-[url('https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg')] bg-cover bg-center opacity-10 " /> */}

      <div className="max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-yellow-600 uppercase tracking-wider mb-2">
              • How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Description{" "}
              <span className="text-yellow-600">Architecture Process</span> For
              Exceptional Results.
            </h2>
          </div>
          <p className="text-gray-600 text-base md:text-lg max-w-xl">
            Our process is alive – adapting, refining, and growing with your
            vision. Always. Like artists with a blank canvas, we transform rooms
            into living works of art.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg hover:-translate-y-1 duration-300 z-10">
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-2">
                <h4 className="text-sm font-semibold text-yellow-600">
                  0{index + 1}.
                </h4>
                <h3 className="text-lg font-bold text-gray-800">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
                <div className="text-5xl font-extrabold text-gray-200 text-right">
                  {step.step}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Optional background grid overlay */}
      <div className="absolute inset-0 bg-[url('https://thearchitectsdiary.com/wp-content/uploads/2024/10/modern-home-interior-design-6.jpg')] opacity-10 pointer-events-none" />
    </section>
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
    <section className="py-24 px-6 md:px-20 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <p className="text-sm font-semibold text-yellow-600 uppercase tracking-wider mb-2">
            • Our Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Creative{" "}
            <span className="text-yellow-600">Projects That Define</span> Our
            Style
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Our portfolio showcases a diverse range of projects, from
            beautifully crafted residential spaces to functional and stylish
            commercial interiors.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional background blueprint design */}
      <div className="absolute inset-0 bg-[url('/images/blueprint-bg.svg')] bg-no-repeat bg-right-top opacity-5 pointer-events-none" />
    </section>
  );
}

function BigThinHouse() {
  return (
    <BlockSection className="flex flex-col items-center py-56 bg-gray-300">
      <img
        src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner03.png"
        className="w-[70%] h-auto object-contain"
      />
    </BlockSection>
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
    <section className="py-24 px-6 md:px-20 bg-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <div className="rounded-[2rem] overflow-hidden max-w-xl mx-auto">
        <img
          src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/team-4.jpg"
          alt="Valeria Novikova"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Text Content */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#B8860B] mb-2">
          ● Amazing Design Team
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug mb-6">
          Meet The <span className="text-[#B8860B]">Experts</span> Our <br />
          <span className="text-[#B8860B]">Interior</span> Designers
        </h2>

        <ul className="divide-y divide-gray-200">
          {team.map((member, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between py-4 group">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-500 w-6">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-lg font-semibold ${
                    member.active ? "text-[#B8860B]" : "text-gray-900"
                  }`}>
                  {member.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 uppercase">
                  {member.role}
                </span>
                <span>
                  {member.active ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#B8860B]">
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
