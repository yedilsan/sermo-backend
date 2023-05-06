import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExerciseSubCategoryDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  @IsNumber()
  exerciseCategoryId: number;
}
