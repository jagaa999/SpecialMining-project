"use client";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import TextBody from "atomv2/components/Text/TextBody";
import { map } from "lodash";
import { useSortBy } from "react-instantsearch";

interface SortOption {
  title: string;
  value?: string;
  isShow?: boolean;
}

export default function OrganismTypesenseListSortDropdown({
  collectionName,
  customSortOptions,
}: {
  collectionName: string;
  customSortOptions?: SortOption[];
}) {
  const defaultSortOptions = [
    {
      title: "Шинэ эхэнд",
      value: `${collectionName}/sort/createddate:desc`,
      isShow: true,
    },
    {
      title: "Хуучин эхэнд",
      value: `${collectionName}/sort/createddate:asc`,
      isShow: true,
    },
    {
      title: "Гарчиг A-Z",
      value: `${collectionName}/sort/title:asc`,
      isShow: true,
    },
    {
      title: "Гарчиг Z-A",
      value: `${collectionName}/sort/title:desc`,
      isShow: true,
    },
    {
      title: "Хямдхан эхэндээ",
      value: `${collectionName}/sort/price:asc`,
      isShow: true,
    },
    {
      title: "Үнэтэй эхэндээ",
      value: `${collectionName}/sort/price:desc`,
      isShow: true,
    },
  ];

  // Merge default options with custom options based on title
  const mergedOptions = defaultSortOptions.map((defaultOption) => {
    const customOption = customSortOptions?.find(
      (custom) => custom.title === defaultOption.title
    );

    return {
      ...defaultOption,
      ...customOption, // Custom options override default
    };
  });

  // Use custom options or filter default options by isShow
  const sortOptions = mergedOptions
    .filter((option) => option.isShow !== false)
    .map((option) => ({
      ...option,
      label: option.title, // title-г label болгох
    }));

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
