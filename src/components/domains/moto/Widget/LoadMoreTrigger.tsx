"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteHits } from "react-instantsearch";

export default function LoadMoreTrigger() {
  const { showMore, isLastPage } = useInfiniteHits();

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && !isLastPage) {
      showMore();
    }
  }, [inView, isLastPage, showMore]);

  return (
    <>
      {!isLastPage && (
        <div ref={ref} className="py-6 text-center text-gray-500">
          Уншиж байна...
        </div>
      )}
      {isLastPage && (
        <div className="py-6 text-center text-gray-400">
          Бүх үр дүнг харууллаа
        </div>
      )}
    </>
  );
}
