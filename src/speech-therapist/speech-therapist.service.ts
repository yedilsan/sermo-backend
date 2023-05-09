import { Injectable } from '@nestjs/common';
import { CreateSpeechTherapistDto } from './dto/create-speech-therapist.dto';
import { UpdateSpeechTherapistDto } from './dto/update-speech-therapist.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpeechTherapistService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSpeechTherapistDto: CreateSpeechTherapistDto) {
    return this.prisma.speechTherapist.create({
      data: createSpeechTherapistDto,
    });
  }

  findAll() {
    return this.prisma.speechTherapist.findMany();
  }

  findOne(id: number) {
    return this.prisma.speechTherapist.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateSpeechTherapistDto: UpdateSpeechTherapistDto) {
    return this.prisma.speechTherapist.update({
      where: {
        id,
      },
      data: updateSpeechTherapistDto,
    });
  }

  remove(id: number) {
    return this.prisma.speechTherapist.delete({
      where: {
        id,
      },
    });
  }
}
