import { Database } from "better-sqlite3";
import fs from "fs";
import path from "path";

export const runMigrations = (db: Database) => {
  const migrationsDir = "./migrations";

  const migrationFileNames = fs
    .readdirSync(migrationsDir)
    .filter((fileName) => path.parse(fileName).ext === ".sql");
  // apply migrations in numerical order
  const sortedMigrationNames = migrationFileNames
    .map((fileName) => Number(path.parse(fileName).name))
    .sort((a, b) => a - b);

  for (const migrationFileName of sortedMigrationNames) {
    const migration = fs.readFileSync(
      `${migrationsDir}/${migrationFileName}.sql`,
      "utf8"
    );
    db.exec(migration);
  }
};
