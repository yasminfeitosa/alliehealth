import Database from "better-sqlite3";
import { runMigrations } from "./run-migrations";

const dbConnection = new Database(":memory:", {
  verbose: console.log,
});

// apply migrations in order
runMigrations(dbConnection);

export const db = dbConnection;
