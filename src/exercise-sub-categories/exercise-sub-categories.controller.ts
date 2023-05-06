import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExerciseSubCategoriesService } from './exercise-sub-categories.service';
import { CreateExerciseSubCategoryDto } from './dto/create-exercise-sub-category.dto';
import { UpdateExerciseSubCategoryDto } from './dto/update-exercise-sub-category.dto';

@Controller('exercise-sub-categories')
export class ExerciseSubCategoriesController {
  constructor(
    private readonly exerciseSubCategoriesService: ExerciseSubCategoriesService,
  ) {}

  @Post()
  create(@Body() createExerciseSubCategoryDto: CreateExerciseSubCategoryDto) {
    return this.exerciseSubCategoriesService.create(
      createExerciseSubCategoryDto,
    );
  }

  @Get()
  findAll() {
    return this.exerciseSubCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseSubCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExerciseSubCategoryDto: UpdateExerciseSubCategoryDto,
  ) {
    return this.exerciseSubCategoriesService.update(
      +id,
      updateExerciseSubCategoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseSubCategoriesService.remove(+id);
  }
}
