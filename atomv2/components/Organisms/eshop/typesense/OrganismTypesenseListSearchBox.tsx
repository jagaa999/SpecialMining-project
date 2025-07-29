"use client";

import { Input } from "antd";
import RenderAtom from "atomv2/components/Atoms/RenderAtom";
import { useSearchBox } from "react-instantsearch";

export default function OrganismTypesenseListSearchBox() {
  const { query, refine, clear } = useSearchBox();

  return (
    <Input
      size="middle"
      placeholder="Мэдээ хайх..."
      className="placeholder:text-cs"
      classNames={{
        input: "placeholder:text-sm",
      }}
      prefix={
        <RenderAtom
          type="icon"
          value="mdi:magnify"
          className="text-gray-400 w-4 h-4"
        />
      }
      allowClear={{
        clearIcon: (
          <RenderAtom
            type="icon"
            value="mdi:close"
            className="text-gray-400 !hover:text-red-500 w-4 h-4"
          />
        ),
      }}
      value={query}
      onChange={(e) => refine(e.target.value)}
      onClear={() => clear()}
    />
  );
}
