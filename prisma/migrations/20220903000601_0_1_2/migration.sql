/*
  Warnings:

  - Added the required column `hopChannelID` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "_gamesIn" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_gamesIn_A_fkey" FOREIGN KEY ("A") REFERENCES "Game" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_gamesIn_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dead" BOOLEAN NOT NULL,
    "hostId" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "hopChannelID" TEXT NOT NULL,
    CONSTRAINT "Game_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Game" ("code", "createdAt", "dead", "hostId", "id", "name") SELECT "code", "createdAt", "dead", "hostId", "id", "name" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_gamesIn_AB_unique" ON "_gamesIn"("A", "B");

-- CreateIndex
CREATE INDEX "_gamesIn_B_index" ON "_gamesIn"("B");
