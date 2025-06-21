"use client";

import React, { ReactNode } from "react";

export default function BlockShowOnlyOne({
  index = 0,
  children,
}: {
  index: number;
  children: ReactNode | ReactNode[];
}) {
  const childArray = React.Children.toArray(children);
  return <>{childArray[index] ?? null}</>;
}
