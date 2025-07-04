// drizzle/db.ts
import { env } from "@/data/env/server";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

// Create a connection pool with SSL
const pool = new Pool({
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  ssl:
    env.NODE_ENV === "production"
      ? { rejectUnauthorized: true }
      : { rejectUnauthorized: false },
  // For better connection management
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const db = drizzle(pool, { schema });
