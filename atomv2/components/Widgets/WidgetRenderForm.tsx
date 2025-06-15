"use client";

import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import MoleculeFormField from "../Molecules/MoleculeFormField";
import { FormAtomType } from "atomv2/registry/atom.registry";
import { find, forEach, isFunction, map } from "lodash";
import { message } from "antd";
import "@ant-design/v5-patch-for-react-19";

export default function WidgetRenderForm({
  defaultValues = {},
  onSubmit,
  onError,
  fields,
  submitText = "Илгээх",
  children,
  className = "",
}: {
  defaultValues?: Record<string, any>;
  onSubmit: (data: any) => void;
  onError?: (errors: any) => void;
  fields?: Array<{
    type: FormAtomType;
    name: string;
    label?: string;
    placeholder?: string;
    options?: any[]; // select field-д зориулсан
    rules?: Record<string, any>;
    disabled?: boolean;
    className?: string;
  }>;
  submitText?: string;
  className?: string;
  children?: ReactNode;
}) {
  const methods = useForm({ defaultValues });

  const onSubmitHandle = (data: any) => {
    console.log("Form Data Successful:", data);
    onSubmit && onSubmit(data);
  };

  const onErrorHandle = (errors: any) => {
    console.error("Form submission errors:", errors);

    forEach(errors, (error, field) => {
      const fieldMeta = find(fields, { name: field });
      const label = fieldMeta?.label || field;

      message.error(
        error?.message
          ? `${label} - ${error.message}`
          : `"${label}" талбарт алдаа гарлаа.`
      );
    });

    if (isFunction(onError)) {
      onError(errors);
    }
  };

  return (
    <FormProvider {...methods}>
      <BlockDiv className={className}>
        <form
          data-block="WidgetRenderForm"
          onSubmit={methods.handleSubmit(onSubmit)}>
          <BlockDiv className="flex flex-col gap-1">
            {map(fields, (item: any, index: number) => (
              <MoleculeFormField key={item?.id || index} {...item} />
            ))}
          </BlockDiv>

          {children}

          <RenderAtom
            type="button"
            value={submitText}
            variant="primary"
            className="w-full py-3 text-lg bg-teal-500 hover:bg-teal-600 text-white rounded"
            onClick={methods.handleSubmit(onSubmitHandle, onErrorHandle)}
          />
        </form>
      </BlockDiv>
    </FormProvider>
  );
}
