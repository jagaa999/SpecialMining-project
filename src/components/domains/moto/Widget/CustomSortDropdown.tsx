"use client";

import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { useSortBy } from "react-instantsearch";

export default function CustomSortDropdown() {
  const { refine, currentRefinement } = useSortBy({
    items: sortOptions,
  });

  const menu: MenuProps = {
    items: sortOptions.map(({ value, label }) => ({ key: value, label })),
    onClick: ({ key }) => refine(key),
    selectedKeys: [currentRefinement],
  };

  //   console.log("dsfdsf", { currentRefinement, initialIndex });

  const selectedLabel =
    sortOptions.find((opt) => opt.value === currentRefinement)?.label ||
    "Сонгох";

  return (
    <Dropdown menu={menu} trigger={["click"]}>
      <Button>Эрэмбэ: {selectedLabel}</Button>
    </Dropdown>
  );
}

const sortOptions = [
  { label: "Шинэ мэдээ эхэнд", value: "moto_news_v2" },
  { label: "Хуучин мэдээ эхэнд", value: "moto_news_v2/sort/createddate:asc" },
  //   { label: "Гарчиг A-Z", value: "moto_news_v2/sort/title:asc" },
];
