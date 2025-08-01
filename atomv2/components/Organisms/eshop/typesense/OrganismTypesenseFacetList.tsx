import { useTypesenseSchema } from "@/config/hooks/useTypesenseSchema";
import { FacetConfig, getFacetConfig } from "@/config/typesense/facetConfig";
import BlockFlexCol from "atomv2/components/Blocks/BlockFlexCol";
import { includes, map } from "lodash";
import OrganismTypesenseFacetCheckbox from "./OrganismTypesenseFacetCheckbox";

export default function OrganismTypesenseFacetList({
  collectionName,
  facetConfig,
}: {
  collectionName: string;
  facetConfig?: Record<string, Partial<FacetConfig>>;
}) {
  const { facets, isLoading, isError } = useTypesenseSchema(collectionName);

  if (isLoading) return <div>Түр хүлээнэ үү...</div>;
  if (isError) return <div>Алдаа гарлаа</div>;

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
