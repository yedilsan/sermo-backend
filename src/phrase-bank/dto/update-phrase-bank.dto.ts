import { PartialType } from '@nestjs/mapped-types';
import { CreatePhraseBankDto } from './create-phrase-bank.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePhraseBankDto extends PartialType(CreatePhraseBankDto) {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsOptional()
  @IsNumber()
  categoryId: number;
}
