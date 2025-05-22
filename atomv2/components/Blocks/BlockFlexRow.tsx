"use client";

import { HTMLAttributes, ReactNode } from "react";
import BlockDiv from "./BlockDiv";

/**
 * `BlockFlexRow` component.
 *
 * Tailwind CSS дээр суурилсан `flex flex-row` layout wrapper.
 * Элементүүдийг эгнээ байдлаар, тэнхлэгийн дагуу төвшинд жигд байрлуулна.
 *
 * @example
 * ```tsx
 * <BlockFlexRow className="bg-gray-100 p-4">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </BlockFlexRow>
 * ```
 */
export interface BlockFlexRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Flex эгнээ доторх element-үүд (child-ууд)
   */
  children: ReactNode;
}

/**
 * Flex эгнээ layout-ийг бүрдүүлэгч wrapper component.
 * Tailwind CSS-ийн `flex flex-row gap-5 items-center` анхан суурь class-тай.
 */
export default function BlockFlexRow({
  children,
  className,
  ...props
}: BlockFlexRowProps) {
  return (
    <BlockDiv
      data-block="BlockFlexRow"
      className={`flex flex-row gap-5 items-center ${className}`}
      {...props}
    >
      {children}
    </BlockDiv>
  );
}
