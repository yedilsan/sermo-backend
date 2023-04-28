-- AlterTable
ALTER TABLE "users" ADD COLUMN     "avatar" TEXT;

-- CreateTable
CREATE TABLE "SpeechTherapist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "SpeechTherapist_pkey" PRIMARY KEY ("id")
);
