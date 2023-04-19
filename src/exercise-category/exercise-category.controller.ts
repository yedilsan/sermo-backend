import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExerciseCategoryService } from './exercise-category.service';
import { CreateExerciseCategoryDto } from './dto/create-exercise-category.dto';
import { UpdateExerciseCategoryDto } from './dto/update-exercise-category.dto';

@Controller('exercise-category')
export class ExerciseCategoryController {
  constructor(
    private readonly exerciseCategoryService: ExerciseCategoryService,
  ) {}

  @Post()
  create(@Body() createExerciseCategoryDto: CreateExerciseCategoryDto) {
    return this.exerciseCategoryService.create(createExerciseCategoryDto);
  }

  @Get()
  findAll() {
    return this.exerciseCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseCategoryDto: UpdateExerciseCategoryDto,
  ) {
    return this.exerciseCategoryService.update(+id, updateExerciseCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseCategoryService.remove(+id);
  }
}
