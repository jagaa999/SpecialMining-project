"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useStaticItem } from "src/config/hooks/useStaticItem";

export default function DynamicSlugPage() {
  const params = useParams();
  const slug =
    typeof params.slug === "string"
      ? params.slug
      : Array.isArray(params.slug)
      ? params.slug[0]
      : "home";

  const { staticItem, loading, error } = useStaticItem({ pageslug: slug });

  // dynamic import-ийг slug өөрчлөгдөх үед л хийх
  const PageComponent: any = useMemo(() => {
    return dynamic(
      () =>
        import(`src/components/special/pages/Page${capitalize(slug)}`).catch(
          () => import("src/components/Public/NotFoundPage")
        ),
      {
        ssr: false,
      }
    );
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 animate-pulse text-gray-400">
        Уншиж байна...
      </div>
    );
  }
  if (error) return <div>Error: {error}</div>;

  if (!staticItem) {
    return <div>Content not found</div>;
  }

  return <PageComponent item={staticItem} />;
}

// Хуудасны нэрийг том үсгээр эхлүүлэх туслах функц
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
