"use client";

import { usePostToMotoApi } from "atomv2/hooks/api/usePostToMotoApi";
import { find, isEmpty, last, map, sortBy, split } from "lodash";
import { useEffect } from "react";
import { useRefinementList, UseRefinementListProps } from "react-instantsearch";

type Props = {
  attribute: string;
  title?: string;
  refCategory?: string; // newstype, newssource гэх мэт
};

export default function CustomRefinementList({
  attribute,
  title,
  refCategory,
}: Props) {
  // category байхгүй бол attribute-аас ref_ хэсгийг хасч category гаргаж авна
  const categoryReady = refCategory || last(split(attribute, "ref_"));

  const { items, refine } = useRefinementList({
    attribute,
  } as UseRefinementListProps);

  const { data: refData, send } = usePostToMotoApi();

  useEffect(() => {
    if (!isEmpty(categoryReady)) {
      send(
        { apicommand: "universal", category: categoryReady },
        {
          path: "moto-ref-v2",
          toast: { mute: true },
        }
      );
    }
  }, [categoryReady]);

  const itemsSorted = sortBy(items, (item) => {
    const index = refData?.findIndex(
      (refItem: any) => String(refItem.id) === String(item.value)
    );
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
  });

  return (
    <div className="mb-6">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <ul className="space-y-2">
        {map(itemsSorted, (item, index) => {
          const itemRef = find(
            refData,
            (refitem) => String(refitem.id) === String(item.value)
          );

          return (
            <li
              key={item?.value || index}
              className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={item.isRefined}
                  onChange={() => refine(item.value)}
                  className="accent-blue-600"
                />
                <span className="text-sm">{itemRef?.title ?? item.label}</span>
              </label>
              <span className="text-gray-400 text-sm">({item.count})</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
