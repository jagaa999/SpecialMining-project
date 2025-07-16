"use client";

import { InstantSearch } from "react-instantsearch";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import { routing } from "./searchConfig";

const typesenseAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.NEXT_PUBLIC_TYPESENSE_SEARCH_KEY!,
    nodes: [
      {
        host: "139.162.31.19",
        port: 8108,
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title,description,body",
    // sort_by: "createddate:asc",
  },
  // collectionSpecificSearchParameters: {
  //   moto_news_v2: {
  //     sort_by: "createddate:asc", // Default sort энд тодорхойлогдоно
  //   },
  // },
});

export const InstantSearchWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <InstantSearch
      searchClient={typesenseAdapter.searchClient}
      indexName="moto_news_v2"
      routing={routing}>
      {children}
    </InstantSearch>
  );
};
