"use client";

import React from "react";
import { createRouting } from "./searchConfig";
import { Configure, InstantSearch } from "react-instantsearch";
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
  look_company,
  children,
}: {
  collectionName: string;
  look_company?: string | number;
  children: React.ReactNode;
}) => {
  return (
    <InstantSearch
      searchClient={typesenseAdapter.searchClient}
      indexName={collectionName}
      routing={createRouting(collectionName)}>
      {look_company && (
        <Configure
          {...({
            filters: `look_company:=${look_company}`,
          } as any)}
        />
      )}
      {children}
    </InstantSearch>
  );
};
