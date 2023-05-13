import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Exercise } from '@prisma/client';
import { unlink } from 'fs/promises';

@Injectable()
export class ExercisesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createExerciseDto: CreateExerciseDto, imageURL: string) {
    const exerciseSubCategoryId = parseInt(
      createExerciseDto.exerciseSubCategoryId,
      10,
    );
    return this.prisma.exercise.create({
      data: {
        text: createExerciseDto.text,
        image: imageURL,
        exerciseSubCategoryId: exerciseSubCategoryId,
      },
    });
  }

  findAll() {
    return this.prisma.exercise.findMany({
      orderBy: { id: 'asc' },
    });
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

  async update(
    id: number,
    updateExerciseDto: UpdateExerciseDto,
    imageURL: string,
  ) {
    const exercise = await this.prisma.exercise.findUnique({
      where: {
        id,
      },
    });
    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }
    if (exercise.image) {
      try {
        const imagePath = exercise.image.split(
          'http://localhost:3333/files/images/',
        )[1];
        await unlink(`./uploads/${imagePath}`);
      } catch (error) {
        console.error(`Error deleting previous image: ${error.message}`);
      }
    }
    return this.prisma.exercise.update({
      where: { id },
      data: {
        text: updateExerciseDto.text,
        image: imageURL,
        exerciseSubCategoryId: exercise.exerciseSubCategoryId,
      },
    });
  }

  remove(id: number) {
    return this.prisma.exercise.delete({ where: { id } });
  }
}
