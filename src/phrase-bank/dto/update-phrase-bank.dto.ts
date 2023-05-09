import { PartialType } from '@nestjs/mapped-types';
import { CreatePhraseBankDto } from './create-phrase-bank.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePhraseBankDto extends PartialType(CreatePhraseBankDto) {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsOptional()
  @IsString()
  categoryId: string;
}
