import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhraseDto } from './dto/create-phrase.dto';
import { UpdatePhraseDto } from './dto/update-phrase.dto';
import { unlink } from 'fs/promises';

@Injectable()
export class PhrasesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPhraseDto: CreatePhraseDto, soundURL: string) {
    const phraseBankId = parseInt(createPhraseDto.phraseBankId, 10);
    return this.prisma.phrase.create({
      data: {
        text: createPhraseDto.text,
        emoji: createPhraseDto.emoji,
        sound: soundURL,
        phraseBankId: phraseBankId,
      },
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

  async update(id: number, updatePhraseDto: UpdatePhraseDto, soundURL: string) {
    const phraseBankId = parseInt(updatePhraseDto.phraseBankId, 10);

    const phrase = await this.prisma.phrase.findUnique({
      where: {
        id,
      },
    });
    if (!phrase) {
      throw new NotFoundException('Phrase Bank not found');
    }
    if (phrase.sound) {
      try {
        const soundPath = phrase.sound.split(
          'http://localhost:3333/files/audio/',
        )[1];
        await unlink(`./audios/${soundPath}`);
      } catch (error) {
        console.error(`Error deleting previous phrase: ${error.message}`);
      }
    }
    return this.prisma.phrase.update({
      where: {
        id,
      },
      data: {
        text: updatePhraseDto.text,
        emoji: updatePhraseDto.emoji,
        sound: soundURL,
        phraseBankId: phraseBankId,
      },
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
