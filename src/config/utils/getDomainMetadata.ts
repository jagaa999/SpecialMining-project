import { cookies } from "next/headers";

const metadataTemplate = ({
  favicon,
  title,
  description,
  url,
  image,
  creator,
}: {
  favicon: string;
  title: string;
  description: string;
  url: string;
  image: string;
  creator: string;
}) => ({
  title,
  description,
  icons: {
    icon: favicon,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: `${title} preview`,
      },
    ],
    locale: "mn_MN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator,
  },
});

const metadataContentMap: any = {
  special: {
    favicon: "/special/favicon.png",
    title: "Special Mining",
    description:
      "Special Mining Services LLC (SMS) is a mining technology company that established in 2012 and is specialized in Drill & Blast and industrial chemicals. We are truly committed to safety, responsible operation and our clients’ interest.",
    url: "https://www.special.mn",
    image: "/images/dddd.jpg",
    creator: "@Special",
  },
  // digitalservice: {
  //   favicon: "https://cdn-icons-png.flaticon.com/128/446/446991.png",
  //   title: "Дижитал Сервис",
  //   description: "Принтерийн бүх төрлийн үйлчилгээ, засвар, худалдаа",
  //   url: "https://www.digitalservice.mn",
  //   image: "/images/dddd.jpg",
  //   creator: "@DigitalService",
  // },
  aikido: {
    favicon:
      "https://cdn.moto.mn/moto/landing/11_aikido/4fbf4f4f-d6a2-4901-8a44-f3a5b5fd32fb.png",
    title: "Aikido in Mongolia",
    description: "Бүх хүн хичээллэж болох гайхамшигт бие хамгаалах урлаг",
    url: "https://www.aikido.mn",
    image: "/images/dddd.jpg",
    creator: "@AikidoInMongolia",
  },
  zenart: {
    favicon:
      "https://cdn.moto.mn/moto/landing/13_zenart/9f3f5b84-3ee3-49c6-953a-6266d13fff43.png",
    title: "Artistic Living",
    description: "Artistic Living  Zenart",
    url: "https://www.zenart.mn",
    image:
      "https://cdn.moto.mn/moto/landing/13_zenart/d84557ed-ae22-41c7-8787-685ac76a073a.jpg",
    creator: "@Zenart",
  },
};

export async function getDomainMetadata() {
  const cookieStore = await cookies();
  const domain = cookieStore.get("domain")?.value || "default";

  const content = await metadataContentMap[domain];
  if (!content) {
    return metadataTemplate({
      favicon: "/default/favicon.png",
      title: "Default Title",
      description: "Default description for the website.",
      url: "https://www.default.com",
      image: "/images/default.jpg",
      creator: "@Default",
    });
  }

  return metadataTemplate(content);
}
