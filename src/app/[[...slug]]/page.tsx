// src/app/[[...slug]]/page.tsx

import { map } from "lodash";
import DynamicSlugPage from "src/components/Public/DynamicSlugPage";
import { staticDomainList } from "src/config/staticgenerate/staticDomainList";

export default function Page() {
  // const { params } = context;
  // const slug = params?.slug?.[0] || "home";
  // const domain = await getDomainFromHost();

  return <DynamicSlugPage />;
}

export async function generateStaticParams() {
  // const staticPages = [
  //   { domain: "digitalservice", slug: ["home"] },
  //   { domain: "moto", slug: ["about", "contact"] },
  //   { domain: "special", slug: ["career"] },
  // ];

  // return staticPages;

  return map(staticDomainList, (item) => ({
    item,
  }));

  // const staticPages = [
  //   { slug: ["home"] },
  //   { slug: ["about"] },
  //   { slug: ["contact"] },
  //   { slug: ["career"] },
  // ];

  // return staticPages;
}
