import Typesense from "typesense";

export const typesenseAdminClient = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_IP || "",
      port: Number(process.env.TYPESENSE_PORT || 8108),
      protocol: "http", // эсвэл 'https'
    },
  ],
  apiKey: process.env.TYPESENSE_ADMIN_API_KEY || "",
  connectionTimeoutSeconds: 10,
});
