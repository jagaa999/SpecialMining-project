"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useMotoPage = (pageslug: string) => {
  const shouldFetch = Boolean(pageslug);

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `/api/moto-page?pageslug=${pageslug}` : null,
    fetcher
  );

  return {
    data,
    loading: isLoading,
    error: error ? error.message : null,
  };
};
