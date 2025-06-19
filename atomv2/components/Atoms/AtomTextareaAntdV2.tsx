"use client";

import { Input } from "antd";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

const { TextArea } = Input;

interface AtomTextareaAntdV2Props<T extends FieldValues> {
  name?: Path<T>;
  control?: Control<T>;
  rules?: any;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  rows?: number;
  autoSize?: boolean | { minRows?: number; maxRows?: number };
}

export default function AtomTextareaAntdV2<T extends FieldValues>({
  name,
  control,
  rules,
  placeholder,
  disabled,
  className = "",
  rows,
  autoSize,
}: AtomTextareaAntdV2Props<T>) {
  if (!name) return null;
  if (!control) return null;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextArea
          {...field}
          placeholder={placeholder}
          disabled={disabled}
          className={`atom-textarea w-full placeholder:text-xs ${className}`}
          rows={rows}
          autoSize={autoSize}
        />
      )}
    />
  );
}
