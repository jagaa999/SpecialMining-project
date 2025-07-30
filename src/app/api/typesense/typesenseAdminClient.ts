import Typesense from "typesense";

export const typesenseAdminClient = new Typesense.Client({
  nodes: [
    {
      host: process.env.TYPESENSE_IP || "",
      port: 443,
      protocol: "https",
    },
  ],
  apiKey: process.env.TYPESENSE_ADMIN_API_KEY || "",
  connectionTimeoutSeconds: 10,
});
