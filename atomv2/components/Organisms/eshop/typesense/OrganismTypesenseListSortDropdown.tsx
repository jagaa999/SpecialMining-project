"use client";

import { useTypesenseSchema } from "@/config/hooks/useTypesenseSchema";
import { FacetConfig, getFacetConfig } from "@/config/typesense/facetConfig";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import TextBody from "atomv2/components/Text/TextBody";
import { capitalize, map } from "lodash";
import { useMemo } from "react";
import { useSortBy } from "react-instantsearch";

export default function OrganismTypesenseListSortDropdown({
  collectionName,
  customSortOptions,
}: {
  collectionName: string;
  customSortOptions?: Record<string, Partial<FacetConfig>>;
}) {
  const { sorts } = useTypesenseSchema(collectionName);

  // Generate sort options from schema
  const sortOptions = useMemo(() => {
    const options = [{ label: "Үндсэн эрэмбэ", value: collectionName }];

    sorts?.forEach((field: any) => {
      const fieldName = field.title;
      const config = {
        ...getFacetConfig(fieldName),
        ...(customSortOptions?.[fieldName] || {}),
      };

      if (!config.isShow) return;

      options.push(
        {
          label: config.sortAscTitle || `${capitalize(fieldName)} (өсөх)`,
          value: `${collectionName}/sort/${fieldName}:asc`,
        },
        {
          label: config.sortDescTitle || `${capitalize(fieldName)} (буурах)`,
          value: `${collectionName}/sort/${fieldName}:desc`,
        }
      );
    });

    return options.filter((option) => option.value); // Ensure value exists
  }, [sorts, collectionName]);

  // console.log("FFFFFFF sorts:", { sorts, sortOptions });

  const { refine, currentRefinement } = useSortBy({
    items: sortOptions,
  });

  const menu: MenuProps = {
    items: map(sortOptions, ({ value, label }) => ({ key: value, label })),
    onClick: ({ key }) => refine(key),
    selectedKeys: [currentRefinement],
  };

  const selectedLabel =
    sortOptions.find((opt) => opt.value === currentRefinement)?.label ||
    "Сонгох";

  return (
    <Dropdown menu={menu} trigger={["click"]}>
      <BlockFlexRow className="cursor-pointer hover:brightness-90 text-sm text-gray-600 gap-1">
        <TextBody value={selectedLabel} />
        <RenderAtom
          value={"material-symbols-light:keyboard-arrow-down-rounded"}
          type="icon"
          className="text-lg"
        />
      </BlockFlexRow>
    </Dropdown>
  );
}
