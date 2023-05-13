import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseCategoryDto } from './create-exercise-category.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateExerciseCategoryDto extends PartialType(
  CreateExerciseCategoryDto,
) {
  @IsString()
  @IsNotEmpty()
  text: string;
}
