import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePhraseBankDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsOptional()
  @IsString()
  categoryId: string;
}
