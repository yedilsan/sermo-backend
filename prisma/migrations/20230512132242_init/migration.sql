/*
  Warnings:

  - You are about to drop the column `favorite` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Favorite` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_categoryId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "favorite";

-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "categoryId";
