import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateExerciseCategoryDto } from './dto/create-exercise-category.dto';
import { UpdateExerciseCategoryDto } from './dto/update-exercise-category.dto';

@Injectable()
export class ExerciseCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(createExerciseCategoryDto: CreateExerciseCategoryDto) {
    return this.prisma.exerciseCategory.create({
      data: createExerciseCategoryDto,
    });
  }

  findAll() {
    return this.prisma.exerciseCategory.findMany();
  }

  findOne(id: number) {
    return this.prisma.exerciseCategory.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateExerciseCategoryDto: UpdateExerciseCategoryDto) {
    return this.prisma.exerciseCategory.update({
      where: {
        id,
      },
      data: updateExerciseCategoryDto,
    });
  }

  remove(id: number) {
    return this.prisma.exerciseCategory.delete({
      where: {
        id,
      },
    });
  }
}
