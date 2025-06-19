"use client";

import { Radio } from "antd";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface AtomRadioAntdV2Props<T extends FieldValues> {
  name?: Path<T>;
  control?: Control<T>;
  options?: Array<{
    label: string;
    value: string | number;
  }>;
  rules?: any;
  disabled?: boolean;
  className?: string;
}

export default function AtomRadioAntdV2<T extends FieldValues>({
  name,
  control,
  options,
  rules,
  disabled,
  className,
}: AtomRadioAntdV2Props<T>) {
  if (!name) return null;
  if (!control) return null;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Radio.Group
          {...field}
          options={options}
          disabled={disabled}
          className={`atom-radio text-brand text-[#d1f863] ${className || ""}`}
        />
      )}
    />
  );
}
