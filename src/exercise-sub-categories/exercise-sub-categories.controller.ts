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
import { Public } from 'decorators/public.decorator';

@Controller('exercise-sub-categories')
export class ExerciseSubCategoriesController {
  constructor(
    private readonly exerciseSubCategoriesService: ExerciseSubCategoriesService,
  ) {}
  @Public()
  @Post()
  create(@Body() createExerciseSubCategoryDto: CreateExerciseSubCategoryDto) {
    return this.exerciseSubCategoriesService.create(
      createExerciseSubCategoryDto,
    );
  }
  @Public()
  @Get()
  findAll() {
    return this.exerciseSubCategoriesService.findAll();
  }
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseSubCategoriesService.findOne(+id);
  }
  @Public()
  @Get('exerciseCategory/:exerciseCategoryId')
  findByExerciseCategoryId(
    @Param('exerciseCategoryId') exerciseCategoryId: string,
  ) {
    return this.exerciseSubCategoriesService.findByExerciseCategoryId(
      +exerciseCategoryId,
    );
  }

  @Public()
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
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseSubCategoriesService.remove(+id);
  }
}
