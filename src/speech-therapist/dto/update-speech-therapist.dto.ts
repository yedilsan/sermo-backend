import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeechTherapistDto } from './create-speech-therapist.dto';

export class UpdateSpeechTherapistDto extends PartialType(CreateSpeechTherapistDto) {}
