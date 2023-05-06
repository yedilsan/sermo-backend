/*
  Warnings:

  - You are about to drop the column `exerciseCategoryId` on the `Exercise` table. All the data in the column will be lost.
  - You are about to drop the column `sound` on the `Exercise` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[exerciseSubCategoryId]` on the table `Exercise` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `exerciseSubCategoryId` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Exercise` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_exerciseCategoryId_fkey";

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "exerciseCategoryId",
DROP COLUMN "sound",
ADD COLUMN     "exerciseSubCategoryId" INTEGER NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ExerciseSubCategory" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "exerciseCategoryId" INTEGER,

    CONSTRAINT "ExerciseSubCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_exerciseSubCategoryId_key" ON "Exercise"("exerciseSubCategoryId");

-- AddForeignKey
ALTER TABLE "ExerciseSubCategory" ADD CONSTRAINT "ExerciseSubCategory_exerciseCategoryId_fkey" FOREIGN KEY ("exerciseCategoryId") REFERENCES "ExerciseCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_exerciseSubCategoryId_fkey" FOREIGN KEY ("exerciseSubCategoryId") REFERENCES "ExerciseSubCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
