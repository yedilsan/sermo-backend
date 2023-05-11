import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Exercise } from '@prisma/client';

@Injectable()
export class ExercisesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createExerciseDto: CreateExerciseDto) {
    return this.prisma.exercise.create({
      data: createExerciseDto,
    });
  }

  findAll() {
    return this.prisma.exercise.findMany();
  }

  findOne(id: number) {
    return this.prisma.exercise.findUnique({ where: { id } });
  }

  async findByExerciseSubCategoryId(
    exerciseSubCategoryId: number,
  ): Promise<Exercise[]> {
    return this.prisma.exercise.findMany({
      where: {
        exerciseSubCategoryId: exerciseSubCategoryId,
      },
    });
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return this.prisma.exercise.update({
      where: { id },
      data: updateExerciseDto,
    });
  }

  remove(id: number) {
    return this.prisma.exercise.delete({ where: { id } });
  }
}
