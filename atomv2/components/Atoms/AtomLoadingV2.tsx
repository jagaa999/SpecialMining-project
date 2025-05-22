"use client";

import { AtomBaseProps } from "../../types/atomTypes";
import { cn } from "../../util/atomHelperV2";

export default function AtomLoadingV2({ className, ...props }: AtomBaseProps) {
  return (
    <div
      className={cn(
        className,
        "flex justify-center items-center p-2 bg-gray-200/20"
      )}
      {...props}>
      <div className="w-5 h-5 animate-spin rounded-full border-2 border-t-transparent border-primary text-gray-700" />
    </div>
  );
}
