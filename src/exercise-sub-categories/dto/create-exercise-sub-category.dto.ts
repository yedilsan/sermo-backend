import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExerciseSubCategoryDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  @IsString()
  exerciseCategoryId: string;
}
