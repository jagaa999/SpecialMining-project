import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import { includes, isArray, map } from "lodash";
import { useEffect, useState } from "react";
import OrganismTypesenseFacetCheckbox from "./OrganismTypesenseFacetCheckbox";

export default function OrganismTypesenseFacetList() {
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

const getFacetTitle = (category: string) => {
  const titles: Record<string, string> = {
    ref_newstype: "Төрөл",
    ref_newssource: "Эх сурвалж",
    ref_carfirm: "Машины фирм",
    ref_carmark: "Машины марк",
  };
  return titles[category] || category;
};
