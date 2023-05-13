import { Injectable } from '@nestjs/common';
import { CreateExerciseSubCategoryDto } from './dto/create-exercise-sub-category.dto';
import { UpdateExerciseSubCategoryDto } from './dto/update-exercise-sub-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExerciseSubCategory } from '@prisma/client';

@Injectable()
export class ExerciseSubCategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createExerciseSubCategoryDto: CreateExerciseSubCategoryDto) {
    const exerciseCategoryId = parseInt(
      createExerciseSubCategoryDto.exerciseCategoryId,
      10,
    );
    return this.prisma.exerciseSubCategory.create({
      data: {
        text: createExerciseSubCategoryDto.text,
        exerciseCategoryId: exerciseCategoryId,
      },
    });
  }

  findAll() {
    return this.prisma.exerciseSubCategory.findMany();
  }

  findOne(id: number) {
    return this.prisma.exerciseSubCategory.findUnique({
      where: {
        id,
      },
    });
  }

  async findByExerciseCategoryId(
    exerciseCategoryId: number,
  ): Promise<ExerciseSubCategory[]> {
    return this.prisma.exerciseSubCategory.findMany({
      where: {
        exerciseCategoryId: exerciseCategoryId,
      },
    });
  }
  update(
    id: number,
    updateExerciseSubCategoryDto: UpdateExerciseSubCategoryDto,
  ) {
    const exerciseCategoryId = parseInt(
      updateExerciseSubCategoryDto.exerciseCategoryId,
      10,
    );
    return this.prisma.exerciseSubCategory.update({
      where: {
        id,
      },
      data: {
        text: updateExerciseSubCategoryDto.text,
        exerciseCategoryId: exerciseCategoryId,
      },
    });
  }

  remove(id: number) {
    return this.prisma.exerciseSubCategory.delete({
      where: {
        id,
      },
    });
  }
}
