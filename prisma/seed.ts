import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as categorys from './phrases/index.json';
import * as phrasebank from './phrases/phraseBank.json';
import * as phrases from './phrases/phrases.json';
import * as exerciseCategorys from './phrases/exerciseCategory.json';
import * as exerciseSubCategorys from './phrases/exerciseSubCategory.json';
import * as exercises from './phrases/exercise.json';

async function main() {
  const exists = await prisma.category.findUnique({ where: { id: 1 } });
  console.log(exists);

  if (!exists) {
    for (const category of categorys) {
      await prisma.category.create({ data: category });
    }
  }
  const exists2 = await prisma.phraseBank.findUnique({ where: { id: 1 } });
  console.log(exists2);

  if (!exists2) {
    for (const phraseBank of phrasebank) {
      await prisma.phraseBank.create({ data: phraseBank });
    }
  }
  const exists3 = await prisma.phrase.findUnique({ where: { id: 1 } });
  console.log(exists3);
  if (!exists3) {
    for (const phrase of phrases) {
      await prisma.phrase.create({ data: phrase });
    }
  }
  // exercise category
  const existsExerciseCategory = await prisma.exerciseCategory.findUnique({
    where: { id: 1 },
  });
  console.log(exists);

  if (!existsExerciseCategory) {
    for (const exerciseCategory of exerciseCategorys) {
      await prisma.exerciseCategory.create({ data: exerciseCategory });
    }
  }
  // exercise sub category
  const existsSubExerciseCategory = await prisma.exerciseSubCategory.findUnique(
    {
      where: { id: 1 },
    },
  );
  console.log(exists);

  if (!existsSubExerciseCategory) {
    for (const exerciseSubCategory of exerciseSubCategorys) {
      await prisma.exerciseSubCategory.create({ data: exerciseSubCategory });
    }
  }
  // exercise
  const existsExercise = await prisma.exercise.findUnique({
    where: { id: 1 },
  });
  console.log(exists);

  if (!existsExercise) {
    for (const exercise of exercises) {
      await prisma.exercise.create({ data: exercise });
    }
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
