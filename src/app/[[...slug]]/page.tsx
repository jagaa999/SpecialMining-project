"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useDomain } from "src/config/context/DomainContext";
import { useStaticItem } from "src/config/hooks/useStaticItem";

export default function DynamicSlugPage() {
  const params = useParams();
  const { domain } = useDomain(); // ✅ Контекстоос домэйн авч байна
  console.log("🚀 ~ DynamicSlugPage ~ domain:", domain);
  const slug =
    typeof params.slug === "string"
      ? params.slug
      : Array.isArray(params.slug)
      ? params.slug[0]
      : "home";

  const { staticItem, loading, error } = useStaticItem({ pageslug: slug });

  // ✅ slug болон domain-аар dynamic import хийх
  const PageComponent: any = useMemo(() => {
    const CapitalSlug = capitalize(slug);

    return dynamic(
      async () => {
        try {
          return (
            await import(`src/components/${domain}/pages/Page${CapitalSlug}`)
          ).default;
        } catch (err) {
          console.warn(
            `❌ Page not found: src/components/${domain}/pages/Page${CapitalSlug}, loading NotFoundPage`
          );
          return (await import("src/components/Public/NotFoundPage")).default;
        }
      },
      { ssr: false }
    );
  }, [slug, domain]); // ✅ slug болон domain өөрчлөгдөхөд дахин ажиллана

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 animate-pulse text-gray-400">
        Уншиж байна...
      </div>
    );
  }
  if (error) return <div>Error: {error}</div>;

  if (!staticItem) {
    // return <div>Content not found</div>;
    console.warn(
      `❌ Content not found for slug: ${slug}, loading NotFoundPage`
    );
  }

  return <PageComponent item={staticItem} />;
}

// Хуудасны нэрийг том үсгээр эхлүүлэх туслах функц
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
