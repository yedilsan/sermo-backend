import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciseCategoryDto {
  @IsString()
  @IsNotEmpty()
  text: string;
}
