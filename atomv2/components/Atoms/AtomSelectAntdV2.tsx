"use client";

import { Select } from "antd";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { cn } from "atomv2/util/atomHelperV2";

interface AtomSelectAntdControlledProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: Array<{
    label: string;
    value: string | number;
  }>;
  rules?: any;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export default function AtomSelectAntdControlled<T extends FieldValues>({
  name,
  control,
  options,
  rules,
  placeholder,
  disabled,
  className = "",
}: AtomSelectAntdControlledProps<T>) {
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
          size="large"
        />
      )}
    />
  );
}
