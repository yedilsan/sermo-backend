/*
  Warnings:

  - You are about to drop the column `exerciseSubCategoryId` on the `Exercise` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[exerciseId]` on the table `ExerciseSubCategory` will be added. If there are existing duplicate values, this will fail.
  - Made the column `exerciseCategoryId` on table `ExerciseSubCategory` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_exerciseSubCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "ExerciseSubCategory" DROP CONSTRAINT "ExerciseSubCategory_exerciseCategoryId_fkey";

-- DropIndex
DROP INDEX "Exercise_exerciseSubCategoryId_key";

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "exerciseSubCategoryId";

-- AlterTable
ALTER TABLE "ExerciseSubCategory" ADD COLUMN     "exerciseId" INTEGER,
ALTER COLUMN "exerciseCategoryId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseSubCategory_exerciseId_key" ON "ExerciseSubCategory"("exerciseId");

-- AddForeignKey
ALTER TABLE "ExerciseSubCategory" ADD CONSTRAINT "ExerciseSubCategory_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseSubCategory" ADD CONSTRAINT "ExerciseSubCategory_exerciseCategoryId_fkey" FOREIGN KEY ("exerciseCategoryId") REFERENCES "ExerciseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
