import { Injectable } from '@nestjs/common';
import { CreateSpeechTherapistDto } from './dto/create-speech-therapist.dto';
import { UpdateSpeechTherapistDto } from './dto/update-speech-therapist.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpeechTherapistService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSpeechTherapistDto: CreateSpeechTherapistDto) {
    const rating = parseInt(createSpeechTherapistDto.rating, 10);
    return this.prisma.speechTherapist.create({
      data: {
        name: createSpeechTherapistDto.name,
        phone: createSpeechTherapistDto.phone,
        email: createSpeechTherapistDto.email,
        address: createSpeechTherapistDto.address,
        rating: rating,
      },
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
    const rating = parseInt(updateSpeechTherapistDto.rating, 10);
    return this.prisma.speechTherapist.update({
      where: {
        id,
      },
      data: {
        name: updateSpeechTherapistDto.name,
        phone: updateSpeechTherapistDto.phone,
        email: updateSpeechTherapistDto.email,
        address: updateSpeechTherapistDto.address,
        rating: rating,
      },
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
