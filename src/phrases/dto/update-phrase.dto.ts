import { PartialType } from '@nestjs/mapped-types';
import { CreatePhraseDto } from './create-phrase.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePhraseDto extends PartialType(CreatePhraseDto) {
  @IsString()
  @IsNotEmpty()
  emoji: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  sound: string;

  @IsOptional()
  @IsNumber()
  phraseBankId: number;
}
