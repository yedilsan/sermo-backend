import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePhraseBankDto } from './dto/create-phrase-bank.dto';
import { UpdatePhraseBankDto } from './dto/update-phrase-bank.dto';

@Injectable()
export class PhraseBankService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPhraseBankDto: CreatePhraseBankDto) {
    return this.prisma.phraseBank.create({
      data: createPhraseBankDto,
    });
  }

  findAll() {
    return this.prisma.phraseBank.findMany();
  }

  findOne(id: number) {
    return this.prisma.phraseBank.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updatePhraseBankDto: UpdatePhraseBankDto) {
    return this.prisma.phraseBank.update({
      where: {
        id,
      },
      data: updatePhraseBankDto,
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
