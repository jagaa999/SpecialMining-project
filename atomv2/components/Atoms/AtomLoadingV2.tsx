"use client";

import { AtomBaseProps } from "../../types/atomTypes";
import { cn } from "../../util/atomHelperV2";

export default function AtomLoadingV2({ className, children }: AtomBaseProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gray-300 !opacity-20 min-h-[10px] min-w-[30px] w-full h-full",
        className
      )}>
      {children}
    </div>
  );
}
