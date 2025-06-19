"use client";

import { Select } from "antd";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface AtomSelectAntdV2Props<T extends FieldValues> {
  name?: Path<T>;
  control?: Control<T>;
  options?: Array<{
    label: string;
    value: string | number;
  }>;
  rules?: any;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export default function AtomSelectAntdV2<T extends FieldValues>({
  name,
  control,
  options,
  rules,
  placeholder,
  disabled,
}: AtomSelectAntdV2Props<T>) {
  if (!name) return null;
  if (!control) return null;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Select
          {...field}
          options={options}
          placeholder={placeholder}
          disabled={disabled}
          value={field.value}
          onChange={(val) => field.onChange(val)}
          allowClear
          showSearch
          // mode="multiple"
          className="atom-select w-full"
          classNames={{
            root: "atom-select-popup", // dropdown popup root override
          }}
        />
      )}
    />
  );
}
