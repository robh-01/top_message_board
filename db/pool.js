import dotenv from "dotenv";
dotenv.config();

import pg from "pg";
const { Pool } = pg;

export default new Pool({
  connectionString: process.env.DATABASE_URL,
  options: `-c timezone=Asia/Kathmandu`,
  ssl: {
    rejectUnauthorized: false,
  },
});
