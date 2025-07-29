"use client";

import { Dropdown, MenuProps } from "antd";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import BlockFlexRow from "atomv2/components/Blocks/BlockFlexRow";
import TextBody from "atomv2/components/Text/TextBody";
import { map } from "lodash";
import { useHitsPerPage } from "react-instantsearch";

export default function OrganismTypesenseListPageSizeDropdown() {
  const { items, refine } = useHitsPerPage({
    items: [
      { label: "12 ширхэг", value: 12, default: true },
      { label: "24 ширхэг", value: 24 },
      { label: "50 ширхэг", value: 50 },
    ],
  });

  const currentRefinement = items.find((item) => item.isRefined)?.value;

  // const menu: MenuProps = map(items, (item) => ({
  //   key: String(item.value),
  //   label: item.label,
  //   onClick: () => refine(item.value),
  // }));

  const menu: MenuProps = {
    items: map(items, ({ value, label }) => ({ key: String(value), label })),
    onClick: ({ key }) => refine(Number(key)),
    selectedKeys: [String(currentRefinement)],
  };

  return (
    <Dropdown menu={menu} trigger={["click"]}>
      <BlockFlexRow className="cursor-pointer hover:brightness-90 text-sm text-gray-600 gap-1">
        <TextBody value={`${String(currentRefinement)} ширхэг`} />
        <RenderAtom
          value={"material-symbols-light:keyboard-arrow-down-rounded"}
          type="icon"
          className="text-lg"
        />
      </BlockFlexRow>
    </Dropdown>
  );
}
