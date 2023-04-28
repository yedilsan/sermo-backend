import { Module } from '@nestjs/common';
import { SpeechTherapistService } from './speech-therapist.service';
import { SpeechTherapistController } from './speech-therapist.controller';

@Module({
  controllers: [SpeechTherapistController],
  providers: [SpeechTherapistService]
})
export class SpeechTherapistModule {}
