"use client";

import { createRouting } from "./searchConfig";
import { InstantSearch } from "react-instantsearch";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const typesenseAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.NEXT_PUBLIC_TYPESENSE_SEARCH_KEY!,
    nodes: [
      {
        host: "typesense.moto.mn",
        port: 443,
        protocol: "https",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title,description,body",
  },
});

export const OrganismTypesenseWrapper = ({
  collectionName,
  children,
}: {
  collectionName: string;
  children: React.ReactNode;
}) => {
  return (
    <InstantSearch
      searchClient={typesenseAdapter.searchClient}
      indexName={collectionName}
      routing={createRouting(collectionName)}>
      {children}
    </InstantSearch>
  );
};
