import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciseDto {
  @IsString()
  @IsNotEmpty()
  sound: string;

  @IsString()
  @IsNotEmpty()
  text: string;
}
