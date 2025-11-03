// import pkg from "pg";
// const { Client } = pkg;

// const database = new Client({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWOR,
//   port: process.env.DB_PORT,
// });

// try {
//   await database.connect();
//   console.log("Connected to the database successfully");
// } catch (error) {
//   console.error("Database connection failed:", error);
//   process.exit(1);
// }

// export default database;

import pkg from "pg";
import dotenv from "dotenv";

// Load the .env file from project root
dotenv.config(); // 👈 no path needed if .env is at root

const { Client } = pkg;

const database = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

try {
  await database.connect();
  console.log("Connected to the database successfully");
} catch (error) {
  console.error("Database connection failed:", error);
  process.exit(1);
}

export default database;
