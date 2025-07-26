export async function getPageComponent(domain: string, slugSegments: string[]) {
  // Сегментүүдийг PageXXX болгон хөрвүүлнэ
  const parts = slugSegments.map(capitalize);
  if (parts.length > 0) {
    parts[parts.length - 1] = `Page${parts[parts.length - 1]}`;
  }

  const importPath = `@/components/domains/${domain}/pages/${parts.join("/")}`;

  // console.log("🚀 ~ getPageComponent ~ importPath:", importPath);

  try {
    const mod = await import(importPath);
    return mod.default;
  } catch (err) {
    const fallback = await import("@/components/Public/NotFoundPage");
    return fallback.default;
  }
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// import MotoHome from "@/components/domains/moto/pages/PageHome";
// import MotoAbout from "@/components/domains/moto/pages/PageAbout";
// import MotoNews from "@/components/domains/moto/pages/PageNews";
// import MotoTest from "@/components/domains/moto/pages/PageTest";

// import AikidoHome from "@/components/domains/aikido/pages/PageHome";
// import AikidoStudent from "@/components/domains/aikido/pages/PageStudent";

// import NotFoundPage from "@/components/Public/NotFoundPage";

// export const pageComponentMap: Record<string, any> = {
//   "moto/home": MotoHome,
//   "moto/about": MotoAbout,
//   "moto/news": MotoNews,
//   "moto/test": MotoTest,
//   "aikido/home": AikidoHome,
//   "aikido/student": AikidoStudent,
// };

// export const defaultPageComponent = NotFoundPage;

// // import { pageComponentMap, defaultPageComponent } from "./staticPageComponentMap";

// export async function getPageComponent(domain: string, slugSegments: string[]) {
//   const slug = slugSegments.join("/");
//   const key = `${domain}/${slug}`;

//   console.log("🚀 ~ getPageComponent ~ key:", key);

//   return pageComponentMap[key] || defaultPageComponent;
// }
