import { FacetConfig, getFacetConfig } from "@/config/typesense/facetConfig";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import { includes, isArray, map } from "lodash";
import { useEffect, useState } from "react";
import OrganismTypesenseFacetCheckbox from "./OrganismTypesenseFacetCheckbox";

export default function OrganismTypesenseFacetList({
  collectionName,
  facetConfig,
}: {
  collectionName: string;
  facetConfig?: Record<string, Partial<FacetConfig>>;
}) {
  const [facets, setFacets] = useState<any[]>([]);

  useEffect(() => {
    async function fetchFacets() {
      try {
        const res = await fetch(
          `/api/typesense/typesense-schema?collection=${collectionName}`
        );
        const result = await res.json();

        console.log("facet is", result);

        if (isArray(result.facets)) {
          setFacets(result.facets);
        }
      } catch (err) {
        console.error("Facet fetch error:", err);
      }
    }

    fetchFacets();
  }, []);

  return (
    <BlockFlexCol className="">
      {map(facets, (item, index) => {
        const myFacetConfig = {
          ...getFacetConfig(item.title),
          ...(facetConfig?.[item.title] || {}),
        };

        if (!myFacetConfig.isShow) return null;

        const title = myFacetConfig.title;

        // Хэрвээ date төрлийн attribute байвал тусгай компонент дуудаж рендерлэнэ
        if (
          includes(
            ["createddate", "modifieddate", "updateddate"],
            item.attribute
          )
        ) {
          return null;
          // return (
          //   <CustomFacetDatePreset
          //     key={item.attribute}
          //     attribute={item.attribute}
          //     title={title}
          //   />
          // );
        }

        return (
          <OrganismTypesenseFacetCheckbox
            key={item.title || index}
            attribute={item.attribute}
            title={title}
          />
        );
      })}
    </BlockFlexCol>
  );
}
