"use client";

import { InstantSearchWrapper } from "../Widget/InstantSearchWrapper";
import MotoNewsInfiniteScrollAuto from "../Widget/MotoNewsInfiniteScrollAuto";

export default function MotoPageNews() {
  return (
    <>
      <InstantSearchWrapper>
        <MotoNewsInfiniteScrollAuto />
      </InstantSearchWrapper>
    </>
  );
}
