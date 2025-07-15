"use client";

import { useRefinementList, UseRefinementListProps } from "react-instantsearch";

export default function CustomRefinementList({
  attribute,
  title,
}: {
  attribute: string;
  title?: string;
}) {
  const { items, refine } = useRefinementList({
    attribute,
  } as UseRefinementListProps);

  return (
    <div className="mb-6">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label} className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={item.isRefined}
                onChange={() => refine(item.value)}
                className="accent-blue-600"
              />
              <span className="text-sm">{item.label}</span>
            </label>
            <span className="text-gray-400 text-sm">({item.count})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
