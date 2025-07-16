"use client";

import { useSearchBox } from "react-instantsearch";
import { Input } from "antd";
import { SearchOutlined, CloseCircleFilled } from "@ant-design/icons";

export default function CustomSearchBox() {
  const { query, refine, clear } = useSearchBox();

  return (
    <div className="relative">
      <Input
        allowClear
        size="large"
        placeholder="Мэдээ хайх..."
        prefix={<SearchOutlined className="text-gray-400" />}
        value={query}
        onChange={(e) => refine(e.target.value)}
      />
      {query && (
        <CloseCircleFilled
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
          onClick={() => clear()}
        />
      )}
    </div>
  );
}
