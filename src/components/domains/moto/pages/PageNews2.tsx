"use client";

import { InstantSearchWrapper } from "../Widget/InstantSearchWrapper";
// import MotoNewsInfiniteScroll from "../Widget/MotoNewsInfiniteScroll";
import MotoNewsInfiniteScrollAuto from "../Widget/MotoNewsInfiniteScrollAuto";
// import MotoNewsSearch from "../Widget/MotoNewsSearch";

export default function Page() {
  return (
    <InstantSearchWrapper>
      {/* <MotoNewsSearch /> */}
      {/* <MotoNewsInfiniteScroll /> */}
      <MotoNewsInfiniteScrollAuto />
    </InstantSearchWrapper>
  );
}
