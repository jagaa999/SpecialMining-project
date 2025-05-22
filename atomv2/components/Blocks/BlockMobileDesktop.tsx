"use client";

import { ReactNode } from "react";
import useResponsiveBreakpoint from "../../hooks/useResponsiveBreakpoint";

/**
 * `BlockMobileDesktop` компонент.
 *
 * Гар утас болон десктоп орчинд тохируулан хоёр өөр компонент ээлжлэн харуулна.
 *
 * - Mobile үед → эхний child
 * - Desktop үед → хоёр дахь child
 *
 * @example
 * ```tsx
 * <BlockMobileDesktop>
 *   <MobileComponent />
 *   <DesktopComponent />
 * </BlockMobileDesktop>
 * ```
 */
export interface BlockMobileDesktopProps {
  /**
   * 2 child-тай байх ёстой: [Mobile компонет, Desktop компонент]
   */
  children: [ReactNode, ReactNode];
}

export default function BlockMobileDesktop({
  children,
}: BlockMobileDesktopProps) {
  const { isMobile } = useResponsiveBreakpoint();
  return <>{isMobile ? children[0] : children[1]}</>;
}
