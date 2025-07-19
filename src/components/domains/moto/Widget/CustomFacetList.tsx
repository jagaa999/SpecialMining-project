"use client";

import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import { includes, isArray, map } from "lodash";
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

        // console.log("facet is", result);

        if (isArray(result.facets)) {
          setFacets(result.facets);
        }
      } catch (err) {
        console.error("Facet fetch error:", err);
      }
    }

    fetchFacets();
  }, []);

  // console.log("dfsdeweeeeeeeeee", facets);

  return (
    <BlockFlexCol className="">
      {map(facets, (item, index) => {
        const title = getFacetTitle(item.title);

        // Хэрвээ date төрлийн attribute байвал тусгай компонент дуудаж рендерлэнэ
        if (
          includes(
            ["createddate", "modifieddate", "updateddate"],
            item.attribute
          )
        ) {
          return null;
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
    </BlockFlexCol>
  );
}

function getFacetTitle(category: string): string {
  const titles: Record<string, string> = {
    ref_newstype: "Төрөл",
    ref_newssource: "Эх сурвалж",
    ref_carfirm: "Машины фирм",
    ref_carmark: "Машины марк",
    // өөр facet нэрсийг нэмж болно
  };
  return titles[category] || category;
}
