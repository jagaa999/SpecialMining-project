"use client";

import { useFormContext } from "react-hook-form";
import { Suspense } from "react";
import { Spin } from "antd";
import BlockDiv from "../Blocks/BlockDiv";
import AtomLabelV2 from "../Atoms/AtomLabelV2";
import AtomTextV2 from "../Atoms/AtomTextV2";
import atomRegistry, { FormAtomType } from "../../registry/atom.registry";

interface MoleculeFormFieldProps {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  type: FormAtomType;
  options?: any[];
  rules?: Record<string, any>; // ← нэмж өгнө
}

export default function MoleculeFormField({
  id,
  name,
  label,
  placeholder,
  disabled = false,
  className = "",
  type,
  options = [],
  rules,
  ...props
}: MoleculeFormFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const field = atomRegistry[type];
  if (!field || field.category !== "Form") return null;

  const DynamicComponent = field.component;
  const errorMessage = errors[name]?.message as string | undefined;

  if (!DynamicComponent) return null;

  return (
    <BlockDiv className={`mb-4 ${className}`}>
      <BlockDiv className="flex flex-col gap-2">
        {/* Label */}
        <AtomLabelV2
          htmlFor={name}
          required={Boolean(rules?.required)}
          value={label}
        />

        {/* Field */}
        <Suspense fallback={<Spin spinning size="small" />}>
          <DynamicComponent
            id={id || name}
            placeholder={placeholder}
            disabled={disabled}
            options={options}
            {...props}
            {...register(name, rules)}
          />
        </Suspense>
      </BlockDiv>

      {/* Error */}
      <AtomTextV2 className="text-red-500 text-sm mt-1" value={errorMessage} />
    </BlockDiv>
  );
}
