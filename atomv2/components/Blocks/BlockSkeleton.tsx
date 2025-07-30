// src/components/Blocks/BlockSkeleton.tsx
import React from "react";
import clsx from "clsx";

interface BlockSkeletonProps {
  variant?: "text" | "card" | "image" | "form" | "list";
  className?: string;
}

export function BlockSkeleton({
  variant = "text",
  className,
}: BlockSkeletonProps) {
  return (
    <div className={clsx("animate-pulse", className)}>
      {variant === "text" && (
        <div className="space-y-3">
          <div className="h-6 w-1/3 bg-gray-300 rounded" />
          <div className="h-4 w-2/3 bg-gray-200 rounded" />
          <div className="h-4 w-1/2 bg-gray-200 rounded" />
        </div>
      )}

      {variant === "card" && (
        <div className="rounded-lg border p-4 shadow-sm space-y-4 bg-white">
          <div className="h-48 w-full bg-gray-200 rounded" />
          <div className="h-6 w-2/3 bg-gray-300 rounded" />
          <div className="h-4 w-1/3 bg-gray-200 rounded" />
        </div>
      )}

      {variant === "image" && (
        <div className="h-64 w-full bg-gray-300 rounded" />
      )}

      {variant === "form" && (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 w-1/4 bg-gray-300 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
          ))}
          <div className="h-10 w-1/3 bg-gray-300 rounded" />
        </div>
      )}

      {variant === "list" && (
        <ul className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <li key={i} className="h-4 w-full bg-gray-200 rounded" />
          ))}
        </ul>
      )}
    </div>
  );
}
