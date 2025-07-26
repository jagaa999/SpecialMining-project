import { fetchStaticItem } from "@/config/utils/fetchStaticItem";
import { isEmpty } from "lodash";
import { getPageComponent } from "src/config/utils/getPageComponent";
// import MotoTest from "@/components/domains/moto/pages/PageTest";
// import { fetchStaticItem } from "@/lib/api/fetchStaticItem";

export const dynamicParams = true;
export const revalidate = 3600;
export const dynamic = "force-static";

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const [domain, ...slugSegments] = slug;
  const slugReady = isEmpty(slugSegments) ? ["home"] : slugSegments;

  const PageComponent = await getPageComponent(domain, slugReady);
  const staticItem = await fetchStaticItem(domain, slugReady.join("/"));

  return <PageComponent item={staticItem?.[0]?.json} domain={domain} />;
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
