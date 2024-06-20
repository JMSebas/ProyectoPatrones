/*
  Warnings:

  - Changed the type of `amount` on the `Chance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Chance" DROP COLUMN "amount",
ADD COLUMN  "amount" DECIMAL(65,30) NOT NULL;
