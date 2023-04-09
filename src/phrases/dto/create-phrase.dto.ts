import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePhraseDto {
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
