import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useTypesenseSchema(collectionName: string) {
  const { data, error, isLoading } = useSWR(
    collectionName
      ? `/api/typesense/typesense-schema?collection=${collectionName}`
      : null,
    fetcher
  );

  // Өөр өөр шинж чанараар ялгах
  const filteredFacets = data?.filter((item: any) => item.facet === true) || [];
  const filteredSorts = data?.filter((item: any) => item.sort === true) || [];
  const searchableFields =
    data?.filter((item: any) => item.index === true) || [];
  const optionalFields =
    data?.filter((item: any) => item.optional === true) || [];
  const requiredFields =
    data?.filter((item: any) => item.optional === false) || [];

  // Type별로 ялгах
  const stringFields =
    data?.filter((item: any) => item.type === "string") || [];
  const numberFields =
    data?.filter(
      (item: any) =>
        item.type === "int32" || item.type === "int64" || item.type === "float"
    ) || [];
  const booleanFields = data?.filter((item: any) => item.type === "bool") || [];
  const arrayFields =
    data?.filter((item: any) => item.type?.includes("[]")) || [];

  return {
    // Raw data
    schema: data || [],

    // Functional groups
    facets: filteredFacets,
    sorts: filteredSorts,
    searchableFields,
    optionalFields,
    requiredFields,

    // Type groups
    stringFields,
    numberFields,
    booleanFields,
    arrayFields,

    isLoading,
    isError: error,
  };
}
