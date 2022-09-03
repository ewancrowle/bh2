/*
  Warnings:

  - You are about to drop the `_gamesIn` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[hostId]` on the table `Game` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_gamesIn";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_players" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_players_A_fkey" FOREIGN KEY ("A") REFERENCES "Game" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_players_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_players_AB_unique" ON "_players"("A", "B");

-- CreateIndex
CREATE INDEX "_players_B_index" ON "_players"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Game_hostId_key" ON "Game"("hostId");
