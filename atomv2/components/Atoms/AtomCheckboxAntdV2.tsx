import { Checkbox } from "antd";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface AtomCheckboxAntdV2Props<T extends FieldValues> {
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

export default function AtomCheckboxAntdV2<T extends FieldValues>({
  name,
  control,
  options,
  rules,
  disabled,
  className,
}: AtomCheckboxAntdV2Props<T>) {
  if (!name) return null;
  if (!control) return null;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Checkbox.Group
          {...field}
          options={options}
          disabled={disabled}
          className={`atom-checkbox text-brand ${className || ""}`}
        />
      )}
    />
  );
}
