"use client";

import BlockDiv from "atomv2/components/Blocks/BlockDiv";
import { includes, map } from "lodash";
import { useEffect, useState } from "react";
import CustomFacetDatePreset from "./CustomFacetDatePreset";
import CustomRefinementList from "./CustomRefinementList";

export default function CustomFacetList() {
  const [facets, setFacets] = useState<any[]>([]);

  useEffect(() => {
    async function fetchFacets() {
      try {
        const res = await fetch("/api/typesense/typesense-schema");
        const result = await res.json();

        console.log("facet is", result);

        if (Array.isArray(result.facets)) {
          setFacets(result.facets);
        }
      } catch (err) {
        console.error("Facet fetch error:", err);
      }
    }

    fetchFacets();
  }, []);

  console.log("dfsdeweeeeeeeeee", facets);

  return (
    <BlockDiv className="space-y-6">
      {map(facets, (item, index) => {
        const title = getFacetTitle(item.title); // гарчиг болгох функц (доор тайлбарлав)

        // Хэрвээ date төрлийн attribute байвал тусгай компонент дуудаж рендерлэнэ
        if (includes(dateLikeFields, item.attribute)) {
          return (
            <CustomFacetDatePreset
              key={item.attribute}
              attribute={item.attribute}
              title={title}
            />
          );
        }

        return (
          <CustomRefinementList
            key={item.title || index}
            attribute={item.attribute}
            title={title}
          />
        );
      })}
    </BlockDiv>
  );
}

const dateLikeFields = ["createddate", "modifieddate", "updateddate"]; // Та хүссэнээр өргөтгөж болно

function getFacetTitle(category: string): string {
  const titles: Record<string, string> = {
    ref_newstype: "Мэдээний төрөл",
    ref_newssource: "Мэдээний эх сурвалж",
    ref_carfirm: "Машины фирм",
    ref_carmark: "Машины марк",
    // өөр facet нэрсийг нэмж болно
  };
  return titles[category] || category;
}
