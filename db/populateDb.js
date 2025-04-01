// This script populates the database with some initial data.
import pg from "pg";
const { Client } = pg;
import dotenv from "dotenv";
dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255),
message TEXT,
added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message)
VALUES
('Roshan', 'Thank you for visiting my website!'),
('Roshan', 'Feel free to add some messages for fun!')
`;

async function main() {
  console.log("Seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    options: `-c timezone=Asia/Kathmandu`,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done.");
}

main();
