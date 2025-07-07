"use client";

import BlockDiv from "./BlockDiv";

export default function BlockMain({ ...props }: { [key: string]: any }) {
  return <BlockDiv type="main" {...props} />;
}
