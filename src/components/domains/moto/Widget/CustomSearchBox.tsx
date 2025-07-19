"use client";

import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useSearchBox } from "react-instantsearch";

export default function CustomSearchBox() {
  const { query, refine, clear } = useSearchBox();

  return (
    <Input
      allowClear
      size="middle"
      placeholder="Мэдээ хайх..."
      prefix={<SearchOutlined className="text-gray-400" />}
      value={query}
      onChange={(e) => refine(e.target.value)}
      onClear={() => clear()}
    />
  );
}
