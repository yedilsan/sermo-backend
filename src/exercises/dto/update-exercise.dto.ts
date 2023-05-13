import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseDto } from './create-exercise.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateExerciseDto extends PartialType(CreateExerciseDto) {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  exerciseSubCategoryId: string;
}
