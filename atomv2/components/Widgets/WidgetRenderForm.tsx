"use client";

import "@ant-design/v5-patch-for-react-19";
import { message } from "antd";
import { FormAtomType } from "atomv2/registry/atom.registry";
import { find, forEach, isFunction, map } from "lodash";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RenderAtom from "../Atoms/RenderAtom";
import BlockDiv from "../Blocks/BlockDiv";
import MoleculeFormField from "../Molecules/MoleculeFormField";
import { useUnsavedChangesWarning } from "atomv2/hooks/useUnsavedChangesWarning";

export default function WidgetRenderForm({
  defaultValues = {},
  onSubmit,
  onError,
  fields,
  submitText = "Илгээх",
  children,
  className = "",
  disableSubmitUntilValid = false, // 🔧 нэмэлт тохиргоо
}: {
  defaultValues?: Record<string, any>;
  onSubmit: (data: any) => void;
  onError?: (errors: any) => void;
  fields?: Array<{
    type: FormAtomType;
    name: string;
    title?: string;
    placeholder?: string;
    options?: any[]; // select field-д зориулсан
    rules?: Record<string, any>;
    disabled?: boolean;
    className?: string;
  }>;
  submitText?: string;
  className?: string;
  disableSubmitUntilValid?: boolean; // ✨ configurable
  children?: ReactNode;
}) {
  const methods = useForm({
    defaultValues,
    mode: "onChange", // validation бүрэн ажиллах нөхцөл
  });

  const { isDirty } = methods.formState;
  useUnsavedChangesWarning(isDirty);

  const onSubmitHandle = (data: any) => {
    console.log("Form Data Successful:", data);
    onSubmit && onSubmit(data);
  };

  const onErrorHandle = (errors: any) => {
    console.error("Form submission errors:", errors);

    forEach(errors, (error, field) => {
      const fieldMeta = find(fields, { name: field });
      const title = fieldMeta?.title || field;

      message.error(
        error?.message
          ? `${title} - ${error.message}`
          : `"${title}" талбарт алдаа гарлаа.`
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
              <MoleculeFormField
                key={item?.id || index}
                {...item}
                control={methods.control}
              />
            ))}
          </BlockDiv>

          {children}

          <RenderAtom
            type="button"
            value={submitText}
            variant="primary"
            className="w-full"
            onClick={methods.handleSubmit(onSubmitHandle, onErrorHandle)}
            disabled={disableSubmitUntilValid && !methods.formState.isValid}
            tooltip={
              disableSubmitUntilValid
                ? "Шаардлагатай талбаруудыг бөглөнө үү"
                : undefined
            }
          />
          {/* </Tooltip> */}
        </form>
      </BlockDiv>
    </FormProvider>
  );
}
