import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePhraseBankDto {
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
