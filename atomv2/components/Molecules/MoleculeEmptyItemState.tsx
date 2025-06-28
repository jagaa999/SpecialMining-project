"use client";

import { ObjectLight } from "atomv2/types/objectTypes";
import { ReactNode } from "react";
import RenderAtom from "../Atoms/RenderAtom";
import BlockFlexCol from "../Blocks/BlockFlexCol";
import TextBody from "../Text/TextBody";
import TextH6 from "../Text/TextH6";

export default function MoleculeEmptyItemState({
  icon = { value: "mdi-light:inbox" },
  title = { value: "Хоосон" },
  description = { value: "Одоогоор үзүүлэх өгөгдөл байхгүй." },
  outerBlock,
  children,
}: {
  icon?: ObjectLight;
  title?: ObjectLight;
  description?: ObjectLight;
  outerBlock?: ObjectLight;
  children?: ReactNode;
}) {
  const textColor = "text-muted/30";

  return (
    <BlockFlexCol
      className={`w-full py-12 items-center justify-center text-center gap-2 ${
        outerBlock?.className || ""
      }`}>
      <RenderAtom
        value={icon?.value || "mdi-light:inbox"}
        type="icon"
        className={`${textColor} ${icon?.className || ""}`}
        width={64}
        height={64}
      />
      <TextH6
        value={title?.title || title?.value}
        className={`text-xs ${textColor} ${title?.className}`}
      />
      <TextBody
        item={description}
        className={`text-xs max-w-md ${textColor} ${description?.className}`}
      />
      {children}
    </BlockFlexCol>
  );
}
