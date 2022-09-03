-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dead" BOOLEAN NOT NULL DEFAULT false,
    "hostId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "hopChannelID" TEXT NOT NULL,
    CONSTRAINT "Game_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Game" ("code", "createdAt", "dead", "hopChannelID", "hostId", "id", "name") SELECT "code", "createdAt", "dead", "hopChannelID", "hostId", "id", "name" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
