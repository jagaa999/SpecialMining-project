"use client";

import { useEffect } from "react";
import { useInfiniteHits } from "react-instantsearch";
import { useInView } from "react-intersection-observer";

export default function OrganismTypesenseLisLoadMoreTrigger({
  className = "py-6 text-center text-gray-300 text-sm font-light",
}: {
  className?: string;
}) {
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

  if (isLastPage) return <div className={className}>Бүх үр дүнг харууллаа</div>;
  if (!isLastPage)
    return (
      <div ref={ref} className={className}>
        Уншиж байна...
      </div>
    );

  return null;
}
