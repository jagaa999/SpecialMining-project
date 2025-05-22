"use client";

import { Affix } from "antd";
import { ReactNode } from "react";

interface BlockAffixProps {
  /**
   * Scroll хүрэхэд affix болох зай (дээд талаас)
   */
  offsetTop?: number;
  isActive?: boolean;
  /**
   * Affix-д орох контент
   */
  children: ReactNode;
}

/**
 * `BlockAffix` component
 *
 * Ant Design-ийн `Affix` дээр тулгуурласан scroll-д баригдах layout wrapper.
 */
export default function BlockAffix({
  offsetTop = 0,
  isActive = true,
  children,
  ...props
}: BlockAffixProps) {
  if (!isActive) return children;

  return (
    <Affix offsetTop={offsetTop} data-block="BlockAffix" {...props}>
      {children}
    </Affix>
  );
}
