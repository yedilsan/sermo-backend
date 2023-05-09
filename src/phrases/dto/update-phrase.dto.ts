import { PartialType } from '@nestjs/mapped-types';
import { CreatePhraseDto } from './create-phrase.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePhraseDto extends PartialType(CreatePhraseDto) {
  @IsString()
  @IsNotEmpty()
  emoji: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsOptional()
  @IsString()
  phraseBankId: string;
}
