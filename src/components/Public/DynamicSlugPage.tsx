"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useDomain } from "src/config/context/DomainContext";
import { useStaticItem } from "src/config/hooks/useStaticItem";

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function DynamicSlugPage() {
  const params = useParams();
  const { domain } = useDomain();
  const paramSlug = params?.slug || [];

  const slugSegments: string[] =
    typeof paramSlug === "string"
      ? [paramSlug]
      : Array.isArray(paramSlug)
      ? paramSlug
      : ["home"];

  const slug = slugSegments.join("/");

  const { staticItem, loading, error } = useStaticItem({ pageslug: slug });

  const PageComponent: any = useMemo(() => {
    const segments = slugSegments.map(capitalize);

    // Last segment = PageXxx
    if (segments.length > 0) {
      const last = segments.length - 1;
      segments[last] = `Page${segments[last]}`;
    }

    const importPath = `src/components/domains/${domain}/pages/${segments.join(
      "/"
    )}`;

    console.log("dsddddddfdsf", { params, slug, domain, importPath });

    return dynamic(
      async () => {
        try {
          const mod = await import(importPath);
          return mod.default;
        } catch (err) {
          console.warn(`❌ Page not found: ${importPath}`, err);
          const fallback = await import("src/components/Public/NotFoundPage");
          return fallback.default;
        }
      },
      { ssr: false }
    );
  }, [slug, domain]);

  if (loading)
    return (
      <div className="text-gray-400 animate-pulse p-8">Уншиж байна...</div>
    );
  if (error) return <div>Алдаа: {error}</div>;

  return <PageComponent item={staticItem} />;
}
