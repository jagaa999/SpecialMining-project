"use client";

import React from "react";
import PosTitle from "../Position/PosTitle";
import PosValue from "../Position/PosValue";

interface MoleculeOrderSummaryProps {
  items: {
    label: string;
    value: React.ReactNode;
  }[];
  className?: string;
}

export default function MoleculeOrderSummary({
  items,
  className = "",
}: MoleculeOrderSummaryProps) {
  return (
    <ul className={`space-y-1 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex flex-row items-center gap-2">
          <PosTitle
            item={item}
            className="font-medium text-muted text-sm inline"
          />
          <PosValue item={item} className="text-sm inline" />
        </li>
      ))}
    </ul>
  );
}
