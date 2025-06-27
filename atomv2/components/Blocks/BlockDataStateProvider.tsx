// atomv2/components/Blocks/BlockDataStateProvider.tsx
"use client";

import useSWR from "swr";
import { ReactNode } from "react";
import { DataContext } from "src/config/context/DataContext";

interface BlockDataStateProviderProps {
  endpoint: string;
  query?: Record<string, any>;
  offset?: number;
  pageSize?: number;
  setOffset?: (offset: number) => void; // 👉 шинэчлэгдсэн хэсэг
  children: ReactNode;
  loadingComponent?: ReactNode;
  errorComponent?: ReactNode;
  emptyComponent?: ReactNode;
}

export default function BlockDataStateProvider({
  endpoint,
  query = {},
  offset = 1,
  pageSize = 15,
  setOffset,
  children,
  loadingComponent = <div>Loading...</div>,
  errorComponent = <div>Error loading data</div>,
  emptyComponent = <div>No data found</div>,
}: BlockDataStateProviderProps) {
  const queryString = new URLSearchParams({
    ...query,
    offset: String(offset),
    pagesize: String(pageSize),
  }).toString();

  const { data, error, isLoading } = useSWR(`${endpoint}?${queryString}`);
  const isEmpty = !data?.rows?.length;

  if (isLoading) return loadingComponent;
  if (error) return errorComponent;
  if (isEmpty) return emptyComponent;

  return (
    <DataContext.Provider
      value={{
        data,
        error,
        isLoading,
        paging: {
          offset,
          pageSize,
          total: data?.paging?.totalcount ?? 0,
          setOffset,
        },
      }}>
      {children}
    </DataContext.Provider>
  );
}
