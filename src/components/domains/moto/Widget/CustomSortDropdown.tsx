"use client";

import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import TextBody from "atomv2/components/Text/TextBody";
import { map } from "lodash";
import { useSortBy } from "react-instantsearch";

export default function CustomSortDropdown() {
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

const sortOptions = [
  { label: "Шинэ эхэнд", value: "moto_news_v2" },
  { label: "Хуучин эхэнд", value: "moto_news_v2/sort/createddate:asc" },
  //   { label: "Гарчиг A-Z", value: "moto_news_v2/sort/title:asc" },
];
