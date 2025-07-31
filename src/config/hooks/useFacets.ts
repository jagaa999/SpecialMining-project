import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useFacets(collectionName: string) {
  const { data, error, isLoading } = useSWR(
    collectionName
      ? `/api/typesense/typesense-schema?collection=${collectionName}`
      : null,
    fetcher
  );

  const filteredFacets = data?.filter((item: any) => item.facet === true) || [];

  return {
    facets: filteredFacets,
    isLoading,
    isError: error,
  };
}
