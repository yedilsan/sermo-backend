import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhraseDto } from './dto/create-phrase.dto';
import { UpdatePhraseDto } from './dto/update-phrase.dto';

@Injectable()
export class PhrasesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPhraseDto: CreatePhraseDto) {
    return this.prisma.phrase.create({
      data: createPhraseDto,
    });
  }

  findAll() {
    return this.prisma.phrase.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.phrase.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updatePhraseDto: UpdatePhraseDto) {
    return this.prisma.phrase.update({
      where: {
        id,
      },
      data: updatePhraseDto,
    });
  }

  remove(id: number) {
    return this.prisma.phrase.delete({
      where: {
        id,
      },
    });
  }
}
