"use client";

import BlockDiv from "./BlockDiv";

export default function BlockSection({ ...props }: { [key: string]: any }) {
  return (
    <BlockDiv
      type="section"
      className={`overflow-hidden ${props.className}`}
      {...props}
    />
  );
}
