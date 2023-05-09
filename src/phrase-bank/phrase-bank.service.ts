import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhraseBankDto } from './dto/create-phrase-bank.dto';
import { UpdatePhraseBankDto } from './dto/update-phrase-bank.dto';
import { unlink } from 'fs/promises';

@Injectable()
export class PhraseBankService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPhraseBankDto: CreatePhraseBankDto, imageURL: string) {
    const categoryId = parseInt(createPhraseBankDto.categoryId, 10);
    return this.prisma.phraseBank.create({
      data: {
        text: createPhraseBankDto.text,
        image: imageURL,
        categoryId: categoryId,
      },
    });
  }

  findAll() {
    return this.prisma.phraseBank.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.phraseBank.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updatePhraseBankDto: UpdatePhraseBankDto,
    imageURL: string,
  ) {
    const categoryId = parseInt(updatePhraseBankDto.categoryId, 10);
    const phraseBank = await this.prisma.phraseBank.findUnique({
      where: {
        id,
      },
    });
    if (!phraseBank) {
      throw new NotFoundException('Phrase Bank not found');
    }
    if (phraseBank.image) {
      try {
        const imagePath = phraseBank.image.split(
          'http://localhost:3333/files/images/',
        )[1];
        await unlink(`./uploads/${imagePath}`);
      } catch (error) {
        console.error(`Error deleting previous image: ${error.message}`);
      }
    }
    return this.prisma.phraseBank.update({
      where: {
        id,
      },
      data: {
        text: updatePhraseBankDto.text,
        image: imageURL,
        categoryId: categoryId,
      },
    });
  }

  remove(id: number) {
    return this.prisma.phraseBank.delete({
      where: {
        id,
      },
    });
  }
}
