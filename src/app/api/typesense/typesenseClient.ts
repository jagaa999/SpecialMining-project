import Typesense from "typesense";

export const typesenseClient = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_IP || "",
      port: 443,
      protocol: "https",
    },
  ],
  apiKey: process.env.TYPESENSE_SEARCH_API_KEY || "",
  connectionTimeoutSeconds: 10,
});
