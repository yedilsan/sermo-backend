import { Injectable } from '@nestjs/common';
import { CreateExerciseCategoryDto } from './dto/create-exercise-category.dto';
import { UpdateExerciseCategoryDto } from './dto/update-exercise-category.dto';

@Injectable()
export class ExerciseCategoryService {
  create(createExerciseCategoryDto: CreateExerciseCategoryDto) {
    return 'This action adds a new exerciseCategory';
  }

  findAll() {
    return `This action returns all exerciseCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exerciseCategory`;
  }

  update(id: number, updateExerciseCategoryDto: UpdateExerciseCategoryDto) {
    return `This action updates a #${id} exerciseCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} exerciseCategory`;
  }
}
