import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSpeechTherapistDto {
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
  @IsNumber()
  rating: number;
}
