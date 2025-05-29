"use client";

import useSWR from "swr";

export const useMotoPage = (pageslug: string) => {
  const shouldFetch = Boolean(pageslug);

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `/api/moto-page?pageslug=${pageslug}` : null
  );

  return {
    data,
    loading: isLoading,
    error: error ? error.message : null,
  };
};
