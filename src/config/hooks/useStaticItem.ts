"use client";

import { useMotoPage } from "./useMotoPage";

export function useStaticItem({ pageslug }: { pageslug: string }) {
  const { data, loading, error } = useMotoPage(pageslug);

  return { staticItem: data?.[0]?.json, loading, error };
}
