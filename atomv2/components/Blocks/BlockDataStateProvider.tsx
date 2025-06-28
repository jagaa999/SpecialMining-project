// atomv2/components/Blocks/BlockDataStateProvider.tsx
"use client";

import { ReactNode } from "react";
import { DataContext } from "src/config/context/DataContext";
import useSWR from "swr";
import MoleculeEmptyState from "../Molecules/MoleculeEmptyState";
import MoleculeErrorState from "../Molecules/MoleculeErrorState";

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
  loadingComponent,
  errorComponent = <MoleculeErrorState />,
  emptyComponent = <MoleculeEmptyState />,
}: BlockDataStateProviderProps) {
  const queryString = new URLSearchParams({
    ...query,
    offset: String(offset),
    pagesize: String(pageSize),
  }).toString();

  const { data, error, isLoading } = useSWR(`${endpoint}?${queryString}`);
  const isEmpty = !data?.rows?.length;

  if (isLoading && loadingComponent) return loadingComponent;
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
