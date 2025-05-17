"use client";

import { cn } from "../../util/atomHelperV2";
import { AtomBaseProps } from "../../types/atomTypes";

export default function AtomLoadingV2({ className, ...props }: AtomBaseProps) {
  return (
    <div
      className={cn("flex justify-center items-center p-2", className)}
      {...props}>
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-transparent border-primary" />
    </div>
  );
}
