import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as categorys from './phrases/index.json';
import * as phrasebank from './phrases/phraseBank.json';
import * as phrases from './phrases/phrases.json';

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
