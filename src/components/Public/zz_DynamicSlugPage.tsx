"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";

import { useMemo } from "react";
import { useDomain } from "src/config/context/DomainContext";
import { useStaticItem } from "src/config/hooks/useStaticItem";

export default function DynamicSlugPage() {
  const params = useParams();
  const { domain } = useDomain();

  const slugSegments =
    typeof params.slug === "string"
      ? [params.slug]
      : Array.isArray(params.slug)
      ? params.slug
      : ["home"];

  const slug = slugSegments.join("/");

  const { staticItem, loading, error } = useStaticItem({ pageslug: slug });

  const PageComponent: any = useMemo(() => {
    const capitalizedSegments = slugSegments.map(capitalize);

    // Сүүлийн сегментэд 'Page' урд нь нэмнэ
    if (capitalizedSegments.length > 0) {
      const lastIndex = capitalizedSegments.length - 1;
      capitalizedSegments[lastIndex] = `Page${capitalizedSegments[lastIndex]}`;
    }

    // Фолдерын зам: domain-ийн дагуу бүрдүүлнэ
    const importPath = `src/components/domains/${domain}/pages/${capitalizedSegments.join(
      "/"
    )}`;

    return dynamic(
      async () => {
        try {
          return (await import(importPath)).default;
        } catch (err: any) {
          console.warn(
            `❌ Page not found: ${importPath}, loading NotFoundPage`,
            `error: ${err.message}`
          );
          return (await import("src/components/Public/NotFoundPage")).default;
        }
      },
      { ssr: false }
    );
  }, [slug, domain]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 animate-pulse text-gray-400">
        Уншиж байна... (пэйжийн агуулга)
      </div>
    );
  }
  if (error) return <div>Error: {error}</div>;

  if (!staticItem) {
    console.warn(
      `⚠ Цаанаас content ирсэнгүй. Байгааг нь гаргана. slug: ${slug}`
    );
  }

  return <PageComponent item={staticItem} />;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
