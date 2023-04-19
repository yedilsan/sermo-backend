-- CreateTable
CREATE TABLE "ExerciseCategory" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "ExerciseCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "sound" TEXT NOT NULL,
    "exerciseCategoryId" INTEGER,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_exerciseCategoryId_fkey" FOREIGN KEY ("exerciseCategoryId") REFERENCES "ExerciseCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
