"use client";

import { Icon, IconifyIcon } from "@iconify/react";
import { AtomBaseProps } from "../../types/atomTypes";
import { cn } from "atomv2/util/atomHelperV2";

export interface AtomIconProps extends AtomBaseProps {
  icon?: string | IconifyIcon;
  rotate?: number;
  hFlip?: boolean;
  vFlip?: boolean;
  inline?: boolean;
}

export default function AtomIconV2({
  value,
  icon,
  rotate,
  hFlip,
  vFlip,
  inline,
  className,
  ...props
}: AtomIconProps) {
  return (
    <Icon
      icon={icon || (value as string)}
      rotate={rotate}
      hFlip={hFlip}
      vFlip={vFlip}
      inline={inline}
      className={cn(className)}
      {...props}
    />
  );
}
