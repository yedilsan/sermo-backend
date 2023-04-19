import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseCategoryDto } from './create-exercise-category.dto';

export class UpdateExerciseCategoryDto extends PartialType(CreateExerciseCategoryDto) {}
