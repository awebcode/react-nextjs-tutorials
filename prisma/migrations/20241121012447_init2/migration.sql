/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Blog_id_key" ON "Blog"("id");
