import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseSubCategoryDto } from './create-exercise-sub-category.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateExerciseSubCategoryDto extends PartialType(
  CreateExerciseSubCategoryDto,
) {
  @IsString()
  @IsNotEmpty()
  text: string;
}
