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
  digitalservice: {
    favicon: "/digitalservice/favicon.png",
    title: "Дижитал Сервис",
    description: "Принтерийн бүх төрлийн үйлчилгээ, засвар, худалдаа",
    url: "https://www.digitalservice.mn",
    image: "/images/dddd.jpg",
    creator: "@DigitalService",
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
