import { Injectable } from '@nestjs/common';
import { CreateSpeechTherapistDto } from './dto/create-speech-therapist.dto';
import { UpdateSpeechTherapistDto } from './dto/update-speech-therapist.dto';

@Injectable()
export class SpeechTherapistService {
  create(createSpeechTherapistDto: CreateSpeechTherapistDto) {
    return 'This action adds a new speechTherapist';
  }

  findAll() {
    return `This action returns all speechTherapist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} speechTherapist`;
  }

  update(id: number, updateSpeechTherapistDto: UpdateSpeechTherapistDto) {
    return `This action updates a #${id} speechTherapist`;
  }

  remove(id: number) {
    return `This action removes a #${id} speechTherapist`;
  }
}
