"use client";

import { Input } from "antd";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface AtomInputAntdV2Props<T extends FieldValues> {
  name?: Path<T>;
  control?: Control<T>;
  rules?: any;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export default function AtomInputAntdV2<T extends FieldValues>({
  name,
  control,
  rules,
  placeholder,
  disabled,
  className = "",
  ...props
}: AtomInputAntdV2Props<T>) {
  if (!name) return null;
  if (!control) return null;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Input
          {...field}
          placeholder={placeholder}
          disabled={disabled}
          className={`atom-input w-full ${className}`}
          size="large"
          {...props}
        />
      )}
    />
  );
}
