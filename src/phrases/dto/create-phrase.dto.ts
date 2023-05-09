import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePhraseDto {
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
