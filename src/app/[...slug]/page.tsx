import { isEmpty } from "lodash";
import { getPageComponent } from "src/config/utils/getPageComponent";
// import MotoTest from "@/components/domains/moto/pages/PageTest";
// import { fetchStaticItem } from "@/lib/api/fetchStaticItem";

export const dynamicParams = true;
export const revalidate = 3;
export const dynamic = "force-static";

// export const dynamic = "auto";
// export const revalidate = 3600;
// export const dynamic = "force-dynamic"; // Force dynamic rendering for this page
// export const dynamicParams = false; // Зөвхөн generateStaticParams-д тодорхойлсон роутуудыг зөвшөөрнө

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const [domain, ...slugSegments] = slug;
  const slugReady = isEmpty(slugSegments) ? ["home"] : slugSegments;
  console.log("Rendering page for:", domain, slugReady);

  const PageComponent = await getPageComponent(domain, slugReady);
  // const staticItem = await fetchStaticItem(slug);
  const staticItem = {};

  return <PageComponent item={staticItem} domain={domain} />;
  // return <MotoTest />;
}

export async function generateStaticParams() {
  return [
    { slug: ["moto", "news"] },
    { slug: ["moto", "about"] },
    { slug: ["moto", "auth"] },
    { slug: ["moto", "test"] },
    { slug: ["aikido", "about"] },
    { slug: ["aikido", "student"] },
    { slug: ["aikido", "contact"] },
    { slug: ["digitalservice", "home"] },
    { slug: ["digitalservice", "about"] },
  ];
}
