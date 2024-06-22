/*
  Warnings:

  - You are about to drop the column `serviceId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `birth_date` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `second_lastname` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `second_name` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `brandId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `birthDate` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Made the column `address` on table `Person` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `Person` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `brand` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_brandId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "serviceId";

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "birth_date",
DROP COLUMN "first_name",
DROP COLUMN "lastname",
DROP COLUMN "second_lastname",
DROP COLUMN "second_name",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "brandId",
ADD COLUMN     "brand" TEXT NOT NULL;

-- DropTable
DROP TABLE "Brand";
