-- CreateTable
CREATE TABLE "Phrase" (
    "id" SERIAL NOT NULL,
    "emoji" TEXT,
    "text" TEXT NOT NULL,
    "sound" TEXT NOT NULL,
    "phraseBankId" INTEGER,

    CONSTRAINT "Phrase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhraseBank" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "categoryId" INTEGER,

    CONSTRAINT "PhraseBank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Phrase" ADD CONSTRAINT "Phrase_phraseBankId_fkey" FOREIGN KEY ("phraseBankId") REFERENCES "PhraseBank"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhraseBank" ADD CONSTRAINT "PhraseBank_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
