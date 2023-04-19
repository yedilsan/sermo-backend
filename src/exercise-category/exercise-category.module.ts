import { Module } from '@nestjs/common';
import { ExerciseCategoryService } from './exercise-category.service';
import { ExerciseCategoryController } from './exercise-category.controller';

@Module({
  controllers: [ExerciseCategoryController],
  providers: [ExerciseCategoryService]
})
export class ExerciseCategoryModule {}
