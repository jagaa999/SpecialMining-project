// import { notFound } from "next/navigation";
// import { getStaticItem } from "src/config/utils/getStaticItem";

// type Props = {
//   slug: string;
//   domain: string;
// };

// export default async function DynamicSlugPage({ slug, domain }: Props) {
//   const { staticItem } = await getStaticItem({ pageslug: slug }); // сервер талын fetch
//   const CapitalSlug = capitalize(slug);

//   let PageComponent;
//   try {
//     PageComponent = (
//       await import(`src/components/domains/${domain}/pages/Page${CapitalSlug}`)
//     ).default;
//   } catch (err) {
//     console.warn(`Not found: Page${CapitalSlug}, using fallback.`);
//     PageComponent = (await import("src/components/Public/NotFoundPage"))
//       .default;
//   }

//   if (!staticItem) return notFound();

//   return <PageComponent item={staticItem} />;
// }

// // Хуудасны нэрийг том үсгээр эхлүүлэх туслах функц
// function capitalize(str: string) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }
