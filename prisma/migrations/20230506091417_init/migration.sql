/*
  Warnings:

  - You are about to drop the column `exerciseId` on the `ExerciseSubCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[exerciseSubCategoryId]` on the table `Exercise` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ExerciseSubCategory" DROP CONSTRAINT "ExerciseSubCategory_exerciseId_fkey";

-- DropIndex
DROP INDEX "ExerciseSubCategory_exerciseId_key";

-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "exerciseSubCategoryId" INTEGER;

-- AlterTable
ALTER TABLE "ExerciseSubCategory" DROP COLUMN "exerciseId";

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_exerciseSubCategoryId_key" ON "Exercise"("exerciseSubCategoryId");

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_exerciseSubCategoryId_fkey" FOREIGN KEY ("exerciseSubCategoryId") REFERENCES "ExerciseSubCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
