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
    categorys.forEach(
      async (category) => await prisma.category.create({ data: category }),
    );
  }
  const exists2 = await prisma.phraseBank.findUnique({ where: { id: 1 } });
  console.log(exists2);

  if (!exists2) {
    phrasebank.forEach(
      async (phraseBank) =>
        await prisma.phraseBank.create({ data: phraseBank }),
    );
  }
  const exists3 = await prisma.phrase.findUnique({ where: { id: 1 } });
  console.log(exists3);
  if (!exists3) {
    phrases.forEach(
      async (phrase) => await prisma.phrase.create({ data: phrase }),
    );
  }
  // exercise category
  const existsExerciseCategory = await prisma.exerciseCategory.findUnique({
    where: { id: 1 },
  });
  console.log(exists);

  if (!existsExerciseCategory) {
    exerciseCategorys.forEach(
      async (exerciseCategory) =>
        await prisma.exerciseCategory.create({ data: exerciseCategory }),
    );
  }
  // exercise sub category
  const existsSubExerciseCategory = await prisma.exerciseSubCategory.findUnique(
    {
      where: { id: 1 },
    },
  );
  console.log(exists);

  if (!existsSubExerciseCategory) {
    exerciseSubCategorys.forEach(
      async (exerciseSubCategory) =>
        await prisma.exerciseSubCategory.create({ data: exerciseSubCategory }),
    );
  }
  // exercise
  const existsExercise = await prisma.exercise.findUnique({
    where: { id: 1 },
  });
  console.log(exists);

  if (!existsExercise) {
    exercises.forEach(
      async (exercise) => await prisma.exercise.create({ data: exercise }),
    );
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
