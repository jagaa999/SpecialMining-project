"use client";

import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import MoleculeFormField from "../Molecules/MoleculeFormField";
import { FormAtomType } from "atomv2/registry/atom.registry";

export interface FormFieldConfig {
  type: FormAtomType;
  name: string;
  label?: string;
  placeholder?: string;
  options?: any[]; // select field-д зориулсан
  rules?: Record<string, any>;
  disabled?: boolean;
  className?: string;
}

interface WidgetRenderFormProps {
  defaultValues?: Record<string, any>;
  onSubmit: (data: any) => void;
  fields?: FormFieldConfig[];
  submitText?: string;
  className?: string;
  children?: ReactNode;
}

export default function WidgetRenderForm({
  defaultValues = {},
  onSubmit,
  fields,
  submitText = "Илгээх",
  children,
  className = "",
}: WidgetRenderFormProps) {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <BlockDiv className={className}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          {fields?.map((field, index) => (
            <MoleculeFormField key={index} {...field} />
          ))}

          {children}

          <RenderAtom
            type="button"
            value={submitText}
            variant="primary"
            className="w-full py-3 text-lg bg-teal-500 hover:bg-teal-600 text-white rounded"
            onClick={methods.handleSubmit(onSubmit)}
          />
        </form>
      </BlockDiv>
    </FormProvider>
  );
}
