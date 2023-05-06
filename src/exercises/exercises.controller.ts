import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Public } from 'decorators/public.decorator';

@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}
  @Public()
  @Post()
  create(@Body() createExerciseDto: CreateExerciseDto) {
    return this.exercisesService.create(createExerciseDto);
  }
  @Public()
  @Get()
  findAll() {
    return this.exercisesService.findAll();
  }
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exercisesService.findOne(+id);
  }
  @Public()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    return this.exercisesService.update(+id, updateExerciseDto);
  }
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exercisesService.remove(+id);
  }
}
