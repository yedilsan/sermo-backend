import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeechTherapistDto } from './create-speech-therapist.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateSpeechTherapistDto extends PartialType(
  CreateSpeechTherapistDto,
) {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  rating: string;
}
