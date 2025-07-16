"use client";

import { Button, Dropdown } from "antd";
import { map } from "lodash";
import { useHitsPerPage } from "react-instantsearch";

export default function CustomPageSizeDropdown() {
  const { items, refine } = useHitsPerPage({
    items: [
      { label: "2", value: 2 },
      { label: "10", value: 10, default: true },
      { label: "20", value: 20 },
      //   { label: "50", value: 50 },
      //   { label: "100", value: 100 },
    ],
  });

  const currentRefinement = items.find((item) => item.isRefined)?.value;

  return (
    <Dropdown
      menu={{
        items: map(items, (item) => ({
          key: item.value.toString(),
          label: item.label,
          onClick: () => refine(item.value),
        })),
      }}>
      <Button>Хуудасны хэмжээ: {currentRefinement}</Button>
    </Dropdown>
  );
}
