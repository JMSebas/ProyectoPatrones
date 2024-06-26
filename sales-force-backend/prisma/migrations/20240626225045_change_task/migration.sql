/*
  Warnings:

  - A unique constraint covering the columns `[taskId]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Comment_taskId_key" ON "Comment"("taskId");
