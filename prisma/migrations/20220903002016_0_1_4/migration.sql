/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Game` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Game_code_key" ON "Game"("code");
