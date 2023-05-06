import { Module } from '@nestjs/common';
import { ExerciseSubCategoriesService } from './exercise-sub-categories.service';
import { ExerciseSubCategoriesController } from './exercise-sub-categories.controller';

@Module({
  controllers: [ExerciseSubCategoriesController],
  providers: [ExerciseSubCategoriesService],
})
export class ExerciseSubCategoriesModule {}
