// src/app/[[...slug]]/page.tsx

import DynamicSlugPage from "src/components/Public/DynamicSlugPage";

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

  const staticPages = [
    { slug: ["home"] },
    { slug: ["about"] },
    { slug: ["contact"] },
    { slug: ["career"] },
  ];

  return staticPages;
}
