import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciseCategoryDto {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}
