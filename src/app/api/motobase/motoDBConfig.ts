import mysql from "mysql2/promise";
import knex from "knex";

export const dbConfig = mysql.createPool({
  host: process.env.MOTO_MYSQL_HOST || "",
  user: process.env.MOTO_MYSQL_USER || "",
  password: process.env.MOTO_MYSQL_PASSWORD || "",
  database: process.env.MOTO_MYSQL_DATABASE || "",
  waitForConnections: true,
  connectionLimit: 10,
});

export const dbKnex = knex({
  client: "mysql2",
  connection: {
    host: process.env.MOTO_MYSQL_HOST || "",
    user: process.env.MOTO_MYSQL_USER || "",
    password: process.env.MOTO_MYSQL_PASSWORD || "",
    database: process.env.MOTO_MYSQL_DATABASE || "",
  },
  pool: { min: 0, max: 20 },
});
